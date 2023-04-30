import { getProducts } from "@/api/directus";
import { OrderList } from "@/components/cart/OrderList";
import { OrderSummary } from "@/components/cart/OrderSummary";
import { notFound } from "next/navigation";

export default async function CartPage({
  params,
}: {
  params: { carritoSlug: string };
}) {
  const query = new URLSearchParams();
  query.set("filter[slug]", params.carritoSlug);

  const products = await getProducts(query.toString());
  const product = products[0];

  if (!product) {
    notFound();
  }

  return (
    <div className="xl:mx-container-side">
      <div className="grid grid-cols-4 gap-6">
        <OrderList />
        <OrderSummary />
        {product.name}
      </div>
    </div>
  );
}
