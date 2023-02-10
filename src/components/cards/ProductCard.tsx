import styles from "./ProductCard.module.css";
import Image from "next/image";
import Card from "../UI/Card";
import Link from "next/link";
import { Space_Grotesk } from "@next/font/google";
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300"],
  fallback: ["sans-serif"],
});

const price = 2800;

function formatPrice(price: number) {
  return price.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
  });
}

export default function ProductCard() {
  return (
    <Link className={styles.productLink} href={"/shop/[productId]"}>
      <Card>
        <div className={styles.imgContainer}>
          <Image
            src={"/lab-pendant.png"}
            fill
            alt="product image"
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
    </Link>
  );
}
