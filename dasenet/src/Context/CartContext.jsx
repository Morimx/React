import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartContextUse = () => {
  return useContext(CartContext);
};

export default function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [badge, setBadge] = useState(0);

  const badgeFunction = () => {
    let badgeFinal = 0;
    cart.forEach((x) => (badgeFinal += x.quantity));
    setBadge(badgeFinal);
  };

  useEffect(() => {
    badgeFunction();
  }, [cart]);

  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      const updateQty = [...cart];
      updateQty.map((element) => {
        if (element.item.id === item.id) {
          element.quantity += quantity;
          if (element.quantity > element.item.cantidad) {
            alert("Se agoto el stock");
            element.quantity = element.item.cantidad;
          }
        }
      });
      setCart(updateQty);
    } else {
      setCart([...cart, { item, quantity }]);
    }
  };

  const isInCart = (id) => cart.find((buscador) => buscador.item.id === id);

  const clear = () => setCart([]);

  const removeItem = (id) => {
    const cartFilter = cart.filter((removedor) => removedor.item.id !== id);

    setCart(cartFilter);
  };

  return (
    <CartContext.Provider value={{ cart, addItem, clear, removeItem, badge }}>
      {children}
    </CartContext.Provider>
  );
}
