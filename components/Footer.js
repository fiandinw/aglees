import Logo from "./Logo";
import { Icon } from "@iconify/react";

export default function Footer() {
  return (
    <>
      <div className="w-screen mt-12 p-8 flex flex-col gap-8 bg-secondary bg-opacity-20">
        <div className="flex flex-col gap-4">
          <div className="w-1/2 md:w-1/6">
            <Logo />
          </div>
          <div>
            Pekerjakan Freelancer hebat, cepat. Aglees membantu Anda menyewa
            freelancer profesional dengan cepat.
          </div>
          <div className="text-primary text-4xl flex flex-row gap-2">
            <a
              href="https://api.whatsapp.com/send?phone=6285777620414"
              target="_blank"
            >
              <Icon icon="akar-icons:whatsapp-fill" />
            </a>
            <a
              href="https://instagram.com/aglees.id?igshid=YmMyMTA2M2Y="
              target="_blank"
            >
              <Icon icon="akar-icons:instagram-fill" />
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="font-lato font-bold text-xl">For Customers</h2>
          <div>
            <ul>
              <li>Find Freelancers</li>
              <li>My Order</li>
              <li>Refund Policy</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="font-lato font-bold text-xl">For Freelancers</h2>
          <div>
            <ul>
              <li>Find Work</li>
              <li>Create Account</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="font-lato font-bold text-xl">Call Us</h2>
          <div>
            <ul>
              <li>Bandung</li>
              <li>+62 8577 7620 414</li>
              <li>agleesindonesia@gmail.com</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="font-semibold font-lato text-gray-500 text-center w-screen my-8">
        2022 aglees. All right reserved
      </div>
    </>
  );
}
