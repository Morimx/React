import { useState } from "react";
import { Link } from "react-router-dom";
import { CartContextUse } from "../../Context/CartContext";
import "./ItemCount.css";

export const ItemCount = ({ onAdd, producto }) => {
  const [count, setCount] = useState(1);
  const { MySwal } = CartContextUse();

  function sumar() {
    if (count < producto.cantidad) {
      setCount(count + 1);
    } else {
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

  function restar() {
    if (count > 1) {
      setCount(count - 1);
    }
  }

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
          <button className="buyBtn" onClick={() => onAdd(count)}>
            Agregar al Carrito
          </button>
        </div>
      </div>
    </>
  );
};
