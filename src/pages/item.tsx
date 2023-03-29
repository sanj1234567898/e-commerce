import Slider from "@/components/index/Slider";
import Image from "next/image";
import React from "react";
import styles from "../components/Item/Item.module.scss";

const Item = () => {
  return (
    <div className="items__container">
      <div className={styles["container__inner"]}>
        <div className={styles["slider__container"]}>
          <Slider />
        </div>

        <div className={styles["part__right"]}>
          <h1>Some text</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className={styles["bottom"]}>
            <h2>$18.22</h2>
            <button>add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
