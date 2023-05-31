import React from "react";
import { Link } from "react-router-dom";

const CardCart = ({ product }) => {
  const { img, nombre, cantidad, precio, id } = product;

  return (
    <Link to={`/productos/${id}`} className="linkCard contenedorPrincipal">
      <div className="contenedorCard">
        <div>
          <img className="imgProducts-stock" src={img} alt={nombre} />
        </div>
        <div className="textCard">
          <b style={{ color: "rgb(41, 152, 0)" }}>{nombre.toUpperCase()}</b>
          <p>{cantidad} UND</p>
          <p className="precio">USD {precio}</p>
        </div>
      </div>
    </Link>
  );
};

export default CardCart;
