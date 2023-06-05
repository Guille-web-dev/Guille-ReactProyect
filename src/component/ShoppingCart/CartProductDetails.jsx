import { useContext } from "react";
import { Link } from "react-router-dom";
import { context } from "../provider";

function CartProductDetails({ product }) {
  
  // EXTRAYENDO DEL CONTEXT FUNCIONES DE AGREGAR, DIMINUIR Y ELIMINAR PRODUCTOS EN CARRITO 
  const {addToCart,decreaseItemQuantity,deleteItem} = useContext(context)
  
  const { img, price, quantity, name, id } = product;
  console.log(name)
  return (
    <ul className="ulProductsInCart">
      <li className="cartCardLi">
        <Link to={`/productos/${id}`} className="linkCard imgDivContainer">
          <img className="cartCardImg" src={img} alt={name} />
        </Link>
        <div className="productDetailsContainer">
          <Link to={`/productos/${id}`} className="linkCard cartProductName">
            <p>{name.toUpperCase()}</p>
          </Link>
          <p className="shippingDetailText">No disponible para retiro</p>
          <p className="cartProductPrice">USD {price}</p>
        </div>
        <div className="productOptionsContainer">
          <div className="productQuantityContainer">
            <div className="quantityText">
              <p>Cantidad</p>
            </div>
            <div className="quantityContainer">{quantity}</div>
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
