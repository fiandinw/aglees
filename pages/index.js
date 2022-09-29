import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useUserContext } from "../context/userContext";

import HeadingCard from "../components/HeadingCard";
import LandingCard from "../components/LandingCard";
import NavCard from "../components/NavCard";

export default function Home() {
  const styles = {
    section: "relative w-full",
    main: "w-screen relative px-8 lg:px-20 flex flex-col gap-8",
  };
  const { user, loading, error } = useUserContext();
  return (
    <>
      <Head>
        <title>Aglees Indonesia</title>
      </Head>
      <section className="absolute top-0 left-0 w-screen h-screen bg-secondary bg-opacity-20 z-0 "></section>
      <main className={`${styles.main} mt-20`}>
        <section
          className={`${styles.section} flex flex-col lg:flex-row-reverse items-center lg:justify-between gap-4 lg:py-12`}
        >
          <div className="relative w-[200px] lg:w-full lg:flex lg:items-center lg:justify-center">
            <div className="lg:w-[250px]">
              <Image
                src="/landingHello.png"
                width={311}
                height={357}
                layout="responsive"
              />
            </div>
          </div>
          <div className="flex flex-col gap-6 lg:w-1/2 lg:gap-8">
            <h1 className="font-lato font-bold text-4xl">
              Apakah anda sedang mencari freelancers?
            </h1>
            <p className="text-gray-500">
              Pekerjakan Freelancer hebat, cepat. <b>Agless</b> membantu Anda
              menyewa freelancer profesional dengan cepat.
            </p>
            <Link href="/beranda">
              <button className="w-full bg-primary text-white font-bold rounded-full py-4">
                Temukan Freelancer
              </button>
            </Link>
          </div>
        </section>
        <section
          className={`${styles.section} bg-white shadow-lg p-6 flex flex-col lg:flex-row lg:justify-evenly gap-8`}
        >
          <HeadingCard icon="bx:file-find" title="Cari Freelancer">
            Cari dan pilih freelancer berdasarkan portofolio, kemampuan dan
            ulasan.
          </HeadingCard>
          <HeadingCard icon="clarity:talk-bubbles-line" title="Berdiskusi">
            Diskusikan detail pekerjaan yang anda inginkan.
          </HeadingCard>
          <HeadingCard icon="fluent:shield-checkmark-24-regular" title="Bayar">
            Jaminan pembayaran <b>Aglees</b> aman 100%.
          </HeadingCard>
        </section>
        <section className={`${styles.section}`}>
          <div className="font-lato font-bold text-4xl text-right lg:text-center">
            Kenapa Harus <span className="text-primary">AGLEES?</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-evenly">
            <div className="w-1/2 md:w-1/3">
              <Image
                src="/landingGirl.png"
                layout="responsive"
                width={278}
                height={312}
              />
            </div>
            <div className="flex flex-col-reverse gap-2 lg:w-1/4">
              <LandingCard icon="ph:medal" title="Money Guarantee">
                Garansi uang kembali 100% untuk proyek-proyek cacat atau secara
                alami kesalahan aglees.
              </LandingCard>
              <LandingCard icon="lucide:wallet" title="Safe Transaction">
                Transaksi aman dari pra produksi sampai pasca produksi dipantau
                oleh aglees dan dijamin keamanannya oleh aglees.
              </LandingCard>
              <LandingCard
                icon="ant-design:field-time-outlined"
                title="Efficient"
              >
                Progress dan hasil pekerjaan oleh freelancer yang cenderung
                lebih cepat dan tepat untuk customer.
              </LandingCard>
              <LandingCard icon="ic:baseline-waves" title="Flexible">
                Customer dapat memesan proyek sambil bersantai atau mempermudah
                mobilitas serta hasil pekerjaan dapat direvisi secara mudah,
                cepat dan tepat.
              </LandingCard>
              <LandingCard icon="lucide:check-circle" title="Good Service">
                Aglees mengedepankan kecepatan, ketepatan serta keterjangkauan
                hasil pekerjaan mulai dari tahap dealing transaction, pra
                produksi sampai hasil proyek sampai secara utuh di tangan
                customer. Efficiency Value. Make it simple and practical.
                Positive Transactional.
              </LandingCard>
            </div>
          </div>
        </section>
      </main>
      <section
        className={` h-screen w-screen bg-black text-secondary font-bold text-2xl flex items-center justify-center`}
      >
        <span className="animate-pulse">AGLEES INDONESIA</span>
      </section>
      <div className={`${styles.main} mt-12`}>
        <section className={`${styles.section}`}>
          <h2 className="font-lato font-bold text-4xl text-center">
            Layanan Kami
          </h2>
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
        <section className={`${styles.section}`}>
          <h2 className="font-lato font-bold text-4xl text-center">Kategori</h2>
        </section>
        <section className={`${styles.section}`}>
          <h2 className="font-lato font-bold text-4xl text-center">FAQ</h2>
        </section>
      </div>
    </>
  );
}
