import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { DropdownDivider, NavDropdown } from 'react-bootstrap';

import Logo from '/workspaces/wineWebsiteReact/WineWebsite/src/assets/logo.png';
import '/workspaces/wineWebsiteReact/WineWebsite/src/components/header.css'; // Importe o CSS personalizado

const description = "";

export function Header() {
    return (
        <Navbar expand="md" bg="light" className="navbar-light" data-bs-theme="light">
            <Container className="mx-2">
                <Navbar.Brand href="/" className="fs-6 text-center">
                    <img
                        src={Logo}
                        width="50px"
                        alt="Logo"
                    />
                    <p className="mb-0">{description}</p>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="main-nav" />
                <Navbar.Collapse id="main-nav">
                    <Nav>
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <NavDropdown title="About Us">
                            <NavDropdown.Item as={Link} to="/about/aboutUs">About Us</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/about/contactUs">Contact Us</NavDropdown.Item>
                            <DropdownDivider />
                            <NavDropdown.Item as={Link} to="/about/shipping">Shipping</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={Link} to="/Blog">Blog</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
