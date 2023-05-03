import React, {useState, useEffect} from "react";
import { Preloader } from "./Preloader";
import {GoodsList} from "./GoodsList/GoodsList";
import {Cart} from "./Cart";

import {API_KEY, API_URL} from "../config";
import {BasketList} from "./BasketList/BasketList";
export const Shop = () => {
  const [goods, setGoods] = useState([]);
  const [order, setOrder] = useState([]);

  const [isBasketShow, setBasketShow] = useState(false);
  const [isLoading, setLoading] = useState(true);

  const handleBasketShow = () => {
    setBasketShow(!isBasketShow);
  }
  const addToBasket = (item) => {
    const itemIndex = order.findIndex(orderItem => orderItem.id === item.id)
    if (itemIndex < 0) {
      const newItem = {
        ...item,
        quantity: 1
      };

      setOrder([...order, newItem]);
    } else {
      const newOrder = order.map((orderItem, index) => {
        if (index === itemIndex) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1
          }
        } else {
          return orderItem;
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
          setLoading(false);
        }
      })
      .catch(err => console.error(err));
  }, []);

  return (
   <main className="container content">
     { <Cart
        quantity={order.length}
        handleBasketShow={handleBasketShow}
        />
     }
     {
       isLoading ? <Preloader /> : <GoodsList goods={goods} addToBasket={addToBasket}/>
     }

     {
       isBasketShow && <BasketList
                         order={order}
                         handleBasketShow={handleBasketShow}
                        />
     }
   </main>
  )
}