import { useState } from "react";
import { Link } from "react-router-dom";
import "./ItemCount.css";
export const ItemCount = ({ stock, initial, onAdd, precioDelProducto }) => {
  const [count, setCount] = useState(initial);

  function sumar() {
    if (count < stock) {
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
  const agregarCarrito = () => {
    onAdd(count);
  };

  return (
    <>
      <div className="d-flex flex-column bd-highlight mb-3">
        <label className=" text-center precio">
          ${count * precioDelProducto}
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
          <button onClick={agregarCarrito} className="buyBtn">
            Agregar al Carrito
          </button>
        </div>
      </div>
    </>
  );
};
