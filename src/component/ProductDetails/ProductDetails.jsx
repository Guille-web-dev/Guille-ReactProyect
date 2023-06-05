import { useParams } from "react-router-dom";
import ImgProductsDetails from "./ImgProductsDetails";
import InfoProductsDetails from "./InfoProductsDetail";
import { ProductsInArray } from "../arrayProducts/ProductsInArray";
import "./styleProducts-details.css"

function ProductDetails() {
  document.title = "Detalles de producto"
  
  // ID DEL PRODUCTO EN LA URL
  const {id} = useParams();
  const productId = parseInt(id)

  // EXPRESION PARA ENCONTRAR PRODUCTO QUE COINCIDA CON EL ID
  const newProducto = ProductsInArray.find((el) => el.id === productId);
 
  if (!newProducto) {
    return <h1>cargando</h1>;
  }
  const { img, name } = newProducto;

  return (
      <div className="contenedorInfoProducto">
        <div className="containerImg">
            <ImgProductsDetails img={img} nombre={name} />
        </div>
        <div className="containerProductsDetailsInfo">
          <InfoProductsDetails
            product ={newProducto}
          />
        </div>
      </div>
  );
}

export default ProductDetails;
