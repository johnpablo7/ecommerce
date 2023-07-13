import { Size } from "./shared-filter/Size";
import { Color } from "./shared-filter/Color";
import { RangeSlider } from "./shared-filter/RangeSlider";
import { SelectCategory } from "./shared-filter/SelectCategory";
import { SelectBrand } from "./shared-filter/SelectBrand";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { RiCloseLine } from "react-icons/ri";
import clsx from "clsx";

export const FilterProducts = ({ showMobile, onCloseMobile }) => {
  return (
    <div
      className={clsx(
        "fixed top-10 left-0 max-lg:w-full lg:static z-10",
        showMobile ? "max-lg:block" : "max-lg:hidden"
      )}
    >
      <div className="flex flex-col mb-8">
        <div className="px-4 pt-8 pb-4 bg-white border border-white shadow-md text-secondary">
          <div className="lg:hidden flex flex-col gap-2 justify-between">
            <div className="flex flex-col gap-2 max-md:w-72">
              <div className="uppercase font-semibold">Ordenar por</div>
              <button className="flex items-center gap-2 py-2 px-3 border border-gray-200 text-secondary rounded-md mb-4">
                <p>Clasificación por defecto</p>
                <MdOutlineKeyboardArrowDown className="text-2xl" />
              </button>
            </div>
            <button
              onClick={onCloseMobile}
              className={clsx(
                "p-1 bg-primary text-white rounded-full text-xl right-5 fixed top-16",
                showMobile ? "max-lg:block" : "max-lg:hidden"
              )}
            >
              <RiCloseLine className="text-2xl" />
            </button>
          </div>
          <SelectCategory />
          <SelectBrand />
          <RangeSlider />
          <Size />
          <Color />
        </div>
      </div>
    </div>
  );
};
