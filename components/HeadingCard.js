import { Icon } from "@iconify/react";
export default function HeadingCard({ children, title, icon }) {
  return (
    <>
      <div className="flex flex-col lg:w-1/6 items-center">
        <div className="bg-secondary bg-opacity-20 w-fit p-3 rounded-[100%]">
          <Icon className="text-primary text-4xl" icon={icon} />
        </div>
        <div className="font-lato font-bold text-xl">{title}</div>
        <div className="text-center text-gray-500">{children}</div>
      </div>
    </>
  );
}
