import styles from "./Checkout.module.css";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/footer/Footer";
import CartItemCard from "@/components/cards/CartItemCard";
import Link from "next/link";
import CheckoutForm from "@/components/CheckoutForm";

import { useContext, useState } from "react";
import { UserContext } from "@/context/userContext";
import { getTotalAmount } from "utils/helper-functions";

import { MdExpandMore, MdExpandLess } from "react-icons/md";
import { Aboreto, Roboto } from "@next/font/google";
const aboreto = Aboreto({
  subsets: ["latin"],
  weight: ["400"],
  fallback: ["sans-serif"],
});
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"],
  fallback: ["sans-serif"],
});

export default function Checkout() {
  const [showSummary, setShowSummary] = useState<boolean>(false);
  const { cartItems } = useContext(UserContext);

  return (
    <>
      <Head>
        <title>Checkout</title>
        <meta name="description" content="Checkout page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${roboto.className} `}>
        <div className={styles.logoContainer}>
          <Link className={styles.navLogo} href={"/"}>
            <h1 className={`${styles.navLogo} ${aboreto.className}`}>
              Vajradhara
            </h1>
          </Link>
        </div>
        <div className={styles.container}>
          <section className={styles.summary}>
            <div className={styles.sectionTitle}>
              <h3>Order Summary</h3>
              {!showSummary && (
                <MdExpandMore
                  onClick={() => setShowSummary(true)}
                  size={"30px"}
                  color="#6a6969"
                  cursor="pointer"
                />
              )}
              {showSummary && (
                <MdExpandLess
                  onClick={() => setShowSummary(false)}
                  size={"30px"}
                  color="#6a6969"
                  cursor="pointer"
                />
              )}
              <p className={styles.totalAmount}>{getTotalAmount(cartItems)}</p>
            </div>
            <div
              className={`${styles.itemsContainer} ${
                showSummary ? styles.active : ""
              }`}
            >
              {cartItems.map((item) => {
                return (
                  <CartItemCard
                    name={item.name}
                    image={item.image}
                    price={item.price}
                    productId={item.productId}
                  />
                );
              })}
              <div className={styles.total}>
                <p>Total</p>
                <p className={styles.totalAmount}>
                  {getTotalAmount(cartItems)}
                </p>
              </div>
            </div>
          </section>
          <section className={styles.info}>
            <CheckoutForm />
          </section>
        </div>
      </main>
    </>
  );
}
