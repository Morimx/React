//import logo from './logo.svg';
import "./App.css";
import Navbar from "../src/components/NavBar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemListContainer from "./components/Container/ItemListContainer";
import Item from "./components/Items/Item";


function App() {
  return (
    <>
        <Navbar />
      <ItemListContainer mensaje='Hola Bienvenidos' />
      <Item />
    </>
  );
}

export default App;
