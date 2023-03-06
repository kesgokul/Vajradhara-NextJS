import styles from "./Product.module.css";
import Head from "next/head";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/footer/Footer";
import UPI from "@/components/Icons/UPI";
import AddToCartBtn from "@/components/buttons/AddToCartBtn";
import BuyNowBtn from "@/components/buttons/BuyNowBtn";

import { useRouter } from "next/router";
import { useState, useContext, useEffect } from "react";
import { products } from "utils/fakeData";
import { formatPrice } from "utils/helper-functions";
import { UserContext, CartItem } from "@/context/UserContext";
import { motion } from "framer-motion";

import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { Aboreto } from "@next/font/google";
const aboreto = Aboreto({
  subsets: ["latin"],
  weight: ["400"],
  fallback: ["sans-serif"],
});

export default function Product() {
  const [inCart, setInCart] = useState<boolean>(false);
  const { setCartItems, cartItems } = useContext(UserContext);
  const router = useRouter();

  const { productId } = router.query;
  const product = products[0];

  const [featureImg, setFeatureImg] = useState(product.image);

  function handleAddToCart() {
    setCartItems((s) => [
      ...s,
      {
        productId: product.id,
        name: product.name,
        image: product.image,
        price: product.price,
      },
    ]);
  }

  function handleBuyNow() {
    handleAddToCart();

    //navigate to the checkout page
  }

  useEffect(() => {
    const item = cartItems.findIndex((item) => item.productId === product.id);
    if (item == -1) {
      setInCart(false);
    } else {
      setInCart(true);
    }
  }, [cartItems]);

  return (
    <>
      <Head>
        <title>{product.name}</title>
        <meta name="description" content={`${product.desc}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <section className={styles.product}>
          <div className={styles.images}>
            <figure className={styles.featureImage}>
              <AiOutlineHeart
                className={styles.favIcon}
                size={"30px"}
                color="white"
              />
              <Image
                src={featureImg}
                alt="image of the product"
                fill
                style={{ objectFit: "cover" }}
              />
            </figure>
            <div className={styles.otherImages}>
              {product.images?.map((i, index) => {
                return (
                  <Image
                    src={i}
                    key={index}
                    alt="other image of the product"
                    width={80}
                    height={80}
                    style={{ cursor: "pointer" }}
                    onClick={() => setFeatureImg(i)}
                  />
                );
              })}
            </div>
          </div>
          <aside className={styles.productDetails}>
            <h1 className={`${aboreto.className} ${styles.pName}`}>
              {product.name}
            </h1>
            <p className={styles.pDesc}>
              {`${product.desc}`} Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Fugiat omnis laboriosam ullam quibusdam maxime
              amet officia sunt, repellendus totam error?
            </p>
            <p className={styles.pPrice}>{formatPrice(product.price)}</p>
            <div className={styles.buttons}>
              <AddToCartBtn inCart={inCart} onAdd={handleAddToCart} />
              <BuyNowBtn onBuy={handleBuyNow} />
            </div>
            <div className={styles.extras}>
              <article className={styles.extraCard}>
                <h3 className={styles.extraTitle}>Shipping & Returns</h3>
                <p>
                  We offer free shipping within India via Bluedart or Delhivery
                  courier service. All orders are shipped via express air
                  shipping only. Delivery time may vary from 2-5 days depending
                  on location.
                </p>
              </article>
              <article className={styles.extraCard}>
                <h3 className={styles.extraTitle}>Payment Options</h3>
                <p>
                  We offer free shipping within India via Bluedart or Delhivery
                  courier service. All orders are shipped via express air
                  shipping only. Delivery time may vary from 2-5 days depending
                  on location.
                </p>
                <UPI />
              </article>
            </div>
          </aside>
        </section>
      </main>
      <Footer />
    </>
  );
}
