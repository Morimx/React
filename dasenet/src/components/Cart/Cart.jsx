import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../Context/CartContext";

const Cart = () => {
  const [context] = useContext(CartContext);

  const messageConditional = (
    <div className="card text-center cart-message">
      <div className="card-header">Ops!</div>
      <div className="card-body">
        <h5 className="card-title">¡Tu carrito está vacío!</h5>

        <Link to="/" className="btn btn-primary">
          Volver a la pagina principal
        </Link>
        <div>
          {context.map((producto) => {
            return (
              <>
                {" "}
                <div>
                  {producto.item.nombre} {producto.quantity}{" "}
                  {producto.item.precio * producto.quantity}
                </div>
              </>
            );
          })}
        </div>
        <button>Limpiar carrito</button>
      </div>
      <div className="card-footer text-muted">D@senet</div>
    </div>
  );

  return <div className="cart"> {messageConditional}</div>;
};

export default Cart;
