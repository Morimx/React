import { useState } from "react";
import "./ItemDetail.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { ItemCount } from "./ItemCount";

export default function ItemDetail({ productos }) {
  const [statusBoton, setstatusBoton] = useState(true);

  const onAdd = (count) => {
    console.log(count * productos.precio);
    setstatusBoton(false);
  };

  return (
    <>
      <div
        className="row d-flex justify-content-center detail_container"
        key={productos.id}
      >
        <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
          <img
            src={productos.foto}
            className="imgDetail"
            alt={productos.titulo}
          ></img>
        </div>
        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
          <div className="d-flex text_container">
            <div className="bar"></div>
            <div className=" text-left">
              <h5 className="product_title fonts">{productos.nombre}</h5>
              <p className="product_desc text-center fonts">
                {productos.descripcion}
              </p>

              <div className="buy d-flex flex-row containerBtn">
                <div>
                  {statusBoton ? (
                    <ItemCount
                      initial={1}
                      stock={productos.cantidad}
                      onAdd={onAdd}
                      precioDelProducto={productos.precio}
                    />
                  ) : (
                    <Link to="/cart">
                      <button className="btn buyBtn">Terminar Compra</button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      ))
    </>
  );
}
