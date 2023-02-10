import styles from "./Categories.module.css";
import Link from "next/link";
import Card from "./UI/Card";
import Image from "next/image";

export default function Categories() {
  return (
    <section className={styles.sectionContainer}>
      <h2 className={styles.sectionTitle}>Shop By Category</h2>
      <div className={styles.cardContainer}>
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
      </div>
    </section>
  );
}
