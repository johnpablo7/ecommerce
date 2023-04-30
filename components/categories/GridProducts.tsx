import { getProducts } from "@/api/directus";
import { TCategory } from "../../types/category";
import { ProductCard } from "../shared-product/ProductCard";
import { Defaultsorting } from "../shared-product/Defaultsorting";

export const GridProducts = async ({ category }: { category: TCategory }) => {
  let products = await getProducts();

  products = products.filter((p) => p.category === category.id);

  return (
    <div className="py-16">
      <Defaultsorting />

      <div className="grid grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
          // className="" // si se quiere modificar los styles ponerlo dentro del ProductCard
        ))}
      </div>
    </div>
  );
};
