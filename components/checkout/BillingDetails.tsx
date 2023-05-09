export const BillingDetails = () => {
  return (
    <div className="text-gray-600">
      <div className="bg-neutral-200 py-2 px-4 font-semibold mb-10">
        <p>Detalles de facturación</p>
      </div>

      <form className="flex flex-col gap-4">
        <div className="grid grid-cols-2 gap-6">
          <div className="flex flex-col gap-1">
            <label htmlFor="name">
              Nombre
              <span className="text-primary pl-1">*</span>
            </label>
            <input
              type="text"
              name="name"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="name">
              Apellido
              <span className="text-primary pl-1">*</span>
            </label>
            <input
              type="text"
              name="name"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="name">
            Nombre de la empresa
            <span className="text-primary pl-1">*</span>
          </label>
          <input
            type="text"
            name="name"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="name">
            Condado/Región
            <span className="text-primary pl-1">*</span>
          </label>
          <input
            type="text"
            name="name"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="name">
            Dirección de la calle
            <span className="text-primary pl-1">*</span>
          </label>
          <input
            type="text"
            name="name"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="name">
            Pueblo/Ciudad
            <span className="text-primary pl-1">*</span>
          </label>
          <input
            type="text"
            name="name"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="name">
            Código postal
            <span className="text-primary pl-1">*</span>
          </label>
          <input
            type="text"
            name="name"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="name">
            Número de teléfono
            <span className="text-primary pl-1">*</span>
          </label>
          <input
            type="text"
            name="name"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="name">
            Dirección de correo electrónico
            <span className="text-primary pl-1">*</span>
          </label>
          <input
            type="text"
            name="name"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none"
          />
        </div>
      </form>
    </div>
  );
};
