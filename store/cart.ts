import { getProducts } from "@/api/directus";
import { TProduct } from "@/types/product";
import { atom, useSetAtom, useAtomValue } from "jotai";
import { atomWithStorage, loadable } from "jotai/utils";

type CartItem = {
  productSlug: string;
  quantity: number;
};

const cartAtom = atomWithStorage<CartItem[]>("user-cart", []);

const cartQuantityAtom = atom((get) =>
  get(cartAtom).reduce((total, item) => total + item.quantity, 0)
);

const cartPopulatedAtom = atom(async (get) => {
  const cart = get(cartAtom);
  const productIds = cart.map((item) => item.productSlug);
  let products: TProduct[] = [];
  if (productIds.length) {
    const params = new URLSearchParams();
    params.set(
      "filter",
      JSON.stringify({
        slug: { _in: productIds },
      })
    );
    products = await getProducts(params.toString());
  }
  return cart.map((item) => ({
    product: products.find((p) => p.slug === item.productSlug)!,
    quantity: item.quantity,
  }));
});

const loadableCartPopulatedAtom = loadable(cartPopulatedAtom);

export const useCart = () => useAtomValue(cartAtom);
export const useCartQuantity = () => useAtomValue(cartQuantityAtom);
export const useCartPopulated = () => useAtomValue(loadableCartPopulatedAtom);

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
