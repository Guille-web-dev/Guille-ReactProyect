import ProductsInCart from "./ProductsInCart";
import EmptyCart from "./EmptyCart";
import { useContext } from "react";
import { context } from "../provider";

function Cart() {
    const { cartItem } = useContext(context);
  return (
    <div>{cartItem.length === 0 ? <EmptyCart /> : <ProductsInCart cartItem={cartItem}/>}</div>
  );
}

export default Cart;
