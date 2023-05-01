import { getProducts } from "@/api/directus";
import { ProductsSwiper } from "./shared/ProductsSwiper";

export const NewProducts = async () => {
  const params = new URLSearchParams();
  params.set("limit", "8");
  params.set("sort", "-date_created");
  const products = await getProducts(params.toString());

  return (
    <div className="py-32 z-20">
      <h2 className="text-2xl font-roboto font-bold mb-7">NUEVOS PRODUCTOS</h2>
      <ProductsSwiper products={products} />
    </div>
  );
};
