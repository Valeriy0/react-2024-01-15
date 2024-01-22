import React from 'react'
import ReactDOM from 'react-dom/client'
import { restaurants } from '../materials/mock.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div className="">
    <h1>Homework 1</h1>
    {/* rest 1 */}
    <div className="">
      <h2>{restaurants?.[0]?.name} Restaurant</h2>
      <div className="">
        <h3>Menu</h3>
        <ul>
          <li>{restaurants?.[0]?.menu?.[0]?.name} ({restaurants?.[0]?.menu?.[0]?.price}$)</li>
          <li>{restaurants?.[0]?.menu?.[1]?.name} ({restaurants?.[0]?.menu?.[1]?.price}$)</li>
          <li>{restaurants?.[0]?.menu?.[2]?.name} ({restaurants?.[0]?.menu?.[2]?.price}$)</li>
        </ul>
      </div>
      <div className="">
        <h3>Reviews</h3>
        <ul>
          <li>{restaurants?.[0]?.reviews?.[0]?.user} - {restaurants?.[0]?.reviews?.[0]?.text}</li>
          <li>{restaurants?.[0]?.reviews?.[1]?.user} - {restaurants?.[0]?.reviews?.[1]?.text}</li>
        </ul>
      </div>
    </div>
    <hr/>
    {/* rest 2 */}
    <div className="">
      <h2>{restaurants?.[1]?.name} Restaurant</h2>
      <div className="">
        <h3>Menu</h3>
        <ul>
          <li>{restaurants?.[1]?.menu?.[0]?.name} ({restaurants?.[1]?.menu?.[0]?.price}$)</li>
          <li>{restaurants?.[1]?.menu?.[1]?.name} ({restaurants?.[1]?.menu?.[1]?.price}$)</li>
        </ul>
      </div>
      <div className="">
        <h3>Reviews</h3>
        <ul>
          <li>{restaurants?.[1]?.reviews?.[0]?.user} - {restaurants?.[1]?.reviews?.[0]?.text}</li>
          <li>{restaurants?.[1]?.reviews?.[1]?.user} - {restaurants?.[1]?.reviews?.[1]?.text}</li>
          <li>{restaurants?.[1]?.reviews?.[2]?.user} - {restaurants?.[1]?.reviews?.[2]?.text}</li>
        </ul>
      </div>
    </div>
    <hr/>
    {/* rest 3 */}
    <div className="">
      <h2>{restaurants?.[2]?.name} Restaurant</h2>
      <div className="">
        <h3>Menu</h3>
        <ul>
          <li>{restaurants?.[2]?.menu?.[0]?.name} ({restaurants?.[2]?.menu?.[0]?.price}$)</li>
          <li>{restaurants?.[2]?.menu?.[1]?.name} ({restaurants?.[2]?.menu?.[1]?.price}$)</li>
          <li>{restaurants?.[2]?.menu?.[2]?.name} ({restaurants?.[2]?.menu?.[2]?.price}$)</li>
        </ul>
      </div>
      <div className="">
        <h3>Reviews</h3>
        <ul>
          <li>{restaurants?.[2]?.reviews?.[0]?.user} - {restaurants?.[2]?.reviews?.[0]?.text}</li>
        </ul>
      </div>
    </div> 
    <hr/>
     {/* rest 4 */}
     <div className="">
      <h2>{restaurants?.[3]?.name} Restaurant</h2>
      <div className="">
        <h3>Menu</h3>
        <ul>
          <li>{restaurants?.[3]?.menu?.[0]?.name} ({restaurants?.[3]?.menu?.[0]?.price}$)</li>
          <li>{restaurants?.[3]?.menu?.[1]?.name} ({restaurants?.[3]?.menu?.[1]?.price}$)</li>
        </ul>
      </div>
      <div className="">
        <h3>Reviews</h3>
        <ul>
          <li>{restaurants?.[3]?.reviews?.[0]?.user} - {restaurants?.[3]?.reviews?.[0]?.text}</li>
          <li>{restaurants?.[3]?.reviews?.[1]?.user} - {restaurants?.[3]?.reviews?.[1]?.text}</li>
        </ul>
      </div>
    </div>
  </div>
)