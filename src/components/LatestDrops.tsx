import styles from "./LatestDrops.module.css";
import ProductCard from "./cards/ProductCard";
import { useInView } from "react-intersection-observer";
import { useRef } from "react";
import { motion } from "framer-motion";

import { products } from "../../utils/fakeData";

export default function LatestDrops() {
  const { ref, inView } = useInView({
    threshold: 1,
    triggerOnce: true,
  });
  const delay = 0.1;

  return (
    <section ref={ref} className={styles.sectionContainer}>
      <h2 className={styles.sectionTitle}>Latest Drops</h2>
      <div className={styles.cardsContainer}>
        {inView &&
          products.map((p, i) => {
            return (
              <motion.div
                initial={{ x: "90vw" }}
                animate={{ x: 0 }}
                transition={{
                  delay: delay + delay * i,
                  type: "spring",
                  bounce: 0.1,
                  velocity: 1,
                }}
                key={i}
              >
                <ProductCard {...p} />
              </motion.div>
            );
          })}
      </div>
    </section>
  );
}
