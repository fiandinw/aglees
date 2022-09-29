import Logo from "../components/Logo";
import { useRouter } from "next/router";

export default function Error() {
  const router = useRouter();
  return (
    <>
      <main className="mt-20 flex flex-col px-12 items-center gap-8 py-12">
        <div className="w-[300px]">
          <Logo />
        </div>
        <p className="font-bold font-lato text-xl">
          Mohon Maaf Terjadi Kesalahan
        </p>
        <button
          onClick={() => router.back()}
          className="w-full text-white bg-primary font-semibold rounded-full px-4 py-2"
        >
          Kembali
        </button>
      </main>
    </>
  );
}
