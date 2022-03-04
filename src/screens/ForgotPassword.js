import React, { useState } from 'react';
import '../css/ForgotPass.css';
import { Navbar, Container, Nav, Button, Form } from 'react-bootstrap';
import logo from '../assets/logo.png';
import { Link, useHistory } from 'react-router-dom';
import forgotpass from '../assets/forgotpass.png';
import TextInput from '../components/textInput';
import NavbarComp from '../components/navbar';
// import ReactCodeInput from 'react-verification-code-input';

export default function ForgotPass() {

    const [VerificationCode, SetVerificationCode] = useState(null)
    const [email, setEmail] = useState();
    const history = useHistory();
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return (
        <div>
            <NavbarComp />
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: 40 }}>
                <img src={forgotpass} style={{ maxWidth: 240, height: 240, borderRadius: 20 }} />
                <p id="forgotPassTxt">Forgot Password</p>
                <span id="ForgotTxt">Enter in your email for a link to reset your password.</span>
                <Form.Group className="mb-3" controlId="formBasicEmail" style={{ marginTop: 20 }} id="AdditionalID">
                    <Form.Label id="ControlLabel">Email</Form.Label>
                    <TextInput InputID="fromControlInput" type="email" placeholder="test@example.com" HandleChange={(e) => setEmail(e.target.value)} />
                </Form.Group>

                <Button id="SubmitBtn" style={{ background: re.test(email) ? "#18498B" : "#BDBDBD" }} disabled={re.test(email) ? false : true} onClick={() => history.push("/OTP")}>Submit</Button>
            </div>
        </div>
    )
}