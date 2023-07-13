import { getCategories, getGlobal } from "@/api/directus";
import { Logo } from "@/components/layout/Logo";
import { SiteMenu } from "@/components/layout/SiteMenu";
import { CategoriesButton } from "@/components/layout/CategoriesButton";
import { Search } from "@/components/layout/Search";
import { UserMenu } from "@/components/layout/UserMenu";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { poppins, roboto } from "@/font";
import clsx from "clsx";
import "@/components/client/swiper/SwiperCore";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import Image from "next/image";

export const generateMetadata = async () => {
  const { title, description } = await getGlobal();

  return {
    title,
    description,
  };
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const categories = await getCategories();

  return (
    <html lang="es" className={clsx(poppins.variable, roboto.variable)}>
      <body className="font-poppins">
        <section>
          <div
            className={clsx(
              // Mobile
              "grid grid-rows-[auto,1fr,auto] grid-cols-[auto,1fr,auto] min-h-screen",
              // Desktop
              "xl:grid-rows-[auto,auto,1fr] xl:grid-cols-[auto,1fr,auto]"
            )}
          >
            {/* Row 1 */}
            <div className="max-xl:sticky z-40 top-0 col-start-1 col-end-3 xl:col-end-2 max-xl:bg-primary max-xl:text-white">
              <div className="px-4">
                <div className="xl:ml-container-side">
                  {/* @ts-expect-error Async Server Component */}
                  <Logo />
                </div>
              </div>
            </div>

            <div className="max-xl:hidden col-start-2 col-end-4">
              <div className="xl:mr-container-side">
                <SiteMenu />
              </div>
            </div>

            {/* Row 2 */}
            <div className="max-xl:hidden col-start-1 col-end-2 bg-primary text-white">
              <div className="xl:ml-container-side">
                {/* @ts-expect-error Async Server Component */}
                <CategoriesButton />
              </div>
            </div>
            <div className="max-xl:hidden col-start-2 col-end-3">
              <Search />
            </div>
            <div className="max-xl:sticky z-40 top-0 col-start-3 col-end-4 bg-primary text-white">
              <div className="xl:mr-container-side">
                <UserMenu />
              </div>
            </div>

            <main className="col-start-1 col-end-4 ">{children}</main>

            {/* Footer */}
            <div className="col-start-1 col-end-4">
              <div className="border-t border-[#E9E4E4] opacity-80" />
              <div className="px-4 bg-[#f3f3f3]">
                <div className="max-w-container mx-auto">
                  {/* @ts-expect-error Async Server Component */}
                  <Footer />
                </div>
              </div>
              <div className="flex flex-col gap-2 items-center lg:flex-row lg:justify-between py-4 bg-secondary text-white">
                <div className="xl:ml-container-side">
                  <p>© E! SHOP - Todos los derechos reservados</p>
                </div>
                <div className="xl:mr-container-side">
                  <Image
                    src="/images/payment-method.png"
                    alt="payment"
                    width={333}
                    height={28}
                  />
                </div>
              </div>
            </div>

            {/* Row 3 */}
            <div className="max-xl:sticky z-50 bottom-0 py-3 xl:hidden col-start-1 col-end-4 bg-white">
              <MobileMenu categories={categories} />
            </div>
          </div>
        </section>
      </body>
    </html>
  );
}
