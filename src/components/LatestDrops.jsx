import styles from "./LatestDrops.module.css";
import ProductCard from "./cards/ProductCard";

export default function LatestDrops() {
  return (
    <section className={styles.sectionContainer}>
      <h2 className={styles.sectionTitle}>Latest Drops</h2>
      <div className={styles.cardsContainer}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
}
