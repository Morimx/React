import "./App.css";
import Navbar from "../src/components/NavBar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemListContainer from "./components/Containers/ItemListContainer";
import CartContainer from "./components/Containers/CartContainer";
import ItemDetailContainer from "./components/Containers/ItemDetailContainer";
import CartContextProvider from "./Context/CartContext";

function App() {
  return (
    <CartContextProvider>
      <Router>
        <Navbar />

        <Switch>
          <Route exact path="/" component={ItemListContainer} />
          <Route exact path="/carrito" component={CartContainer} />
          <Route
            exact
            path="/categoria/:idCategoria"
            component={ItemListContainer}
          />
          <Route
            exact
            path="/Items/:idCategoria/:idProducto"
            component={ItemDetailContainer}
          />
        </Switch>
      </Router>
    </CartContextProvider>
  );
}

export default App;
