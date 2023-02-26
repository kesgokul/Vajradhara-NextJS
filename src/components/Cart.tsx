import styles from "./Cart.module.css";
import { AiOutlineClose } from "react-icons/ai";

export default function Cart() {
  return (
    <main className={styles.cart}>
      <div className={styles.d1}>
        <h2 className={styles.title}>Cart</h2>
        <AiOutlineClose size={"25px"} color="black" />
      </div>
    </main>
  );
}
