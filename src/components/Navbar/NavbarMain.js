import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import classes from "./NavbarMain.module.css";

const NavbarMain = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className={classes.mainNavbar}>
      <Navbar.Brand style={{fontFamily: "Poppins", fontSize:"24px", color: "Purple"}}>
          Lets Gtok
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className={`mr-auto`}>

        </Nav>
          <Nav>
          <Nav.Link className={`ml-auto`} style={{fontFamily: "Poppins", fontSize:"20px"}}>
              About
          </Nav.Link>
          <Nav.Link className={`ml-auto`} style={{fontFamily: "Poppins", fontSize:"20px"}}>
              Blogs
          </Nav.Link>
          <Nav.Link className={`ml-auto`} style={{fontFamily: "Poppins", fontSize:"20px"}}>
              Carrers
          </Nav.Link>
          <Nav.Link className={`ml-auto`} style={{fontFamily: "Poppins", fontSize:"20px"}}>
              Contact
          </Nav.Link>
          </Nav>
      </Navbar.Collapse>
    </Navbar>
    )
}

export default NavbarMain;
