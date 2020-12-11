import { useState, createContext } from "react";

export const CartContext = createContext();

export const StateCartProvider = (props) => {
  const [cartState, setCartState] = useState({});

  return (
    <CartContext.Provider value={[cartState, setCartState]}>
      {props.children}
    </CartContext.Provider>
  );
};
