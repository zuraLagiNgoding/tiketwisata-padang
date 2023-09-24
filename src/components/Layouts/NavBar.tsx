import { useRouter } from "next/router";
import React from "react";

export default function NavBar() {
  const router = useRouter();

  return (
    <nav className="flex items-center bg-white justify-between px-64 py-6 w-full fixed z-50 shadow-md">
      <a href="/" className="font-semibold text-3xl text-primary select-none">Wisata Padang</a>
      <div className="flex items-center text-secondary font-semibold text-lg gap-4">
        {router.asPath.includes("/order") ?
        null
        :
        <>
          <a className="hover:text-primary" href="/#beranda">Beranda</a>
          <a className="hover:text-primary" href="/#info_tiket">Informasi Tiket</a>
        </>
        }
      </div>
    </nav>
  );
}
