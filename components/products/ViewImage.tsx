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
      <div key={product.slug}>
        <Image
          src={getImageUrl(product.image) + "?width=380&height=420"}
          width={380}
          height={420}
          alt="product"
          className="object-cover w-[200px]"
        />
      </div>
    </div>
  );
};
