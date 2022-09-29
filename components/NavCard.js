import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
export default function NavCard({ icon, image, title, to }) {
  const [isHover, setIsHover] = useState(false);
  const hoverToggle = () => {
    setIsHover(!isHover);
  };
  return (
    <Link href={to}>
      <div
        onMouseEnter={hoverToggle}
        onMouseLeave={hoverToggle}
        className={`aspect-square rounded-md shadow-lg p-4 w-36 md:w-48 lg:w-64 h-auto ${
          isHover ? "bg-secondary" : "bg-white"
        } flex flex-col items-center justify-center sm:justify-between transition-all duration-500`}
      >
        <div className="md:self-end">
          <Icon
            className={`text-4xl ${isHover ? "text-white" : "text-secondary"}`}
            icon={icon}
          />
        </div>
        <div className="hidden relative w-1/3 sm:block">
          <div
            className={`w-full h-full ${
              isHover ? "bg-white scale-150" : "bg-secondary"
            } absolute top-0 rounded-full scale-110`}
          ></div>
          <Image
            className={`absolute top-0 z-30 ${
              isHover ? "scale-75" : ""
            } transition-all`}
            src={image}
            width={150}
            height={150}
            layout="responsive"
            alt="Navigation Card"
          />
        </div>
        <div
          className={`font-lato font-bold md:text-2xl ${
            isHover ? "text-white" : ""
          }`}
        >
          {title}
        </div>
      </div>
    </Link>
  );
}
