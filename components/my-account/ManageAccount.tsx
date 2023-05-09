import Image from "next/image";
import Link from "next/link";
import { RiAccountBoxLine, RiGiftLine, RiHeartLine } from "react-icons/ri";
import { MdOutlinePayment, MdOutlineClose } from "react-icons/md";

export const ManageAccount = () => {
  return (
    <div className="flex flex-col gap-5 mb-10">
      <div className="p-2 border border-white shadow-slate-100 shadow-lg text-gray-600">
        <div className="flex items-center gap-5">
          <Image
            src="/images/avatar.png"
            alt="avatar"
            width={50}
            height={50}
            className="border border-slate-200 rounded-full p-1"
          />
          <div className="flex flex-col">
            <p>Hola,</p>
            <p className="font-semibold">John Doe</p>
          </div>
        </div>
      </div>

      <div className="px-2 py-8 border border-white shadow-slate-100 shadow-lg text-gray-600">
        <div className="flex flex-col gap-1">
          <div className="flex flex-row gap-2 hover:text-primary">
            <RiAccountBoxLine className="flex-none text-xl m-1" />
            <h3 className="text-lg font-semibold">Administrar mi cuenta</h3>
          </div>

          <div className="flex flex-col flex-1 gap-1 pl-9">
            <Link href="/" className="hover:text-primary">
              Información del perfil
            </Link>
            <Link href="/" className="hover:text-primary">
              Administrar dirección
            </Link>
            <Link href="/" className="hover:text-primary">
              Cambiar la contraseña
            </Link>
          </div>
        </div>

        <div className="border-t border-[#E9E4E4] opacity-80 my-3" />
        <div className="flex flex-col gap-1">
          <div className="flex flex-row gap-2 hover:text-primary">
            <RiGiftLine className="flex-none text-xl m-1" />
            <h3 className="text-lg font-semibold">Mi historial de pedidos</h3>
          </div>
          <div className="flex flex-col flex-1 gap-1 pl-9">
            <Link href="/" className="hover:text-primary">
              Mis devoluciones
            </Link>
            <Link href="/" className="hover:text-primary">
              Mis cancelaciones
            </Link>
            <Link href="/" className="hover:text-primary">
              Mis reseñas
            </Link>
          </div>
        </div>

        <div className="border-t border-[#E9E4E4] opacity-80 my-3" />
        <div className="flex flex-col gap-1">
          <div className="flex flex-row gap-2 hover:text-primary">
            <MdOutlinePayment className="flex-none text-xl m-1" />
            <h3 className="text-lg font-semibold">Método de pago</h3>
          </div>
          <div className="flex flex-col flex-1 gap-1 pl-9">
            <Link href="/" className="hover:text-primary">
              Vale
            </Link>
          </div>
        </div>

        <div className="border-t border-[#E9E4E4] opacity-80 my-3" />
        <div className="flex flex-col gap-1">
          <div className="flex flex-row gap-2 hover:text-primary">
            <RiHeartLine className="flex-none text-xl m-1" />
            <h3 className="text-lg font-semibold">Mi lista de deseos</h3>
          </div>
        </div>

        <div className="border-t border-[#E9E4E4] opacity-80 my-3" />
        <div className="flex flex-col gap-1">
          <div className="flex flex-row gap-2 hover:text-primary">
            <MdOutlineClose className="flex-none text-xl m-1" />
            <h3 className="text-lg font-semibold">Cerrar sesión</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
