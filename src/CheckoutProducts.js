import React from "react";
import "./checkoutProducts.css";
import { useStateValue } from "./StateProvider";

const CheckoutProducts = ({ price, image, id, title, rating }) => {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    //remove item from the basket
    dispatch({ type: "REMOVE_FROM_BASKET", payload: id });
  };
  return (
    <div className="checkoutProducts">
      <img className="checkoutProduct__image" src={image} alt="" />
      <div className="checkoutProduct__details">
        <strong>{title}</strong>
        <div className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </div>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, id) => (
              <p>⭐</p>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove from Basket</button>
      </div>
    </div>
  );
};

export default CheckoutProducts;
