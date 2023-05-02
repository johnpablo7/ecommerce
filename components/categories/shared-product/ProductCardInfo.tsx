import { TProduct } from "@/types/product";
import { FC } from "react";
import { RiStarSFill } from "react-icons/ri";

type ProductCardInfoProps = {
  product: TProduct;
  showStars?: boolean;
  showDescription?: boolean;
};

export const ProductCardInfo: FC<ProductCardInfoProps> = ({
  product,
  showStars = true,
  showDescription = true,
}) => {
  return (
    <div className="flex-grow flex flex-col px-2">
      <h2 className="text-lg font-bold uppercase font-roboto text-secondary truncate pt-3 mb-1">
        {product.name}
      </h2>

      {showDescription && (
        <p className="text-sm text-secondary line-clamp-2 mb-2">
          {product.description}
        </p>
      )}

      <p className="mt-auto text-lg text-primary font-bold  mb-1">
        s/ {product.price}
      </p>
      {showStars && (
        <div className="flex items-center gap-2">
          <div className="flex items-center text-yellow-400">
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
          </div>
          <p className="text-sm text-[#464545]">(150)</p>
        </div>
      )}
    </div>
  );
};
