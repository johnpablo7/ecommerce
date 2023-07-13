"use client";

import { useCartQuantity } from "@/store/cart";
import Link from "next/link";
import { CiHeart, CiShoppingCart, CiUser } from "react-icons/ci";
import { ShowSession } from "../shared/ShowSession";
import { ShowCart } from "../shared/ShowCart";
import { ShowAccount } from "../shared/ShowAccount";

export const UserMenu = () => {
  const cartQuantity = useCartQuantity();

  return (
    <div className="flex items-center justify-between xl:justify-center pt-3 pb-1 max-xl:px-4 font-poppins gap-4 xl:gap-5">
      <Link
        href="/mi-cuenta/lista-de-deseos"
        className="relative flex flex-col items-center"
      >
        <CiHeart className="text-2xl xl:text-3xl" />
        <p className="text-xs">Lista de deseos</p>
        <span className="absolute bg-secondary text-white rounded-full text-[10px] py-[1px] px-[5px] -top-1 right-6">
          6
        </span>
      </Link>

      <div className="hidden relative xl:flex flex-col items-center group cursor-pointer">
        <CiShoppingCart className="text-2xl xl:text-3xl" />
        <p className="text-xs">Carro</p>
        <span className="absolute bg-secondary text-white rounded-full text-[10px] py-[1px] px-[5px] -top-1 -right-1">
          {cartQuantity}
        </span>
        <div className="absolute top-full right-0 hidden group-hover:block transition-all duration-500">
          <ShowCart />
        </div>
      </div>

      <div className="flex flex-col items-center cursor-pointer relative group">
        <CiUser className="text-2xl xl:text-3xl" />
        <p className="text-xs">Cuenta</p>

        {/* <div className="absolute top-full right-0 hidden group-hover:block transition-all duration-500">
          <ShowSession />
        </div> */}

        <div className="absolute top-full right-0 hidden group-hover:block transition-all duration-500 ">
          <ShowAccount />
        </div>
      </div>
    </div>
  );
};
