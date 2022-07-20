// import { Link,NavLink } from "react-router-dom"
import { NavLink } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './css/navbar.css';
import image1 from './logo.jpg';
import { FiHome } from "react-icons/fi";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// eslint-disable-next-line
function MainNavbar(){

    return (
        <>
        <Navbar bg="light" className="shadow" expand="lg">
      <Container>
        <NavLink to="/">
          <img src={image1}  className="logo" /></NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Form className="d-flex ms-3">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          </Form>
          <NavLink to="/mk" >{FiHome}</NavLink>

            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    )

}


export default MainNavbar;