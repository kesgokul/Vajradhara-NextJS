import styles from "./ProductCard.module.css";
import Image from "next/image";
import { RefObject } from "react";
import { useRouter } from "next/router";
import { formatPrice } from "utils/helper-functions";
// import Link from "next/link";

import { motion, useInView } from "framer-motion";
import { Space_Grotesk } from "@next/font/google";
import Link from "next/link";
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300"],
  fallback: ["sans-serif"],
});

interface PageProps {
  id: string;
  name: string;
  price: number;
  image: string;
  desc: string;
}

export default function ProductCard({
  name,
  price,
  image,
  desc,
  id: productId,
}: PageProps) {
  const router = useRouter();
  const path = router.pathname;
  const { category } = router.query;
  console.log(category);
  return (
    <Link
      className={styles.productLink}
      href={`/Shop/${category}/${productId}`}
    >
      <div className={styles.card}>
        <div className={styles.imgContainer}>
          <Image
            src={image}
            fill
            alt="product image"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
        <div className={styles.pDetails}>
          <p className={`${styles.pName}`}>{name}</p>
          <p
            className={`
          ${styles.pDesc} ${spaceGrotesk.className}`}
          >
            {desc}
          </p>
          <p className={styles.pPrice}>{formatPrice(price)}</p>
        </div>
      </div>
    </Link>
  );
}
