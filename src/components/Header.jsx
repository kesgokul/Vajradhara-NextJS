import styles from "./Header.module.css";
import Link from "next/link";
import { FiMenu, FiX, FiShoppingBag } from "react-icons/fi";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className={`${styles.header}`}>
      <div className={styles.navIcons}>
        {!isMenuOpen ? (
          <FiMenu
            size="1.75rem"
            color="black"
            // visibility={"hidden"}
            className={styles.menuIcon}
            onClick={() => {
              console.log("open");
              setIsMenuOpen(true);
            }}
          />
        ) : (
          <FiX
            className={styles.closeIcon}
            size="1.75rem"
            color="black"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </div>
      <h1 className={styles.navLogo}>Vajradhara</h1>
      <nav className={`${styles.nav} ${isMenuOpen ? styles.active : ""}`}>
        <Link className={`${styles.navLink}`} href="/Pendants">
          Pendants
        </Link>
        <Link className={`${styles.navLink}`} href="/Rings">
          Rings
        </Link>
        <Link className={`${styles.navLink}`} href="/EarRings">
          Ear Rings
        </Link>
        <Link className={`${styles.navLink}`} href="/contact">
          About Us
        </Link>
        <Link className={`${styles.navLink}`} href="/contact">
          Contact us
        </Link>
      </nav>
      <FiShoppingBag size="1.75rem" color="black" />
    </div>
  );
}
