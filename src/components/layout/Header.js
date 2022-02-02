import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../SCSS/main.css";

class Header extends React.Component {
  render() {
    return (
      <>
        <Navbar className="navbar" expand="lg" id="navbar">
          <Container>
            <div className="container-c">
              <Nav.Link
                className="navbar__float-left"
                as={Link}
                href="#home"
                name="home"
                to="/"
                onSelect={this.handleItemClick}
              >
                TheListingMarket
              </Nav.Link>
            </div>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default Header;
