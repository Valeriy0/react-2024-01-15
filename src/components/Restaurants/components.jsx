import React from "react";
import { Restaurant } from "./Restaurant/component";

export const Restaurants = ({ info = [] }) => {
  return info.map((item, index) => {
    return  <Restaurant {...item} key={index} />
  })
}