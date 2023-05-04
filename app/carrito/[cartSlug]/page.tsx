import { getProducts } from "@/api/directus";
import { OrderList } from "@/components/cart/OrderList";
import { OrderSummary } from "@/components/cart/OrderSummary";
import { notFound } from "next/navigation";

export default async function CartPage({
  params,
}: {
  params: { cartSlug: string };
}) {
  const query = new URLSearchParams();
  query.set("filter[slug]", params.cartSlug);

  const products = await getProducts(query.toString());
  const product = products[0];

  if (!product) {
    notFound();
  }

  return (
    <div className="xl:mx-container-side">
      {/* Aqui va en componente que esta en el Home */}
    </div>
  );
}
