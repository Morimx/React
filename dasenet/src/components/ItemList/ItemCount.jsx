import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../Context/CartContext";
import "./ItemCount.css";

export const ItemCount = ({
  stock,
  initial,
  onAdd,
  precioDelProducto,
  nombreDelProducto,
  idDelProducto,
}) => {
  const [count, setCount] = useState(initial);
  const [context, setContext] = useContext(CartContext);

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
  const agregarCarrito = (
    nombreDelProducto,
    idDelProducto,
    precioDelProducto,
    count
  ) => {
    onAdd(count);
    setContext([
      ...context,
      {
        nombre: nombreDelProducto,
        precio: precioDelProducto,
        id: idDelProducto,
        cantidad: count,
      },
    ]);
    console.log(context);
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
          <button
            onClick={() =>
              agregarCarrito(
                nombreDelProducto,
                idDelProducto,
                precioDelProducto,
                count
              )
            }
            className="buyBtn"
          >
            Agregar al Carrito
          </button>
        </div>
      </div>
    </>
  );
};
