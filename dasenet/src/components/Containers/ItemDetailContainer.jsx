import React from "react";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Item.css";
import { getFetch } from "../../utils/Mock";
import { useParams } from "react-router-dom";
import ItemListDetail from "../ItemList/ItemListDetail";
import { getFirestore } from "../../Services/getFirebase";

export default function ItemDetailContainer() {
  const [productosID, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { idProducto } = useParams();

  useEffect(() => {
    const dbQuery = getFirestore();
    dbQuery
      .collection("items")

      .get()
      .then((resp) => {
        setProductos(
          resp.docs.map((item) => ({ id: item.id, ...item.data() }))
        );
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
          <ItemListDetail productos={productosID} />
        )}
      </div>
    </>
  );
}
