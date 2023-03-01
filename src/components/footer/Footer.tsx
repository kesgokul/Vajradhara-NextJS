import styles from "./Footer.module.css";
import { FiFacebook, FiInstagram, FiMail } from "react-icons/fi";
import { useState } from "react";
import Link from "next/link";

export default function Footer() {
  const [emailInput, setEmailInput] = useState("");
  return (
    <footer className={styles.footer}>
      <form className={styles.email} action="">
        <label className={styles.sectionTitle} htmlFor="email">
          Subscribe to our newsletter for {""}
          <span style={{ fontStyle: "normal", textTransform: "uppercase" }}>
            exclusive offers
          </span>
        </label>
        <div className={styles.emailField}>
          <input
            className={styles.emailInput}
            type="email"
            name="email"
            placeholder="your email"
            onChange={(e) => setEmailInput(e.target.value)}
          />
          <button className={styles.emailBtn}>
            <FiMail
              // onMouseEnter={}
              color="black"
              size={"20px"}
              cursor={"pointer"}
            />
          </button>
        </div>
      </form>
      <article className={styles.help}>
        <ul className={styles.helpList}>
          <li key={"faq"}>
            <Link className={styles.footerLink} href="/Faq">
              FAQ
            </Link>
          </li>
          <li key={"ship"}>
            <Link className={styles.footerLink} href="/ShippingReturns">
              Shipping + Returns
            </Link>
          </li>
          <li key={"track"}>
            <Link className={styles.footerLink} href="/Track">
              Track My Order
            </Link>
          </li>
          <li key={"return"}>
            <Link className={styles.footerLink} href="/ReturnPolicy">
              Return Policy
            </Link>
          </li>
          <li key={"terms"}>
            <Link className={styles.footerLink} href="Terms">
              Terms & conditions
            </Link>
          </li>
          <li key={"privacy"}>
            <Link className={styles.footerLink} href="PrivacyPolicy">
              Privacy policy
            </Link>
          </li>
        </ul>
      </article>
      <article className={styles.socials}>
        <ul className={styles.socialsList}>
          <a className={styles.socialListItem}>
            <FiFacebook size={"1.5rem"} color="#323232" cursor={"pointer"} />
          </a>
          <a className={styles.socialListItem}>
            <FiInstagram size={"1.5rem"} color="#323232" cursor={"pointer"} />
          </a>
        </ul>
      </article>
      <div className={styles.copyright}>copyright Vajradhara LLC 2023</div>
    </footer>
  );
}
