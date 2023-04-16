import styles from "./ProductCard.module.css";
import Image from "next/image";
import { RefObject } from "react";
import { useRouter } from "next/router";
import { formatPrice } from "utils/helper-functions";
import { useState } from "react";
// import Link from "next/link";

import { motion, useInView } from "framer-motion";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { MdOutlineExpandLess } from "react-icons/md";
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
  category: string;
  price: number;
  images: string[];
  desc: string;
}

export default function ProductCard({
  name,
  category,
  price,
  images,
  desc,
  id: productId,
}: PageProps) {
  const router = useRouter();
  const path = router.pathname;
  // const { category } = router.query;

  const [showfullDesc, setShowFullDesc] = useState<boolean>(false);
  return (
    <Link
      className={styles.productLink}
      href={`/shop/${category}/${productId}`}
    >
      <div className={styles.card}>
        <motion.div layout className={styles.imgContainer}>
          <Image
            src={images[0]}
            fill
            alt="product image"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </motion.div>
        <motion.div layout className={styles.pDetails}>
          <p className={`${styles.pName}`}>{name}</p>
          <p
            className={`
          ${styles.pDesc} ${spaceGrotesk.className}`}
          >
            {desc.length >= 40 && (
              <>
                <span>{!showfullDesc ? desc.slice(0, 40) : desc}</span>
                <span>
                  {!showfullDesc ? (
                    <BiDotsHorizontalRounded
                      onClick={(event) => {
                        event.preventDefault();
                        setShowFullDesc(true);
                      }}
                      className={styles.descExpandIcon}
                      aria-label="click to show the full description"
                      cursor="pointer"
                      size={"20px"}
                      color="black"
                    />
                  ) : (
                    <MdOutlineExpandLess
                      onClick={(event) => {
                        event.preventDefault();
                        setShowFullDesc(false);
                      }}
                      className={styles.descExpandIcon}
                      aria-label="click to hide the full description"
                      cursor="pointer"
                      size={"20px"}
                      color="black"
                    />
                  )}
                </span>{" "}
              </>
            )}

            {desc.length < 40 && <span>{desc}</span>}
          </p>
          <p className={styles.pPrice}>{formatPrice(price)}</p>
        </motion.div>
      </div>
    </Link>
  );
}
