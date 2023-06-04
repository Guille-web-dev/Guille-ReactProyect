import ProductsInCart from "./ProductsInCart";
import EmptyCart from "./EmptyCart";
import { useContext } from "react";
import { context } from "../provider";

function Cart() {
  document.title = "GuilleDev - carrito";
  const { cartItem } = useContext(context);
  return (
    <div className={cartItem.length === 0 ? "containerCart" : ""}>
      {cartItem.length === 0 ? (
        <EmptyCart />
      ) : (
        <ProductsInCart cartItem={cartItem} />
      )}
    </div>
  );
}

export default Cart;
