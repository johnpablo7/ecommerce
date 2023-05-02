import Link from "next/link";
import { getGlobal, getImageUrl } from "@/api/directus";
import Image from "next/image";
import { TGlobal } from "@/types/global";

// interface TLogo {
//   global: TGlobal
// }

export const Logo = async () => {
  const global = await getGlobal();

  return (
    <div className="py-2 lg:py-3">
      <Link
        href="/"
        className="inline-flex items-baseline justify-between gap-1"
      >
        <Image
          src={getImageUrl(global.logo) + "?width=38&height=35"}
          alt="logo"
          width={38}
          height={35}
        />
        <p className="text-2xl font-roboto font-bold uppercase">
          {global.title}
        </p>
      </Link>
    </div>
  );
};
