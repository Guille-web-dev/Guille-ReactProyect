import { createContext, useState, useEffect } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../config/firebase";

export const context = createContext();

function Provider({ children }) {
  // VARIABLE CONTENEDORA DE PRODUCTOS DENTRO DEL LOCALSTORAGE
  let recoveredProduct = JSON.parse(localStorage.getItem("newProducts"));

  // ESTADOS
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [cartItem, setCartItem] = useState(recoveredProduct || []);
  const [totalPay, setTotalPay] = useState(0);
  const [converter, setConverter] = useState(false);
  const [currencyConverter, setCurrencyConverter] = useState(totalPay);

  // FUNCIONES

  // FUNCION PARA EL BOTON DE AGREGAR AL CARRITO Y PARA EL BOTON DE AUMENTAR CANTIDAD DE UN PRODUCTO
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

  // FUNCION PARA EL BOTON DE COMPRAR
  const pay = (product) => {
    let searchProduct = cartItem.find((el) => el.id === product.id);
    if (searchProduct) {
      return;
    } else {
      localStorage.setItem(
        "newProducts",
        JSON.stringify([...cartItem, product])
      );
      recoveredProduct = JSON.parse(localStorage.getItem("newProducts"));
      setCartItem(recoveredProduct);
    }
  };

  // FUNCION PARA BOTON DE DISMINUIR CANTIDAD DE UN PRODUCTO
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

  // FUNCION PARA BOTON DE ELIMINAR UN PRODUCTO
  const deleteItem = (product) => {
    const filterProduct = cartItem.filter((el) => el.id !== product.id);
    localStorage.setItem("newProducts", JSON.stringify(filterProduct));
    recoveredProduct = JSON.parse(localStorage.getItem("newProducts"));
    setCartItem(recoveredProduct);
  };

  // FUNCION PARA BOTON DE VACIAR CARRITO
  const emptyCart = () => {
    localStorage.setItem("newProducts", JSON.stringify([]));
    recoveredProduct = JSON.parse(localStorage.getItem("newProducts"));
    setCartItem(recoveredProduct);
  };

  //FUNCION PARA BOTONES DE CAMBIO DE MONEDA
  const handleConverter = (boolean) => {
    setConverter(boolean);
  };

  // EFECTOSS

  // EFECTO PARA MANEJAR EL CAMBIO DE MONEDA
  useEffect(() => {
    if (totalPay > 0)
      if (converter) {
        const newAmount = (totalPay / 41).toFixed(2);
        setCurrencyConverter(newAmount);
      } else {
        setCurrencyConverter(totalPay);
      }
  }, [converter, totalPay]);

  //EFECTO PARA MANEJAR EL MONTO FINAL DE COMPRA
  useEffect(() => {
    const totalAmount = cartItem.reduce(
      (accumulator, item) => accumulator + item.cantidad * item.precio,
      0
    );
    setTotalPay(totalAmount);
  }, [cartItem]);

  // EFECTO PARA HACER LA PETICION A LAS BASE DE DATOS QUE CONTIENE LOS PRODUCTOS
  useEffect(() => {
    const ProductsColletion = collection(db, "productos");
    getDocs(ProductsColletion).then((res) => {
        setProductos(res.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        setCargando(false);
      })
      .catch((error) => console.error(error));
  }, []);

  // OBJETOS QUE VAN A SER EXTRAIDOS
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
    setCartItem,
    pay,
  };
  return <context.Provider value={value}>{children}</context.Provider>;
}

export default Provider;
