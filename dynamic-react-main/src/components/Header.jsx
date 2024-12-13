import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';

import Logo from '../assets/wine_logo.png';
import { DropdownDivider, NavDropdown } from 'react-bootstrap';
const description = "The best drinks in the town";

export function Header( ){
    return (
        <Navbar expand="md" bg="light" data-bs-theme="light" >
            <Container className="mx-2">
                <Navbar.Brand href="/" className="fs-6 text-center">
                    <img
                        src={Logo}
                        width="30"
                        height="40"
                    />
                    <p className="mb-0">{ description }</p>
                    </Navbar.Brand>
                <Navbar.Toggle aria-controls="main-nav" />
                <Navbar.Collapse id="main-nav">
                    <Nav>
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <NavDropdown title="About Us">
                            <NavDropdown.Item as={Link} to="/about/aboutUs">About Us</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/about/contactUs">Contact Us</NavDropdown.Item>
                            <DropdownDivider/>
                            <NavDropdown.Item as={Link} to="/about/shipping">Shipping</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={Link} to="/Blog">Blog</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}