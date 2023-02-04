import styles from "./Hero.module.css";
import Image from "next/image";
import Slider from "./slider/Slider";
import { Space_Grotesk } from "@next/font/google";
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400"],
  fallback: ["sans-serif"],
});

const images = [
  "/bt-neck.png",
  "/lab-neck-1.png",
  "/m-neck.jpeg",
  "/am-neck-1.png",
];

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroAction}>
        <div className={styles.actionText}>
          <h1 className={styles.actionLogo}>Vajradhara</h1>
          <p className={`${styles.actionDesc} ${spaceGrotesk.className}`}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
            nesciunt debitis blanditiis, ipsa saepe sapiente consequatur facilis
            architecto, repellendus, optio earum voluptate exercitationem
            quidem? Quisquam sit exercitationem enim et, earum animi voluptatum
            quidem alias optio maiores mollitia numquam, beatae eveniet eligendi
            asperiores? Nam fugit mollitia delectus modi sunt consequuntur sit.
          </p>
        </div>
        <button className={styles.heroBtn}>visit shop</button>
      </div>
      <div className={styles.imgContainer}>
        <Slider images={images} />
      </div>
    </section>
  );
}
