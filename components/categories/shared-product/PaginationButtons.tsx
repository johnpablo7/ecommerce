import { IoIosArrowRoundForward } from "react-icons/io";

export const PaginationButtons = () => {
  return (
    <div className="flex items-center justify-center gap-3 mt-6 mx-auto">
      <button className="py-1 px-4 bg-primary text-white">1</button>
      <button className="py-1 px-3 bg-white text-secondary border border-gray-300 hover:bg-primary hover:text-white">
        2
      </button>
      <button className="py-1 px-3 bg-white text-secondary border border-gray-300 hover:bg-primary hover:text-white">
        3
      </button>
      <button className="py-1 px-3 bg-white text-secondary border border-gray-300 hover:bg-primary hover:text-white">
        4
      </button>
      <button className="py-1 px-[6px] bg-white text-secondary border border-gray-300 hover:bg-primary hover:text-white">
        <IoIosArrowRoundForward className="text-2xl" />
      </button>
    </div>
  );
};
