import React from "react";
import amazon from "./Images/amazon.png";
import flipkart from "./Images/flipkart.png";
import shoe_image from "./Images/shoe_image.png";
export default function Main() {
  return (
    <div className="container">
      <div className="inner-container">
        <div className="left">
          <div className="text">
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>
              YOUR FEET DESERVE THE BEST AND WE`RE HERE TO HELP YOU WITH OUR
              SHOES. YOUR FEET DESERVE THE BEST AND WE`RE HERE TO HELP YOU WITH
              OUR SHOES
            </p>
          </div>

          <div className="btn-main">
            <button className="btn-shop">Shop Now</button>
            <button className="btn-trans">Category</button>
          </div>

          <div className="shopping">
            <p>Also Available On</p>
          </div>
          <div className="shopping-logo">
            <img src={flipkart} alt="" />
            <img src={amazon} alt="" />
          </div>
        </div>
      </div>

      <div className="right">
        <img src={shoe_image} alt="" />
      </div>
    </div>
  );
}
