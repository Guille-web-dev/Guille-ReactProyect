import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./component/NavBar";
import Home from "./component/Home";
import Footer from "./component/Footer";
import Provider from "./component/provider";
import ProductDetails from "./component/ProductDetails/ProductDetails";
import "./App.css";
import Products from "./component/Products/Cart";
import Cart from "./component/ShoppingCart/Cart";
import PaymentGateway from "./component/PaymentGateway/PaymenGateway";

function App() {
  return (
    <div className="padre">
      <Provider>
        <BrowserRouter>        
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/productos" element={<Products/>} />
              <Route path="/carrito" element={<Cart/>} />
              <Route path="/productos/:id" element={<ProductDetails />} />
              <Route path="/Pago" element={<PaymentGateway/>} />
            </Routes>
            <Footer />
        </BrowserRouter>
      </Provider>
    </div>
  );
}
export default App;
