import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { useCart } from "./cartContext";
import useFetch from "./services/useFetch";
import Button from "./Button";
import PageNotFound from "./PageNotFound";
import Select from "./Select";
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
      <Select
        label="What size?"
        choices={product.skus.map((s) => ({ id: s.sku, name: s.size }))}
        onChange={(e) => setSku(e.target.value)}
      />
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
