import React, { useState } from 'react';
import '../css/CreateNewPass.css';
import { Navbar, Container, Nav, Button, Form } from 'react-bootstrap';
import logo from '../assets/logo.png';
import NavbarComp from '../components/navbar';
import { Link } from 'react-router-dom';
import { VisibilityOff, Visibility } from '@material-ui/icons'
import TextInput from '../components/textInput';

export default function ForgotPass() {

    const [password, setPassword] = useState();
    const [Confpassword, setConfpassword] = useState();

    const [PasswordShow, setPasswordShow] = useState(true);
    const [ConfPasswordShow, setConfPasswordShow] = useState(true);


    return (
        <div>
            <NavbarComp />
            <Container style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: 40 }}>
                <p id="CreateNewPassTxt">Create New Password</p>
                <span id="ForgotTxt">Create and confirm your new password.</span>

                <Form.Group className="mb-3" controlId="formBasicPassword" style={{ marginTop: 20 }} id="AdditionalID">
                    <Form.Label id="ControlLabel">Password</Form.Label>
                    <TextInput type={PasswordShow ? "password" : "text"} InputID="fromControlInput" placeholder="Enter your password" PasswordIcon={PasswordShow ? <VisibilityOff /> : <Visibility />} HideShow_Password={() => setPasswordShow(!PasswordShow)} HandleChange={(e) => setPassword(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword" id="AdditionalID">
                    <Form.Label id="ControlLabel">Confirm New Password</Form.Label>
                    <TextInput type={ConfPasswordShow ? "password" : "text"} InputID="fromControlInput" placeholder="Confirm Password" PasswordIcon={ConfPasswordShow ? <VisibilityOff /> : <Visibility />} HideShow_Password={() => setPasswordShow(!PasswordShow)} HandleChange={(e) => setConfpassword(e.target.value)} />
                </Form.Group>
                <Button id="SubmitBtn">Submit</Button>
            </Container>
        </div>
    )
}