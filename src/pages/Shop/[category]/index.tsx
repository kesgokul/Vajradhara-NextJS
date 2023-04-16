import Head from "next/head";
import styles from "../Shop.module.css";
import Header from "@/components/Header";
import Footer from "@/components/footer/Footer";
import ProductCard from "@/components/cards/ProductCard";

import { useRouter } from "next/router";
import { Aboreto } from "@next/font/google";
// import { products } from "../../../../utils/fakeData";
import { GetStaticProps } from "next";
import ConnectDB from "@/db/connect";
import Product from "../../../db/model";

import { ProductInterface } from "@/lib/interfaces";
import { ParsedUrlQuery } from "querystring";

const aboreto = Aboreto({
  subsets: ["latin"],
  weight: ["400"],
  fallback: ["sans-serif"],
});

interface PageProps {
  products: ProductInterface[];
}

export default function Home({ products }: PageProps) {
  const router = useRouter();
  const { category } = router.query;
  return (
    <>
      <Head>
        <title>{category}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={`${styles.main} ${aboreto.className}`}>
        <h1 className={styles.pageTitle}>{category}</h1>
        <div className={styles.productsContainer}>
          {products.map((p, i) => {
            return (
              <div key={i} className={styles.product}>
                <ProductCard {...p} />
              </div>
            );
          })}
        </div>
      </main>
      <Footer />
    </>
  );
}

// ============================= STATIC PROPS =====================================

export const getStaticProps: GetStaticProps = async (context) => {
  const { category } = context.params!;

  await ConnectDB(process.env.MONGODB_URI);

  const result = await Product.find({ category: category });
  let categoryProducts: ProductInterface[] = [];

  if (result) {
    categoryProducts = result.map((p) => {
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

  return {
    props: {
      products: categoryProducts,
    },
  };
};

// ============================================ STATIC PATHS =================================

export const getStaticPaths = async () => {
  await ConnectDB(process.env.MONGODB_URI);

  const categories = await Product.distinct("category");

  // creating the paths
  const paths = categories.map((category) => {
    return {
      params: {
        category: category,
      },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
};
