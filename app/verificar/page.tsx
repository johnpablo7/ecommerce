import { HomeViewList } from "@/components/categories/shared-filter/HomeViewList";
import { BillingDetails } from "@/components/checkout/BillingDetails";
import { YourOrder } from "@/components/checkout/YourOrder";

export default async function Checkout() {
  return (
    <div>
      <div className="px-4">
        <div className="max-w-container mx-auto">
          <HomeViewList />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pb-10">
            <div className="col-start-1 col-end-3">
              <BillingDetails />
            </div>
            <div className="col-start-3">
              <YourOrder />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
