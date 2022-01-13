export default function cartReducer(cart, action) {
  switch (action.type) {
    case "empty":
      return [];

    case "add": {
      const { id, sku } = action;
      const itemInCart = cart.find((i) => i.sku === sku);
      if (itemInCart) {
        return cart.map((i) =>
          i.sku === sku ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...cart, { id, sku, quantity: 1 }];
      }
    }

    case "updateQuantity": {
      const { sku, quantity } = action;
      if (quantity) {
        return cart.map((i) => (i.sku === sku ? { ...i, quantity } : i));
      } else {
        return cart.filter((i) => i.sku !== sku);
      }
    }

    default:
      throw new Error("Unhandled action " + action.type);
  }
}
