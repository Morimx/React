import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../Context/CartContext";
import "./ItemCount.css";

export const ItemCount = ({ initial, onAdd, producto }) => {
  const [count, setCount] = useState(initial);
  const [context, setContext] = useContext(CartContext);

  function sumar() {
    if (count < producto.cantidad) {
      setCount(count + 1);
    } else {
      alert("No hay mas existencias en stock");
    }
  }

  function restar() {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  const isInCarrito = (producto) => {
    let checkCarrito = false;
    context.forEach((cartItem) => {
      if (cartItem.item.id === producto.id) {
        checkCarrito = true;
      }
    });
    return checkCarrito;
  };

  const agregarCarrito = (producto, count) => {
    onAdd(count);
    const estA = isInCarrito(producto);
    if (estA) {
      alert("Este producto ya se encuentra en el carrito");
    } else {
      setContext([...context, { item: producto, quantity: count }]);
    }
  };

  return (
    <>
      <div className="d-flex flex-column bd-highlight mb-3">
        <label className=" text-center precio">
          ${count * producto.precio}
        </label>
        <div className="bd-highlight text-center">
          <button onClick={restar} className="buyBtn">
            -
          </button>
          <label className="buyBtn" id="counter" type="text">
            {count}
          </label>

          <button onClick={sumar} className="buyBtn">
            +
          </button>
        </div>
        <div className="bd-highlight">
          <Link to="/">
            <button className="buyBtn">Volver</button>
          </Link>
          <button
            onClick={() => agregarCarrito(producto, count)}
            className="buyBtn"
          >
            Agregar al Carrito
          </button>
        </div>
      </div>
    </>
  );
};
