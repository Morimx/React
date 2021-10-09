import { Link } from "react-router-dom";
import { CartContextUse } from "../../Context/CartContext";
import Form from "../Form/Form";
import ScrollButton from "./ScrollButton";

export default function Carrito() {
  const { clear, removeItem, cart, cartTotal, finalizarCompra, switchCarrito } =
    CartContextUse();

  return (
    <>
      {finalizarCompra ? (
        <>
          <h1 className=" text-center fonts" id="tucarrito">
            Tu Carrito
          </h1>
          <h2 className="fonts text-center">
            El total de tu carrito es: {cartTotal}
          </h2>
          <div>
            <div className="d-flex justify-content-center">
              <Link to="/">
                <button className="btn backBtn">Volver</button>
              </Link>
              <button className="btn buyBtn" onClick={clear}>
                Limpiar Carrito
              </button>
            </div>
            <div className="d-flex justify-content-center">
              <button className="btn terminarBtn" onClick={switchCarrito}>
                Finalizar Compra
              </button>
            </div>

            <div className="container-fluid ">
              <div className="row d-flex justify-content-center ">
                {cart.map((unidad) => (
                  <div
                    className="row d-flex justify-content-center detail_container py-2"
                    key={unidad.item.id}
                  >
                    <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
                      <img
                        src={unidad.item.foto}
                        className="ml-4 mb-3 imgDetail"
                        alt={unidad.item.titulo}
                      ></img>
                    </div>
                    <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
                      <div className="d-flex text_container">
                        <div className="bar"></div>
                        <div className=" text-left">
                          <h5 className="product_title fonts">
                            {unidad.item.nombre}
                          </h5>
                          <p className="product_desc text-center fonts">
                            Cantidad: {unidad.quantity}
                          </p>
                          <p className=" card-text text-center fonts">
                            Precio Final: {unidad.quantity * unidad.item.precio}
                          </p>

                          <div className="buy d-flex containerBtn">
                            <button
                              className="btn buyBtn"
                              onClick={() => removeItem(unidad.item.id)}
                            >
                              Quitar Item
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <ScrollButton></ScrollButton>
        </>
      ) : (
        <Form finalizarCompra={finalizarCompra} />
      )}
    </>
  );
}
