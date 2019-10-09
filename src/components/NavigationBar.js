import React from 'react';
import { Nav , Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
 .navbar {
     background-color : pink;
 }
 .navbar-brand , .navbar-nav , .nav-link {
     color : grey ;
     font-Style : italic;
 &:hover {
     color:white;
 }    
 }
`;

export const NavigationBar = ()  => (
    <Styles>
        <Navbar expand = "lg">
            <Navbar.Brand href = "/"><h1>Cake Art</h1></Navbar.Brand>
            <Navbar.Toggle aria-controls = "basic-navbar-nav"></Navbar.Toggle>
            <Navbar.Collapse id= "basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/contact">Contact</Nav.Link></Nav.Item>

                </Nav>
            </Navbar.Collapse>

        </Navbar>
    </Styles>
)