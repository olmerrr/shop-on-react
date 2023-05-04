import React, {useState, useEffect} from "react";
import { Preloader } from "../layout/Preloader";
import {Alert} from "../layout/Alert";

import {GoodsList} from "./GoodsList/GoodsList";
import {Cart} from "./Cart/Cart";
import {BasketList} from "./BasketList/BasketList";

import {API_KEY, API_URL} from "../config";
export const Shop = () => {
  const [goods, setGoods] = useState([]);
  const [order, setOrder] = useState([]);
  const [alertName, setAlertName] = useState("");

  const [isBasketShow, setBasketShow] = useState(false);
  const [isLoading, setLoading] = useState(true);

  const closeAlert = () => {
    setAlertName("");
  }
  const handleBasketShow = () => {
    setBasketShow(!isBasketShow);
  }

  const removeFromBasket = (itemId) => {
    const newOrder = order.filter((item) => item.id !== itemId);
    setOrder(newOrder);
  }

  const incQuantity = (itemId) => {
    const newOrder = order.map((el) => {
      if (el.id === itemId) {
        const newQuantity = el.quantity + 1;
        return {
          ...el,
          quantity: newQuantity
        }
      }
      else {
        return  el;
      }
    })
    setOrder(newOrder);
  }

  const decQuantity = (itemId) => {
    const newOrder = order.map((el) => {
      if (el.id === itemId) {
        const newQuantity = el.quantity - 1;
        return {
          ...el,
          quantity: newQuantity >= 1 ? newQuantity  : 1
        }
      }
      else {
        return  el;
      }
    })
    setOrder(newOrder);
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
    setAlertName(item.name);
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
       alertName && <Alert name={alertName}  closeAlert={closeAlert}/>
     }

     {
       isLoading ? <Preloader /> : <GoodsList goods={goods} addToBasket={addToBasket}/>
     }

     {
       isBasketShow && <BasketList
                         order={order}
                         handleBasketShow={handleBasketShow}
                         removeFromBasket={removeFromBasket}
                         incQuantity={incQuantity}
                         decQuantity={decQuantity}
                        />
     }
   </main>
  )
}