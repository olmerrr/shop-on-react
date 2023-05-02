import React from "react";

export const GoodsItem = (props) => {
  const {
    id,
    name,
    description,
    price,
    full_background
  } = props;

return ( <div className="card" id={id}>
    <div className="card-image">
      <img src={full_background} />
    </div>
    <div className="card-content">
      <h3 className="card-title">{name}</h3>
      <p>{description}</p>
      <p>{price} $</p>
      <div className="card-action">
        <button className="btn btn-big">Buy</button>
      </div>
    </div>
  </div>
)
}