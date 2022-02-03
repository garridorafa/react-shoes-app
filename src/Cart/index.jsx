import React from "react";
import { useNavigate } from "react-router-dom";

import useFetchAll from "../services/useFetchAll";
import { useCart } from "../cartContext";
import Button from "../Button";
import Spinner from "../Spinner";
import Select from "../Select";

const AVAILABLE_QUANTITIES = [
  { id: 1, name: "1" },
  { id: 2, name: "2" },
  { id: 3, name: "3" },
  { id: 4, name: "4" },
  { id: 5, name: "5" },
];

export default function Cart() {
  const { cart, dispatch } = useCart();
  const navigate = useNavigate();
  const urls = cart.map((i) => `products/${i.id}`);
  const { data: products, loading, error } = useFetchAll(urls);

  function renderItem(itemInCart) {
    const { id, sku, quantity } = itemInCart;
    const { price, name, image, skus } = products.find(
      (p) => p.id === parseInt(id)
    );
    const { size } = skus.find((s) => s.sku === sku);

    const handleChange = (e) =>
      dispatch({
        type: "updateQuantity",
        sku,
        quantity: parseInt(e.target.value),
      });

    return (
      <li key={sku} className="cart-item">
        <img src={`/images/${image}`} alt={name} />
        <div>
          <h3>{name}</h3>
          <p>${price}</p>
          <p>Size: {size}</p>
          <p>
            <Select
              label="Remove"
              value={quantity}
              onChange={handleChange}
              choices={AVAILABLE_QUANTITIES}
            />
          </p>
        </div>
      </li>
    );
  }

  if (loading) return <Spinner />;
  if (error) throw error;

  const numItemInCart = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <section id="cart">
      <h1>
        {numItemInCart === 0
          ? "Your cart is empty"
          : `${numItemInCart} Item${numItemInCart > 1 ? "s" : ""} in My Cart`}
      </h1>
      <ul>{cart.map(renderItem)}</ul>
      {cart.length > 0 && (
        <Button
          primary
          onClick={() => navigate("/checkout")}
          label="Checkout"
        />
      )}
    </section>
  );
}
