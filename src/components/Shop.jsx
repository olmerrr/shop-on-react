import React, {useState, useEffect} from "react";
import { Preloader } from "./Preloader";
import {GoodsList} from "./GoodsList/GoodsList";

import {API_KEY, API_URL} from "../config";
export const Shop = () => {
  const [goods, setGoods] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
     {
       isLoading ? <Preloader /> : <GoodsList goods={goods} />
     }
   </main>
  )
}