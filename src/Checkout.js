import React from "react";
import Subtotal from "./Subtotal";
import "./checkout.css";
import Product from "./Product";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProducts";

const Checkout = () => {
  const [{ basket }] = useStateValue();
  console.log("this is in the basket->", basket);
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg"
          alt=""
        />
        <div className="checkout__title">
          <h2>Your shopping Basket</h2>
          {basket.map((item, index) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              price={item.price}
              image={item.image}
              rating={item.rating}
            />
          ))}
          {/** basket item */}
          {/** basket item */}
          {/** basket item */}
          {/** basket item */}
          {/** basket item */}
          {/** basket item */}
        </div>
      </div>
      <div className="checkout__right">
        {/** subtotal component */}
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
