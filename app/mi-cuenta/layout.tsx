import { HomeViewList } from "@/components/categories/shared-filter/HomeViewList";
import { ManageAccount } from "@/components/my-account/ManageAccount";

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="px-4">
      <div className="max-w-container mx-auto">
        <HomeViewList />
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-2 md:gap-6">
          <div className="md:col-start-1 md:col-end-2">
            <ManageAccount />
          </div>

          <main className="md:col-start-2 md:col-end-5">{children}</main>
        </div>
      </div>
    </div>
  );
}
