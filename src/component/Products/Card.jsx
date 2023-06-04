import { Link } from "react-router-dom";

const CardCart = ({ product }) => {
  const { img, nombre, cantidad, precio, id } = product;

  return (
    <Link to={`/productos/${id}`} className="linkCard">
      <div className="containerCard-productsStock">
        <div>
          <img className="imgProducts-stock" src={img} alt={nombre} />
        </div>
        <div className="textCard-productsStock">
          <b style={{ color: "rgb(41, 152, 0)" }}>{nombre.toUpperCase()}</b>
          <p>{cantidad} UND</p>
          <p className="price-productsStock">USD {precio}</p>
        </div>
      </div>
    </Link>
  );
};

export default CardCart;
