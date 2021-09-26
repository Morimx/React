import React from "react";
import { CartContextUse } from "../../Context/CartContext.jsx";
import Carrito from "../Cart/Carrito.jsx";
import "./Item.css";
import { Link } from "react-router-dom";

export default function CartContainer() {
  const messageConditional = (
    <div className="text-center">
      <div className="fonts text-center">Ops!</div>
      <div className="card-body">
        <h4 className="fonts text-center">¡Tu carrito está vacío!</h4>
        <p className="fonts text-center">
          ¿No sabés qué comprar? Revisa nuestros productos!
        </p>
        <Link to="/" className="btn btn-primary">
          Ir a comprar
        </Link>
      </div>
    </div>
  );
  const { cart } = CartContextUse();

  return <>{cart.length === 0 ? messageConditional : <Carrito />}</>;
}
