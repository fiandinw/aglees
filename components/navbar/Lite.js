import Logo from "../Logo";
import { Icon } from "@iconify/react";
import { useState } from "react";
import Link from "next/link";

export default function Lite() {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <div className="flex flex-row items-center justify-between bg-white px-4 py-2 shadow-lg lg:mx-20 lg:my-4 lg:rounded-full">
        <Link href="/">
          <div className="w-24 cursor-pointer">
            <Logo />
          </div>
        </Link>
        <div className="hidden lg:flex lg:flex-row lg:gap-4">
          <Link href="/beranda">
            <button className="font-bold">Beranda</button>
          </Link>
          <Link href="/tentang">
            <button>Tentang</button>
          </Link>
          <Link href="/faq">
            <button>FAQ</button>
          </Link>
          <Link href="/deskripsi">
            <button>Deskripsi</button>
          </Link>
          <Link href="/support">
            <button>Pusat Dukungan</button>
          </Link>
          <Link href="/tos">
            <button>Syarat Ketentuan</button>
          </Link>
        </div>
        <div className="hidden lg:block">
          <Link href="/register">
            <button className="font-bold px-4">Daftar</button>
          </Link>
          <Link href="/login">
            <button className="font-bold bg-primary text-white px-4 rounded-full">
              Masuk
            </button>
          </Link>
        </div>
        <button
          className="lg:hidden"
          onClick={() => {
            setMenu(true);
          }}
        >
          <Icon className="text-2xl text-primary" icon="charm:menu-hamburger" />
        </button>
      </div>
      <div
        onClick={() => {
          setMenu(false);
        }}
        className={`fixed top-0 left-0 z-50 w-screen ${
          menu ? "h-screen" : "h-0"
        } overflow-hidden bg-secondary transition-all duration-500 lg:hidden`}
      >
        <div className="mt-12 flex flex-col items-center justify-center gap-4 z-50">
          <Link href="/beranda">
            <button className="font-bold">Beranda</button>
          </Link>
          <Link href="/tentang">
            <button>Tentang</button>
          </Link>
          <Link href="/faq">
            <button>FAQ</button>
          </Link>
          <Link href="/deskripsi">
            <button>Deskripsi</button>
          </Link>
          <Link href="/support">
            <button>Pusat Dukungan</button>
          </Link>
          <Link href="/tos">
            <button>Syarat Ketentuan</button>
          </Link>
          <Link href="/register">
            <button className="font-bold px-4">Daftar</button>
          </Link>
          <Link href="/login">
            <button className="font-bold bg-primary text-white px-4 rounded-full">
              Masuk
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
