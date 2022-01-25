import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Button from "./Button";
import { useCart } from "./cartContext";
import PageNotFound from "./PageNotFound";
import useFetch from "./services/useFetch";
import Spinner from "./Spinner";

export default function Detail() {
  const { dispatch } = useCart();
  const { id } = useParams();
  const navigate = useNavigate();
  const [sku, setSku] = useState("");
  const { data: product, error, loading } = useFetch(`products/${id}`);

  if (loading) return <Spinner />;
  if (!product) return <PageNotFound />;
  if (error) throw error;

  return (
    <div id="detail">
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p id="price">${product.price}</p>
      <select id="size" value={sku} onChange={(e) => setSku(e.target.value)}>
        <option value="">What size?</option>
        {product.skus.map((s) => (
          <option key={s.sku} value={s.sku}>
            {s.size}
          </option>
        ))}
      </select>
      <p>
        <Button
          primary
          onClick={() => {
            dispatch({ type: "add", id, sku });
            navigate("/cart");
          }}
          disabled={!sku}
          label="Add to cart"
        />
      </p>
      <img src={`/images/${product.image}`} alt={product.category} />
    </div>
  );
}
