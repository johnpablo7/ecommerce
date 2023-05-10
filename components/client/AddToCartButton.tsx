"use client";

import { RiShoppingCart2Line } from "react-icons/ri";
import { useCartActions } from "@/store/cart";

export const AddToCartButton = ({ productSlug }: { productSlug: string }) => {
  const { addItem } = useCartActions();

  const handleClick = () => {
    addItem(productSlug, 1);
  };

  return (
    <button
      onClick={handleClick}
      className="flex items-center justify-center gap-1 bg-primary text-white hover:text-primary hover:bg-white border hover:border-primary w-full py-2 rounded transition"
    >
      <RiShoppingCart2Line className="text-lg" />
      <p className="text-lg uppercase">añadir a la cesta</p>
    </button>
  );
};
