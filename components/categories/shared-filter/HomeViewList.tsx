import { SlHome } from "react-icons/sl";
import { MdChevronRight } from "react-icons/md";

export const HomeViewList = () => {
  return (
    <div className="flex items-center gap-2 py-6">
      <div className="flex items-center gap-1">
        <SlHome className="text-primary" />
        <MdChevronRight className="text-2xl" />
      </div>
      <div className="flex items-center gap-1">
        <p className="text-primary">Categoría</p>
        <MdChevronRight className="text-2xl" />
      </div>
      <div>Producto</div>
    </div>
  );
};
