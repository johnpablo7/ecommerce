import { Banner } from "@/components/home/Banner";
import { CustomerSupport } from "@/components/home/CustomerSupport";
import { ProductDiscount } from "@/components/home/ProductDiscount";
import { ShopByCategory } from "@/components/home/ShopByCategory";
import { NewProducts } from "@/components/home/NewProducts";
import { ExclusiveDiscount } from "@/components/home/ExclusiveDiscount";
import { RecomendedForYou } from "@/components/home/RecomendedForYou";
// import { OrderList } from "@/components/cart/OrderList";
// import { OrderSummary } from "@/components/cart/OrderSummary";
import { HomeViewList } from "@/components/categories/shared-filter/HomeViewList";
import { SelectPaymentMethod } from "@/components/payment/SelectPaymentMethod";
import { YourOrder } from "@/components/checkout/YourOrder";
import { Paid } from "@/components/order-complete/Paid";
import { CreateAccount } from "@/components/register/CreateAccount";
import { Login } from "@/components/login/Login";
import { RestorePassword } from "@/components/forgot-password/RestorePassword";
import { BillingDetails } from "@/components/checkout/BillingDetails";
import { ManageAccount } from "@/components/my-account/ManageAccount";

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

          {/* OTRAS PAGINAS */}

          {/* Shopping cart */}
          {/* <div>
            <HomeViewList />
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 pb-10">
              <div className="col-start-1 col-end-4">
                <OrderList />
              </div>
              <div>
                <OrderSummary />
              </div>
            </div>
          </div> */}

          {/* Checkout */}
          <div>
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

          {/* Payment */}
          <div>
            <HomeViewList />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pb-10">
              <div className="col-start-1 col-end-3">
                <SelectPaymentMethod />
              </div>
              <div className="col-start-3">
                <YourOrder />
              </div>
            </div>
          </div>

          {/* Order complete */}
          <div>
            <HomeViewList />
            <Paid />
          </div>

          {/* Crear cuenta */}
          <div>
            <HomeViewList />
            <div className="flex items-center justify-center mb-16">
              <CreateAccount />
            </div>
          </div>

          {/* Ingreso */}
          <div>
            <HomeViewList />
            <div className="flex items-center justify-center mb-16">
              <Login />
            </div>
          </div>

          {/* Recuperar contraseña */}
          <div>
            <HomeViewList />
            <div className="flex items-center justify-center mb-16">
              <RestorePassword />
            </div>
          </div>

          {/* My Account */}
          <div>
            <HomeViewList />
            <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
              <div className="col-start-1 col-end-2">
                <ManageAccount />
              </div>
              <div className="col-start-2 col-end-5">
                {/* <ShowInformation /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
