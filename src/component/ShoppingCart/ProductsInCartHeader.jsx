import { useContext } from "react";
import { context } from "../provider";

function ProductsInCartHeader() {
    const {emptyCart} = useContext(context)
  return (
    <div className="cartCardHeader">
      <div>
        <h2>Productos en carrito</h2>
      </div>
      <div onClick={emptyCart} className="emptyCartButton">
        <div> <img src="../src/assets/trash3.svg" alt="carrito" /></div>
        <p>Vaciar Carrito</p>
      </div>
    </div>
  );
}

export default ProductsInCartHeader;
