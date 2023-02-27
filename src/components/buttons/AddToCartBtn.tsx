import styles from "./AddToCartBtn.module.css";
import { motion } from "framer-motion";
import { BsBagCheck } from "react-icons/bs";

interface PageProps {
  inCart: boolean;
  onAdd: () => void;
}

export default function AddToCartBtn({ inCart, onAdd }: PageProps) {
  return (
    <motion.button
      animate={{
        borderColor: `${inCart ? "green" : "black"}`,
      }}
      onClick={() => onAdd()}
      className={`${styles.btnCart} ${styles.btnCart2}`}
    >
      {inCart ? (
        <motion.div animate={{ opacity: [0, 1], scale: [0, 1] }}>
          <BsBagCheck title="added to cart" size={"25px"} color="green" />
        </motion.div>
      ) : (
        "Add to Cart"
      )}
    </motion.button>
  );
}
