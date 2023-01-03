import React, { Component } from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./index.css";
import { Navbar, NavbarBrand, Nav, Collapse, NavItem } from "reactstrap";
import NavLink from "react-router-dom/NavLink";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
    };
    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  render() {
    return (
      <>
        <Navbar expand="lg header-top bg-white fixed-top">
          <div className="container">
            <button
              onClick={this.toggleNav}
              className="mr-2 toggle-button navbar-toggler"
            >
              <span className="fa fa-solid fa-bars"></span>
            </button>
            <NavbarBrand className="mr-auto navbar-logo" href="/home">
              <b>Ecommerce</b>
            </NavbarBrand>
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar className="offset-2">
                <NavItem>
                  <NavLink className="nav-link" to="/home">
                    <span className="fa fa-home fa-lg mt-2"> Home</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/aboutus">
                    <NavDropdown
                      className="fa fa-lg"
                      title="&#xf129; Pages" //font awesome code inside title
                    >
                      <NavLink className="nav-link sub-nav" to="/shopGrid">
                        <NavDropdown.Item className="faas" href="/shopGrid">
                          Ecommerce Accesories & Fashion item
                        </NavDropdown.Item>
                      </NavLink>
                      <NavLink className="nav-link sub-nav" to="/shopGrid">
                        <NavDropdown.Item className="faas" href="/shopGrid">
                          Electronics Items
                        </NavDropdown.Item>
                      </NavLink>
                      <NavLink className="nav-link sub-nav" to="/shopGrid">
                        <NavDropdown.Item className="faas" href="/shopGrid">
                          Fashion items
                        </NavDropdown.Item>
                      </NavLink>
                      <NavDropdown.Divider />
                      <NavLink className="nav-link sub-nav" to="/shopGrid">
                        <NavDropdown.Item className="faas" href="/shopGrid">
                          Trending Products
                        </NavDropdown.Item>
                      </NavLink>
                    </NavDropdown>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/menu">
                    <span className="fa fa-list fa-lg mt-2"> Products</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/contactus">
                    <span className="fa fa-address-card fa-lg mt-2"> Blog</span>
                  </NavLink>
                </NavItem>
              </Nav>
              {/* <Nav className="ml-auto" navbar>
                <form class="form-inline my-2 my-lg-0">
                  <input
                    class="form-control mr-sm-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button
                    class="btn btn-outline-success my-2 my-sm-0"
                    type="submit"
                  >
                    <span className="fa fa-lg fa-search"></span>
                  </button>
                </form>
              </Nav> */}
            </Collapse>
            <button class="btn btn-outline-success my-2 my-sm-0 cart" type="cart">
              <span className="cart-count">10</span>
              <span className="fa fa-lg fa-shopping-cart cart-btn"></span>
            </button>
          </div>
        </Navbar>
      </>
    );
  }
}

export default Header;
