import Link from "next/link";
import { Logo } from "./Logo";
import { getGlobal } from "@/api/directus";
import { TfiLocationPin } from "react-icons/tfi";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { SocialNetworks } from "../common/SocialNetworks";

export const Footer = async () => {
  const global = await getGlobal();

  return (
    <div className="py-12 grid grid-cols-1 lg:grid-cols-3 gap-6 xl:gap-12 text-secondary">
      <div className="col-span-1 flex flex-col gap-6">
        <div>
          {/* @ts-expect-error Async Server Component */}
          <Logo />
          <p>{global.description}</p>
        </div>
        <div>
          <h4 className="text-lg mb-4 font-semibold font-roboto">
            BOLETIN INFORMATIVO
          </h4>
          <div>
            <form className="flex items-center justify-center">
              <input
                type="text"
                placeholder="Su dirección de correo electrónico"
                className="w-full py-[13px] px-4 outline-none lg:w-[500px] text-secondary text-sm border border-gray-300 focus:border-primary rounded-tl-md rounded-bl-md border-r-0"
              />
              <button className="bg-primary hover:bg-white text-white hover:text-primary hover:border-primary border font-semibold py-3 px-4 rounded-tr-md rounded-br-md">
                SUSCRIBIR
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <div className="grid grid-cols-2">
          <div>
            <div className="text-lg font-semibold font-roboto mb-5">
              MI CUENTA
            </div>
            <div className="flex flex-col gap-2">
              <Link href="/">Pedidos</Link>
              <Link href="/">Lista de deseos</Link>
              <Link href="/">Orden de pista</Link>
              <Link href="/">Administrar cuenta</Link>
              <Link href="/">Orden de devolución</Link>
            </div>
          </div>
          <div className="px-4">
            <div className="text-lg font-semibold font-roboto mb-5">
              INFORMACIÓN
            </div>
            <div className="flex flex-col gap-2">
              <Link href="/">Sobre nosotros</Link>
              <Link href="/">Política de devoluciones</Link>
              <Link href="/">Términos y Condiciones</Link>
              <Link href="/">Política de privacidad</Link>
              <Link href="/">Preguntas más frecuentes</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div>
          <h3 className="text-lg font-semibold font-roboto mb-5">CONTACTO</h3>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-4">
              <TfiLocationPin className="self-start text-2xl" />
              <p>{global.address}</p>
            </div>
            <div className="flex items-center gap-4">
              <BsTelephone className="text-sm" />
              <p>{global.phone}</p>
            </div>
            <div className="flex items-center gap-4">
              <AiOutlineMail className="" />
              <p>{global.email}</p>
            </div>
          </div>
        </div>
        <SocialNetworks mode="colors" />
      </div>
    </div>
  );
};
