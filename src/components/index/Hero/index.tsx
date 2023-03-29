import React from "react";
import Slider from "../Slider/index";
import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <>
      <div className={styles["slider__container"]}>
        <Slider />
      </div>
    </>
  );
};

export default Hero;
