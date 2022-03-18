import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
class NavBar extends React.Component {
  render() {
    return (
      <Navbar sticky="top" bg="light" expand="lg">
        <Container>
          <Navbar.Brand>
            <b>News App</b>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title={this.props.category} id="basic-nav-dropdown">
                {this.props.list.map((m) => (
                  <NavDropdown.Item
                    style={{ cursor: "pointer" }}
                    key={m}
                    onClick={() => this.props.onClick(m)}
                  >
                    {m}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>

              <NavDropdown title={this.props.name} id="basic-nav-dropdown">
                {this.props.countries.map((m) => (
                  <NavDropdown.Item
                    style={{ cursor: "pointer" }}
                    key={m.code}
                    className={this.props.country === m ? "active" : ""}
                    onClick={() => this.props.onCountryChange(m)}
                  >
                    {m.name}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default NavBar;
