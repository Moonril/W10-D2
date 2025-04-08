import { Navbar, Container, Nav } from 'react-bootstrap'


const NavbarCustom = function(props){
    return (
        <Navbar collapseOnSelect expand="lg" data-bs-theme={props.tema} bg={props.tema} >
      <Container fluid>
        <Navbar.Brand href="#home">Libreria</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Browse</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

export default NavbarCustom