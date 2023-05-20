import Link from "next/link";

export const ShowHome = () => {
  return (
    <div className="p-4 lg:w-[170px] bg-white border shadow-md text-secondary hover:text-primary rounded-md">
      <Link href="/">Página de inicio</Link>
    </div>
  );
};
