import Image from "next/image";
import Link from "next/link";

export const ExclusiveDiscount = () => {
  return (
    <div className="pb-10 pt-3">
      <Link href="/">
        <Image
          src="/images/offer.jpg"
          alt="discount"
          width={1200}
          height={282}
          className="lg:w-full lg:h-[282px] w-[345px] h-[83px]"
        />
      </Link>
    </div>
  );
};
