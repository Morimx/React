import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartContextUse = () => {
  return useContext(CartContext);
};

export default function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      const updateQty = [...cart];

      updateQty.map((qty) => {
        if (qty.item.id === item.id) {
          return (qty.quantity += quantity);
        }
      });
      setCart(updateQty);
    } else {
      return setCart([...cart, { item, quantity }]);
    }
  };

  const isInCart = (id) => cart.find((buscador) => buscador.item.id === id);

  const clear = () => setCart([]);

  const removeItem = (id) => {
    const cartFilter = cart.filter((removedor) => removedor.item.id !== id);

    setCart(cartFilter);
  };

  console.log("carrito", cart);
  return (
    <CartContext.Provider value={{ cart, addItem, clear, removeItem }}>
      {children}
    </CartContext.Provider>
  );
}
