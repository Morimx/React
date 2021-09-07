import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Item.css";
import { getFetch } from "../../utils/Mock";
import ItemList from "../ItemList/ItemList";

export default function Item() {
  const [productosState, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getFetch.then((res) => {
      setProductos(res);
      setLoading(false);
    });
  }, []);

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
