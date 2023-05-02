import { FC } from "react";
import { MdLocalOffer } from "react-icons/md";
import { TProduct } from "@/types/product";
import { Reviews } from "../common/Reviews";
import { Size } from "../shared-filter/Size";
import { Color } from "../shared-filter/Color";
import { QuantityInput } from "../client/QuantityInput";
import { AddToCartButton } from "../client/AddToCartButton";
import { WishList } from "../client/WishList";
import { SocialNetworks } from "../common/SocialNetworks";

type ViewProductCardProps = {
  product: TProduct;
};

export const ViewProductCard: FC<ViewProductCardProps> = ({ product }) => {
  return (
    <div className="py-16">
      <div className="text-secondary flex flex-col">
        <h1 className="text-3xl font-roboto uppercase font-bold">
          {product.name}
        </h1>
        <Reviews />

        {/* Descripción */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-4">
            <p className="font-semibold">Disponibilidad:</p>
            <p className="text-[#2ad26d] font-semibold">En Stock</p>
          </div>
          <div className="flex items-center gap-4">
            <p className="font-semibold">Marca:</p>
            <p>Bata</p>
          </div>
          <div className="flex items-center gap-4">
            <p className="font-semibold">Categoria:</p>
            <p>{product.category}</p>
          </div>
          <div className="flex items-center gap-4">
            <p className="font-semibold">SKU:</p>
            <p>BE45VGRT</p>
          </div>
          <div className="flex items-center gap-4">
            <p className="font-semibold">Precio:</p>
            <span className="line-through">S/ 5000.00</span>
            <p className="text-xl text-primary font-semibold">
              S/ {product.price}
            </p>
            <div className="flex items-center text-primary gap-1">
              <p>-30%</p>
              <MdLocalOffer className="text-xl" />
            </div>
          </div>
          <p className="mb-2 line-clamp-3">{product.description}</p>

          <Size />
          <Color />
          <QuantityInput />
          <div className="grid grid-cols-2 gap-4 mt-2 mb-4 w-[480px]">
            <AddToCartButton />
            <WishList />
          </div>
          <div className="border-t border-[#E9E4E4] opacity-80 mb-3" />
          <SocialNetworks />
        </div>
      </div>
    </div>
  );
};
