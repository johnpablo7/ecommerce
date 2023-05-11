import Image from "next/image";
import Link from "next/link";
import { RiArrowRightSLine } from "react-icons/ri";

export const ShowCategoriesButton = () => {
  return (
    <div className="flex flex-col py-2 lg:w-[260px] bg-white border shadow-md text-secondary">
      <Link href="/categorias/moda-hombre" className="hover:bg-stone-100">
        <div className="py-4 px-2 w-full grid grid-cols-4 items-center gap-2">
          <div className="flex items-center justify-center">
            <Image
              src="/svg/men.svg"
              alt="hombre"
              height={0}
              width={0}
              className="w-6 h-6"
            />
          </div>

          <div className="col-start-2 col-end-4">
            <p>Moda Hombre</p>
          </div>

          <div className="flex items-center justify-center text-2xl">
            <RiArrowRightSLine />
          </div>
        </div>
        <div className="border-t border-[#E9E4E4]" />
      </Link>

      <Link href="/" className="hover:bg-stone-100">
        <div className="py-4 px-2 w-full grid grid-cols-4 items-center gap-2">
          <div className="flex items-center justify-center">
            <Image
              src="/svg/women.svg"
              alt="hombre"
              height={0}
              width={0}
              className="w-6 h-6"
            />
          </div>

          <div className="col-start-2 col-end-4">
            <p>Moda Mujer</p>
          </div>

          <div className="flex items-center justify-center text-2xl">
            <RiArrowRightSLine />
          </div>
        </div>
        <div className="border-t border-[#E9E4E4]" />
      </Link>
    </div>
  );
};
