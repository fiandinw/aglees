import { useRouter } from "next/router";
import { useUserContext } from "../context/userContext";
import swal from "sweetalert";
import { useEffect } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import NavCard from "../components/NavCard";

export default function Beranda() {
  const { user, logoutUser, loading } = useUserContext();
  const router = useRouter();

  useEffect(() => {}, []);

  const handleLogout = () => {
    logoutUser(() => {
      router.push("/login");
      swal(
        "Logout Sukses!",
        "Terimakasih Telah Menggunakan Layanan Kami!",
        "success"
      );
    });
  };
  return (
    <main className="mt-12 lg:mt-20 flex flex-col gap-8 px-8">
      <section className="">
        <div className="mt-6 flex flex-row items-center justify-center gap-8 md:px-12">
          <NavCard
            icon="akar-icons:pencil"
            image="/sigapbotHappy.png"
            title="Custom Order"
            to="/customorder"
          />
          <NavCard
            icon="ep:d-arrow-right"
            image="/sigapbotLogo.png"
            title="Instant Order"
            to={`${user ? "/instantorder" : "/login"}`}
          />
          <NavCard
            icon="ph:user-focus"
            image="/sigapbotNatural.png"
            title="My Order"
            to="/myorder"
          />
        </div>
      </section>

      <section>
        <h2 className="font-lato font-bold text-4xl text-center">
          Project Baru <span className="text-primary">Diposting</span>
        </h2>
        <Icon className="text-4xl m-auto mt-4" icon="eos-icons:loading" />
      </section>

      <section>
        <h2 className="font-lato font-bold text-4xl text-center">
          Lihat <span className="text-primary">Kategori</span> Lainnya
        </h2>
        <Icon className="text-4xl m-auto mt-4" icon="eos-icons:loading" />
      </section>

      <section>
        <h2 className="font-lato font-bold text-4xl text-center">
          Lihat <span className="text-primary">Portofolio</span> Terbaik Disini
        </h2>
        <Icon className="text-4xl m-auto mt-4" icon="eos-icons:loading" />
      </section>
    </main>
  );
}
