import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';


function Header() {
    return (
        <>
            <header className="main_header">

                <Navbar collapseOnSelect expand="lg">
                    <Container>
                        <Navbar.Brand href="#home"><img alt="Logo" src="images/logo.svg" /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            
                             <Nav className=" justify-content-end flex-grow-1 pe-3">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#about">About</Nav.Link>
                                <Nav.Link href="#feature">Feature</Nav.Link>
                                <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                                <Nav.Link href="#events">Events</Nav.Link>
                                <Nav.Link href="#pricing">Pricing</Nav.Link>

                            </Nav>
                            
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header >

        </>
    );
}

export default Header;





