import { getGlobal } from "@/api/directus";
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
            <div className="col-start-1 col-end-3 xl:col-end-2 max-xl:bg-primary max-xl:text-white">
              <div className="xl:ml-container-side">
                {/* @ts-expect-error Async Server Component */}
                <Logo />
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
                <CategoriesButton />
              </div>
            </div>
            <div className="max-xl:hidden col-start-2 col-end-3">
              <Search />
            </div>
            <div className="col-start-3 col-end-4 bg-primary text-white">
              <div className="xl:mr-container-side">
                <UserMenu />
              </div>
            </div>

            <main className="col-start-1 col-end-4 ">{children}</main>

            <div className="col-start-1 col-end-4">
              <div className="px-4">
                <div className="max-w-container mx-auto">
                  {/* @ts-expect-error Async Server Component */}
                  <Footer />
                </div>
              </div>
            </div>

            {/* Row 3 */}
            <div className="p-4 xl:hidden col-start-1 col-end-4 bg-red-300 text-center">
              <MobileMenu />
            </div>
          </div>
        </section>
      </body>
    </html>
  );
}
