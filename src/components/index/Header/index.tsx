import React from "react";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles["header"]}>
      <div className="container">
        <div className={styles["header__inner"]}>
          <a href="/" className={styles["header__logo"]}>
            Style
          </a>
          <nav className={styles["header__nav"]}>
            <ul>
              <li>
                <a href="/cart">
                  <img src="/svg/nav/shopping-cart.svg" alt="cart" />
                </a>
              </li>
              <li>
                <a href="/like">
                  <img src="/svg/nav/heart.svg" alt="like" />
                </a>
              </li>
              <li>
                <img src="/svg/nav/moon.svg" alt="theme" />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
