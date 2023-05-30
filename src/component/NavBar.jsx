import React from "react";
import { Link } from "react-router-dom";
function NavBar() {
  return (
      <header className="header">
        <div className="navBar">
        <div className="contenedorLogo">
         <Link to="/"><img className="logo" src="../src/assets/logo1.png" alt="logo" /></Link>
        </div>
        <nav>
          <ul className="ul">
            <li className="li">
              <Link to="/" className="link">Home</Link>
            </li>
            <li className="li">
              <Link to="/productos" className="link">Productos</Link>
            </li>
            <li className="li">
              <Link to="/Carrito" className="link">Carrito</Link>
            </li>
          </ul>
        </nav>
        </div>
      </header>
  );
}

export default NavBar;
