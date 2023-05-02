import React from "react";

export const GoodsItem = (props) => {
  const {
    id,
    name,
    description,
    price,
    full_background,
    addToBasket = Function.prototype
  } = props;

return ( <div className="card">
    <div className="card-image">
      <img src={full_background} alt={name}/>
    </div>
    <div className="card-content">
      <div className="card-title">{name.length <= 12 ? name : name.slice(-7)}</div>
      <div>{description.length <= 24 ? description : description.slice(-20)}</div>
      <div className="price">{price} $</div>
        <button
          className="btn btn-big"
          onClick={() => addToBasket({
            id,
            name,
            price
          })}
        >Buy</button>
    </div>
  </div>
)
}