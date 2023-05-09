import { RiCheckLine } from "react-icons/ri";

export const Paid = () => {
  return (
    <div className="px-4 py-14">
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="p-1 bg-primary rounded-full text-white text-7xl mb-2">
          <RiCheckLine />
        </div>
        <h1 className="text-3xl font-semibold text-gray-700">
          ¡TU PEDIDO ESTÁ COMPLETO!
        </h1>
        <p className="text-gray-500 w-[740px] text-center">
          ¡Gracias por su orden! Su pedido se está procesando y se completará
          dentro de 3-6 horas. Recibirá una confirmación por correo electrónico
          cuando se complete su pedido.
        </p>
        <button className="flex items-center justify-center bg-primary text-white hover:text-primary hover:bg-white border hover:border-primary w-52 py-3 rounded transition">
          <p className="uppercase">seguir comprando</p>
        </button>
      </div>
    </div>
  );
};
