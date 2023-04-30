import { RiStarSFill } from "react-icons/ri";

export const Reviews = () => {
  return (
    <div className="flex items-center gap-3 py-4">
      <div className="flex items-center text-yellow-400 text-xl">
        <RiStarSFill />
        <RiStarSFill />
        <RiStarSFill />
        <RiStarSFill />
        <RiStarSFill />
      </div>
      <p className="text-sm">50 Reseñas</p>
    </div>
  );
};
