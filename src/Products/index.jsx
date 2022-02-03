import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

import useFetch from "../services/useFetch";
import PageNotFound from "../PageNotFound";
import Spinner from "../Spinner";
import Select from "../Select";
import Card from "../Card";

const AVAILABLE_SIZES = [
  { id: "7", name: 7 },
  { id: "8", name: 8 },
  { id: "9", name: 9 },
];

export default function App() {
  const [size, setSize] = useState("");
  const { category } = useParams();

  const {
    data: products,
    error,
    loading,
  } = useFetch("products?category=" + category);

  const filterProducts = size
    ? products.filter((product) =>
        product.skus.find((s) => s.size === parseInt(size))
      )
    : products;

  if (error) throw error;
  if (loading) return <Spinner />;
  if (!products.length) return <PageNotFound />;

  return (
    <>
      <section id="filters">
        <label htmlFor="size">Filter by Size:</label>{" "}
        <Select
          label="All sizes"
          choices={AVAILABLE_SIZES}
          value={size}
          onChange={(e) => setSize(e.target.value)}
        />
        {size && <h2>Found {filterProducts.length} items</h2>}
      </section>
      <section id="products">
        {filterProducts.map((p) => (
          <Card
            id={p.id}
            title={p.name}
            image={p.image}
            price={p.price}
            category={category}
          />
        ))}
      </section>
    </>
  );
}
