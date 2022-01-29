import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Home/1_Hero";
import Certificate from "../components/Home/2_Certificate";
import Services from "../components/Home/4_Services";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Zoée Copywriter</title>
        <meta name="description" content="Zoée Copywriter" />
        <link rel="icon" href="/images/Logo.svg" />
      </Head>

      <main>
        <Header />
        <Hero />
        <Certificate />
        <Services />
      </main>
    </div>
  );
}
