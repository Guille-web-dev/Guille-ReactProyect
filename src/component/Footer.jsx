import React from "react";
import { Link } from "react-router-dom";

function Footer() {

  return (
    <footer className="footer">
      <nav >
        <ul className="ul">
          <li className="li">
            <Link to="/" className="link">Home</Link>
          </li>
          <li className="li">
            <Link to="/productos" className="link">Productos</Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
