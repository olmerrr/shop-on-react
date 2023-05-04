import React from "react";
import {GoodsItem} from "./GoodsItem";

import "./style.css";

export const GoodsList = (props) => {
  const {goods = [], addToBasket = Function.prototype} = props;

  if (!goods) {
    return  <h2>Nothing..</h2>
  }
  return <div className="goods">
      {goods.map((item, index) => <GoodsItem
        key={index}
        {...item}
        addToBasket={addToBasket}
      />
      )}
    </div>
}