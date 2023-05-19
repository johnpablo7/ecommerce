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
        `bg-white fixed top-0 w-[320px] h-full flex flex-col z-50 transition-all`,
        showMobileMenu ? "left-0" : "-left-full",
        // Desktop
        `lg:left-0`
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
