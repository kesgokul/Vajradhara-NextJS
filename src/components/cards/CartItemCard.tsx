import styles from "./CartItemCard.module.css";
import Image from "next/image";

import { formatPrice } from "utils/helper-functions";
import { UserContext } from "@/context/userContext";
import { useContext } from "react";

import { MdDelete, MdDeleteOutline } from "react-icons/md";
import { Aboreto } from "@next/font/google";
const aboreto = Aboreto({
  subsets: ["latin"],
  weight: ["400"],
  fallback: ["sans-serif"],
});

interface PageProps {
  name: string;
  image: string;
  price: number;
  productId: string;
}

export default function CartItemCard({
  name,
  image,
  price,
  productId,
}: PageProps) {
  const { cartItems, setCartItems } = useContext(UserContext);

  function handleDelete() {
    setCartItems((items) => items.filter((i) => i.productId !== productId));
  }

  return (
    <main className={styles.cartItem}>
      {/* <div className={styles.itemDetails}> */}
      <figure className={styles.itemImage}>
        <Image
          src={image}
          alt="image of the product"
          width={100}
          height={100}
          style={{ borderRadius: "1rem", objectFit: "cover" }}
        />
      </figure>
      <h3 className={`${styles.itemName} ${aboreto.className}`}>{name}</h3>
      <p className={styles.itemPrice}>{formatPrice(price)}</p>
      {/* </div> */}
      {/* <MdDelete
        className={styles.btnDelete}
        aria-label="delete item button"
        size={"25px"}
        color="black"
        cursor="pointer"
      /> */}
      <MdDeleteOutline
        onClick={handleDelete}
        className={styles.btnDelete}
        title="delete item button"
        size={"25px"}
        // color="black"
        cursor="pointer"
        // onMouseEnter={}
      />
    </main>
  );
}
