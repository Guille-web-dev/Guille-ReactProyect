import { Link } from "react-router-dom";

const CardCart = ({ product }) => {
  const { img, name, quantity, price, id } = product;
  return (
    <Link to={`/productos/${id}`} className="linkCard">
      <div className="containerCard-productsStock">
        <div>
          <img
            className="imgProducts-stock"
            src={img}
            alt={name}
          />
        </div>
        <div className="textCard-productsStock">
          <b style={{ color: "rgb(41, 152, 0)" }}>{name.toUpperCase()}</b>
          <p>{quantity} UND</p>
          <p className="price-productsStock">USD {price}</p>
        </div>
      </div>
    </Link>
  );
};

export default CardCart;
