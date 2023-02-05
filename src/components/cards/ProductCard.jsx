import styles from "./ProductCard.module.css";
import Image from "next/image";
import Card from "../UI/Card";
import { Space_Grotesk } from "@next/font/google";
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300"],
  fallback: ["sans-serif"],
});

const price = 2800;

function formatPrice(price) {
  return price.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
  });
}

export default function ProductCard() {
  return (
    <Card>
      <div className={styles.imgContainer}>
        <Image
          src={"/lab-pendant.png"}
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      </div>
      <div className={styles.pDetails}>
        <p className={`${styles.pName} ${spaceGrotesk.className}`}>
          Labradorite Pendant
        </p>
        <p className={styles.pPrice}>{formatPrice(price)}</p>
      </div>
    </Card>
  );
}
