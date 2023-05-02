import React from "react";
export const Cart = ({ quantity = 0 }) => {
  return <div className="cart">
    <i className="material-icons cart-icon">shopping_basket</i>
    { quantity ? <span className="cart-quantity">{quantity}</span> : "" }
  </div>
}