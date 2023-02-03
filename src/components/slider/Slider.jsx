import styles from "./Slider.module.css";
import { useState, useEffect, useCallback } from "react";

export default function Slider({ images }) {
  const [index, setIndex] = useState(0);

  const changeSlide = useCallback(() => {
    setIndex((index + 1) % images.length);
  }, [index]);

  useEffect(() => {
    const sliderInterval = setInterval(() => {
      changeSlide();
    }, 5000);

    return () => clearInterval(sliderInterval);
    // return clearInterval(slideInterval);
  }, [index, images.length]);

  return (
    <div className={styles.slider}>
      <div className={styles.imgContainer}>
        {images.map((image, i) => (
          <img
            className={`${styles.sliderImg} ${i == index ? styles.active : ""}`}
            src={image}
            alt="slide of Pendants"
          />
        ))}
      </div>
    </div>
  );
}
