import React, { useState } from 'react';
import '../css/Verification.css';
import { Navbar, Container, Nav, Button, Form } from 'react-bootstrap';
import logo from '../assets/logo.png';
import NavbarComp from '../components/navbar';
import { Link, useHistory } from 'react-router-dom';
import OTPVerification from '../assets/OTPVerification.png';
import ReactCodeInput from 'react-verification-code-input';

export default function Verification() {

    const [VerificationCode, SetVerificationCode] = useState(null)
    const history = useHistory();
    return (
        <div>
            <NavbarComp />
            <Container style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: 40 }}>
                <img src={OTPVerification} style={{ maxWidth: 340, height: 220, borderRadius: 20 }} />
                <p id="verificationTxt">Verification</p>
                <span id="OTPTxt">Enter the OTP number that has been sent to your email.</span>
                <div id="Timer">
                    <span id="TimerTxt">01:38</span>
                </div>
                <ReactCodeInput fields={6} autoFocus={true} fieldWidth={50} fieldHeight={60} onChange={(e) => SetVerificationCode(e)} />
                <div style={{ display: "flex", flexDirection: "row", marginTop: 10 }}>
                    <span id="noOTP">Haven't got your OTP number yet?</span>
                    <Link id="ResendOTP">Resend OTP</Link>
                </div>
                <Button id="NextBtn" onClick={() => history.push("/CreateNewPass")}>Next</Button>
            </Container>
        </div>
    )
}