import React from "react";
import styles from "./Label.module.scss";
import Marquee from "react-fast-marquee";
import {
  SiAdidas,
  SiPuma,
  SiDior,
  SiNike,
  SiFila,
  SiThenorthface,
  SiReebok,
  Si3M,
} from "react-icons/si";

const Labels: React.FC = () => {
  return (
    <div className={styles["labels"]}>
      <Marquee pauseOnHover={true} speed={35} gradient={false}>
        <div className={styles["image__wrapper"]}>
          <SiAdidas />
        </div>
        <div className={styles["image__wrapper"]}>
          <SiPuma />
        </div>
        <div className={styles["image__wrapper"]}>
          <SiDior />
        </div>
        <div className={styles["image__wrapper"]}>
          <SiNike />
        </div>
        <div className={styles["image__wrapper"]}>
          <SiFila />
        </div>
        <div className={styles["image__wrapper"]}>
          <SiThenorthface />
        </div>
        <div className={styles["image__wrapper"]}>
          <SiReebok />,
        </div>
        <div className={styles["image__wrapper"]}>
          <Si3M />,
        </div>
      </Marquee>
    </div>
  );
};

export default Labels;
