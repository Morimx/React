import React from "react";
import Item from "./Items.jsx";

export default function ItemList({ productos }) {
  return (
    <>
      {productos.map((unidad) => (
        <Item productos={unidad} />
      ))}
    </>
  );
}
