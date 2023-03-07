import styles from "./LatestDrops.module.css";
import ProductCard from "./cards/ProductCard";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { ProductInterface } from "@/lib/interfaces";

// import { products } from "../../utils/fakeData";

interface PageProps {
  products: ProductInterface[];
}

export default function LatestDrops({ products }: PageProps) {
  const [animateComplete, setAnimationComplete] = useState<boolean>(false);

  const { ref, inView } = useInView({
    threshold: 1,
    triggerOnce: true,
  });
  const delay = 0.1;

  return (
    <section ref={ref} className={styles.sectionContainer}>
      <h2 className={styles.sectionTitle}>Latest Drops</h2>
      <div className={styles.cardsContainer}>
        <AnimatePresence>
          {inView &&
            products.map((p, i) => {
              return (
                <motion.div
                  className={`${styles.card} ${
                    animateComplete && styles.scrollSnap
                  }`}
                  initial={{ x: "90vw" }}
                  animate={{ x: 0 }}
                  transition={{
                    delay: delay + delay * i,
                    type: "spring",
                    bounce: 0,
                    velocity: 0.5,
                  }}
                  onAnimationComplete={() => setAnimationComplete(true)}
                  onAnimationStart={() => setAnimationComplete(false)}
                  key={i}
                >
                  <ProductCard {...p} />
                </motion.div>
              );
            })}
        </AnimatePresence>
      </div>
    </section>
  );
}
