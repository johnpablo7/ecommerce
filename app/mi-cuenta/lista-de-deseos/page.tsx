"use client";
import Image from "next/image";
import { FiTrash2 } from "react-icons/fi";
import { useCartActions } from "@/store/cart";
import { AddToCartButton } from "../../../components/client/AddToCartButton";

export default function WishListPage() {
  const { removeItem } = useCartActions();

  return (
    <div className="pb-10">
      <div className="flex flex-col gap-5">
        <div className="p-4 border border-gray-200">
          <div className="grid max-md:grid-cols-2 lg:grid-cols-6 items-center gap-5">
            <div className="max-md:col-start-1 max-md:col-end-3">
              <Image
                src="/images/shoes.png"
                alt="product"
                width={150}
                height={120}
                className="object-cover"
              />
            </div>

            <div className="flex flex-col gap-1 max-md:col-start-1 max-md:col-end-3 col-start-2 col-end-4">
              <p className="text-gray-600 font-semibold line-clamp-1">
                Casual USB Charging Laptop Backpacks
              </p>
              <div>
                Availability: <span className="text-green-500">In Stock</span>
              </div>
            </div>

            <p className="text-primary font-semibold max-md:col-start-1 max-md:col-end-3">
              s/ 45.00
            </p>

            <button className="py-2 px-2 rounded-md bg-primary text-white max-md:col-span-1 max-md:row-start-4 max-md:row-end-5">
              ADD TO CART
            </button>
            {/* <AddToCartButton /> */}

            <button className="justify-self-end px-8 max-md:row-start-4 max-md:row-end-5 max-md:col-start-2 max-md:col-end-4">
              <FiTrash2 className="text-gray-600 hover:text-primary text-xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
