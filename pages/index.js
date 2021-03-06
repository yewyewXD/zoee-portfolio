import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Home/1_Hero";
import Certificate from "../components/Home/2_Certificate";
import Portfolio from "../components/Home/3_Portfolio";
import Services from "../components/Home/4_Services";
import About from "../components/Home/5_About";
import Contact from "../components/Home/6_Contact";
import FinalCTA from "../components/Home/7_FinalCTA";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Zoée Copywriter</title>
        <meta name="description" content="Zoée Copywriter" />
        <link rel="icon" href="/images/Logo.svg" />
      </Head>

      <Header />
      <main>
        <Hero />
        <Certificate />
        <Portfolio />
        <Services />
        <About />
        <Contact />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
