import Image from "next/image";
import Link from "next/link";
import { MdOutlineClose } from "react-icons/md";

export const ShowCart = () => {
  return (
    <div className="flex flex-col p-4 lg:w-[320px] bg-white border shadow-md text-secondary">
      <p className="px-2 font-roboto">2 artículos</p>
      <div className="m-2 border-t border-[#E9E4E4]" />

      <div className="grid grid-cols-3 gap-3 py-2">
        <div className="flex items-center">
          <Image
            src="/images/shoes.png"
            alt="zapatillas"
            width={90}
            height={80}
          />
        </div>
        <div className="flex items-center gap-3 col-span-2">
          <div className="flex flex-col">
            <div className="font-roboto line-clamp-2">
              zapatos casuales de los hombres
            </div>
            <div className="flex gap-2">
              <span>x1</span>
              <p>s/450</p>
            </div>
          </div>
          <MdOutlineClose className="text-4xl text-gray-500" />
        </div>
      </div>
      <div className="m-2 border-t border-[#E9E4E4]" />
      <div className="flex items-center justify-between py-2">
        <p className="font-roboto">SUB TOTAL:</p>
        <p className="font-semibold text-gray-500">s/980.00</p>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-2">
        <Link
          href="/carrito"
          className="flex items-center justify-center gap-1 bg-primary text-white hover:text-primary hover:bg-white border hover:border-primary w-full py-2 rounded transition"
        >
          VER CARRITO
        </Link>
        <Link
          href="/verificar"
          className="flex items-center justify-center gap-1 bg-white hover:bg-primary text-primary hover:text-white border-primary border w-full py-2 rounded transition"
        >
          VERIFICAR
        </Link>
      </div>
    </div>
  );
};
