import Image from "next/image";
import { RiCheckLine } from "react-icons/ri";

export const SelectPaymentMethod = () => {
  return (
    <div>
      <div className="bg-neutral-200 text-gray-600 py-2 px-4 font-semibold mb-10">
        <p>Seleccione el método de pago</p>
      </div>
      <div className="flex items-center gap-6 mb-8">
        <div className="relative p-2 border border-gray-200 text-gray-500 flex flex-col items-center justify-center gap-3 rounded w-40 h-28 hover:border-primary cursor-pointer">
          <div className="absolute p-[1px] bg-primary rounded-full text-white text-lg -top-2 -right-2">
            <RiCheckLine />
          </div>
          <Image
            src="/images/credit-card.png"
            alt="credit"
            width={49}
            height={49}
          />
          <p>Tarjeta de crédito</p>
        </div>
        <div className="p-2 border border-gray-200 text-gray-500 flex flex-col items-center justify-center gap-3 rounded w-40 h-28 hover:border-primary cursor-pointer">
          <Image
            src="/images/paypal.png"
            alt="paypal"
            className="py-2"
            width={85}
            height={23}
          />
          <p>PayPal</p>
        </div>
        <div className="p-2 border border-gray-200 text-gray-500 flex flex-col items-center justify-center gap-3 rounded w-40 h-28 hover:border-primary cursor-pointer">
          <Image src="/images/cash-on.png" alt="cash" width={41} height={41} />
          <p>Contra entrega</p>
        </div>
      </div>
      <CreditCardForm />
    </div>
  );
};

export const CreditCardForm = () => {
  return (
    <div className="p-4 border border-white shadow-slate-100 shadow-lg text-gray-600">
      <div className="flex items-center justify-between pt-6 pb-4">
        <div className="font-semibold">Tarjeta de crédito</div>
        <Image src="/images/visa.png" alt="visa" width={219} height={48} />
      </div>

      <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label htmlFor="name">Número de tarjeta *</label>
          <input
            type="text"
            name="name"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="name">Nombre en la tarjeta *</label>
          <input
            type="text"
            name="name"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="name">Fecha de caducidad *</label>
          <input
            type="text"
            name="name"
            placeholder="MM/AA"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="name">CVV *</label>
          <input
            type="text"
            name="name"
            placeholder=""
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none"
          />
        </div>
        <button className="flex items-center justify-center bg-primary text-white hover:text-primary hover:bg-white border hover:border-primary w-40 py-2 rounded transition my-5">
          <p className="uppercase">pagar ahora</p>
        </button>
      </form>
    </div>
  );
};
