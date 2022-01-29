import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

import useFetch from "./services/useFetch";
import PageNotFound from "./PageNotFound";
import Spinner from "./Spinner";
import Select from "./Select";

export default function App() {
  const [size, setSize] = useState("");
  const { category } = useParams();

  const {
    data: products,
    error,
    loading,
  } = useFetch("products?category=" + category);

  const renderProduct = (p) => (
    <div key={p.id} className="product">
      <Link to={`/${category}/${p.id}`}>
        <img src={`/images/${p.image}`} alt={p.name} />
        <h3>{p.name}</h3>
        <p>${p.price}</p>
      </Link>
    </div>
  );

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
          choices={[
            { id: "7", name: 7 },
            { id: "8", name: 8 },
            { id: "9", name: 9 },
          ]}
          value={size}
          onChange={(e) => setSize(e.target.value)}
        />
        {size && <h2>Found {filterProducts.length} items</h2>}
      </section>
      <section id="products">{filterProducts.map(renderProduct)}</section>
    </>
  );
}
