import { useUserContext } from "../context/userContext";
import getFormData from "../utils/getFormData";
import swal from "sweetalert";
import { useRouter } from "next/router";
import Logo from "../components/Logo";
import ExternalLogin from "../components/ExternalLogin";
import FormRoundedInput from "../components/FormRoundedInput";
import Divider from "../components/Divider";
import Link from "next/link";

export default function Register() {
  const { registerUser, loading, error } = useUserContext();
  const router = useRouter();
  const handleRegister = (e) => {
    e.preventDefault();
    const {
      email,
      password,
      username,
      firstname,
      lastname,
      confirmpassword,
      phone,
    } = getFormData(e);
    if (
      email &&
      password &&
      username &&
      firstname &&
      lastname &&
      confirmpassword &&
      phone
    ) {
      if (password === confirmpassword) {
        registerUser(
          email,
          password,
          username,
          firstname,
          lastname,
          phone,
          () => {
            swal(
              "Register Sukses!",
              "Selamat Datang di Aglees Indonesia!",
              "success"
            ).then(() => {
              router.push("/beranda");
            });
          }
        );
      } else {
        swal(
          "Gagal Mendaftar",
          "Password dan Konfirmasi Password Tidak Sama",
          "error"
        );
      }
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
            Daftar
          </div>
          <div className="w-full">
            <ExternalLogin />
          </div>
          <Divider />
          <form
            className="w-full flex flex-col gap-2"
            onSubmit={handleRegister}
          >
            <FormRoundedInput
              type="text"
              name="username"
              required
              placeholder="Username"
            />
            <FormRoundedInput
              type="text"
              name="firstname"
              required
              placeholder="Nama Depan"
            />
            <FormRoundedInput
              type="text"
              name="lastname"
              required
              placeholder="Nama Belakang"
            />
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
            <FormRoundedInput
              type="password"
              name="confirmpassword"
              required
              placeholder="Konfirmasi Password"
            />
            <FormRoundedInput
              type="number"
              name="phone"
              required
              placeholder="Nomor Ponsel"
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
                type="submit"
                disabled
                className="w-full text-white bg-gray-500 font-semibold rounded-full px-4 py-2"
              >
                Loading...
              </button>
            )}
          </form>
          <div className="text-gray-500">
            Sudah Memiliki Akun?{" "}
            <Link href="/login">
              <span className="font-bold text-primary cursor-pointer ">
                Masuk
              </span>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
