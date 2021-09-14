import React from "react";
import { Link } from "react-router-dom";
import "../Containers/Item.css";

export default function Items({ productos }) {
  const linksbyid = `/Items/${productos.tipo}/${productos.id}`;

  return (
    <div key={productos.id} className="card cardsStyle">
      <img
        className="card-img-top fotoproductos img-fluid"
        src={productos.foto}
        alt="Card foto cap"
      />

      <div className="card-body fotoproductos">
        <h5 className="card-title text-center">{productos.nombre}</h5>
        <hr />

        <h5 className="precios">${productos.precio}</h5>
      </div>
      <hr />
      <div className="card-footer">
        <div className="d-flex justify-content-around">
          <Link to={linksbyid}>
            <button className="btn btn-primary" id={productos.id}>
              Detalle
            </button>
          </Link>

          <button className="btn btn-success boton">Agregar al carrito</button>
        </div>
      </div>
    </div>
  );
}
