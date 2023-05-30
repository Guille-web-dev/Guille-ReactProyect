import React, { useContext } from "react";
import { context } from "../provider";
import CardCart from "./Card";


const Products = () => {
  const { productos, cargando } = useContext(context);

  return (
    <div className="contenedorPrincipal">
      <div className="contenedor">
        {cargando && <h2>cargando</h2>}
        {productos.map((product) => (
          <CardCart product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default Products;
