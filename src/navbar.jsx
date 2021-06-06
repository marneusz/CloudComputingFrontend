import React, { Component } from "react";
import { Navbar, Nav,   } from 'react-bootstrap';

class NavbarPage extends Component { 

render() {
  return (<Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">PronounceMe</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Your Profile</Nav.Link> 
    </Nav>
  </Navbar.Collapse>
</Navbar>
    );
  }
}

export default NavbarPage;