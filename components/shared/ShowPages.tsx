import Link from "next/link";

export const ShowPages = () => {
  return (
    <div className="flex flex-col p-4 lg:w-[550px] bg-white border shadow-md text-secondary gap-1">
      <div className="grid grid-cols-3 gap-5">
        <div className="flex flex-col gap-1">
          <h3 className="font-semibold mb-1">Otras páginas</h3>
          <Link href="/" className="hover:text-primary">
            Sobre nosotros
          </Link>
          <Link href="/" className="hover:text-primary">
            Contáctenos
          </Link>
          <Link href="/" className="hover:text-primary">
            Preguntas más frecuentes
          </Link>
          <Link href="/extraviado" className="hover:text-primary">
            404
          </Link>
        </div>

        <div className="flex flex-col gap-1">
          <h3 className="font-semibold mb-1">Páginas de cuenta</h3>
          <Link href="/mi-cuenta" className="hover:text-primary">
            Mi cuenta
          </Link>
          <Link href="/acceso" className="hover:text-primary">
            Acceso
          </Link>
          <Link href="/registro" className="hover:text-primary">
            Registro
          </Link>
          <Link href="/recuperar-contrasena" className="hover:text-primary">
            Has olvidado tu contraseña
          </Link>
        </div>

        <div className="flex flex-col gap-1">
          <h3 className="font-semibold mb-1">Página de pago</h3>
          <Link href="/verificar" className="hover:text-primary">
            Verificar
          </Link>
          <Link href="/pago" className="hover:text-primary">
            Pago
          </Link>
          <Link
            href="/mi-cuenta/lista-de-deseos"
            className="hover:text-primary"
          >
            Lista de deseos
          </Link>
          <Link href="/pagado" className="hover:text-primary">
            Orden completada
          </Link>
        </div>
      </div>
    </div>
  );
};
