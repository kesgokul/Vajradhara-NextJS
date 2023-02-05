import styles from "./Categories.module.css";
import Link from "next/link";
import Card from "./UI/Card";
import Image from "next/image";

export default function Categories() {
  return (
    <section className={styles.sectionContainer}>
      <h2 className={styles.sectionTitle}>Shop By Category</h2>
      <div className={styles.cardContainer}>
        <Link href={"Shop/Pendants"}>
          <Card>
            <div className={styles.imgContainer}>
              <p className={styles.cardTitle}>Pendants</p>
              <Image
                src={"/am-pendant.png"}
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
            </div>
          </Card>
        </Link>
      </div>
    </section>
  );
}
