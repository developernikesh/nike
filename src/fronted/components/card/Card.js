import React from "react";
import "./Card.css";

const Card = ({ title, imageUrl, description, price, slag, color }) => {
  return (
    <>
      <div className="card-container">
        <div className="image-container">
          <img src={imageUrl} alt="" />
        </div>
        <div className="card-slag">
          <h4>{slag}</h4>
        </div>
        <div className="title">
          <h3>{title}</h3>
        </div>
        <div className="card-body">
          <p>{description}</p>
        </div>
        <div className="color">
          <p>
            {color} {color > 1 ? "Colors" : "Color"}
          </p>
        </div>
        <div className="price">
          <p>${price}</p>
        </div>
      </div>
    </>
  );
};
export default Card;
