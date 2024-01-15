// Card.js

import React from "react";
import "./Cards.css";

const Card = ({
  title,
  content,
  imageUrl,
  onClick,
  productCode,
  onShareClick,
  onWhatsAppClick,
}) => {
  return (
    <div className="card custom-card" onClick={onClick}>
      <div className="d-flex justify-content-center align-items-center">
        {imageUrl && (
          <img
            className="card-img-top"
            src={process.env.PUBLIC_URL + imageUrl}
            alt={title}
            style={{ maxWidth: "100%", maxHeight: "100%" }}
          />
        )}
      </div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{content}</p>
        <p className="card-text">Product Code: {productCode}</p>
        <div className="d-flex justify-content-between align-items-center mt-4">
          <button
            className="btn btn-primary"
            onClick={() => onShareClick(title)}
          >
            Share
          </button>
          <button
            className="btn btn-success"
            onClick={() => onWhatsAppClick(title)}
          >
            WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
