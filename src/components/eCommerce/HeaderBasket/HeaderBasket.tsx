import styles from "./styles.module.css";
import Logo from "@assets/ecommerce.svg?react";
const { basketContainer, basketQuantity } = styles;
const HeaderBasket = () => {
  return (
    <div className={basketContainer}>
      <Logo title="basket icon" width={40} height={40} />
      <div className={basketQuantity}>0</div>
    </div>
  );
};

export default HeaderBasket;
