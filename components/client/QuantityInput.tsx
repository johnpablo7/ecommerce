"use client";

import { useCartActions } from "@/store/cart";
import { FC } from "react";

type TQuantityInputProps = {
  productSlug: string;
  quantity: number;
};

export const QuantityInput: FC<TQuantityInputProps> = ({
  productSlug,
  quantity,
}) => {
  const { addItem } = useCartActions();

  const decrement = () => {
    addItem(productSlug, -1);
  };

  const increase = () => {
    addItem(productSlug, 1);
  };

  return (
    <div className="flex items-center">
      <button
        onClick={() => decrement()}
        className="py-[2px] px-3 border border-opacity-20 text-xl text-gray-400 hover:bg-stone-200"
      >
        -
      </button>

      <div className="py-1 px-3 border border-opacity-20">{quantity}</div>

      <button
        onClick={increase}
        className="py-[2px] px-3 border border-opacity-20 text-xl text-gray-400 hover:bg-stone-200"
      >
        +
      </button>
    </div>
  );
};
