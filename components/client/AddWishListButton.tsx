import { CiHeart } from "react-icons/ci";

export const AddWishListButton = () => {
  return (
    <button className="flex items-center justify-center gap-1 bg-white hover:bg-primary text-primary hover:text-white border-primary border w-full py-2 rounded transition">
      <CiHeart className="text-xl" />
      <p className="text-lg">Lista de deseos</p>
    </button>
  );
};
