export const QuantityInput = () => {
  return (
    <div className="flex flex-col gap-2 mb-2">
      <div className="font-semibold">Cantidad</div>
      <div className="flex items-center">
        <button className="py-[2px] px-3 border border-opacity-20 text-xl hover:bg-stone-200 font-semibold">
          -
        </button>
        <div className="py-1 px-3 border border-opacity-20">4</div>
        <button className="py-[2px] px-3 border border-opacity-20 text-xl hover:bg-stone-200 font-semibold">
          +
        </button>
      </div>
    </div>
  );
};
