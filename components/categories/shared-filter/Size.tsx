export const Size = () => {
  return (
    <div className="flex flex-col gap-1">
      <p className="font-semibold">TAMAÑO</p>
      <div className="flex items-center gap-3 mb-2">
        <button className="px-[6px] py-[1px] border border-tertiary border-opacity-20 rounded-md hover:bg-primary hover:text-white">
          S
        </button>
        <button className="px-[6px] py-[1px] border border-tertiary border-opacity-20 rounded-md hover:bg-primary hover:text-white">
          M
        </button>
        <button className="px-[6px] py-[1px] border border-tertiary border-opacity-20 rounded-md hover:bg-primary hover:text-white">
          L
        </button>
        <button className="px-[6px] py-[1px] border border-tertiary border-opacity-20 rounded-md hover:bg-primary hover:text-white">
          XL
        </button>
      </div>
    </div>
  );
};
