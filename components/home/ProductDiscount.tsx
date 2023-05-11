import { getImageUrl, getProducts } from "@/api/directus";
import Image from "next/image";
import Link from "next/link";

export const ProductDiscount = async () => {
  const params = new URLSearchParams();
  params.set("limit", "2");
  params.set("sort", "-date_created");
  const products = await getProducts(params.toString());

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-7">
      {products.map((product) => (
        <div key={product.slug}>
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between px-10 py-6 bg-[#fbe3e4]">
            <div className="flex flex-col">
              <p className="text-lg text-primary font-roboto">Oferta del 30%</p>
              <p className="text-xl mb-2 font-roboto">Envío gratis</p>
              <p className="font-normal mb-4">Muebles naturales atractivos</p>
              <Link
                href={"/productos/" + product.slug}
                className="py-2 px-1 rounded-md bg-primary text-white hover:text-primary hover:bg-transparent border hover:border hover:border-primary text-center lg:w-[160px] transition"
              >
                Compra ahora
              </Link>
            </div>

            <Image
              src={getImageUrl(product.image) + "?width=390&height=260"}
              alt="product"
              // width={200}
              // height={150}
              width="0"
              height="0"
              sizes="100vw"
              priority
              className="object-contain object-center w-[200px] h-[180px] flex-shrink-0 hover:scale-105 transition-all duration-300"
            />
          </div>
        </div>
      ))}
    </div>
  );
};
