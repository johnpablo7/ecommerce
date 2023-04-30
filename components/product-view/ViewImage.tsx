import { FC } from "react";
import { HomeViewList } from "../shared-filter/HomeViewList";
import { getImageUrl } from "@/api/directus";
import { TProduct } from "@/types/product";

type ViewImageProps = {
  product: TProduct;
};

export const ViewImage: FC<ViewImageProps> = ({ product }) => {
  return (
    <div>
      <HomeViewList />
      <div key={product.slug}>
        <img
          src={getImageUrl(product.image) + "?width=380&height=420"}
          alt=""
          className="object-cover w-full"
        />
      </div>
    </div>
  );
};
