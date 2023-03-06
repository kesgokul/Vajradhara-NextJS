import "@/styles/globals.css";
import styles from "../styles/Home.module.css";
import Cart from "@/components/Cart";
import React, { useState, useContext } from "react";
import type { AppProps } from "next/app";
import { UserContextProvider } from "@/context/UserContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <UserContextProvider>
        <Component className={styles.page} {...pageProps} />
      </UserContextProvider>
    </>
  );
}
