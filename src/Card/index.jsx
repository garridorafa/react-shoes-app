import React from "react";
import { Link } from "react-router-dom";

import "./Card.css";

export default function Card({ id, title, image, price, category }) {
  return (
    <div key={id || title} className="product">
      {/* <Link to={`/${category}/${id}`}> */}
      <img src={`/images/${image}`} alt={title} />
      <h3>{title}</h3>
      <p>${price || "-"}</p>
      {/* </Link> */}
    </div>
  );
}
