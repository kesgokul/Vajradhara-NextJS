import styles from "./Hero.module.css";
import Image from "next/image";
import Slider from "./slider/Slider";
import { Space_Grotesk, Dancing_Script } from "@next/font/google";
import { NextFont } from "@next/font";
import { motion } from "framer-motion";

const spaceGrotesk: NextFont = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400"],
  fallback: ["sans-serif"],
});
const dancingScript: NextFont = Dancing_Script({
  subsets: ["latin"],
  weight: ["400"],
  fallback: ["sans-serif"],
});

const images: string[] = [
  "/bt-neck.png",
  "/lab-neck-1.png",
  "/m-neck.jpeg",
  "/am-neck-1.png",
];

export default function Hero() {
  return (
    <section className={styles.hero}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, bounce: 1, ease: "easeIn" }}
        className={styles.heroAction}
      >
        <div className={styles.actionText}>
          <h1 className={styles.actionTag}>
            Unleash
            <span className={styles.tagItalic}>
              your <br />
              inner
            </span>
            <br />
            <span className={styles.tagSparkle}>Sparkle</span>
          </h1>
        </div>
        <button className={styles.heroBtn}>visit shop</button>
      </motion.div>
      <motion.div
        layout
        initial={{ scale: 0, borderRadius: "100%" }}
        animate={{ scale: 1, borderRadius: 0 }}
        transition={{ duration: 0.25, bounce: 1, ease: "easeIn" }}
        className={styles.imgContainer}
      >
        <Slider images={images} />
      </motion.div>
    </section>
  );
}
