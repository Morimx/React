//import logo from './logo.svg';
import "./App.css";
import Navbar from "../src/components/NavBar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemListContainer from "./components/Containers/ItemListContainer";
import CartContainer from "./components/Containers/CartContainer";
import ItemDetailContainer from "./components/Containers/ItemDetailContainer";

function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route exact path="/" component={ItemListContainer} />
        <Route exact path="/cart" component={CartContainer} />
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
  );
}

export default App;
