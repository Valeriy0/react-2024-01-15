import React from "react";
import { Menu } from "./Menu/component";
import { Reviews } from "./Reviews/component";

export const Restaurant = ({ name, menu, reviews }) => {
  return (
    <div className="">
      <h1>{name}</h1>
      <Menu info={menu} />
      <Reviews info={reviews} />
      <hr />
    </div>
  )
}