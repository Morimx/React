import Item from "./Items.jsx";

export default function ItemList({ productos }) {
  return (
    <>
      {productos.map((unidad, index) => (
        <Item productos={unidad} key={index} />
      ))}
    </>
  );
}
