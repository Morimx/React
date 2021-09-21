import { useState } from "react";
import "./ItemDetail.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { ItemCount } from "./ItemCount";

export default function ItemDetail({ productos }) {
  const [statusBoton, setstatusBoton] = useState(true);

  const onAdd = (cant) => {
    console.log(cant);
    setstatusBoton(false);
  };

  return (
    <>
      {productos.map((unidad) => (
        <div
          className="row d-flex justify-content-center detail_container"
          key={unidad.id}
        >
          <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
            <img
              src={unidad.foto}
              className="imgDetail"
              alt={unidad.titulo}
            ></img>
          </div>
          <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
            <div className="d-flex text_container">
              <div className="bar"></div>
              <div className=" text-left">
                <h5 className="product_title fonts">{unidad.nombre}</h5>
                <p className="product_desc text-center fonts">
                  {unidad.descripcion}
                </p>
                <p className=" card-text text-center fonts">{unidad.precio}</p>
                <div className="buy d-flex flex-row containerBtn">
                  <div>
                    {statusBoton ? (
                      <ItemCount
                        initial={1}
                        stock={unidad.cantidad}
                        onAdd={onAdd}
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
      ))}
    </>
  );
}
