import Image from "next/image";

export const CustomerSupport = () => {
  return (
    <div className="mx-4 lg:mx-16 grid grid-cols-1 lg:grid-cols-3 items-center justify-center py-14 gap-4">
      <div className="flex items-center justify-center border border-primary py-4 gap-6">
        <div>
          <Image
            src="/svg/delivery.svg"
            alt="icon"
            height={0}
            width={0}
            className="w-12 h-12"
          />
        </div>
        <div className="flex flex-col gap-1 ">
          <p className="text-lg font-roboto text-secondary">Envío gratis</p>
          <p className="text-sm text-[#464545] opacity-70">
            Pedidos superiores a $200
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center border border-primary py-4 gap-6">
        <div>
          <Image
            src="/svg/money.svg"
            alt="icon"
            height={0}
            width={0}
            className="w-12 h-12"
          />
        </div>
        <div className="flex flex-col gap-1 ">
          <p className="text-lg font-roboto text-secondary">
            Devoluciones de dinero
          </p>
          <p className="text-sm text-[#464545] opacity-70">
            30 días de devolución de dinero
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center border border-primary py-4 gap-6">
        <div>
          <Image
            src="/svg/service.svg"
            alt="icon"
            height={0}
            width={0}
            className="w-12 h-12"
          />
        </div>
        <div className="flex flex-col gap-1 ">
          <p className="text-lg font-roboto text-secondary">Soporte 24/7</p>
          <p className="text-sm text-[#464545] opacity-70">
            Atención al cliente
          </p>
        </div>
      </div>
    </div>
  );
};
