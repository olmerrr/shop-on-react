import React from "react";
import {GoodsItem} from "./GoodsItem";

export const GoodsList = (props) => {
  const {goods = []} = props;

  if (!goods) {
    return  <h2>Nothing..</h2>
  }
  return <div className="goods">
      {goods.map(item => <GoodsItem key={item.id} {...item}/>)}
    </div>

}