import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import '../Bootstrap/Bootstrap.css';
import './Navigation.css';

const Navigation = () => {
    return (
        <div className="nav-container">
            <Navbar bg="light" variant="light">
                <Navbar.Brand href="#home">
                    <h3 className="tag-line">Online-Class</h3>
                </Navbar.Brand>

                <Nav className="ml-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#courses">Courses</Nav.Link>
                    <Nav.Link href="#career">Career</Nav.Link>
                    <Nav.Link href="#about">About Us</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
                
            </Navbar>
        </div>
    );
};

export default Navigation;