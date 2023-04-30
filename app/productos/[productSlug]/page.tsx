import { getProducts } from "@/api/directus";
import { ViewImage } from "@/components/product-view/ViewImage";
import { ViewProductCard } from "@/components/product-view/ViewProductCard";

import { notFound } from "next/navigation";

export default async function ProductPage({
  params,
}: {
  params: { productSlug: string };
}) {
  const query = new URLSearchParams();
  query.set("filter[slug]", params.productSlug);
  // console.log(query.toString());

  const products = await getProducts(query.toString());
  const product = products[0];
  // console.log(product);

  if (!product) {
    notFound();
  }

  return (
    <div className="xl:mx-container-side">
      <div className="grid grid-cols-2 gap-6">
        <ViewImage product={product} />
        <ViewProductCard product={product} />
      </div>
    </div>
  );
}
