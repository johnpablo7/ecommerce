"use client";
import { FC } from "react";
import Link from "next/link";
import { getImageUrl } from "@/api/directus";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperNavButtons } from "./SwiperNavButtons";
import { ProductCardInfo } from "../shared-product/ProductCardInfo";
import { AddToCartButton } from "../client/AddToCartButton";
import { TProduct } from "@/types/product";

export const ProductsSwiper: FC<{ products: TProduct[] }> = ({ products }) => {
  return (
    <Swiper slidesPerView={4} loop={true} spaceBetween={20}>
      {products.map((product) => (
        <SwiperSlide key={product.slug} className="h-auto flex flex-col ">
          <div className="flex-grow flex flex-col">
            <Link
              href={"/productos/" + product.slug}
              className="flex-grow flex flex-col mb-4"
            >
              <img
                src={getImageUrl(product.image) + "?width=270&height=200"}
                alt="img"
                className="object-cover w-full"
              />
              <ProductCardInfo product={product} />
            </Link>

            <AddToCartButton />
          </div>
        </SwiperSlide>
      ))}
      <SwiperNavButtons />
    </Swiper>
  );
};
