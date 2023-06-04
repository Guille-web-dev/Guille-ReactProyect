import { useContext } from "react";
import { context } from "../provider";
import { Link } from "react-router-dom";

function InfoProductsDetails({ product }) {
  const { nombre, precio, cantidad } = product;
  const { addToCart,pay } = useContext(context);

  return (
    <div className="containerDetailsPageInfo">
      <div className="textPageDetails">
        <p className="nameDetailsPage">{nombre.toUpperCase()}</p>
        <p className="quantityDetailsPage">{cantidad} UND</p>
        <p className="priceDetailsPage">${precio}</p>
      </div>
      <div className="buttonContainer">
        <input
          onClick={() => addToCart(product)}
          type="button"
          className="buttonAdd"
          value="Agregar al carrito"
        />
        <Link to="/Carrito" className="link">
          <input
            type="button"
            className="buttonBuy"
            value="Comprar ahora"
            onClick={() => pay(product)}
          />
        </Link>
      </div>
    </div>
  );
}

export default InfoProductsDetails;
