import Image from "next/image";
import { useAtom } from "jotai";
import { mobileCartAtom } from "@/store/sidebar";
import { MdOutlineClose } from "react-icons/md";
import { RiCloseLine } from "react-icons/ri";
import clsx from "clsx";
import Link from "next/link";
import { ButtonCart, Cart } from "./ShowCart";

export const SideCart = () => {
  const [showMobileCart, setShowMobileCart] = useAtom(mobileCartAtom);

  return (
    <div
      className={clsx(
        `bg-white fixed -left-full top-0 w-full h-full flex flex-col justify-between z-50 transition-all`,
        showMobileCart ? "translate-x-full" : "",
        // Desktop
        `md:left-0`
      )}
    >
      <div>
        <div className="flex items-center bg-primary text-white p-4">
          <div className="text-lg font-roboto mx-auto">Menu</div>
          <RiCloseLine
            onClick={() => setShowMobileCart(false)}
            className="text-2xl justify-end"
          />
        </div>
        <Cart />
      </div>

      <ButtonCart />
    </div>
  );
};
