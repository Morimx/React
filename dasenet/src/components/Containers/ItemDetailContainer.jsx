import React from "react";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Item.css";
import { getFetch } from "../../utils/Mock";
import { useParams } from "react-router-dom";
import ItemListDetail from "../ItemList/ItemListDetail";

export default function ItemDetailContainer() {
  const [productosID, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { idProducto } = useParams();

  useEffect(() => {
    if (idProducto) {
      getFetch.then((res) => {
        setProductos(res.filter((prod) => prod.id === idProducto));
        setLoading(false);
      });
    } else {
      getFetch
        .then((res) => {
          setProductos(res);
          setLoading(false);
        })
        .catch((error) => console.log(error));
    }
  }, [idProducto]);

  return (
    <>
      <div className="d-flex justify-content-center mt-3">
        {loading ? (
          <img
            alt="Loading"
            src="https://i.pinimg.com/originals/90/80/60/9080607321ab98fa3e70dd24b2513a20.gif"
          />
        ) : (
          <ItemListDetail productos={productosID} />
        )}
      </div>
    </>
  );
}
