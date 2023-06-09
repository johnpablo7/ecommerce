"use client";

import Image from "next/image";
import { QuantityInput } from "../client/QuantityInput";
import { FiTrash2 } from "react-icons/fi";
import { useCartActions, useCartPopulated } from "@/store/cart";
import { getImageUrl } from "@/api/directus";

export const OrderList = () => {
  const { populatedCart, isLoading, error } = useCartPopulated();
  const { removeItem } = useCartActions();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error + ""}</p>;
  }

  // console.log(populatedCart);

  return (
    <div className="pb-10">
      <div className="flex flex-col gap-6">
        <div className="grid grid-cols-4 bg-neutral-200 text-gray-600 py-2 font-semibold gap-8">
          <p className="col-span-2 text-center">Producto</p>
          <p className="text-start">Cantidad</p>
          <p className="text-start">Precio Total</p>
        </div>

        {populatedCart!.map((item) => (
          <div key={item.product.slug} className="p-4 border border-gray-200">
            <div className="grid grid-cols-4 items-center">
              <div className="col-span-2 flex items-center gap-4">
                <Image
                  src={
                    getImageUrl(item.product.image) + "?width=150&height=120"
                  }
                  alt="cart"
                  width={150}
                  height={120}
                  className="object-cover"
                />

                <div className="flex flex-col gap-1">
                  <p className="text-gray-600 font-semibold">
                    {item.product.name}
                  </p>
                  <p className="text-primary font-semibold">
                    s/ {item.product.price}
                  </p>
                  <p className="text-gray-600">Talla: M</p>
                </div>
              </div>

              <QuantityInput
                productSlug={item.product.slug}
                quantity={item.quantity}
              />

              <div className="grid grid-cols-2 gap-4">
                <div className="text-primary font-semibold">
                  s/ {(item.product.price * item.quantity).toFixed(2)}
                </div>

                {/* <button onClick={removeItem()}>
                  <FiTrash2 className="text-gray-600 hover:text-primary text-xl" />
                </button> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
