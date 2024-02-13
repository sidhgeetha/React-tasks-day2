import React, { useState } from "react";
import "./style/Card.css";


const Card = ({ item, index, cartCount, setCartCount }) => {
  const [status, setStatus] = useState(true);

  const removeCart = () => {
    setCartCount(cartCount - 1);
    setStatus(true);
  };

  const addCart = () => {
    setCartCount(cartCount + 1);
    setStatus(false);
  };

  return (
    <div key={index} className="col mb-5">
      <div className="card h-100">
        {/* Product image */}
        <img className="card-img-top" src={item.image} alt="Product" />
        {/* Product details */}
        <div className="card-body p-4">
          <div className="text-center">
            {/* Product name */}
            <h5 className="fw-bolder">{item.name}</h5>
            {/* Product price */}
            <span
              className="price text-decoration-line-through"
              class={
                index === 1 || index === 2 || index === 4 || index === 6 ?  item.disableText : "" }
 >
              {item.actualPrice}
            </span>
            <span >{item.salePrice}</span>

           
          </div>
        </div>
        {/* Product actions */}
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            {status ? (
              <button
                className="btn btn-outline-dark mt-auto"
                onClick={addCart}
              >
                Add to cart
              </button>
            ) : (
              <button
                className="btn btn-outline-dark mt-auto"
                onClick={removeCart}
              >
                Remove Cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
