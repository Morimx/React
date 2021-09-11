//import logo from './logo.svg';
import "./App.css";
import Navbar from "../src/components/NavBar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemListContainer from "./components/Containers/ItemListContainer";
import CartContainer from "./components/Containers/CartContainer";

function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route exact path="/" component={ItemListContainer} />
        <Route exact path="/cart" component={CartContainer} />
      </Switch>
    </Router>
  );
}

export default App;
