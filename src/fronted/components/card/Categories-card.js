import React from "react";
import "./Categories-card.css";

const CategoriesCard = ({ title, imageUrl }) => {
  return (
    <>
      <div className="card-container">
        <div className="image-container">
          <img className="category-img" src={imageUrl} alt="" />
        </div>
        <div className="title-card">
          <h3>{title}</h3>
        </div>
      </div>
    </>
  );
};
export default CategoriesCard;
