import { SlArrowDown } from "react-icons/sl";

export const SiteMenu = () => {
  return (
    <div className="flex items-center justify-between py-6 pl-12 font-semibold">
      <div className="grid grid-cols-4 gap-4 text-secondary">
        <div className="flex items-center justify-center gap-1">
          <p>Hogar</p>
          <SlArrowDown className="text-xs mt-1" />
        </div>
        <div className="flex items-center justify-center gap-1">
          <p>Comercio</p>
          <SlArrowDown className="text-xs mt-1" />
        </div>
        <div className="flex items-center justify-center gap-1">
          <p>Paginas</p>
          <SlArrowDown className="text-xs mt-1" />
        </div>
        <div className="flex items-center">
          <p>Contacto</p>
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 text-secondary">
        <div className="flex items-center">
          <p>Acceso/Registro</p>
        </div>
        <div className="flex items-center justify-center gap-1">
          <p className="font-normal">Idioma</p>
          <SlArrowDown className="text-xs mt-1" />
        </div>
        <div className="flex items-center justify-end gap-1">
          <p className="font-normal">Divisa</p>
          <SlArrowDown className="text-xs mt-1" />
        </div>
      </div>
    </div>
  );
};
