import { Banner } from "@/components/home/Banner";
import { CustomerSupport } from "@/components/home/CustomerSupport";
import { ProductDiscount } from "@/components/home/ProductDiscount";
import { ShopByCategory } from "@/components/home/ShopByCategory";
import { NewProducts } from "@/components/home/NewProducts";
import { OnlineExclusive } from "@/components/home/OnlineExclusive";
import { RecomendedForYou } from "@/components/home/RecomendedForYou";

export default function Home() {
  return (
    <div>
      {/* @ts-expect-error Async Server Component */}
      <Banner />
      <div className="xl:mx-container-side">
        <CustomerSupport />
        <ProductDiscount />

        {/* @ts-expect-error Async Server Component */}
        <ShopByCategory />

        {/* @ts-expect-error Async Server Component */}
        <NewProducts />

        {/* <OnlineExclusive /> */}
        {/* <RecomendedForYou /> */}
      </div>
    </div>
  );
}
