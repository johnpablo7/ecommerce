import { SlArrowDown } from "react-icons/sl";
import { ShowHome } from "../shared/ShowHome";
import { ShowShop } from "../shared/ShowShop";
import { ShowPages } from "../shared/ShowPages";

export const SiteMenu = () => {
  return (
    <div className="flex items-center justify-between py-6 pl-12">
      <div className="grid grid-cols-4 gap-4 text-secondary">
        <div className="flex items-center justify-center gap-1 hover:text-primary relative group">
          <p className="font-semibold">Hogar</p>
          <SlArrowDown className="text-xs mt-1" />
          <div className="absolute top-full left-0 hidden group-hover:block transition-all duration-500">
            <ShowHome />
          </div>
        </div>

        <div className="flex items-center justify-center gap-1 hover:text-primary relative group z-50">
          <p className="font-semibold">Comercio</p>
          <SlArrowDown className="text-xs mt-1" />
          <div className="absolute top-full left-0 hidden group-hover:block transition-all duration-500">
            <ShowShop />
          </div>
        </div>

        <div className="flex items-center justify-center gap-1 hover:text-primary relative group z-50">
          <p className="font-semibold">Paginas</p>
          <SlArrowDown className="text-xs mt-1" />
          <div className="absolute top-full left-0 hidden group-hover:block transition-all duration-500">
            <ShowPages />
          </div>
        </div>

        <div className="flex items-center hover:text-primary">
          <p>Contacto</p>
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 text-secondary">
        <div className="flex items-center font-semibold">
          <p className="hover:text-primary">Accesos</p>
          <span>/</span>
          <p className="hover:text-primary">Registro</p>
        </div>
        <div className="flex items-center justify-center gap-1 hover:text-primary">
          <p className="font-normal">Idioma</p>
          <SlArrowDown className="text-xs mt-1" />
        </div>
        <div className="flex items-center justify-end gap-1 hover:text-primary">
          <p className="font-normal">Divisa</p>
          <SlArrowDown className="text-xs mt-1" />
        </div>
      </div>
    </div>
  );
};
