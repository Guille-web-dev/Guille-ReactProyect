import "./style-header-footer.css"
import { Link } from "react-router-dom";

function Footer() {

  return (
    <footer className="footer">
      <nav >
        <ul className="ulFooter">
          <li className="li">
            <Link to="/Carrito" className="link">Carrito</Link>
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
