import "@/styles/globals.css";
import styles from "../styles/Home.module.css";
import Cart from "@/components/Cart";
import React, { useState } from "react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const [isCartVisible, setIsCartVisible] = useState(false);
  return (
    <>
      <Cart />
      <Component className={styles.page} {...pageProps} />
    </>
  );
}
