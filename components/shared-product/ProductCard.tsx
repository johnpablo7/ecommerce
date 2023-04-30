import { FC } from "react";
import Link from "next/link";
import { getImageUrl } from "@/api/directus";
import { ProductCardInfo } from "./ProductCardInfo";
import { AddToCartButton } from "../client/AddToCartButton";
import { TProduct } from "@/types/product";

type ProductCardProps = {
  product: TProduct;
  // className?: string;
};

export const ProductCard: FC<ProductCardProps> = ({ product }) => {
  //, className <- a lado de product..
  return (
    // <div className={className}>
    <div className="h-auto flex flex-col">
      <Link
        href={"/productos/" + product.slug}
        className="flex-grow flex flex-col mb-4"
      >
        <img
          src={getImageUrl(product.image) + "?width=270&height=270"}
          alt="img"
          className="object-cover w-full"
        />
        <ProductCardInfo product={product} />
      </Link>

      <AddToCartButton />
    </div>
  );
};
