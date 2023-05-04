import React from "react";
import {BasketItem} from "./BasketItem";

import "./style.css";

export const BasketList = (
  { order = [],
    handleBasketShow = Function.prototype,
    removeFromBasket = Function.prototype,
    incQuantity = Function.prototype,
    decQuantity = Function.prototype,
  }) => {
  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price * el.quantity;
  }, 0)
  return (
    <div className="basket-list">
      <ul className="collection">
        <li className="collection-item active">Cart</li>

        { order.length ? order.map(item => (
          <BasketItem
            key={item.id}
            {...item}
            removeFromBasket={removeFromBasket}
            incQuantity={incQuantity}
            decQuantity={decQuantity}
          />
          )
        ) : <li className="collection-item">Empty, you can change this..
              <i className="material-icons">sentiment_very_satisfied</i></li>
        }
        <li className="collection-item active">Total: <b>{totalPrice}</b> $</li>
        <button
          className="btn btn-big"
        >Pay
        </button>
        <i
          className="material-icons basket-close"
          onClick={handleBasketShow}>
          close
        </i>
      </ul>
    </div>
  )
}