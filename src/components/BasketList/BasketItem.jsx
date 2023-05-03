import React from "react";
export const BasketItem = ({
  id,
  name,
  price,
  quantity,
  removeFromBasket
}) => {
  return (
    <div className="basket-item">
      <li className="collection-item" id={id}>

        {name} x {quantity} = {price * quantity} $
        <span className="secondary-content">
          <i
            className="material-icons basket-remove"
            onClick={() => removeFromBasket(id)}
          >clear</i>
        </span>
      </li>
    </div>
  )
}