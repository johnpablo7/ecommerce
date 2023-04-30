import { BsCheck } from "react-icons/bs";

export const SelectCategory = () => {
  return (
    <>
      <div className="flex flex-col gap-1 mb-4">
        <h2 className="text-lg font-semibold">CATEGORÍAS</h2>
        <ul>
          <li className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <label
                htmlFor="check-box-1"
                className="flex items-center gap-2 cursor-pointer relative"
              >
                <input
                  type="checkbox"
                  id="check-box-1"
                  className="w-5 h-5 appearance-none border-2 border-tertiary checked:border-none checked:bg-primary"
                />
                <BsCheck className="text-2xl text-white absolute -left-[2px] text-opacity-0 check-1 transition" />
              </label>
              <p>Calzado</p>
            </div>
            <p className="items-end">(16)</p>
          </li>
        </ul>
      </div>
      <div className="border border-[#e5e7eb] opacity-80 mb-4" />
    </>
  );
};
