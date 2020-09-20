import React from "react";
// import { Navbar, Nav } from "react-bootstrap";
import { Image, Navbar } from "react-bootstrap";
import SearchBar from "./SearchBar";
import './styles.css';

import logoPic from "../logo/logo-2.png";


// function UserOption() {
//   return (
//     <Nav className="ml-auto">
//       <Nav.Link href="/user/login" className="log-in-link navbar-link">
//         LOG IN
//       </Nav.Link>
//       <Nav.Link href="/user/signup" className="sign-up-link navbar-link">
//         SIGN UP
//       </Nav.Link>
//     </Nav>
//   );
// }

function NavigationBar(props) {
  return (
    <Navbar bg="none" expand="lg" variant="none" fixed="top">
      <Navbar.Brand href="/">
        <Image src={logoPic} alt="logo" className="logo-img" />
        {/* <img
        alt=""
        src="../logo/logo-1.png"
        width="30"
        height="30"
        className="navbar-logo"
      />{' '} */}
        Halligan Reviews
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
      <Navbar.Collapse id="responsive-navbar-nav">
        <SearchBar onUpdate={props.onUpdate} />
        {/* <UserOption/> */}
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
