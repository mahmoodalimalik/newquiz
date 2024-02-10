import Container from "react-bootstrap/Container";
import NavItem from "react-bootstrap/esm/NavItem";
import NavLink from "react-bootstrap/esm/NavLink";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function QuizAppHeader() {
  return (
    <Navbar expand="lg"  bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand href="Quiz Home">QUIZ APPLICATION</Navbar.Brand>
        

        <Nav.Link href="Quiz Home">Popular Quizzes</Nav.Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Container>
    </Navbar>
  );
}

export default QuizAppHeader;

