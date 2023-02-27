import styles from "./AddToCartBtn.module.css";

interface PageProps {
  onBuy: () => void;
}
export default function BuyNowBtn({ onBuy }: PageProps) {
  return (
    <button onClick={onBuy} className={styles.btnCart}>
      Buy Now
    </button>
  );
}
