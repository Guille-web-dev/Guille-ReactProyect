import "./styleProducts-stock.css";
import { useContext } from "react";
import { context } from "../provider";
import CardCart from "./Card";
import Loading from "../Loading/Loading";
import { ProductsInArray } from "../arrayProducts/ProductsInArray";

const Products = () => {
  const { cargando } = useContext(context);
  document.title = "guilleDev - Productos";
  return (
    <div
      className={
        cargando ? "containerLoading" : "contentArrayProducts-productsStock"
      }
    >
      {cargando && <Loading />}
      {ProductsInArray.map((product) => (
        <CardCart product={product} key={product.id} />
      ))}
    </div>
  );
};

export default Products;
