import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import CartWiget from "./CartWiget/CartWiget.jsx";
import Brand from "./Logo.jsx";
import { Link } from "react-router-dom";

function Navbarxd() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <Brand />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="links" as={Link} to="/categoria/servicios">
              Servicios
            </Nav.Link>

            <NavDropdown title="Componentes" id="collasible-nav-dropdown">
              <NavDropdown.Item className="links" as={Link} to="/categoria/CPU">
                Microprocesadores
              </NavDropdown.Item>

              <NavDropdown.Item
                className="links"
                as={Link}
                to="/categoria/Memorias"
              >
                Memorias Ram
              </NavDropdown.Item>

              <NavDropdown.Item className="links" as={Link} to="/categoria/VGA">
                Placas de video
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav></Nav>
        </Navbar.Collapse>
        <Link to="/carrito">
          <CartWiget />
        </Link>
      </Container>
    </Navbar>
  );
}

export default Navbarxd;
