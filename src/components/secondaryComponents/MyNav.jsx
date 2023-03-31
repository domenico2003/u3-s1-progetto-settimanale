import { Component } from "react";
import {
  ButtonGroup,
  Container,
  Dropdown,
  DropdownButton,
  Nav,
  Navbar,
} from "react-bootstrap";

class MyNav extends Component {
  render() {
    return (
      <Navbar bg="prova" expand="lg" className="px-5">
        <Container
          fluid
          className="px-0 justify-content-center justify-content-sm-between"
        >
          <Navbar.Brand href="#home">
            <img src={this.props.netflixLogo} alt="netflix-logo" width="100" />
          </Navbar.Brand>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" className="text-white">
                Home
              </Nav.Link>

              <Nav.Link href="#TVShows" className="text-white">
                TV shows
              </Nav.Link>

              <Nav.Link href="#Movies" className="text-white">
                Movies
              </Nav.Link>

              <Nav.Link href="#RecentlyAdded" className="text-white">
                Recently Added
              </Nav.Link>

              <Nav.Link href="#MyList" className="text-white">
                My List
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <div className="d-flex align-items-center text-white-50 gap-4 ">
            <p className="align-items-center text-white mb-0 fw-bold">KIDS</p>
            <i className="bi bi-bell-fill text-white fs-5 "></i>
            <Dropdown as={ButtonGroup} className="bg-prova mydrop">
              <div
                className=" profilo"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              ></div>
              <DropdownButton align="end" title="" id="dropdown-menu-align-end">
                <Dropdown.Item eventKey="1" className="p-0">
                  <a
                    href="#account"
                    className="border-0 rounded-0 w-100 btn btn-outline-light"
                  >
                    Account
                  </a>
                </Dropdown.Item>
                <Dropdown.Item eventKey="2" className="p-0">
                  <a
                    href="/settings.html"
                    className="border-0 rounded-0 w-100 btn btn-outline-light"
                  >
                    Settings
                  </a>
                </Dropdown.Item>
              </DropdownButton>
            </Dropdown>
            <Navbar.Toggle
              className="bg-secondary"
              aria-controls="basic-navbar-nav"
            />
          </div>
        </Container>
      </Navbar>
    );
  }
}

export default MyNav;
