import * as ReactBootStrap from "react-bootstrap";
import CartWiget from './CartWiget.jsx';
import Brand from "./Logo.jsx";

function Navbar() {
  return (
    <ReactBootStrap.Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark">
      <ReactBootStrap.Container>
        <ReactBootStrap.Navbar.Brand href="#home">
          <Brand />
        </ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
          <ReactBootStrap.Nav className="me-auto">
            <ReactBootStrap.Nav.Link href="#features">
              Componentes
            </ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="#pricing"></ReactBootStrap.Nav.Link>
            <ReactBootStrap.NavDropdown
              title="Servicios"
              id="collasible-nav-dropdown"
            >
              <ReactBootStrap.NavDropdown.Item href="#action/3.1">
                Instalacion de camaras de seguridad
              </ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item href="#action/3.2">
                Instalacion de Software
              </ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item href="#action/3.3">
                Reparacion de PC
              </ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Divider />
              <ReactBootStrap.NavDropdown.Item href="#action/3.4">
                Presupuesto personalizado
              </ReactBootStrap.NavDropdown.Item>
            </ReactBootStrap.NavDropdown>
          </ReactBootStrap.Nav>
          <ReactBootStrap.Nav></ReactBootStrap.Nav>
        </ReactBootStrap.Navbar.Collapse>
        <CartWiget />
      </ReactBootStrap.Container>
    </ReactBootStrap.Navbar>
  );
}

export default Navbar;
