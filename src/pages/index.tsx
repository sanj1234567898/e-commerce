import Head from "next/head";
import Header from "@/components/index/Header";
import Hero from "@/components/index/Hero";
import Menu from "@/components/index/Menu";
import Labels from "@/components/index/Labels/Labels";
import Items from "@/components/index/Items";

const Home = () => {
  return (
    <>
      <Head>
        <title>Style</title>
        <meta
          name="description"
          content="e-commerce style and feshion website"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Hero />
        <Menu />
        <Labels />
        <Items />
      </main>
    </>
  );
};

export default Home;
