import { useState } from "react";
import "./form.css";
import { CartContextUse } from "../../Context/CartContext";
import { getFirestore } from "../../Services/getFirebase";
import OrderDetail from "./ordenDetails";
import firebase from "firebase";
import "firebase/firestore";
import OrdenCompleta from "./OrdenCompleta";

export default function Form() {
  const { cart, cartTotal, cartAmount, switchCarrito } = CartContextUse();
  let validacionForm;
  const [statusOrden, setStatusOrden] = useState(true);
  const [ordenID, setOrdenID] = useState("");
  const [formData, setFormData] = useState({
    Nombre: "",
    Telefono: "",
    email: "",
    Direccion: "",
  });

  const handleOnSubmit = () => {
    let orden = {};

    orden.buyer = formData;
    orden.total = cartTotal;
    orden.date = firebase.firestore.Timestamp.fromDate(new Date());
    orden.cantidad = cartAmount;
    orden.items = cart.map((cartItem) => {
      const id = cartItem.item.id;
      const title = cartItem.item.nombre;
      const price = cartItem.item.precio;
      const cantidad = cartItem.quantity;
      return { id, title, price, cantidad };
    });
    const db = getFirestore();
    db.collection("orders")
      .add(orden)
      .then(setStatusOrden(false))
      .then((resp) => setOrdenID(resp.id));
  };
  const handleOnChange = (change) => {
    setFormData({
      ...formData,
      [change.target.name]: change.target.value,
    });
  };

  if (
    !/\S+@\S+.\S+/.test(formData.email) ||
    formData.Telefono === "" ||
    formData.Direccion === "" ||
    formData.Pago === ""
  ) {
    validacionForm = true;
  } else {
    validacionForm = false;
  }

  return (
    <>
      {statusOrden ? (
        <div className="container-fluid containerForm ">
          <form onChange={handleOnChange}>
            <OrderDetail />
            <div className="form-group mt-3">
              <label htmlFor="name">Nombre y Apellido</label>
              <input
                type="text"
                className="form-control"
                placeholder="Ingrese su nombre y apellido completo"
                id="name"
                name="Nombre"
                defaultValue={formData.Nombre}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Teléfono</label>
              <input
                type="number"
                className="form-control"
                placeholder="Ingrese su telefono con codigo de area"
                id="phone"
                name="Telefono"
                defaultValue={formData.Telefono}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Correo Electrónico</label>
              <input
                type="email"
                className="form-control"
                placeholder="Ingrese su email"
                id="email"
                name="email"
                defaultValue={formData.email}
                required
              />
            </div>
            <div className="form-group ">
              <label htmlFor="address">Dirección</label>
              <input
                type="text"
                className="form-control"
                id="address"
                name="Direccion"
                defaultValue={formData.Direccion}
                placeholder="Ingrese su direccion"
                required
              />
            </div>
          </form>
          <div className="d-flex justify-content-between">
            {validacionForm ? null : (
              <button
                type="submit"
                className="btn botoncitoMagico"
                onClick={handleOnSubmit}
              >
                Enviar Orden
              </button>
            )}
            <button className="btn botoncitoMagico " onClick={switchCarrito}>
              Volver al carrito
            </button>
          </div>
        </div>
      ) : (
        <OrdenCompleta ordenID={ordenID}></OrdenCompleta>
      )}
    </>
  );
}
