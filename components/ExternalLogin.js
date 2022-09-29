import { Icon } from "@iconify/react";
import { useRouter } from "next/router";
import swal from "sweetalert";
import { useUserContext } from "../context/userContext";
export default function ExternalLogin() {
  const { signInGoogle } = useUserContext();
  const router = useRouter();
  const handleLogin = () => {
    signInGoogle(() => {
      swal(
        "Login Sukses!",
        "Selamat Datang di Aglees Indonesia",
        "success"
      ).then(() => {
        router.push("/beranda");
      });
    });
  };
  return (
    <>
      <div
        onClick={handleLogin}
        className="border-2 rounded-full px-4 py-2 w-full cursor-pointer flex flex-row items-center"
      >
        <Icon className="text-2xl" icon="flat-color-icons:google" />{" "}
        <p className="grow text-center">Lanjutkan Dengan Google</p>
      </div>
    </>
  );
}
