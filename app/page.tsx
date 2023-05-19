import { Banner } from "@/components/home/Banner";
import { CustomerSupport } from "@/components/home/CustomerSupport";
import { ProductDiscount } from "@/components/home/ProductDiscount";
import { ShopByCategory } from "@/components/home/ShopByCategory";
import { NewProducts } from "@/components/home/NewProducts";
import { ExclusiveDiscount } from "@/components/home/ExclusiveDiscount";
import { RecomendedForYou } from "@/components/home/RecomendedForYou";
import { ShowCategoriesButton } from "@/components/shared/ShowCategoriesButton";
import { ShowHome } from "@/components/shared/ShowHome";
import { ShowShop } from "@/components/shared/ShowShop";
import { ShowPages } from "@/components/shared/ShowPages";
import { ShowCart } from "@/components/shared/ShowCart";
import { ShowSession } from "@/components/shared/ShowSession";
import { ShowAccount } from "@/components/shared/ShowAccount";

export default function Home() {
  return (
    <div>
      {/* @ts-expect-error Async Server Component */}
      <Banner />
      <div className="px-4">
        <div className="max-w-container mx-auto">
          {/* Modals */}
          <div className="hidden md:flex gap-5">
            <div>
              <ShowCategoriesButton />
            </div>
            <div>
              <ShowHome />
            </div>
            <div>
              <ShowShop />
            </div>
            <div>
              <ShowPages />
            </div>
          </div>

          <div className="hidden md:flex gap-5 mt-5">
            <div>
              <ShowCart />
            </div>
            <div>
              <ShowSession />
            </div>
            <div>
              <ShowAccount />
            </div>
          </div>

          <CustomerSupport />

          {/* @ts-expect-error Async Server Component */}
          <ProductDiscount />

          {/* @ts-expect-error Async Server Component */}
          <ShopByCategory />

          {/* @ts-expect-error Async Server Component */}
          <NewProducts />

          <ExclusiveDiscount />

          {/* @ts-expect-error Async Server Component */}
          <RecomendedForYou />

          {/* OTRAS PAGINAS */}
        </div>
      </div>
    </div>
  );
}
