import Head from "next/head";
import Hero from "@/components/index/Hero";
import Menu from "@/components/index/Menu";
import Labels from "@/components/index/Labels/Labels";
import Items from "@/components/index/Items";

export async function getStaticProps() {
  const data = await (await fetch("http://localhost:3001/items"))?.json();

  return {
    props: {
      data,
    },
  };
}

const Home = ({ data }) => {
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
        <Hero />
        <Menu />
        <Labels />
        <Items data={data} />
      </main>
    </>
  );
};

export default Home;
