import React from "react";

export default function Items({ productos }) {
  return (
    <div key={productos.id} className="card">
      <img
        className="card-img-top fotoproductos img-fluid"
        src={productos.foto}
        alt="Card foto cap"
      />
      <div className="card-body fotoproductos">
        <h5 className="card-title">{productos.nombre}</h5>
        {productos.descripcion}
      </div>

      <div className="card-footer">
        <button className="btn btn-outline-primary btn-block">
          Agregar al carrito ${productos.precio}
        </button>
      </div>
    </div>
  );
}
