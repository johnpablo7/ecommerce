import Image from "next/image";
import { QuantityInput } from "../client/QuantityInput";
import { HomeViewList } from "../categories/shared-filter/HomeViewList";
import { FiTrash2 } from "react-icons/fi";

export const OrderList = () => {
  return (
    <div>
      <HomeViewList />
      <div className="flex flex-col gap-6">
        <div className="grid grid-cols-4 bg-neutral-200 text-secondary font-semibold text-center">
          <p className="col-span-2">Producto</p>
          <p>Cantidad</p>
          <p>Precio Total</p>
        </div>

        <div className="grid grid-cols-4">
          <div className="col-span-2 flex items-center justify-center gap-4">
            <Image src="" alt="" />
            <div className="flex flex-col gap-1">
              <p>Title</p>
              <p className="text-primary">$ 45.00</p>
              <p>Talla M</p>
            </div>
          </div>

          <QuantityInput />

          <div className="grid grid-cols-2 gap-4">
            <div className="text-primary font-semibold">$ 45.00</div>
            <FiTrash2 />
          </div>
        </div>
      </div>
    </div>
  );
};
