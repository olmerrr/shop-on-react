import React from "react";
export const BasketItem = ({
  id,
  name,
  price,
  quantity,
  removeFromBasket,
  incQuantity,
  decQuantity,
}) => {
  return (
    <div className="basket-item">
      <li className="collection-item row-item" id={id}>

        {name}

        <span
          className="material-icons quantity-icon"
          onClick={()=>incQuantity(id)}
        > add
        </span>
        x
        {quantity}

        <span
          className="material-icons quantity-icon"
          onClick={()=>decQuantity(id)}
        > remove
        </span>

        = {price * quantity} $


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