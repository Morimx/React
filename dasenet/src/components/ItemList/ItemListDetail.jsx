import React from "react";
import ItemDetail from "./ItemDetail";

export default function ItemListDetail({ productos }) {
  return (
    <>
      {productos.map((unidad) => (
        <ItemDetail productos={unidad} />
      ))}
    </>
  );
}
