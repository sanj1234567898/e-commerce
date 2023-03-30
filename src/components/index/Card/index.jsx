import Link from "next/link";
import React from "react";
import styles from "./Card.module.scss";
import { AiOutlineHeart } from "react-icons/ai";

const Card = ({ data }) => {
  return (
    <div className={styles["card__wrapper"]}>
      <Link href={`/${data.id}`} className={styles["card"]}>
        <img src={data.image} alt="" />
        <div className={styles["card__description"]}>
          <p className={styles["description__name"]}>{data.name}</p>
          <p className={styles["description__price"]}>${data.price}</p>
        </div>
      </Link>

      <div className={styles["buttom__wrapper"]}>
        <button className={styles["button__like"]}>
          <AiOutlineHeart />
        </button>
        <button className={styles["button__add"]}>ADD TO CART</button>
      </div>
    </div>
  );
};

export default Card;
