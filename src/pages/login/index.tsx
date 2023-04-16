import Head from "next/head";
import styles from "./Login.module.css";
import Header from "@/components/Header";
import Footer from "@/components/footer/Footer";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

import { Roboto } from "@next/font/google";
import { useState } from "react";
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  fallback: ["sans-serif"],
});

export default function Login() {
  const [phone, setPhone] = useState<string>();

  console.log(phone);

  return (
    <>
      <Head>
        <title>Vajradhara - Login</title>
        <meta name="description" content="login into your account" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={`${styles.main} ${roboto.className}`}>
        <div className={styles.container}>
          <h1 className={styles.title}>Login</h1>
          <section className={styles.section1}>
            <h3 className={styles.sectionTitle}>
              Enter your PHONE NUMBER to receive OTP
            </h3>
            <PhoneInput
              className={styles.phoneInput}
              placeHolder="Enter your phone Number"
              onChange={(value) => setPhone(value as string)}
            />
            <div className={styles.btnContainer}>
              <button className={styles.btnSendOTP}>Send OTP</button>
            </div>
          </section>
          <div className={styles.divide}>
            <p className={styles.divideText}>Or</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
