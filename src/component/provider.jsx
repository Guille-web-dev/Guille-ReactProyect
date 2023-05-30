import { createContext, useState, useEffect } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../config/firebase";

export let context = createContext();

function Provider({ children }) {
  let recoveredProduct = JSON.parse(localStorage.getItem("newProducts"));
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [cartItem, setCartItem] = useState(recoveredProduct || []);
  const [totalPay, setTotalPay] = useState(0);
  const [converter, setConverter] = useState(false);
  const [currencyConverter, setCurrencyConverter] = useState(totalPay);

  const addToCart = (product) => {
    let searchProduct = cartItem.find((el) => el.id === product.id);
    if (searchProduct) {
      let newCartArray = cartItem.map((el) =>
        el.id === product.id ? { ...el, cantidad: el.cantidad + 1 } : el
      );
      localStorage.setItem("newProducts", JSON.stringify(newCartArray));
      recoveredProduct = JSON.parse(localStorage.getItem("newProducts"));
      setCartItem(recoveredProduct);
    } else {
      localStorage.setItem(
        "newProducts",
        JSON.stringify([...cartItem, product])
      );
      recoveredProduct = JSON.parse(localStorage.getItem("newProducts"));
      setCartItem(recoveredProduct);
    }
  };

  const decreaseItemQuantity = (product) => {
    let searchProduct = cartItem.find((el) => el.id === product.id);
    if (searchProduct.cantidad > 1) {
      let newCartArray = cartItem.map((el) =>
        el.id === product.id ? { ...el, cantidad: el.cantidad - 1 } : el
      );
      localStorage.setItem("newProducts", JSON.stringify(newCartArray));
      recoveredProduct = JSON.parse(localStorage.getItem("newProducts"));
      setCartItem(recoveredProduct);
    } else {
      return;
    }
  };

  const deleteItem = (product) => {
    const filterProduct = cartItem.filter((el) => el.id !== product.id);
    localStorage.setItem("newProducts", JSON.stringify(filterProduct));
    recoveredProduct = JSON.parse(localStorage.getItem("newProducts"));
    setCartItem(recoveredProduct);
  };

  const emptyCart = () => {
    localStorage.setItem("newProducts", JSON.stringify([]));
    recoveredProduct = JSON.parse(localStorage.getItem("newProducts"));
    setCartItem(recoveredProduct);
  };

  const handleConverter = (boolean) => {
    setConverter(boolean);
  };

  useEffect(() => {
    if(totalPay > 0)
      if (converter) {
        const newAmount = (totalPay / 41).toFixed(2);
        setCurrencyConverter(newAmount);
      } else {
        setCurrencyConverter(totalPay);
      }
  }, [converter,totalPay]);

  useEffect(() => {
    const totalAmount = cartItem.reduce(
      (accumulator, item) => accumulator + item.cantidad * item.precio,
      0
    );
    setTotalPay(totalAmount);
  }, [cartItem]);

  useEffect(() => {
    const ProductsColletion = collection(db, "productos");
    getDocs(ProductsColletion).then((res) => {
      setProductos(res.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setCargando(false);
    });
  }, []);

  const value = {
    productos,
    cargando,
    cartItem,
    addToCart,
    decreaseItemQuantity,
    deleteItem,
    emptyCart,
    totalPay,
    currencyConverter,
    converter,
    handleConverter,
  };
  return <context.Provider value={value}>{children}</context.Provider>;
}

export default Provider;
