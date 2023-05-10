import { HomeViewList } from "@/components/categories/shared-filter/HomeViewList";
import { Login } from "@/components/login/Login";

export default function LoginPage() {
  return (
    <div>
      <div className="px-4">
        <div className="max-w-container mx-auto">
          <HomeViewList />
          <div className="flex items-center justify-center mb-16">
            <Login />
          </div>
        </div>
      </div>
    </div>
  );
}
