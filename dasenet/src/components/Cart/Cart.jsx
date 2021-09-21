//import React, { useContext } from "react";
import { Link } from "react-router-dom";
//import CartContext from "../../Context/CartContext";

const Cart = () => {
  const messageConditional = (
    <div className="card text-center cart-message">
      <div className="card-header">Ops!</div>
      <div className="card-body">
        <h5 className="card-title">¡Tu carrito está vacío!</h5>
        <p className="card-text">¿No sabés qué comprar?</p>
        <Link to="/" className="btn btn-primary">
          Ir a comprar
        </Link>
      </div>
      <div className="card-footer text-muted">D@senet</div>
    </div>
  );

  return <div className="cart"> {messageConditional}</div>;
};

export default Cart;
