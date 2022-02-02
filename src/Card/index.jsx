import React from "react";
import { Link } from "react-router-dom";

import "./Card.css";

export default function Card({ id, title, image, price, category }) {
  return (
    <div className="card" key={id || title}>
      <Link to={`/${category}/${id}`}>
        <img src={`/images/${image}`} alt={title} />
        <h3>{title}</h3>
        <p>{price ? "$" + price : "-"}</p>
      </Link>
    </div>
  );
}
