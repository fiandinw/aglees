import { useEffect, useRef, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/navbar";
import { UserContextProvider } from "../context/userContext";
import "../styles/globals.css";
import { Icon } from "@iconify/react";

function MyApp({ Component, pageProps }) {
  const mybutton = useRef();
  const [isScroll, setIsScroll] = useState(false);

  // When the user scrolls down 20px from the top of the document, show the button
  useEffect(() => {
    window.onscroll = function () {
      scrollFunction();
    };
  }, []);

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  }

  function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <UserContextProvider>
      {isScroll && (
        <button
          className="bg-secondary aspect-square fixed bottom-10 right-6 rounded-[100%] z-50 p-2"
          onClick={backToTop}
          ref={mybutton}
        >
          <Icon className="text-2xl" icon="bx:arrow-to-top" />
        </button>
      )}

      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </UserContextProvider>
  );
}

export default MyApp;
