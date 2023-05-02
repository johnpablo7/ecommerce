import Image from "next/image";

export const CustomerSupport = () => {
  return (
    <div className="mx-4 lg:mx-20 grid grid-cols-1 lg:grid-cols-3 items-center justify-center py-14 gap-4">
      <div className="flex items-center justify-center border border-primary py-4 lg:px-8 gap-6">
        <div>
          <Image
            src="/svg/delivery.svg"
            alt="icon"
            height={0}
            width={0}
            className="w-12 h-12"
          />
        </div>
        <div className="flex flex-col gap-1 font-roboto text-[#464545]">
          <p className="text-lg font-bold">Envío gratis</p>
          <p className="text-sm opacity-70">Pedidos superiores a $200</p>
        </div>
      </div>
      <div className="flex items-center justify-center border border-primary py-4 lg:px-8 gap-6">
        <div>
          <Image
            src="/svg/money.svg"
            alt="icon"
            height={0}
            width={0}
            className="w-12 h-12"
          />
        </div>
        <div className="flex flex-col gap-1 font-roboto text-[#464545]">
          <p className="text-lg font-bold">Devoluciones de dinero</p>
          <p className="text-sm opacity-70">30 días de devolución de dinero</p>
        </div>
      </div>
      <div className="flex items-center justify-center border border-primary py-4 lg:px-8 gap-6">
        <div>
          <Image
            src="/svg/service.svg"
            alt="icon"
            height={0}
            width={0}
            className="w-12 h-12"
          />
        </div>
        <div className="flex flex-col gap-1 font-roboto text-[#464545]">
          <p className="text-lg font-bold">Soporte 24/7</p>
          <p className="text-sm opacity-70">Atención al cliente</p>
        </div>
      </div>
    </div>
  );
};
