import { useContext } from "react";
import { context } from "../provider";

function ProductsInCartHeader() {

  // EXTRAYENDO DEL CONTEXT FUNCION PARA VACIAR EL CARRITO
    const {emptyCart} = useContext(context)
    
  return (
    <div className="cartCardHeader">
      <div className="containerTitleHeader">
        <h2 className="titleHeader">Productos en carrito</h2>
      </div>
      <div onClick={emptyCart} className="emptyCartButton">
        <div> <img src="/trash3.svg" alt="carrito" /></div>
        <p>Vaciar Carrito</p>
      </div>
    </div>
  );
}

export default ProductsInCartHeader;
