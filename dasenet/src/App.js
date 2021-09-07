//import logo from './logo.svg';
import "./App.css";
import Navbar from "../src/components/NavBar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemListContainer from "./components/Containers/ItemListContainer";

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer />
    </>
  );
}

export default App;
