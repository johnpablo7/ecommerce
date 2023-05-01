import Image from "next/image";
import Link from "next/link";

export const Banner = async () => {
  return (
    <div className="relative">
      <div className="relative h-[430px]">
        <Image
          src="/images/banner-1.jpg"
          alt="banner-1"
          height={430}
          width={1920}
          priority
          className="object-cover object-bottom w-full h-full"
        />
      </div>

      <div className="absolute top-[1px] items-center justify-center px-3 py-12 xl:py-12 xl:mx-container-side">
        <h1 className="text-4xl xl:text-5xl xl:w-[560px] text-secondary font-roboto font-semibold mb-3 xl:mb-5 xl:leading-[4rem]">
          La Mejor Colección Para La Decoración Del Hogar
        </h1>

        <p className="text-secondary font-poppins mb-8 xl:mb-12 leading-relaxed w-80 xl:w-[600px]">
          ¿Estás buscando la comodidad y el estilo de los seccionales de alta
          calidad? ¡Tenemos la promoción perfecta para ti!
        </p>

        <Link
          href="/"
          className="bg-primary text-white hover:text-primary hover:bg-white border hover:border-primary rounded py-2 xl:py-3 px-6 transition font-poppins font-semibold"
        >
          COMPRA AHORA
        </Link>
      </div>
    </div>
  );
};
