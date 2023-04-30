export const Color = () => {
  return (
    <div className="flex flex-col gap-1">
      <p className="font-semibold">COLOR</p>
      <div className="flex items-center gap-3 mb-2">
        <button className="flex items-center justify-center border-2 hover:border-black rounded">
          <div className="p-2 bg-primary"></div>
        </button>
        <button className="flex items-center justify-center border-2 hover:border-primary rounded">
          <div className="p-2 bg-white"></div>
        </button>
        <button className="flex items-center justify-center border-2 hover:border-primary rounded">
          <div className="p-2 bg-black"></div>
        </button>
      </div>
    </div>
  );
};
