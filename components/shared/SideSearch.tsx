import Image from "next/image";
import { useAtom } from "jotai";
import { mobileSearchAtom } from "@/store/sidebar";
import { RiCloseLine } from "react-icons/ri";
import { TfiSearch } from "react-icons/tfi";
import clsx from "clsx";

export const SideSearch = () => {
  const [showMobileSearch, setShowMobileSearch] = useAtom(mobileSearchAtom);

  return (
    <div
      className={clsx(
        `bg-white fixed -top-full w-full h-full flex flex-col z-50 transition-all`,
        showMobileSearch ? "translate-y-full" : "",
        // Desktop
        `lg:top-0`
      )}
    >
      <div className="px-4">
        <div className="flex items-center justify-between px-4 pt-6 text-gray-400 font-light">
          <div className="text-sm uppercase">Qué estás buscando?</div>
          <RiCloseLine
            onClick={() => setShowMobileSearch(false)}
            className="text-2xl"
          />
        </div>
        <div className="flex items-center justify-center">
          <form className="relative">
            <input
              type="text"
              placeholder="Buscar producto..."
              className="py-2 px-3 outline-none text-lg"
            />
            <TfiSearch className="absolute top-3 -right-4 text-xl" />
          </form>
        </div>
        <div className="border-t border-gray-500/80 mb-4" />

        <div className="grid grid-cols-3 gap-3 p-4">
          <div className="flex items-center">
            <Image
              src="/images/shoes.png"
              alt="zapatillas"
              width={90}
              height={80}
            />
          </div>
          <div className="flex items-center gap-3 col-span-2">
            <div className="flex flex-col">
              <div className="font-roboto line-clamp-2">
                zapatos casuales de los hombres
              </div>
              <div className="flex gap-2">
                <span>x1</span>
                <p>s/450</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-[#E9E4E4]" />
      </div>
    </div>
  );
};
