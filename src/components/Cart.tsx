import styles from "./Cart.module.css";
import CartItemCard from "./cards/CartItemCard";

import { UserContext, CartItem } from "@/context/userContext";
import { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getTotalAmount } from "utils/helper-functions";

import { AiOutlineClose } from "react-icons/ai";
import { GiBeveledStar } from "react-icons/gi";
import { Aboreto } from "@next/font/google";
import Link from "next/link";
const aboreto = Aboreto({
  subsets: ["latin"],
  weight: ["400"],
  fallback: ["sans-serif"],
});

export default function Cart() {
  const { setIsCartVisible, cartItems } = useContext(UserContext);

  // function to get the total cart value

  return (
    <motion.main
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      transition={{ type: "spring", bounce: 0.3 }}
      exit={{ x: "100%" }}
      className={styles.cart}
    >
      <div className={styles.d1}>
        <h2 className={styles.title}>Cart</h2>
        <motion.div whileHover={{ rotate: 360 }}>
          <AiOutlineClose
            onClick={() => setIsCartVisible(false)}
            size={"25px"}
            color="black"
            cursor="pointer"
          />
        </motion.div>
      </div>
      <section className={styles.itemsContainer}>
        {cartItems.length < 1 && (
          <p className={styles.noItems}>You have no Items in your cart..</p>
        )}
        {cartItems.map((item, i) => {
          return (
            <CartItemCard
              key={i}
              name={item.name}
              image={item.image}
              price={item.price}
              productId={item.productId}
            />
          );
        })}
      </section>
      {cartItems.length >= 1 && (
        <Link
          className={`${styles.checkout} ${aboreto.className}`}
          href={"/Checkout"}
        >
          Check out
          <GiBeveledStar
            className={styles.checkoutStar}
            size={"20px"}
            color="white"
          />
          <span className={styles.totalAmount}>{`${getTotalAmount(
            cartItems
          )}`}</span>
        </Link>
      )}
    </motion.main>
  );
}
