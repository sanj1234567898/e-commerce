import Link from "next/link";
import React from "react";
import styles from "./Card.module.scss";
import { AiOutlineHeart } from "react-icons/ai";

const Card = () => {
  return (
    <div className={styles["card"]}>
      <img src="/img/card/work-boots.jpg" alt="" />
      <div className={styles["card__description"]}>
        <p className={styles["description__name"]}>Lorem Ipsum</p>
        <p className={styles["description__price"]}>$105.00</p>
      </div>

      <div>
        <button>
          <AiOutlineHeart />
        </button>
        <button>ADD TO CART</button>
      </div>
    </div>
  );
};

export default Card;
