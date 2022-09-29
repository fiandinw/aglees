import { useUserContext } from "../../context/userContext";
import Full from "./Full";
import Lite from "./Lite";
import { Icon } from "@iconify/react";

export default function Navbar() {
  const { user, loading } = useUserContext();
  return (
    <>
      <header className="block fixed w-screen font-lato mb-8 z-40 top-0">
        {loading && (
          <div className="text-primary font-bold font-lato py-4 flex justify-center bg-white">
            <Icon className="text-4xl" icon="eos-icons:loading" />
          </div>
        )}
        {user && !loading && <Full />}
        {!user && !loading && <Lite />}
      </header>
    </>
  );
}
