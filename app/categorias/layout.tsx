"use client";
import { FilterProducts } from "@/components/categories/FilterProducts";
import { HomeViewList } from "@/components/categories/shared-filter/HomeViewList";
import { Defaultsorting } from "@/components/categories/shared-product/Defaultsorting";
import { useState } from "react";

export default function CategoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showFilterMobile, setShowFilterMobile] = useState(false);

  return (
    <div className="px-4">
      <div className="max-w-container mx-auto">
        <HomeViewList />
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-2 md:gap-6">
          <div className="md:col-start-1 md:col-end-2">
            <FilterProducts
              showMobile={showFilterMobile}
              onCloseMobile={() => setShowFilterMobile(false)}
            />
          </div>

          <main className="md:col-start-2 md:col-end-5">
            <Defaultsorting
              onFiltersButtonClick={() => setShowFilterMobile(true)}
            />
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
