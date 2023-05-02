import React, {useState, useEffect} from "react";
import { Preloader } from "./Preloader";
import {GoodsList} from "./GoodsList/GoodsList";
import {Cart} from "./Cart";

import {API_KEY, API_URL} from "../config";
export const Shop = () => {
  const [goods, setGoods] = useState([]);
  const [order, setOrder] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const addToBasket = (item) => {
    const itemIndex =  order.findIndex(orderItem => orderItem.id === item.id);
    if (itemIndex < 0) {
      const newItem = {
        ...item,
        quantity: 1
      }
      setOrder([...order, newItem]);
    } else  {
      const newOrder = order.map((orderItem, index) => {
        if (index === itemIndex) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1
          }
        } else {
          return item;
        }
      })
      setOrder(newOrder);
    }
  }

  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY
      }
    })
      .then(response => response.json())
      .then(data => {
        if (data.featured && data.featured.length) {
          setGoods(data.featured);
          setIsLoading(false);
        }
      })
      .catch(err => console.error(err))
  }, [])
  return (
   <main className="container content">
     <Cart
       quantity={order.length}
     />
     {
       isLoading ? <Preloader /> : <GoodsList goods={goods} addToBasket={addToBasket}/>
     }
   </main>
  )
}