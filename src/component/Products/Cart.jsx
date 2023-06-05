import "./styleProducts-stock.css";
import CardCart from "./Card";
import Loading from "../Loading/Loading";
import { ProductsInArray } from "../arrayProducts/ProductsInArray";

const Products = () => {
  document.title = "guilleDev - Productos";
  return (
    <div className="contentArrayProducts-productsStock">
      {ProductsInArray.map((product) => (
        <CardCart product={product} key={product.id} />
      ))}
    </div>
  );
};

export default Products;
