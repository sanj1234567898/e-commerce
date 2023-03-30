import Slider from "@/components/index/Slider";
import React from "react";
import styles from "../components/Item/Item.module.scss";
import axios from "axios";
import Head from "next/head";

export const getStaticPaths = async () => {
  const { data } = await axios.get("http://localhost:3001/items");

  const paths = data.map((product) => {
    return {
      params: { id: product.id },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const { data } = await axios.get(`http://localhost:3001/items/${id}`);

  return {
    props: {
      product: data,
    },
  };
};

const Item = ({ product }) => {
  return (
    <>
      <Head>
        <title>{product.name}</title>
        <meta name="description" content={product.name} />
      </Head>
      <div className="items__container">
        <div className={styles["container__inner"]}>
          <div className={styles["slider__container"]}>
            <Slider images={product.imageSlider} />
          </div>

          <div className={styles["part__right"]}>
            <h1>{product.name}</h1>
            <p>{product.desc}</p>
            <div className={styles["bottom"]}>
              <h2>${product.price}</h2>
              <button>add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
