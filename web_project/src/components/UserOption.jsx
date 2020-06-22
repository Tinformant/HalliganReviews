import React from "react";
import {Nav, NavItem} from "react-bootstrap"

function UserOption(){
    return <Nav className="ml-auto">
        <NavItem>
            <Nav.Link className="log-in-link navbar-link nav-link" href="#">LOG IN</Nav.Link>
        </NavItem>
        <NavItem>
            <Nav.Link className="sign-up-link navbar-link nav-link" href="#">SIGN UP</Nav.Link>
        </NavItem>
    </Nav>
    ;
}

export default UserOption;