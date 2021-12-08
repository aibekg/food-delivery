import React, {FC, useState} from 'react';
import {Badge, Button, Container, Form, FormControl, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";
import {useAppSelector} from "../hooks/redux";
import '../App.css'

const NavbarComponent: FC = () => {
    const [title, setTitle] = useState('');
    const {basket} = useAppSelector(state => state.basket);
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

                                <Nav.Link as={Link} to={'/cart'}>
                                   <span className={'badge_con'}>
                                       Basket
                                       <Badge  pill className={'badge'} bg="warning" text="light">9</Badge>
                                   </span>
                                </Nav.Link>
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
