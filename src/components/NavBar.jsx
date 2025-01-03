import React, { Component } from 'react'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/NavBar.css";

export class NavBar extends Component {
  render() {
    return (
      <Navbar fixed='top' className='bg-top-tertiary'>
        <Container>
            <Navbar.Brand href="#">AryanAg</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className='me-auto'>
                  <Nav.Link href="#intro">Home</Nav.Link>
                  <Nav.Link href="#about">About</Nav.Link>
                  <Nav.Link href="#experience">Experience</Nav.Link>
                  <Nav.Link href="#projects">Projects</Nav.Link>
                </Nav>
                <Nav className='ml-auto'> 
                <Nav.Link href="mailto:goyalaryan5@gmail.com">
                <EmailRoundedIcon style={{ fontSize: 20 }}></EmailRoundedIcon>
              </Nav.Link>
              <Nav.Link href="https://github.com/AryanAg08" target="_blank">
                <GitHubIcon style={{ fontSize: 19 }}></GitHubIcon>
              </Nav.Link>
              <Nav.Link href="https://www.linkedin.com/in/aryangoyal80/" target="_blank">
                <LinkedInIcon style={{ fontSize: 21 }}></LinkedInIcon>
              </Nav.Link>
              {/* <Nav.Link href="https://medium.com/@gazijarin.ai" target="_blank">
                <BorderColorIcon style={{ fontSize: 20 }}></BorderColorIcon>
              </Nav.Link> */}
                </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
}

export default NavBar