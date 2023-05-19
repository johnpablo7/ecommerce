import Image from "next/image";
import { useAtom } from "jotai";
import { mobileCategoriesAtom } from "@/store/sidebar";
import { RiCloseLine } from "react-icons/ri";
import { SlArrowDown } from "react-icons/sl";
import clsx from "clsx";
import { ShowCategoriesButton } from "./ShowCategoriesButton";

export const SideCategories = () => {
  const [showMobileCategories, setShowMobileCategories] =
    useAtom(mobileCategoriesAtom);

  return (
    <div
      className={clsx(
        `bg-white fixed top-0 w-[320px] h-full flex flex-col z-50 transition-all`,
        showMobileCategories ? "left-0" : "-left-full",
        // Desktop
        `lg:left-0`
      )}
    >
      <div>
        <div className="flex items-center justify-between bg-primary text-white p-4">
          <div className="text-lg font-roboto mx-auto">
            Todas las categorias
          </div>
          <RiCloseLine
            onClick={() => setShowMobileCategories(false)}
            className="text-2xl justify-end"
          />
        </div>
        <ShowCategoriesButton />
      </div>
    </div>
  );
};