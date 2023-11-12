import React from "react";
import Nav from "react-bootstrap/Nav";
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className="user">
      <Nav variant="pills" className="justify-content-end" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/login" className="custom-button">Log In</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default Navbar;
