import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import swal from "sweetalert";
import Divider from "../components/Divider";
import ExternalLogin from "../components/ExternalLogin";
import FormRoundedInput from "../components/FormRoundedInput";
import Logo from "../components/Logo";
import { useUserContext } from "../context/userContext";
import getFormData from "../utils/getFormData";

export default function Login() {
  const { signInUser, user, loading } = useUserContext();
  const router = useRouter();

  useEffect(() => {}, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const { email, password } = getFormData(e);
    if (email && password) {
      signInUser(email, password, () => {
        swal(
          "Login Sukses!",
          "Selamat Datang di Aglees Indonesia",
          "success"
        ).then(() => {
          router.push("/beranda");
        });
      });
    }
  };
  return (
    <>
      <main className="h-screen mt-20 flex justify-center">
        <div className="mx-8 shadow-lg w-full md:w-[400px] h-fit bg-white flex flex-col gap-4 items-center p-4 rounded-lg">
          <div className="w-1/2 sm:w-1/4">
            <Logo />
          </div>
          <div className="font-lato font-black text-xl text-left w-full">
            Masuk
          </div>
          <div className="w-full">
            <ExternalLogin />
          </div>
          <Divider />
          <form className="w-full flex flex-col gap-2" onSubmit={handleLogin}>
            <FormRoundedInput
              type="email"
              name="email"
              required
              placeholder="Masukan Email"
            />
            <FormRoundedInput
              type="password"
              name="password"
              required
              placeholder="Masukan Password"
            />
            {!loading && (
              <button
                type="submit"
                className="w-full text-white bg-primary font-semibold rounded-full px-4 py-2"
              >
                Lanjut
              </button>
            )}
            {loading && (
              <button
                disabled
                className="w-full text-white bg-gray-500 font-semibold rounded-full px-4 py-2"
              >
                Loading...
              </button>
            )}
          </form>
          <div className="text-gray-500">
            Tidak Memiliki Akun?{" "}
            <Link href="/register">
              <span className="font-bold text-primary cursor-pointer ">
                Daftar
              </span>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
