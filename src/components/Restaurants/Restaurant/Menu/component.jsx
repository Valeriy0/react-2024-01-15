import React from "react";

export const Menu = ({ info }) => {
  return (
    <div className="">
      <h3>Menu</h3>
      <ul>
        {info.map((item, index) => {
          return (
            <li className="" key={index}>
              <span>{item?.name}</span>
              <span>({item?.price}$)</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}