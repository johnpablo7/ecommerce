import { CiHeart } from "react-icons/ci";

export const WishList = () => {
  return (
    <button className="flex items-center justify-center gap-1 bg-white hover:bg-primary text-primary hover:text-white border-primary border w-full py-2 rounded transition">
      <CiHeart className="text-xl" />
      <p className="uppercase text-lg">lista de deseos</p>
    </button>
  );
};
