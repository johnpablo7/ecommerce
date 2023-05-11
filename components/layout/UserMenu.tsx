"use client";

import { useCartQuantity } from "@/store/cart";
import Link from "next/link";
import { CiHeart, CiShoppingCart, CiUser } from "react-icons/ci";

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
      <Link
        href="/carrito"
        className="hidden relative xl:flex flex-col items-center"
      >
        <CiShoppingCart className="text-2xl xl:text-3xl" />
        <p className="text-xs">Carro</p>
        <span className="absolute bg-secondary text-white rounded-full text-[10px] py-[1px] px-[5px] -top-1 -right-1">
          {cartQuantity}
        </span>
      </Link>
      <Link
        href="/acceso"
        className="flex flex-col items-center cursor-pointer"
      >
        <CiUser className="text-2xl xl:text-3xl" />
        <p className="text-xs">Inicia sesión</p>
        {/* <p className="text-xs">Cuenta</p> */}
      </Link>
    </div>
  );
};
