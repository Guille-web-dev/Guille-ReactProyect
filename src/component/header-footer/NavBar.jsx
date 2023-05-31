import "./style-header-footer.css"
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg navbar-light containerNav">
        <div>
          <Link to="/" className="logo">
            GuilleDev
          </Link>
        </div>
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
        <div className="collapse navbar-collapse containerUl-header" id="navbarScroll">
          <ul className=" navbar-nav-scroll ul">
            <li className="nav-item">
              <Link to="/" className="link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/productos" className="link">
                Productos
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Carrito" className="link">
                Carrito
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
export default NavBar;

