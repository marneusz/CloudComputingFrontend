import React, { Component } from "react";
import { Navbar, Nav,   } from 'react-bootstrap';

class NavbarPage extends Component { 

render() {
  return (<Navbar bg="light" expand="lg">
  <Navbar.Brand href="/">PronounceMe</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="user">Your Profile</Nav.Link> 
      <Nav.Link href="accountpanel">Account</Nav.Link>
      <Nav.Link href="recordaudio">Record Audio</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    );
  }
}

export default NavbarPage;