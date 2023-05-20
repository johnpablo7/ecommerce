import Link from "next/link";

export const ShowShop = () => {
  return (
    <div className="flex flex-col p-4 lg:w-[200px] bg-white border shadow-md text-secondary gap-1 rounded-md">
      <Link href="/" className="hover:text-primary">
        Vista de la lista
      </Link>
      <Link href="/" className="hover:text-primary">
        Vista de la cuadrícula
      </Link>
      <Link href="/carrito" className="hover:text-primary">
        Carro de la compra
      </Link>
      <Link href="/categorias" className="hover:text-primary">
        Vista del producto
      </Link>
    </div>
  );
};
