import styles from "./Categories.module.css";
import Link from "next/link";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export default function Categories() {
  const { ref, inView } = useInView({
    threshold: 1,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className={styles.sectionContainer}>
      <h2 className={styles.sectionTitle}>Shop By Category</h2>
      {inView && (
        <motion.div
          initial={{ translateZ: -1 }}
          animate={{ translateZ: 0 }}
          transition={{
            duration: {
              translateZ: 1000,
            },
            ease: "easeInOut",
          }}
          className={styles.cardContainer}
        >
          <Link className={styles.link} href={"Shop/Pendants"}>
            <div className={styles.card}>
              <div className={styles.imgContainer}>
                <p className={styles.cardTitle}>Pendants</p>
                <Image
                  src={"/lab-pendant.png"}
                  fill
                  alt={"category image"}
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />
              </div>
            </div>
          </Link>
          <Link className={styles.link} href={"Shop/EarRings"}>
            <div className={styles.card}>
              <div className={styles.imgContainer}>
                <p className={styles.cardTitle}>Ear rings</p>
                <Image
                  src={"/am-pendant.png"}
                  fill
                  alt={"category image"}
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />
              </div>
            </div>
          </Link>
          <Link className={styles.link} href={"Shop/Rings"}>
            <div className={styles.card}>
              <div className={styles.imgContainer}>
                <p className={styles.cardTitle}>Rings</p>
                <Image
                  src={"/bt-pendant.png"}
                  fill
                  alt={"category image"}
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />
              </div>
            </div>
          </Link>
          <Link className={styles.link} href={"Shop/Bracelets"}>
            <div className={styles.card}>
              <div className={styles.imgContainer}>
                <p className={styles.cardTitle}>Bracelets</p>
                <Image
                  src={"/rose_pendant.jpg"}
                  fill
                  alt={"category image"}
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />
              </div>
            </div>
          </Link>
        </motion.div>
      )}
    </section>
  );
}
