import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../Assets/logo-black.png";
import "../Style/header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header_section">
      <Navbar expand="lg" className="bg-body-tertiaries" fixed="top">
        <Container>
          <div className="brand">
            <Navbar.Brand className="navbar-logo">
              <Link to="/">
                <img src={logo} alt="logo" width={90} />
              </Link>
            </Navbar.Brand>
          </div>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            style={{ color: "#ffffff33", backgroundColor: "#ffffff33" }}
          />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Link to="/" className="nav-link">
                Home
              </Link>
              <Link to="/blogs" className="nav-link">
                Blogs
              </Link>
              <Link to="/add-blog" className="nav-link">
                Add Blog
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
