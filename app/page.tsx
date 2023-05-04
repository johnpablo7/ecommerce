import { Banner } from "@/components/home/Banner";
import { CustomerSupport } from "@/components/home/CustomerSupport";
import { ProductDiscount } from "@/components/home/ProductDiscount";
import { ShopByCategory } from "@/components/home/ShopByCategory";
import { NewProducts } from "@/components/home/NewProducts";
import { ExclusiveDiscount } from "@/components/home/ExclusiveDiscount";
import { RecomendedForYou } from "@/components/home/RecomendedForYou";
import { OrderList } from "@/components/cart/OrderList";
import { OrderSummary } from "@/components/cart/OrderSummary";
import { HomeViewList } from "@/components/categories/shared-filter/HomeViewList";
import { SelectPaymentMethod } from "@/components/payment/SelectPaymentMethod";
import { YourOrder } from "@/components/payment/YourOrder";

export default function Home() {
  return (
    <div>
      {/* @ts-expect-error Async Server Component */}
      <Banner />
      <div className="px-4">
        <div className="max-w-container mx-auto">
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

          <div>
            <HomeViewList />
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 pb-10">
              <div className="col-start-1 col-end-4">
                <OrderList />
              </div>
              <div>
                <OrderSummary />
              </div>
            </div>
          </div>

          <div>
            <HomeViewList />
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 pb-10">
              <div className="col-start-1 col-end-3">
                <SelectPaymentMethod />
              </div>
              <div className="col-start-3 col-end-5">
                <YourOrder />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
