import React from "react";

export default function ItemDetail({ productos }) {
  return (
    <>
      {productos.map((unidad) => (
        <div>
          <h1 className="fonts"> Detalles de {unidad.nombre}</h1>
          <span className="fonts">{unidad.descripcion}</span>
        </div>
      ))}
    </>
  );
}
