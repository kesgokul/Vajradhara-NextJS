import styles from "./Card.module.css";
import type { AppProps } from "next/app";
import { JSXElementConstructor } from "react";

interface PageProps {
  children: JSX.Element;
}

export default function Card(props: PageProps) {
  return <div className={styles.card}>{props.children}</div>;
}
