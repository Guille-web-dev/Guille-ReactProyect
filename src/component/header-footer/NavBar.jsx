import { useContext } from "react";
import "./style-header-footer.css";
import { Link } from "react-router-dom";
import { context } from "../provider";
import logoCarrito from "../../../public/cart3.svg";

function NavBar() {
  // EXTRAYENDO ESTADO QUE CONTIENE LOS PRODUCTOS EN CARRITO 
  const { cartItem } = useContext(context);

  return (
    <header className="header">
      <div className="containerNavbar">
        <Link to="/" className="logoPage">
          GuilleDev
        </Link>
        <nav className="navbar navbar-expand-lg navbar-light  containerNav">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse containerUl-header"
            id="navbarScroll"
          >
            <ul className=" navbar-nav-scroll ulHeader">
              <li className="nav-item">
                <Link to="/" className="link">
                  Productos
                </Link>
              </li>
              <li className="nav-item"></li>
            </ul>
          </div>
        </nav>
        <div className="containerLogo-cart">
          <Link to="/Carrito" className="link">
            <img className="logoCart" src={logoCarrito} alt="" />
          </Link>
          <div className="quantityLogo-cart">{cartItem.length}</div>
        </div>
      </div>
    </header>
  );
}
export default NavBar;
