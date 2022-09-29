import Image from "next/image";

export default function Logo() {
  return (
    <>
      <Image
        src="/logo.png"
        width={1115}
        height={239}
        layout="responsive"
        alt="logo"
      />
    </>
  );
}
