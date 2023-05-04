import Image from "next/image";
import { QuantityInput } from "../client/QuantityInput";
import { HomeViewList } from "../categories/shared-filter/HomeViewList";
import { FiTrash2 } from "react-icons/fi";

export const OrderList = () => {
  return (
    <div className="pb-10">
      <div className="flex flex-col gap-6">
        <div className="grid grid-cols-4 bg-neutral-200 text-gray-600 py-2 font-semibold gap-8">
          <p className="col-span-2 text-center">Producto</p>
          <p className="text-start">Cantidad</p>
          <p className="text-start">Precio Total</p>
        </div>

        <div className="p-4 border border-gray-200">
          <div className="grid grid-cols-4 items-center">
            <div className="col-span-2 flex items-center justify-center gap-4">
              <div>
                <Image
                  src="/images/cart.png"
                  alt="cart"
                  width={150}
                  height={120}
                />
              </div>

              <div className="flex flex-col gap-1">
                <p className="text-gray-600 font-semibold">
                  XB450AP Extra Bass Headphones
                </p>
                <p className="text-primary font-semibold">s/ 45.00</p>
                <p className="text-gray-600">Talla: M</p>
              </div>
            </div>

            <div>
              <QuantityInput />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="text-primary font-semibold">s/ 45.00</div>
              <FiTrash2 className="text-gray-600 hover:text-primary text-xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
