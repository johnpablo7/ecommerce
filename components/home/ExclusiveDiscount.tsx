import Image from "next/image";
import Link from "next/link";

export const ExclusiveDiscount = () => {
  return (
    <div className="py-14">
      <Link href="/">
        <Image
          src="/images/offer.jpg"
          alt="discount"
          width={1200}
          height={282}
          className="w-full h-[282px]"
        />
      </Link>
    </div>
  );
};
