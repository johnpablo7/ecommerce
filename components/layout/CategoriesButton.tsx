import { RiMenuFill } from "react-icons/ri";
import { ShowCategoriesButton } from "../shared/ShowCategoriesButton";

export const CategoriesButton = () => {
  return (
    <div>
      <div className="flex items-center justify-center cursor-pointer gap-3 bg-secondary text-white py-5 px-10 lg:w-[260px] relative group z-50">
        <RiMenuFill className="text-lg" />
        <p>Ver categorias</p>
        <div className="absolute top-full right-0 hidden group-hover:block transition-all duration-500">
          <ShowCategoriesButton />
        </div>
      </div>
    </div>
  );
};
