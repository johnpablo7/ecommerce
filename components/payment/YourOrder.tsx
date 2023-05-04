import { BsCheck } from "react-icons/bs";

export const YourOrder = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="bg-neutral-200 text-gray-600 py-2 px-6 font-semibold grid grid-cols-4">
        <p className="col-start-1 col-end-3">Su pedido</p>
        <p className="text-text-center">Cantidad</p>
        <p className="text-end">Precio Total</p>
      </div>
      <div className="py-4 px-6 border border-gray-200 text-gray-500 font-semibold">
        <div>
          <div className="grid grid-cols-4 gap-4 mb-4">
            <div className="col-start-1 col-end-3">
              <p>Zapatos Tejidos Beigh</p>
              <p className="font-normal">Talla M</p>
            </div>
            <p className="text-start px-4">x1</p>
            <p className="text-end">s/84.00</p>
          </div>
          <div className="flex items-center justify-between pb-3">
            <p>SUBTOTAL</p>
            <p>s/140.00</p>
          </div>
          <div className="border-t border-[#E9E4E4] opacity-80" />
          <div className="flex items-center justify-between py-3">
            <p>ENVÍO</p>
            <p>Gratis</p>
          </div>
          <div className="border-t border-[#E9E4E4] opacity-80" />
          <div className="flex items-center justify-between py-3">
            <p>TOTAL</p>
            <p>s/140.00</p>
          </div>
          <div className="border-t border-[#E9E4E4] opacity-80" />
        </div>

        <div className="gap-3 py-4">
          <div className="flex flex-col gap-4 w-full">
            <div className="flex items-center gap-4">
              <label htmlFor="check-box-1" className="cursor-pointer relative">
                <input
                  type="checkbox"
                  id="check-box-1"
                  className="w-5 h-5 appearance-none border border-primary checked:border-none checked:bg-primary"
                />
                <BsCheck className="text-2xl text-white absolute -left-[2px] text-opacity-0 check-1 transition" />
              </label>
              <div className="flex items-center font-normal">
                <p>Acepta nuestros</p>
                <p className="text-primary pl-1">términos y condiciones</p>
              </div>
            </div>

            <button className="flex items-center justify-center gap-1 bg-primary text-white hover:text-primary hover:bg-white border hover:border-primary w-full py-2 rounded transition">
              <p className="text-lg uppercase">realizar pedido</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
