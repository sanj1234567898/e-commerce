import Link from "next/link";
import React from "react";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles["header"]}>
      <div className="container">
        <div className={styles["header__inner"]}>
          <Link href="/" className={styles["header__logo"]}>
            Style
          </Link>
          <nav className={styles["header__nav"]}>
            <ul>
              <li>
                <Link href="/cart">
                  <img src="/svg/nav/shopping-cart.svg" alt="cart" />
                </Link>
              </li>
              <li>
                <Link href="/like">
                  <img src="/svg/nav/heart.svg" alt="like" />
                </Link>
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
