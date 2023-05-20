import { useAtom } from "jotai";
import { mobileMenuAtom } from "@/store/sidebar";
import { RiCloseLine } from "react-icons/ri";
import { SlArrowDown } from "react-icons/sl";
import clsx from "clsx";

export const SideMenu = () => {
  const [showMobileMenu, setShowMobileMenu] = useAtom(mobileMenuAtom);

  return (
    <div
      className={clsx(
        `bg-white fixed -left-full top-0 w-full h-full flex flex-col z-50 transition-all`,
        showMobileMenu ? "translate-x-full" : "",
        // Desktop
        `md:left-0`
      )}
    >
      <div>
        <div className="flex items-center justify-between bg-primary text-white p-4">
          <div className="text-lg font-roboto mx-auto">Menu</div>
          <RiCloseLine
            onClick={() => setShowMobileMenu(false)}
            className="text-2xl justify-end"
          />
        </div>

        <div className="text-gray-600">
          <div className="flex items-center justify-between px-5 py-3">
            <p>Hogar</p>
            <SlArrowDown />
          </div>
          <div className="border-t border-[#E9E4E4] opacity-80" />

          <div className="flex items-center justify-between px-5 py-3">
            <p>Comercio</p>
            <SlArrowDown />
          </div>
          <div className="border-t border-[#E9E4E4] opacity-80" />

          <div className="flex items-center justify-between px-5 py-3">
            <p>Mi Cuenta</p>
            <SlArrowDown />
          </div>
          <div className="border-t border-[#E9E4E4] opacity-80" />

          <div className="flex items-center justify-between px-5 py-3">
            <p>Otras Paginas</p>
            <SlArrowDown />
          </div>
          <div className="border-t border-[#E9E4E4] opacity-80" />
        </div>
      </div>
    </div>
  );
};
