import { notFound } from "next/navigation";
import { getCategories } from "@/api/directus";
import { FilterProducts } from "@/components/categories/FilterProducts";
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
    <div className="xl:mx-container-side">
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
        <div className="col-start-1 col-end-2">
          <FilterProducts />
        </div>
        <div className="col-start-2 col-end-5">
          {/* @ts-expect-error Async Server Component */}
          <GridProducts category={category} />
        </div>
      </div>
      {/* {params.categorySlug} */}
    </div>
  );
}
