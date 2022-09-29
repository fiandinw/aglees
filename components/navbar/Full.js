import Link from "next/link";
import Logo from "../Logo";
import { useState } from "react";
import { Icon } from "@iconify/react";
import { useUserContext } from "../../context/userContext";
import Image from "next/image";

export default function Full() {
  const [menu, setMenu] = useState(false);
  const { user } = useUserContext();
  return (
    <>
      <div className="flex flex-row items-center justify-between bg-white px-4 lg:px-12 py-2 shadow-lg">
        <Link href="/">
          <div className="w-24 lg:w-32 cursor-pointer">
            <Logo />
          </div>
        </Link>
        <div className="hidden lg:flex lg:flex-row lg:gap-4">
          <Link href="/beranda">
            <button className="font-bold">Beranda</button>
          </Link>
          <Link href="/pricelist">
            <button>Price List</button>
          </Link>
          <Link href="/myorder">
            <button>My Order</button>
          </Link>
          <Link href="/myclaim">
            <button>My Claim</button>
          </Link>
        </div>

        <div className="hidden lg:block">
          {user && (
            <Link href="/myprofile">
              <div className="w-[50px] rounded-[100%] overflow-clip cursor-pointer">
                <Image
                  src={`https://avatars.dicebear.com/api/adventurer-neutral/${user.displayName}.svg`}
                  width={500}
                  height={500}
                  layout="responsive"
                />
              </div>
            </Link>
          )}
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
          <Link href="/pricelist">
            <button>Price List</button>
          </Link>
          <Link href="/myorder">
            <button>My Order</button>
          </Link>
          <Link href="/myclaim">
            <button>My Claim</button>
          </Link>
          {user && (
            <Link href="/myprofile">
              <div className="w-[70px] rounded-[100%] overflow-clip cursor-pointer">
                <Image
                  src={`https://avatars.dicebear.com/api/adventurer-neutral/${user.displayName}.svg`}
                  width={500}
                  height={500}
                  layout="responsive"
                />
              </div>
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
