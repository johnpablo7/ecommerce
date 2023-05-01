export const Search = () => {
  return (
    <div className="flex items-center justify-center bg-primary py-2">
      <form>
        <input
          type="text"
          placeholder="Buscar producto..."
          className="py-[11px] px-4 outline-none lg:w-[500px] rounded-tl-md rounded-bl-md"
        />
        <button className="bg-secondary text-white py-3 px-12 rounded-tr-md rounded-br-md">
          Buscar
        </button>
      </form>
    </div>
  );
};
