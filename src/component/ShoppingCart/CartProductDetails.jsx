import { useContext } from "react";
import { Link } from "react-router-dom";
import { context } from "../provider";

function CartProductDetails({ product }) {
  const {addToCart,decreaseItemQuantity,deleteItem} = useContext(context)
  const { img, precio, cantidad, nombre, id } = product;

  return (
    <ul className="ulProductsInCart">
      <li className="cartCardLi">
        <Link to={`/productos/${id}`} className="linkCard imgDivContainer">
          <img className="cartCardImg" src={img} alt={nombre} />
        </Link>
        <div className="productDetailsContainer">
          <Link to={`/productos/${id}`} className="linkCard cartProductName">
            <p>{nombre.toUpperCase()}</p>
          </Link>
          <p className="shippingDetailText">No disponible para retiro</p>
          <p className="cartProductPrice">USD {precio}</p>
        </div>
        <div className="productOptionsContainer">
          <div className="productQuantityContainer">
            <div className="quantityText">
              <p>Cantidad</p>
            </div>
            <div className="quantityContainer">{cantidad}</div>
            <div className="addDecreaseButtonContainer">
              <button onClick={() => addToCart(product)} className="addButton">+</button>
              <button onClick={() => decreaseItemQuantity(product)} className="decreaseButton">-</button>
            </div>
          </div>
          <button onClick={() => deleteItem(product)} className="optionsContainer">Quitar</button>
        </div>
      </li>
    </ul>
  );
}

export default CartProductDetails;
