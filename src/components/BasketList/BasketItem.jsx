import React from "react";
export const BasketItem = ({
  id,
  name,
  price,
  quantity
  }) => {
  return (
    <div className="basket-item">
      <li className="collection-item" id={id}>

        {name} x {quantity} = {price}
        <span className="secondary-content">
          <i className="material-icons">clear</i>
        </span>
      </li>
    </div>
  )
}