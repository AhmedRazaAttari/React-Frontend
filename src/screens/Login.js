import React, { useState } from 'react';
import { Navbar, Container, Nav, Button, Form } from 'react-bootstrap';
import '../css/Authentication.css';
import { Link } from 'react-router-dom';
import TextInput from '../components/textInput';
import NavbarComp from '../components/navbar';
import Alert from '../components/alert';
import { Person, VpnKey, ArrowRightAlt, VisibilityOff, Visibility } from '@material-ui/icons'
import logo from '../assets/logo.png';
import welcomeImg from '../assets/welcomeImg.png';
import googleIcon from '../assets/googleIcon.png';
import Vector from '../assets/Vector.png';
import cross from '../assets/Cross.png';

export default function Login() {
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [PasswordShow, setPasswordShow] = useState(true);

    const [error, setError] = useState();
    const [iserror, setIsError] = useState(false);
    const [showAlert, setshowAlert] = useState(false);

    function userSignin() {
        
        if (re.test(email)) {
            if (email == "abc@gmail.com" && password == "12345678") {
                setIsError(false);
                setshowAlert(true);
            }
            else {
                setIsError(true);
                setError("This email & password you entered is incorrect");
                setshowAlert(true);
            }
        }
        else {
            setIsError(true);
            setError("Please enter valid email");
            setshowAlert(true);
        }
    }

    return (
        <div>
            <NavbarComp />

            <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
                <div id="rightPart">
                    <div style={{ alignItems: "flex-start" }}>
                        <h4 id='signin'>Sign in</h4>
                        <p id='welcomeline'>Welcome back, please login to your account</p>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label id="ControlLabel">Email</Form.Label>
                            <TextInput InputID="fromControlInput" type="email" placeholder="test@example.com" HandleChange={(e) => setEmail(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label id="ControlLabel">Password</Form.Label>
                            <TextInput type={PasswordShow ? "password" : "text"} InputID="fromControlInput" placeholder="Enter your password" PasswordIcon={PasswordShow ? <VisibilityOff /> : <Visibility />} HideShow_Password={() => setPasswordShow(!PasswordShow)} HandleChange={(e) => setPassword(e.target.value)} />
                            {iserror && <Form.Text id="errorLine">
                                {error}
                            </Form.Text>}
                        </Form.Group>

                        <Link to={{ pathname: "/ForgotPass" }} id="lostPassword">Lost Password?</Link>

                        <Button id="signinBtn_Big" onClick={() => userSignin()} disabled={email && password && re.test(email) ? false : true} style={{ background: email && password && re.test(email) ? "#18498B" : "#BDBDBD" }}>Sign in</Button>
                        <div style={{ display: "flex", flexDirection: "row" }}>
                            <p id="NoAccount">Don’t have an account ?</p>
                            <Link id="SignupNavigation" to={{ pathname: "/Signup" }}>Sign Up</Link>
                        </div>

                        <hr style={{ border: '1px solid #C2C2C2' }} />
                        <Button id="SocialLoginBtn"><img src={googleIcon} />Sign In with Google</Button>
                    </div>
                </div>
                <div id="leftPart">
                    <img src={welcomeImg} style={{ borderRadius: 20, width: '80%' }} />
                </div>
            </div>
            {showAlert ? [iserror ? <div id="ShowAlertBox" style={{ position: "absolute", top: 100, right: 30 }}>
                <Alert text="Login failed" Icon={cross} clicked={() => setshowAlert(false)}/>
            </div> : <div id="ShowAlertBox" style={{ position: "absolute", top: 100, right: 30 }}>
                <Alert text="Login Successful" Icon={Vector} clicked={() => setshowAlert(false)}/>
            </div>] : null}
        </div>
    )
}