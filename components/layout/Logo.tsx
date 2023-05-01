import Link from "next/link";
import { getGlobal, getImageUrl } from "@/api/directus";
import Image from "next/image";

export const Logo = async () => {
  const global = await getGlobal();

  return (
    <div className="max-xl:px-4 py-2 xl:py-3">
      <Link
        href="/"
        className="inline-flex items-baseline justify-between gap-1"
      >
        <Image
          src={getImageUrl(global.logo) + "?width=38&height=38"}
          alt="logo"
          width={38}
          height={38}
        />
        <p className="text-3xl font-roboto font-bold uppercase">
          {global.title}
        </p>
      </Link>
    </div>
  );
};
