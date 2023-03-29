import React from "react";
import styles from "./Menu.module.scss";

const Menu = () => {
  return (
    <div className={styles["menu"]}>
      <ul className={styles["menu__list"]}>
        <li>
          <a href="/all">All</a>
        </li>
        <li>
          <a href="/all">Sale items</a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
