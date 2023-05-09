"use client";
import { FC } from "react";
import Link from "next/link";
import { getImageUrl } from "@/api/directus";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperNavButtons } from "../../client/swiper/SwiperNavButtons";
import { ProductCardInfo } from "../../categories/shared-product/ProductCardInfo";
import { AddToCartButton } from "../../client/AddToCartButton";
import { TProduct } from "@/types/product";
import Image from "next/image";

export const ProductsSwiper: FC<{ products: TProduct[] }> = ({ products }) => {
  return (
    <Swiper
      breakpoints={{
        // when window width is >= 480px
        480: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        // when window width is >= 1024px
        1024: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        // when window width is >= 1280px
      }}
      slidesPerView={1}
      loop={true}
      spaceBetween={20}
    >
      {products.map((product) => (
        <SwiperSlide key={product.slug} className="h-auto flex flex-col ">
          <div className="flex-grow flex flex-col">
            <Link
              href={"/productos/" + product.slug}
              className="flex-grow flex flex-col mb-4"
            >
              <Image
                src={getImageUrl(product.image) + "?width=270&height=200"}
                alt="product"
                className="object-cover w-full"
                width={270}
                height={200}
              />
              <ProductCardInfo product={product} />
            </Link>

            <AddToCartButton productSlug={product.slug} />
          </div>
        </SwiperSlide>
      ))}
      <SwiperNavButtons />
    </Swiper>
  );
};
