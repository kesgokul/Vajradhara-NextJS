import styles from "./Header.module.css";
import Link from "next/link";
import Cart from "./Cart";

import React, { useState, useContext } from "react";
import { UserContext } from "@/context/UserContext";
import { AnimatePresence } from "framer-motion";

import { FiMenu, FiX, FiShoppingBag, FiUser } from "react-icons/fi";
import { Aboreto } from "@next/font/google";
const aboreto = Aboreto({
  subsets: ["latin"],
  weight: ["400"],
  fallback: ["sans-serif"],
});

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { setIsCartVisible, isCartVisible } = useContext(UserContext);

  return (
    <>
      <AnimatePresence>{isCartVisible && <Cart />}</AnimatePresence>
      <div className={`${styles.header} ${aboreto.className}`}>
        <div className={styles.navIcons}>
          {!isMenuOpen ? (
            <FiMenu
              className={`${styles.navIcon}`}
              size="1.75rem"
              color="black"
              cursor={"pointer"}
              onClick={() => {
                console.log("open");
                setIsMenuOpen(true);
              }}
            />
          ) : (
            <FiX
              className={`${styles.navIcon}`}
              size="1.75rem"
              color="black"
              cursor={"pointer"}
              onClick={() => setIsMenuOpen(false)}
            />
          )}
        </div>
        <Link href={"/"}>
          <h1 className={styles.navLogo}>Vajradhara</h1>
        </Link>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.active : ""}`}>
          <Link className={`${styles.navLink}`} href="/Shop/Pendants">
            Pendants
          </Link>
          <Link className={`${styles.navLink}`} href="/Shop/Rings">
            Rings
          </Link>
          <Link className={`${styles.navLink}`} href="/Shop/EarRings">
            Ear Rings
          </Link>
          <Link className={`${styles.navLink}`} href="/Shop/Bracelets">
            Bracelets
          </Link>
          <Link className={`${styles.navLink}`} href="/contact">
            About Us
          </Link>
          <Link className={`${styles.navLink}`} href="/contact">
            Contact us
          </Link>
        </nav>
        <div className={styles.userIcons}>
          <FiShoppingBag
            onClick={() => setIsCartVisible(true)}
            size="1.75rem"
            color="black"
            cursor={"pointer"}
          />
          <FiUser size="1.75rem" color="black" cursor={"pointer"} />
        </div>
      </div>
    </>
  );
}
