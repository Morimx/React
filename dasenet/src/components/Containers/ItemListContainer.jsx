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
        <h2 className="fonts">Loading...</h2>
      ) : (
        <ItemList productos={productosState} />
      )}
    </div>
  );
}
