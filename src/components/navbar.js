// import { Link,NavLink } from "react-router-dom"
import { NavLink } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './css/navbar.css';
import image1 from './logo.jpg';
import { BiHome, BiVideo, BiBell , BiMessageRoundedDots } from "react-icons/bi";
import { BiFlag ,BiUserPlus, BiUserCircle } from "react-icons/bi";
import Form from 'react-bootstrap/Form';
import React, { useContext} from 'react'
import Avatar from 'react-avatar';
// eslint-disable-next-line
function MainNavbar(){


    return (
        <>
        <Navbar bg="light" className="shadow" fixed="top"  expand="lg">
      <Container>
        <NavLink to="/home">
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
          <NavLink to="/mk" className="ms-md-5" >{BiHome}</NavLink>

            <NavLink to="">{BiFlag}</NavLink>
            <NavLink to="">{BiUserPlus}</NavLink>
            <NavLink to="">{BiVideo}</NavLink>
            
          </Nav>
         
        </Navbar.Collapse>
      </Container>
      <NavLink to="/home" className="icon">{BiMessageRoundedDots}</NavLink>
          <NavLink to="/home" className="icon">{BiBell}</NavLink>
          <NavLink to="/home" className="profile_pic">
          <Avatar googleId="118096717852922241760" src={BiHome} size="45" round={true} />
          </NavLink>
    </Navbar>

        </>
    )

}


export default MainNavbar;