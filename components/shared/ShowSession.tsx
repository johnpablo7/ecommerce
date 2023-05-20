import Link from "next/link";
import { RiAccountCircleLine, RiAccountCircleFill } from "react-icons/ri";

export const ShowSession = () => {
  return (
    <div className="flex flex-col gap-2 p-4 w-44 bg-white border shadow-md text-secondary rounded-md transition">
      <Link
        href="/acceso"
        className="flex items-center justify-center gap-2 hover:text-primary transition"
      >
        <RiAccountCircleLine className="text-2xl" />
        <p className="pl-[2px]">Iniciar sesión</p>
      </Link>
      <Link
        href="/registro"
        className="flex items-center justify-center gap-2 hover:text-primary transition"
      >
        <RiAccountCircleFill className="text-2xl" />
        <p>Crear cuenta</p>
      </Link>
    </div>
  );
};
