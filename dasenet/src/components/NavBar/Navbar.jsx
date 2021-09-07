import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import CartWiget from "./CartWiget/CartWiget.jsx";
import Brand from "./Logo.jsx";

function Navbarxd() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <Brand />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Servicios</Nav.Link>
            <Nav.Link href="#pricing"></Nav.Link>
            <NavDropdown title="Componentes" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Microprocesadores
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Memorias Ram
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Placas de video
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Presupuesto personalizado
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav></Nav>
        </Navbar.Collapse>
        <CartWiget />
      </Container>
    </Navbar>
  );
}

export default Navbarxd;
