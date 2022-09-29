import Image from "next/image";
import { useUserContext } from "../context/userContext";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import FormRoundedInput from "../components/FormRoundedInput";
import { useRouter } from "next/router";
import swal from "sweetalert";

export default function MyProfile() {
  const router = useRouter();
  const { user, logoutUser, loading, userData } = useUserContext();
  const debug = () => {
    console.log(user);
  };
  const handleLogout = () => {
    logoutUser(() => {
      router.push("/");
      swal(
        "Berhasil Logout",
        "Terimakasih Sudah Menggunakan Layanan Aglees",
        "success"
      );
    });
  };
  useEffect(() => {}, []);
  return (
    <>
      <main className="mt-16 lg:mt-24 px-8">
        <section className="flex flex-col items-center">
          <h2 className="font-lato font-bold text-4xl text-center">
            My <span className="text-primary">Profile</span>
          </h2>
          {user && (
            <div
              onClick={debug}
              className="mt-8 w-full md:w-[500px] border-2 border-gray-500 rounded-lg p-4 flex flex-col items-center gap-2"
            >
              <div className="w-[100px] rounded-[100%] overflow-clip">
                <Image
                  src={`https://avatars.dicebear.com/api/adventurer-neutral/${user.displayName}.svg`}
                  width={500}
                  height={500}
                  layout="responsive"
                  alt="User Profile"
                />
              </div>
              <div className="font-lato font-bold text-xl">
                {user.displayName}
              </div>
              <div className="font-lato font-bold text-xl">
                {user.providerData[0].providerId}
              </div>
              {!userData && (
                <Icon
                  className="text-4xl m-auto my-4"
                  icon="eos-icons:loading"
                />
              )}
              {userData && (
                <div className="flex flex-col gap-4 w-full">
                  <FormRoundedInput
                    type="text"
                    name="firstname"
                    required
                    placeholder="Nama Depan"
                    disabled
                    value={userData.firstname}
                  />
                  <FormRoundedInput
                    type="text"
                    name="lastname"
                    required
                    placeholder="Nama Belakang"
                    disabled
                    value={userData.lastname}
                  />
                  <FormRoundedInput
                    type="email"
                    name="email"
                    required
                    placeholder="Masukan Email"
                    disabled
                    value={userData.email}
                  />
                  <FormRoundedInput
                    type="number"
                    name="phone"
                    required
                    placeholder="Nomor Ponsel"
                    disabled
                    value={userData.phone}
                  />
                </div>
              )}
            </div>
          )}
          {loading && (
            <div className="my-8 w-full md:w-[500px] border-2 border-gray-500 rounded-lg p-2">
              <Icon className="text-4xl m-auto my-4" icon="eos-icons:loading" />
            </div>
          )}

          <button
            onClick={handleLogout}
            className="w-56 mt-8 text-white bg-red-500 font-semibold rounded-full px-4 py-2"
          >
            Logout
          </button>
        </section>
      </main>
    </>
  );
}
