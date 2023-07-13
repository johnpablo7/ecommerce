import Link from "next/link";
import Image from "next/image";
import { getCategories } from "@/api/directus";
import { RiArrowRightSLine } from "react-icons/ri";
import { TCategory } from "@/types/category";
import { FC } from "react";

export const ShowCategoriesButton: FC<{ categories: TCategory[] }> = ({
  categories,
}) => {
  const parentCategories = categories.filter((nc) => nc.parent === null);

  return (
    <div className="flex flex-col py-2 lg:w-[260px] bg-white border shadow-md text-secondary">
      {parentCategories.map((category) => (
        <Link
          key={category.id}
          href="/categorias/moda-hombre"
          className="hover:bg-stone-100"
        >
          <div className="py-4 px-2 w-full grid grid-cols-4 items-center gap-2">
            <div className="flex items-center justify-center">
              <Image
                src="/svg/men.svg"
                alt="hombre"
                height={0}
                width={0}
                className="w-6 h-6"
              />
            </div>

            <div className="col-start-2 col-end-4">
              <p>{category.name}</p>
            </div>

            <div className="flex items-center justify-center text-2xl">
              <RiArrowRightSLine />
            </div>
          </div>
          <div className="border-t border-[#E9E4E4]" />
        </Link>
      ))}
    </div>
  );
};
