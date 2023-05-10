import { getProductsBySlugs } from "@/api/directus";
import { atom, useSetAtom, useAtomValue } from "jotai";
import { atomWithStorage } from "jotai/utils";
import useSWR from "swr";

type CartItem = {
  productSlug: string;
  quantity: number;
};

const cartAtom = atomWithStorage<CartItem[]>("user-cart", []);

const cartQuantityAtom = atom((get) =>
  get(cartAtom).reduce((total, item) => total + item.quantity, 0)
);

export const useCart = () => useAtomValue(cartAtom);
export const useCartQuantity = () => useAtomValue(cartQuantityAtom);

export const useCartPopulated = () => {
  const cart = useCart();
  const productSlugs = cart.map((item) => item.productSlug);
  const {
    data: products,
    isLoading,
    error,
  } = useSWR({ productSlugs }, ({ productSlugs }) => {
    return getProductsBySlugs(productSlugs);
  });

  const populatedCart = products
    ? cart.map((item) => ({
        product: products.find((p) => p.slug === item.productSlug)!,
        quantity: item.quantity,
      }))
    : undefined;

  return { populatedCart, isLoading, error };
};

export const useCartActions = () => {
  const setCart = useSetAtom(cartAtom);

  const addItem = (productSlug: string, quantity = 1) => {
    if (!productSlug) {
      return console.error("productSlug requerido");
    }
    setCart((cart) => {
      const existingItem = cart.find(
        (item) => item.productSlug === productSlug
      );
      if (existingItem) {
        return cart.map((item) => {
          if (item.productSlug === productSlug) {
            return { ...item, quantity: Math.max(item.quantity + quantity, 1) };
          }
          return item;
        });
      }
      return [...cart, { productSlug, quantity }];
    });
  };

  const removeItem = (productSlug: string) => {
    setCart((cart) => cart.filter((item) => item.productSlug !== productSlug));
  };

  return {
    addItem,
    removeItem,
  };
};
