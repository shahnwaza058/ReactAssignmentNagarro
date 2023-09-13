import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../Assets/logo-black.png";
import "../Style/header.css";
import { Link, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../Context/Context";
const Header = () => {
  const navigate = useNavigate();
  const { searchInput, setSearchInput } = useGlobalContext();
  const [inputValue, setInputValue] = useState("");
  const handleSearch = () => {
    setSearchInput(inputValue);
    navigate(`/blogs?search=${inputValue}`);
    setInputValue("");
  };
  const handleSearchEnter = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };
  console.log(searchInput);
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
            <div className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleSearchEnter}
              />
              <Button variant="outline-dark" onClick={handleSearch}>
                Search
              </Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
