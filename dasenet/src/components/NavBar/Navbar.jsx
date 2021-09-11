import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import CartWiget from "./CartWiget/CartWiget.jsx";
import Brand from "./Logo.jsx";
import { Link } from "react-router-dom";

function Navbarxd() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <Link to="/">
            <Brand />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to="/servicios">
              <Nav.Link href="#features">Servicios</Nav.Link>
            </Link>
            <Nav.Link href="#pricing"></Nav.Link>
            <NavDropdown title="Componentes" id="collasible-nav-dropdown">
              <Link to="/CPU">
                <NavDropdown.Item href="#action/3.1">
                  Microprocesadores
                </NavDropdown.Item>
              </Link>
              <Link to="/Memorias">
                <NavDropdown.Item href="#action/3.2">
                  Memorias Ram
                </NavDropdown.Item>
              </Link>
              <Link to="/VGA">
                <NavDropdown.Item href="#action/3.3">
                  Placas de video
                </NavDropdown.Item>
              </Link>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Presupuesto personalizado
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav></Nav>
        </Navbar.Collapse>
        <Link to="/cart">
          <CartWiget />
        </Link>
      </Container>
    </Navbar>
  );
}

export default Navbarxd;
