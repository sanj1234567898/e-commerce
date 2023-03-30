import React from "react";
import styles from "./Menu.module.scss";

const Menu = () => {
  return (
    <div className={styles["menu"]}>
      <ul className={styles["menu__list"]}>
        <li>
          <div href="/all">All</div>
        </li>
        <li>
          <div href="/all">Sale items</div>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
