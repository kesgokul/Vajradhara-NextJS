import styles from "./LatestDrops.module.css";
import ProductCard from "./cards/ProductCard";
import { useInView } from "react-intersection-observer";
import { useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { ProductInterface } from "@/lib/interfaces";

// import { products } from "../../utils/fakeData";

interface PageProps {
  products: ProductInterface[];
}

export default function LatestDrops({ products }: PageProps) {
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
                  className={styles.card}
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
        </AnimatePresence>
      </div>
    </section>
  );
}
