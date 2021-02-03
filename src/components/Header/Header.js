import React from 'react';

import { Navbar, Nav, Form, FormControl, Button, Container } from 'react-bootstrap';
import { useContext } from 'react';
import { UserContext } from '../../App';

const Header = () => {
    const [ userLoggin, setUserLoggin] = useContext(UserContext)
    return (
        <div >
        <Container>
        <Navbar bg="light" expand="lg" >
        <Navbar.Brand href="/home">Demo </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/myImages">Images</Nav.Link>
            <Nav.Link href="/imageUpload">Image Upload</Nav.Link>
            <Nav.Link href="#blog">Blog</Nav.Link>
            {
                userLoggin.isSignIn &&
                <Button onClick={() => setUserLoggin({})}> Sign out</Button>
            }
            </Nav>
        </Navbar.Collapse>
        </Navbar>
        </Container>
        </div>
    );
};

export default Header;