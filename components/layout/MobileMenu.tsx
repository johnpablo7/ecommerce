"use client";
import { useAtom } from "jotai";
import {
  mobileMenuAtom,
  mobileCategoriesAtom,
  mobileCartAtom,
  mobileSearchAtom,
} from "@/store/sidebar";
import {
  RiMenuFill,
  RiMenuAddLine,
  RiSearchLine,
  RiShoppingCart2Line,
} from "react-icons/ri";
import { SideMenu } from "../shared/SideMenu";
import { SideCategories } from "../shared/SideCategories";
import { SideCart } from "../shared/SideCart";
import { SideSearch } from "../shared/SideSearch";
import { TCategory } from "@/types/category";
import { FC } from "react";

export const MobileMenu: FC<{ categories: TCategory[] }> = ({ categories }) => {
  const [showMobileMenu, setShowMobileMenu] = useAtom(mobileMenuAtom);
  const [showMobileCategories, setShowMobileCategories] =
    useAtom(mobileCategoriesAtom);
  const [showMobileCart, setShowMobileCart] = useAtom(mobileCartAtom);
  const [showMobileSearch, setShowMobileSearch] = useAtom(mobileSearchAtom);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const toggleMobileCategories = () => {
    setShowMobileCategories(!showMobileCategories);
  };

  const toggleMobileCart = () => {
    setShowMobileCart(!showMobileCart);
  };

  const toggleMobileSearch = () => {
    setShowMobileSearch(!showMobileSearch);
  };

  return (
    <div>
      <SideMenu />
      <SideCategories categories={categories} />

      <SideSearch />
      <SideCart />
      <nav className="grid grid-cols-4 gap-2 text-sm">
        <button
          onClick={toggleMobileMenu}
          className="flex flex-col items-center justify-center"
        >
          <RiMenuFill className="text-2xl" />
          <p>Menu</p>
        </button>

        <button
          onClick={toggleMobileCategories}
          className="flex flex-col items-center justify-center"
        >
          <RiMenuAddLine className="text-2xl" />
          <p>Categorías</p>
        </button>

        <button
          onClick={toggleMobileSearch}
          className="flex flex-col items-center justify-center"
        >
          <RiSearchLine className="text-2xl" />
          <p>Buscar</p>
        </button>

        <button
          onClick={toggleMobileCart}
          className="flex flex-col items-center justify-center"
        >
          <RiShoppingCart2Line className="text-2xl" />
          <p>Carro</p>
        </button>
      </nav>
    </div>
  );
};
