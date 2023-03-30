import React from "react";
import Card from "../Card";
import styles from "./Items.module.scss";

const Items = ({ data }) => {
  return (
    <div className="items__container">
      <div className={styles["items__wrapper"]}>
        {data.map((obj, id) => (
          <Card key={id} data={obj} />
        ))}
      </div>
    </div>
  );
};

export default Items;
