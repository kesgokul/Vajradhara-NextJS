import styles from "./Slider.module.css";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

export default function Slider({ images }) {
  const [index, setIndex] = useState(0);

  const changeSlide = useCallback(() => {
    setIndex((index + 1) % images.length);
  }, [index]);

  useEffect(() => {
    const sliderInterval = setInterval(() => {
      changeSlide();
    }, 7000);

    return () => clearInterval(sliderInterval);
    // return clearInterval(slideInterval);
  }, [index, images.length]);

  return (
    <div className={styles.imgContainer}>
      {images.map((image, i) => (
        <Image
          src={image}
          fill
          key={i}
          alt="jewellery images"
          className={`${styles.img} ${index == i ? styles.show : styles.hide}`}
          style={{ objectFit: "cover", objectPosition: "bottom" }}
        />
      ))}
    </div>
  );
}
