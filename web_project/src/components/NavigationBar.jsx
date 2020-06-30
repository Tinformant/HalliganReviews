import React from "react";
import {Navbar, Container, Row, Col, NavbarBrand, Nav} from "react-bootstrap";
import SearchBar from "./SearchBar"

function NavigationBar(){
    return <Navbar collapseOnSelect expand="lg" fixed="top">
    <NavbarBrand className="navbar-brand" href="#">Halligan Reveiws</NavbarBrand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav>
        <Container className="navbar-container">
        <Row>
          <Col lg={6} className="col">
            <SearchBar/>
          </Col>
        </Row>
      </Container>
      </Nav>
    </Navbar.Collapse>

    
  </Navbar>;
}

export default NavigationBar;