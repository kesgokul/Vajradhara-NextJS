import styles from "./Product.module.css";
import Head from "next/head";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/footer/Footer";

import { useRouter } from "next/router";
import { products } from "utils/fakeData";
import { formatPrice } from "utils/helper-functions";

export default function Product() {
  const router = useRouter();
  const { productId } = router.query;

  const product = products[1];

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
          <figure>
            <div className={styles.featureImage}>
              <Image
                src={product.image}
                alt="image of the product"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </figure>
          <aside className={styles.productDetails}>
            <h1>{product.name}</h1>
            <p>{product.desc}</p>
            <p>{formatPrice(product.price)}</p>
          </aside>
        </section>
      </main>
      <Footer />
    </>
  );
}
