import {
  RiMenuFill,
  RiMenuAddLine,
  RiSearchLine,
  RiShoppingCart2Line,
} from "react-icons/ri";

export const MobileMenu = () => {
  return (
    <div className="grid grid-cols-4 gap-2 text-sm">
      <button className="flex flex-col items-center justify-center">
        <RiMenuFill className="text-2xl" />
        <p>Menú</p>
      </button>
      <button className="flex flex-col items-center justify-center">
        <RiMenuAddLine className="text-2xl" />
        <p>Categorías</p>
      </button>
      <button className="flex flex-col items-center justify-center">
        <RiSearchLine className="text-2xl" />
        <p>Buscar</p>
      </button>
      <button className="flex flex-col items-center justify-center">
        <RiShoppingCart2Line className="text-2xl" />
        <p>Carro</p>
      </button>
    </div>
  );
};
