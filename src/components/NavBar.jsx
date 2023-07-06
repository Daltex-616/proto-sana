import { Nav, Container, Navbar} from 'react-bootstrap';

function NavBar() {
  
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">AAAAA</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Eventos</Nav.Link>
            <Nav.Link href="#features">Noticias</Nav.Link>
            <Nav.Link href="#pricing">Quienes somos</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;