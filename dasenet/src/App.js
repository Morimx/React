//import logo from './logo.svg';
import "./App.css";
import Navbar from "../src/components/NavBar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemListContainer from "./components/Container/ItemListContainer";


function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <ItemListContainer mensaje='Hola Bienvenidos' />
    </div>
  );
}

export default App;
