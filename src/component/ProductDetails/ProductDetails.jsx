import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { context } from "../provider";
import ImgProductsDetails from "./ImgProductsDetails";
import InfoProductsDetails from "./InfoProductsDetail";

function ProductDetails() {
  const { productos } = useContext(context);
  const productoId = useParams();
  const newProducto = productos.find((el) => el.id === productoId.id);
  if (!newProducto) {
    return <h1>cargando</h1>;
  }
  const { img, precio, cantidad, stock, nombre } = newProducto;

  return (
    <div>
      <div className="contenedorInfoProducto">
        <div className="contenedorImg">
            <ImgProductsDetails img={img} nombre={nombre} />
        </div>
        <div className="contenedorProductsDetailsInfo">
          <InfoProductsDetails
            product ={newProducto}
          />
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
