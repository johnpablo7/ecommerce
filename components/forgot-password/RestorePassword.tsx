export const RestorePassword = () => {
  return (
    <div className="px-4 pb-8 border border-white shadow-slate-100 shadow-lg text-gray-600 w-[500px]">
      <div className="flex flex-col gap-2 py-6">
        <h1 className="text-3xl font-semibold uppercase">
          restablecer la contraseña
        </h1>
        <p>
          Ingrese su dirección de correo electrónico a continuación para recibir
          un enlace.
        </p>
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

        <button className="flex items-center justify-center bg-primary text-white hover:text-primary hover:bg-white border hover:border-primary w-72 py-2 rounded transition font-normal">
          <p className="uppercase">restablecer mi contraseña</p>
        </button>
      </form>
    </div>
  );
};
