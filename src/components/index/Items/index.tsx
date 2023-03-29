import React from "react";
import Card from "../Card";
import styles from "./Items.module.scss";

const Items = () => {
  return (
    <div className="items__container">
      <div className={styles["items__wrapper"]}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Items;
