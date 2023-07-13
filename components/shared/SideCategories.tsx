import { useAtom } from "jotai";
import { mobileCategoriesAtom } from "@/store/sidebar";
import { RiCloseLine } from "react-icons/ri";
import { SlArrowDown } from "react-icons/sl";
import clsx from "clsx";
import { ShowCategoriesButton } from "./ShowCategoriesButton";
import { FC } from "react";
import { TCategory } from "@/types/category";

export const SideCategories: FC<{ categories: TCategory[] }> = ({
  categories,
}) => {
  const [showMobileCategories, setShowMobileCategories] =
    useAtom(mobileCategoriesAtom);

  return (
    <div
      className={clsx(
        `bg-white fixed -left-full top-0 w-full h-full flex flex-col z-50 transition-all`,
        showMobileCategories ? "translate-x-full" : "",
        // Desktop
        `md:left-0`
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
        <ShowCategoriesButton categories={categories} />
      </div>
    </div>
  );
};
