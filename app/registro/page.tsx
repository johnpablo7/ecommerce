import { HomeViewList } from "@/components/categories/shared-filter/HomeViewList";
import { CreateAccount } from "@/components/register/CreateAccount";

export default function Register() {
  return (
    <div>
      <div className="px-4">
        <div className="max-w-container mx-auto">
          <HomeViewList />
          <div className="flex items-center justify-center mb-16">
            <CreateAccount />
          </div>
        </div>
      </div>
    </div>
  );
}
