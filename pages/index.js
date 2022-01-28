import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Home/1_Hero";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Zoée Copywriter</title>
        <meta name="description" content="Zoée Copywriter" />
        <link rel="icon" href="/images/Logo.svg" />
      </Head>

      <main>
        <div className="flex flex-col h-screen">
          <Header />
          <Hero />
        </div>
      </main>
    </div>
  );
}
