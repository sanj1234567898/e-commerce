import axios from "axios";
import React from "react";
import Slider from "../Slider/index";
import styles from "./Hero.module.scss";

const Hero = () => {
  const [dataImg, setDataImg] = React.useState();

  React.useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("http://localhost:3001/images");

      setDataImg(data);
    };
    fetchData();
  }, []);

  console.log("🚀 ~ file: index.jsx:8 ~ Hero ~ dataImg:", dataImg);

  return (
    <>
      <div className={styles["slider__container"]}>
        <Slider images={dataImg} />
      </div>
    </>
  );
};

export default Hero;
