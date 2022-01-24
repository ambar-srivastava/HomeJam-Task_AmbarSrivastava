import React from "react";
import "./NavBar.css"
// import "./NavBar.css";
import logo from "../../Assets/logo.svg"
import { Navbar, Nav} from "react-bootstrap";

const NavBar = () => {
  return (
    <>
 <Navbar bg="transparent"  expand="lg" variant="dark" >
    <a href="/"><img src={logo} alt="logo" /></a>
   
    <Navbar.Toggle aria-controls="basic-navbar-nav" style={{color:"white"}} />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav style={{ marginLeft:"auto"}}>
         <a className="nav-link"  href="#home">Search</a>
         <a className="nav-link" href="#link">Help</a>
         <a className="nav-link"  href="#link">Account</a>
         <a className="nav-link" href="#link"> <i className="ri-shopping-cart-line"></i></a>
      </Nav>
    </Navbar.Collapse>
</Navbar>
  
    </>
  );
};

export default NavBar;
