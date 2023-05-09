import { HomeViewList } from "@/components/categories/shared-filter/HomeViewList";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="px-4">
      <div className="max-w-container mx-auto">
        <HomeViewList />
        <div className="flex flex-col items-center justify-center gap-6 px-4 pb-16 text-gray-600 w-[700px] mx-auto">
          <Image src="/svg/404.svg" alt="404" width={631} height={343} />
          <h1 className="uppercase text-2xl font-semibold text-gray-600">
            la página que ha solicitado no está disponible
          </h1>

          <Link
            href="/"
            className="flex items-center justify-center bg-primary text-white hover:text-primary hover:bg-white border hover:border-primary w-48 py-2 rounded transition"
          >
            <p className="uppercase">de vuelta a casa</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
