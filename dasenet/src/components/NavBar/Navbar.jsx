import {Navbar, Container, Nav, NavDropdown} from "react-bootstrap";
import CartWiget from './CartWiget.jsx';
import Brand from "./Logo.jsx";

function Navbarxd() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <Brand />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">
              Componentes
            </Nav.Link>
            <Nav.Link href="#pricing"></Nav.Link>
            <NavDropdown
              title="Servicios"
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">
                Instalacion de camaras de seguridad
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Instalacion de Software
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Reparacion de PC
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
