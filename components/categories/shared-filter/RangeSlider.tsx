export const RangeSlider = () => {
  return (
    <>
      <div className="w-full">
        <h2 className="text-lg font-semibold">PRECIO</h2>
        <div className="flex flex-col gap-2">
          <label htmlFor="range" className="mb-2">
            Ingrese el precio mín y máx
          </label>
          <input
            type="range"
            name="price"
            min="1"
            max="100"
            defaultValue="10"
            className="w-full h-2 bg-gray-200 appearance-none mb-6"
          />
        </div>
      </div>
      <div className="border-t border-[#E9E4E4] opacity-80 mb-4" />
    </>
  );
};
