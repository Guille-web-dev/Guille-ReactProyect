import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import NavBar from "./component/header-footer/NavBar";
import Footer from "./component/header-footer/Footer";
import Provider from "./component/provider";
import ProductDetails from "./component/ProductDetails/ProductDetails";
import "./App.css";
import Products from "./component/Products/Cart";
import Cart from "./component/ShoppingCart/Cart";
import PaymentGateway from "./component/PaymentGateway/PaymenGateway";

function App() {
  return (
    <div className="containerGeneral">
      <Provider>
        <HashRouter>        
            <NavBar />
            <Routes>
              <Route path="/" element={<Products/>} />
              <Route path="/carrito" element={<Cart/>} />
              <Route path="/productos/:id" element={<ProductDetails />} />
              <Route path="/Pago" element={<PaymentGateway/>} />
            </Routes>
            <Footer />
        </HashRouter>
      </Provider>
    </div>
  );
}
export default App;
