import { FC } from "react";
import Link from "next/link";
import { getImageUrl } from "@/api/directus";
import { ProductCardInfo } from "./ProductCardInfo";
import { AddToCartButton } from "../../client/AddToCartButton";
import { TProduct } from "@/types/product";
import Image from "next/image";

type ProductCardProps = {
  product: TProduct;
  showDescription?: boolean;
  // className?: string;
};

export const ProductCard: FC<ProductCardProps> = ({
  product,
  showDescription = true,
}) => {
  //, className <- a lado de product..
  return (
    // <div className={className}>
    <div className="h-auto flex flex-col">
      <Link
        href={"/productos/" + product.slug}
        className="flex-grow flex flex-col mb-4"
      >
        <Image
          src={getImageUrl(product.image) + "?width=270&height=270"}
          width={270}
          height={270}
          alt="product"
          className="object-cover w-full"
        />
        <ProductCardInfo product={product} showDescription={showDescription} />
      </Link>

      <AddToCartButton productSlug={product.slug} />
    </div>
  );
};
