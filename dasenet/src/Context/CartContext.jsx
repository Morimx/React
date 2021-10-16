import { createContext, useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const CartContext = createContext();

export const CartContextUse = () => {
  return useContext(CartContext);
};

export default function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [badge, setBadge] = useState(0);
  const [cartTotal, setCartTotal] = useState("");
  const [cartAmount, setCartAmount] = useState("");

  const MySwal = withReactContent(Swal);

  const badgeFunction = () => {
    let badgeFinal = 0;
    cart.forEach((x) => (badgeFinal += x.quantity));
    setBadge(badgeFinal);
  };

  useEffect(() => {
    badgeFunction();
  });

  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      const updateQty = [...cart];

      updateQty.forEach((element) => {
        if (element.item.id === item.id) {
          element.quantity += quantity;
          if (element.quantity > element.item.cantidad) {
            element.quantity = element.item.cantidad;
            MySwal.fire({
              didOpen: () => {
                MySwal.clickConfirm();
              },
            }).then(() => {
              return MySwal.fire({
                confirmButtonColor: "red",
                text: "No hay mas existencias en stock",
                icon: "error",
              });
            });
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

  useEffect(() => {
    const total = cart.reduce(
      (acc, unidad) => acc + unidad.quantity * unidad.item.precio,
      0
    );
    setCartTotal(total);
  }, [cart]);

  useEffect(() => {
    const amount = cart.reduce((acc, item) => acc + item.quantity, 0);
    setCartAmount(amount);
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        clear,
        removeItem,
        badge,
        cartTotal,
        cartAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
