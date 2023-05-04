export const OrderSummary = () => {
  return (
    <div className="p-4 border border-gray-200">
      <div className="text-gray-600 font-semibold flex flex-col gap-2 mb-4">
        <h1 className="uppercase text-xl mb-1">resumen del pedido</h1>
        <div className="flex items-center justify-between text-gray-500">
          <p>Subtotal</p>
          <p>s/45.00</p>
        </div>
        <div className="flex items-center justify-between text-gray-500">
          <p>Entrega</p>
          <p>Gratis</p>
        </div>
        <div className="flex items-center justify-between text-gray-500 mb-1">
          <p>Impuesto</p>
          <p>Gratis</p>
        </div>
        <div className="border-t border-[#E9E4E4] opacity-80 mb-1" />
        <div className="flex items-center justify-between text-gray-600">
          <p>Total</p>
          <p>s/45.00</p>
        </div>
      </div>
      <form className="flex items-center justify-center mb-8">
        <input
          type="text"
          placeholder="Introducir cupón"
          className="w-full py-2 px-4 outline-none text-sm border border-gray-300 focus:border-primary rounded-tl-md rounded-bl-md border-r-0"
        />
        <button className="bg-primary hover:bg-white text-white text-sm hover:text-primary hover:border-primary border py-2 px-4 rounded-tr-md rounded-br-md transition duration-300">
          APLICAR
        </button>
      </form>
      <button className="flex items-center justify-center gap-1 bg-primary text-white hover:text-primary hover:bg-white border hover:border-primary w-full py-2 rounded-md transition mb-8">
        <p className="uppercase">procede a la caja</p>
      </button>
    </div>
  );
};
