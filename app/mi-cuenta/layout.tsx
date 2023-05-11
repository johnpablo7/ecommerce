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
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
          <div className="col-start-1 col-end-2">
            <ManageAccount />
          </div>

          <main className="col-start-2 col-end-5">{children}</main>
        </div>
      </div>
    </div>
  );
}
