import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { CgMenuGridR } from "react-icons/cg";
import { TbAdjustmentsHorizontal } from "react-icons/tb";

export const Defaultsorting = ({ onFiltersButtonClick }) => {
  return (
    <div className="flex items-center justify-between mb-6">
      <div className="md:hidden">
        <button
          onClick={onFiltersButtonClick}
          className="uppercase py-2 px-12 bg-primary hover:bg-white text-white hover:text-primary border hover:border hover:border-primary rounded"
        >
          filtrar
        </button>
      </div>

      <button className="max-md:hidden flex items-center gap-2 py-2 px-3 border border-gray-200 text-secondary rounded-md">
        <p>Clasificación por defecto</p>
        <MdOutlineKeyboardArrowDown className="text-2xl" />
      </button>
      <div className="flex items-center gap-3">
        <button className="py-[6px] px-2 bg-primary text-white text-2xl rounded">
          <CgMenuGridR />
        </button>
        <button className="py-[6px] px-2 bg-white text-secondary border border-gray-300 text-2xl rounded">
          <TbAdjustmentsHorizontal />
        </button>
      </div>
    </div>
  );
};
