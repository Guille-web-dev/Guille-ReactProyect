import CartCards from "./CartCards";
import ProductsInCartHeader from "./productsInCartHeader";
import TotalToPay from "./TotalToPay";
import "./CartStyles.css";

function ProductsInCart({cartItem}) {
 
  return (
    <div className="cartContainerParent">
      <div className="mainContainerCart">
        <div>
          <ProductsInCartHeader />
        </div>
        <div>
          {cartItem.map((product) => (
            <CartCards product={product} key={product.id} />
          ))}
        </div>
      </div>
      <div className="totalToPay">
        <TotalToPay />
      </div>
    </div>
  );
}

export default ProductsInCart;
