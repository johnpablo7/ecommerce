import Link from "next/link";
import Image from "next/image";
import { getCategories, getImageUrl } from "@/api/directus";

export const ShopByCategory = async () => {
  let categories = await getCategories();
  categories = categories.filter((c) => c.parent === null);

  return (
    <div className="py-14">
      <h2 className="text-2xl font-roboto font-bold mb-7">
        COMPRA POR CATEGORÍA
      </h2>

      <div className="grid grid-cols-2 xl:grid-cols-3 grid-rows-2 gap-4">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={"/categorias/" + category.slug}
            className="relative flex items-center justify-center aspect-[3/2]"
          >
            <Image
              src={getImageUrl(category.image) + "?width=380&height=250"}
              alt="product"
              className="object-cover w-full h-full absolute"
              width={380}
              height={250}
            />

            <div className="relative py-4 px-2 xl:p-8 bg-white/40 hover:bg-white/60 transition">
              <p className="text-lg text-black font-semibold text-center">
                {category.name}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
