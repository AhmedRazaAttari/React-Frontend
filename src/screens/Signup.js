import React, { useState } from 'react';
import { Navbar, Container, Nav, Button, Form } from 'react-bootstrap';
import '../css/Authentication.css';
import { Link } from 'react-router-dom';
import TextInput from '../components/textInput';
import NavbarComp from '../components/navbar';
import Alert from '../components/alert';
import { VisibilityOff, Visibility } from '@material-ui/icons'
import logo from '../assets/logo.png';
import joinImg from '../assets/joinImg.png';
import googleIcon from '../assets/googleIcon.png';
import Vector from '../assets/Vector.png';
import cross from '../assets/Cross.png';

export default function Signup() {
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    const [firstname, setfirstname] = useState();
    const [middlename, setmiddlename] = useState();
    const [lastname, setlastname] = useState();
    const [email, setEmail] = useState();

    const [password, setPassword] = useState();
    const [Confpassword, setConfpassword] = useState();

    const [PasswordShow, setPasswordShow] = useState(true);
    const [ConfPasswordShow, setConfPasswordShow] = useState(true);

    const [error, setError] = useState();
    const [iserror, setIsError] = useState(false);
    const [showAlert, setshowAlert] = useState(false);

    function userSignup() {
        if (re.test(email)) {
            if (password == Confpassword) {
                setIsError(false);
                setshowAlert(true);
            }
            else {
                setIsError(true);
                setError("Password and Confirm password should be same");
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
                        <h4 id='signin'>Join</h4>
                        <p id='welcomeline'>Please sign up to create your account</p>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label id="ControlLabel">Legal First Name</Form.Label>
                            <TextInput InputID="fromControlInput" type="name" placeholder="Enter your frist name." HandleChange={(e) => setfirstname(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label id="ControlLabel">Legal Middle Name</Form.Label>
                            <TextInput InputID="fromControlInput" type="name" placeholder="Enter your middle name." HandleChange={(e) => setmiddlename(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label id="ControlLabel">Legal Last Name</Form.Label>
                            <TextInput InputID="fromControlInput" type="name" placeholder="Enter your last name." HandleChange={(e) => setlastname(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label id="ControlLabel">Email</Form.Label>
                            <TextInput InputID="fromControlInput" type="email" placeholder="test@example.com" HandleChange={(e) => setEmail(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label id="ControlLabel">Password</Form.Label>
                            <TextInput type={PasswordShow ? "password" : "text"} InputID="fromControlInput" placeholder="Enter your password" PasswordIcon={PasswordShow ? <VisibilityOff /> : <Visibility />} HideShow_Password={() => setPasswordShow(!PasswordShow)} HandleChange={(e) => setPassword(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label id="ControlLabel">Confirm Password</Form.Label>
                            <TextInput type={ConfPasswordShow ? "password" : "text"} InputID="fromControlInput" placeholder="Confirm Password" PasswordIcon={ConfPasswordShow ? <VisibilityOff /> : <Visibility />} HideShow_Password={() => setConfPasswordShow(!ConfPasswordShow)} HandleChange={(e) => setConfpassword(e.target.value)} />
                            {iserror && <Form.Text id="errorLine">
                                {error}
                            </Form.Text>}
                        </Form.Group>

                        <Form.Check
                            style={{ marginTop: 15 }}
                            type={"checkbox"}
                            id={"checkbox"}
                            label={"I agree to the Church’s Terms of Service and Privacy Policy."}
                        />

                        <Button id="signinBtn_Big" onClick={() => userSignup()} disabled={email && re.test(email) && password && firstname && lastname && Confpassword ? false : true} style={{ background: email && re.test(email) && password && firstname && lastname && Confpassword ? "#18498B" : "#BDBDBD" }}>Sign up</Button>
                        <div style={{ display: "flex", flexDirection: "row" }}>
                            <p id="NoAccount">Already have an account?</p>
                            <Link id="SignupNavigation" to={{ pathname: "/Signin" }}>Login</Link>
                        </div>

                        <hr style={{ border: '1px solid #C2C2C2' }} />
                        <Button id="SocialLoginBtn"><img src={googleIcon} />Sign In with Google</Button>
                    </div>
                </div>
                <div id="leftPart">
                    <img src={joinImg} style={{ borderRadius: 20, width: '80%' }} />
                </div>
            </div>
            {showAlert ? [iserror ? <div id="ShowAlertBox" style={{ position: "absolute", top: 100, right: 30 }}>
                <Alert text="Sign up failed" Icon={cross} clicked={() => setshowAlert(false)} />
            </div> : <div id="ShowAlertBox" style={{ position: "absolute", top: 100, right: 30 }}>
                <Alert text="Sign up Successful" Icon={Vector} clicked={() => setshowAlert(false)} />
            </div>] : null}
        </div>
    )
}