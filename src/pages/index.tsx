import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LatestDrops from "@/components/LatestDrops";
import Categories from "@/components/Categories";
import Footer from "@/components/footer/Footer";

import ConnectDB from "@/db/connect";
import Product from "../db/model";
import { ProductInterface } from "@/lib/interfaces";

import { GetStaticProps } from "next";
import { Aboreto } from "@next/font/google";
const aboreto = Aboreto({
  subsets: ["latin"],
  weight: ["400"],
  fallback: ["sans-serif"],
});

interface PageProps {
  latestProducts: ProductInterface[];
}

export default function Home({ latestProducts }: PageProps) {
  return (
    <>
      <Head>
        <title>Vajradhara</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={`${styles.main} ${aboreto.className}`}>
        <Hero />
        <LatestDrops products={latestProducts} />
        <Categories />
      </main>
      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps<PageProps> = async () => {
  try {
    await ConnectDB(process.env.MONGODB_URI);
    const products = await Product.find({}).limit(10);
    let latestProducts: ProductInterface[] = [];

    // check if there any products, restructure and return them as props
    if (products) {
      latestProducts = products.map((p) => {
        return {
          id: p._id.toString(),
          name: p.name,
          desc: p.desc,
          category: p.category,
          price: p.price,
          images: p.images,
          available: p.available,
        };
      });
    }
    // console.log(latestProducts);

    return {
      props: {
        latestProducts: latestProducts,
      },
    };
  } catch (error) {
    let empty: ProductInterface[] = [];
    console.log(error);

    // returning and empty arry to maintain
    return {
      props: { latestProducts: empty },
    };
  }
};
