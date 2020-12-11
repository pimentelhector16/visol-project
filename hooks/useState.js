import { useEffect, useState } from "react";

export const SHOP_STATES = {
  EMPTY_CART: null,
  NOT_KNOWN_CART: undefined,
};

export default function useCartState() {
  const [cartState, setCartState] = useState(SHOP_STATES.NOT_KNOWN_CART);

  useEffect(() => {}, []);

  return cartState;
}
