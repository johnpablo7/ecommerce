import { RiMenuFill } from "react-icons/ri";

export const CategoriesButton = () => {
  return (
    <div className="py-2">
      <button className="flex items-center justify-center gap-3 bg-secondary text-white py-3 px-10 rounded-md lg:w-[260px]">
        <RiMenuFill className="text-lg" />
        <p>Ver categorias</p>
      </button>
    </div>
  );
};
