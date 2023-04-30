import { RiMenuFill } from "react-icons/ri";

export const CategoriesButton = () => {
  return (
    <div className="flex items-center justify-center py-2">
      <button className="flex items-center gap-3 bg-secondary text-white py-3 px-10 rounded-md">
        <RiMenuFill className="font-poppins text-lg" />
        Ver categorias
      </button>
    </div>
  );
};
