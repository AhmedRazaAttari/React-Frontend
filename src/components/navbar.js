import React, { Component } from 'react';
import { Navbar, Container, Nav, Button, Form } from 'react-bootstrap';
import logo from '../assets/logo.png';
import { Link, useHistory } from 'react-router-dom';

export default class navbar extends Component {

    constructor() {
        super();

        this.state = {
            expanded: false
        }
    }

    componentDidMount(){
        document.getElementById("root").style.background = "white";
    }

    setToggle = () => {
        this.setState({
            expanded: !this.state.expanded
        })
        if (this.state.expanded) {
            document.getElementById("root").style.background = "white";
        }
        else{
            document.getElementById("root").style.background = "rgba(247, 241, 241, 0.9)";
        }
    }

    render() {
        return (
            <Navbar expand="lg" onToggle={this.setToggle}>
                <Container>
                    <Navbar.Brand><img src={logo} style={{ width: 50, height: 50 }} /><span id='headerTitle'>Spirit of Truth Native American Church</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>
                            <Nav.Link id="Links"><Link to={{ pathname: "/" }} style={{ textDecoration: "none", color: "#18498B" }}>Home</Link></Nav.Link>
                            <Nav.Link id="Links"><Link to={{ pathname: "/ContactUs" }} style={{ textDecoration: "none", color: "#18498B" }}>Contact</Link></Nav.Link>
                            <Nav.Link id="Links"><Link to={{ pathname: "/FAQ" }} style={{ textDecoration: "none", color: "#18498B" }}>FAQ</Link></Nav.Link>
                            <Button id="SigninBtn"><Link to={{ pathname: "/Signin" }} style={{ textDecoration: "none", color: "white" }}>Sign in</Link></Button>
                            <span id="smallScreenNav"><Nav.Link id="Links"><Link to={{ pathname: "/Signin" }} style={{ textDecoration: "none", color: "#18498B" }}>Sign in</Link></Nav.Link></span>
                            <Nav.Link id="Links"><Link to={{ pathname: "/Signup" }} style={{ textDecoration: "none", color: "#18498B" }}>Join</Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}