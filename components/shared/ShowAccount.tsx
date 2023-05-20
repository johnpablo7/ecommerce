import Link from "next/link";
import {
  RiAccountBoxLine,
  RiGiftLine,
  RiHeartLine,
  RiShoppingCart2Line,
  RiCloseLine,
} from "react-icons/ri";

export const ShowAccount = () => {
  return (
    <div className="flex flex-col justify-start gap-2 p-4 w-52 lg:w-[210px] bg-white border shadow-md text-secondary rounded-md">
      <h3 className="font-roboto text-center px-2">
        Bienvenido a la tienda E! SHOP
      </h3>

      <Link
        href="/mi-cuenta"
        className="flex items-center gap-2 hover:text-primary transition"
      >
        <RiAccountBoxLine className="text-2xl" />
        <p>Mi cuenta</p>
      </Link>

      <Link
        href="/"
        className="flex items-center gap-2 hover:text-primary transition"
      >
        <RiGiftLine className="text-2xl" />
        <p>Mi pedido</p>
      </Link>
      <Link
        href="/mi-cuenta/lista-de-deseos"
        className="flex items-center gap-2 hover:text-primary transition"
      >
        <RiHeartLine className="text-2xl" />
        <p>Mi lista de deseos</p>
      </Link>
      <Link
        href="/carrito"
        className="flex items-center gap-2 hover:text-primary transition"
      >
        <RiShoppingCart2Line className="text-2xl" />
        <p>Mi carrito</p>
      </Link>
      <Link
        href="/acceso"
        className="flex items-center gap-2 hover:text-primary transition"
      >
        <RiCloseLine className="text-2xl" />
        <p>Cerrar sesión</p>
      </Link>
    </div>
  );
};
