import { getGlobal } from "@/api/directus";
import { Logo } from "./Logo";
import { Search } from "./Search";

export const Footer = async () => {
  const global = await getGlobal();

  return (
    <div className="py-14 grid grid-cols-3 gap-8">
      <div>
        {/* @ts-expect-error Async Server Component */}
        <Logo />
        <p>{global.description}</p>
        <h3>BOLETIN INFORMATIVO</h3>
        <Search />
      </div>
      <div className="grid grid-cols-2 gap-8">
        <div>MI CUENTA</div>
        <div>INFORMACIÓN</div>
      </div>
      <div>
        <h3>CONTACTO</h3>
        <p>{global.address}</p>
        <p>{global.phone}</p>
        <p>{global.email}</p>
      </div>
    </div>
  );
};
