import React from "react";

export const Reviews = ({ info }) => {
  return (
    <div className="">
      <h3>Menu</h3>
      <ul>
        {info.map((item, index) => {
          return (
            <li className="" key={index}>
              <span>{item?.user}</span>
              <span>{item?.text}</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}