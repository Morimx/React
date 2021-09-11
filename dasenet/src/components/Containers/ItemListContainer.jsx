import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Item.css";
import { getFetch } from "../../utils/Mock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

export default function Item() {
  const [productosState, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { idCategoria } = useParams();

  console.log(idCategoria);
  useEffect(() => {
    if (idCategoria) {
      getFetch
        .then((res) => {
          setProductos(res.filter((prod) => prod.tipo === idCategoria));
          setLoading(false);
        })
        .catch((error) => console.log(error));
    } else {
      getFetch
        .then((res) => {
          setProductos(res);
          setLoading(false);
        })
        .catch((error) => console.log(error));
    }
  }, [idCategoria]);

  return (
    <div className="d-flex justify-content-center mr-2 mt-5">
      {loading ? (
        <img
          alt="Loading"
          src="https://i.pinimg.com/originals/90/80/60/9080607321ab98fa3e70dd24b2513a20.gif"
        />
      ) : (
        <ItemList productos={productosState} />
      )}
    </div>
  );
}
