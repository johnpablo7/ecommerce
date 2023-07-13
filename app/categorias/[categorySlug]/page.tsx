import { notFound } from "next/navigation";
import { getCategories } from "@/api/directus";
// import { FilterProducts } from "@/components/categories/FilterProducts";
import { GridProducts } from "@/components/categories/GridProducts";

export default async function CategoryPage({
  params,
}: {
  params: { categorySlug: string };
}) {
  const categories = await getCategories();
  const category = categories.find((c) => c.slug === params.categorySlug);

  if (!category) {
    notFound();
  }

  return (
    <div className="px-4">
      <div className="max-w-container mx-auto">
        {/* @ts-expect-error Async Server Component */}
        <GridProducts category={category} />
      </div>
    </div>
  );
}
