import Link from "next/link";
import { BsCheck } from "react-icons/bs";

export const Login = () => {
  return (
    <div className="p-4 border border-white shadow-slate-100 shadow-lg text-gray-600 w-[500px]">
      <div className="flex flex-col gap-2 py-6">
        <h1 className="text-3xl font-semibold uppercase">acceso</h1>
        <p>Inicie sesión si es un cliente recurrente</p>
      </div>

      <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label htmlFor="email">
            Dirección de correo electrónico
            <span className="text-primary pl-1">*</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="example@mail.com"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="name">
            Contraseña
            <span className="text-primary pl-1">*</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="escriba su contraseña"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none"
          />
        </div>

        <div className="flex flex-col gap-4 w-full">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <label
                htmlFor="check-box-1"
                className="flex items-center cursor-pointer relative"
              >
                <input
                  type="checkbox"
                  id="check-box-1"
                  className="w-4 h-4 appearance-none border border-primary checked:border-none checked:bg-primary"
                />
                <BsCheck className="text-xl text-white absolute -top-[2px] -left-[2px] text-opacity-0 check-1 transition" />
              </label>

              <p>Acuérdate de mí</p>
            </div>

            <Link href="/" className="text-primary">
              ¿Has olvidado tu contraseña
            </Link>
          </div>

          <button className="flex items-center justify-center bg-primary text-white hover:text-primary hover:bg-white border hover:border-primary w-full py-2 rounded transition font-normal">
            <p className="uppercase">acceso</p>
          </button>

          <div className="grid grid-cols-3 gap-2 items-center justify-center">
            <div className="border-t border-[#E9E4E4] opacity-80" />
            <div>O inica sesión con</div>
            <div className="border-t border-[#E9E4E4] opacity-80" />
          </div>

          <div className="flex items-center gap-5">
            <Link
              href="/"
              className="flex items-center justify-center bg-[#3b5999] text-white hover:text-[#3b5999] hover:bg-white border hover:border-[#3b5999] w-full py-2 rounded transition"
            >
              <p className="uppercase">facebook</p>
            </Link>
            <Link
              href="/"
              className="flex items-center justify-center bg-[#d85040] text-white hover:text-[#d85040] hover:bg-white border hover:border-[#d85040] w-full py-2 rounded transition"
            >
              <p className="uppercase">google</p>
            </Link>
          </div>

          <div className="text-center">
            ¿No tienes una cuenta?
            <Link href="/" className="text-primary pl-2">
              Regístrate ahora
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};
