import React, {FC, useState} from 'react';
import {Button, Container, Form, FormControl, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {Link, NavLink, useNavigate} from "react-router-dom";

const NavbarComponent: FC = () => {
    const [title, setTitle] = useState('');
    const navigate = useNavigate();

    const handleSearch: React.MouseEventHandler<HTMLButtonElement> = () => {
        if(title) navigate(`/search/${title}`)
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to={'/'}>Food-delivery</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link as={Link} to={'/'}>Home</Nav.Link>
                            <Nav.Link as={Link} to={'/cart'}>Basket</Nav.Link>
                            <NavDropdown title="Countries" id="navbarScrollingDropdown">
                                <NavDropdown.Item >Action</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                placeholder="Search"
                                className="me-2"
                                value={title}
                                onChange={handleChange}
                            />
                            <Button
                                onClick={handleSearch}
                                variant="outline-warning">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default NavbarComponent;
