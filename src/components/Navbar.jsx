import { Container, NavbarBrand, NavDropdown,Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

export default function NavbarMenu(){
  const navigate = useNavigate()
    return (
        <>


<Navbar bg="dark"  variant="dark" expand="lg">
  <Container>
    <Link to="/" style={{textDecoration: "none"}}><Navbar.Brand href="#home">My movie collection</Navbar.Brand></Link>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link onClick={() => navigate("lancamentos")} >Lançamentos </Nav.Link>
       
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
       
        </>
    )
}