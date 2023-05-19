import React from "react";
import { useParams, useMatch } from "react-router-dom";

function ProductCard(props) {

  if (!props.products || !props.products.length) {
    return <h2>Loading item data...</h2>;
  }

  const params = useParams();
  const selectedProduct = props.products.find(
    (product) => product.id === Number(params.itemID)
  );

  return (
    <div className="item-wrapper">
      <div className="item-header">
        <div className="image-wrapper">
          <img src={selectedProduct.image} alt={selectedProduct.title} style={{ height: '400px'}} />
        </div>
        <div className="item-title-wrapper">
          <h2>{selectedProduct.title}</h2>
          <h4>${selectedProduct.price}</h4>
          <p className="item-description">{selectedProduct.description}</p>
        </div>
      </div>
    </div>
  );
}
export default ProductCard;