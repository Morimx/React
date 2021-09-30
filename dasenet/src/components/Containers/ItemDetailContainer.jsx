import React from "react";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Item.css";
import { useParams } from "react-router-dom";
import { getFirestore } from "../../Services/getFirebase";
import ItemDetail from "../ItemList/ItemDetail";

export default function ItemDetailContainer() {
  const [productosID, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { idProducto } = useParams();

  useEffect(() => {
    const dbQuery = getFirestore();
    dbQuery
      .collection("items")
      .doc(idProducto)
      .get()
      .then((resp) => {
        setProductos({ id: resp.id, ...resp.data() });
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
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
          <ItemDetail productos={productosID} />
        )}
      </div>
    </>
  );
}
