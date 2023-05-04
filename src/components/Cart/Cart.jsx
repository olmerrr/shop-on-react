import React from "react";

import "./style.css"

export const Cart = ({ quantity = 0, handleBasketShow = Function.prototype}) => {
  return <div className="cart" onClick={handleBasketShow}>
    <i className="material-icons cart-icon">shopping_basket</i>
    {
      quantity ? <span className="cart-quantity">{quantity}</span> : ""
    }
  </div>
}