import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { context } from "../provider";
import ImgProductsDetails from "./ImgProductsDetails";
import InfoProductsDetails from "./InfoProductsDetail";
import "./styleProducts-details.css"

function ProductDetails() {
  document.title = "Detalles de producto"
  const { productos } = useContext(context);
  const productoId = useParams();
  const newProducto = productos.find((el) => el.id === productoId.id);
  if (!newProducto) {
    return <h1>cargando</h1>;
  }
  const { img, precio, cantidad, stock, nombre } = newProducto;

  return (
      <div className="contenedorInfoProducto">
        <div className="containerImg">
            <ImgProductsDetails img={img} nombre={nombre} />
        </div>
        <div className="containerProductsDetailsInfo">
          <InfoProductsDetails
            product ={newProducto}
          />
        </div>
      </div>
  );
}

export default ProductDetails;
