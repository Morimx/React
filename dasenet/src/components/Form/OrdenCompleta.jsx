import { Link } from "react-router-dom";

export default function OrdenCompleta(props) {
  return (
    <>
      <h1 className="fonts">
        {" "}
        Gracias por tu compra, tu identificador es: {props.ordenID}
      </h1>
      <Link to="/">
        <button className="btn botoncitoMagico ">
          Volver a la pagina principal
        </button>
      </Link>
    </>
  );
}
