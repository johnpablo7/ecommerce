import { getProducts } from "@/api/directus";
import { ProductCard } from "../categories/shared-product/ProductCard";

export const RecomendedForYou = async () => {
  const params = new URLSearchParams();
  params.set("limit", "8");
  params.set("sort", "");
  const products = await getProducts(params.toString());

  return (
    <div className="mb-14">
      <h2 className="text-2xl font-roboto font-bold mb-7 uppercase">
        Recomendado para ti
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {products.map((product) => (
          <div key={product.slug} className="col-span-1">
            <ProductCard product={product} showDescription={false} />
          </div>
        ))}
      </div>
    </div>
  );
};
