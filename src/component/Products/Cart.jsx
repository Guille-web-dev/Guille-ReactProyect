import "./styleProducts-stock.css";
import { useContext } from "react";
import { context } from "../provider";
import CardCart from "./Card";
import Loading from "../Loading/Loading";

const Products = () => {
  const { productos, cargando } = useContext(context);
  return (
    <div className={cargando ? "containerLoading" : "contentArrayProducts-productsStock"}>
      {cargando && <Loading />}
      {productos.map((product) => (
        <CardCart product={product} key={product.id} />
      ))}
    </div>
  );
};

export default Products;
