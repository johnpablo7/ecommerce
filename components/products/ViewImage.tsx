import { FC } from "react";
import { HomeViewList } from "../categories/shared-filter/HomeViewList";
import { getImageUrl } from "@/api/directus";
import { TProduct } from "@/types/product";
import Image from "next/image";

type ViewImageProps = {
  product: TProduct;
};

export const ViewImage: FC<ViewImageProps> = ({ product }) => {
  return (
    <div>
      <HomeViewList />
      <div key={product.slug} className="bg-[#eceef0] h-[610px]">
        <Image
          src={getImageUrl(product.image)}
          // width={600}
          // height={610}
          width="0"
          height="0"
          sizes="100vw"
          alt="product"
          priority
          className="object-cover aspect-[1/1] w-full h-full"
        />
      </div>
    </div>
  );
};
