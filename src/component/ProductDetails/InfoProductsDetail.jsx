import { addDoc, collection } from "firebase/firestore";
import { db } from "../../config/firebase";
import { useContext, useState } from "react";
import { context } from "../provider";

function InfoProductsDetails({ product }) {
  
  const { nombre, precio, cantidad, stock, id } = product;
  const { addToCart } = useContext(context)

  return (
    <div className="contenedorDetailsPageInfo">
      <div className="textCard">
        <p className="nameDetailsPage">{nombre.toUpperCase()}</p>
        <p className="quantityDetailsPage">{cantidad} UND</p>
        <p className="priceDetailsPage">${precio}</p>
      </div>
      <div className="buttonContainer">
        <input
          onClick={() => addToCart(product)}
          type="button"
          className="buttonAgregar"
          value="Agregar al carrito"
        />
        <input type="button" className="buttonComprar" value="Comprar ahora" />
      </div>
    </div>
  );
}

export default InfoProductsDetails;
