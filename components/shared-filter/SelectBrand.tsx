import { BsCheck } from "react-icons/bs";

export const SelectBrand = () => {
  return (
    <>
      <div className="flex flex-col gap-1 mb-4">
        <h2 className="text-lg font-semibold">MARCAS</h2>
        <ul>
          <li className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <label
                htmlFor="check-box-2"
                className="flex items-center gap-2 cursor-pointer relative"
              >
                <input
                  type="checkbox"
                  id="check-box-2"
                  className="w-5 h-5 appearance-none border-2 border-tertiary checked:border-none checked:bg-primary"
                />
                <BsCheck className="text-2xl text-white absolute -left-0 text-opacity-0 check-2 transition" />
              </label>
              <p>Adidas</p>
            </div>
            <p className="items-end">(16)</p>
          </li>
        </ul>
      </div>
      <div className="border-t border-[#E9E4E4] opacity-80 mb-4" />
    </>
  );
};
