import { OrderList } from "@/components/cart/OrderList";
import { OrderSummary } from "@/components/cart/OrderSummary";
import { HomeViewList } from "@/components/categories/shared-filter/HomeViewList";

export default async function CartPage() {
  return (
    <div>
      <div className="px-4">
        <div className="max-w-container mx-auto">
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
      </div>
    </div>
  );
}
