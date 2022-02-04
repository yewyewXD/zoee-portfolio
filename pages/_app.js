import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "../styles/global.scss";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
