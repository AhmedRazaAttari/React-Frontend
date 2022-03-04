import React, { useState, useEffect } from 'react';
import '../css/Contactus.css';
import { Navbar, Container, Nav, Button, Form, FloatingLabel } from 'react-bootstrap';
import logo from '../assets/logo.png';
import Footer from '../components/footer';
import { Link } from 'react-router-dom';
import NavbarComp from '../components/navbar';
import ContactUs from '../assets/ContactUs.png';
import ContactUsSecond from '../assets/ContactUsSecond.png';
import loader from '../assets/loader.gif';

export default function Home() {
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const [name, setname] = useState();
    const [email, setEmail] = useState();
    const [phone, setphone] = useState();
    const [subject, setsubject] = useState();
    const [message, setmessage] = useState();
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    })

    return (
        <div>
            {!isLoading && <><NavbarComp />
                <img src={ContactUs} style={{ width: "100%" }} />
                <Container id="ContactUs_parentDiv" style={{ padding: 20 }}>
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                        <div id="ContactusForm">
                            <div style={{ alignItems: "flex-start" }}>
                                <p id="SendMessageText">Send us a message.</p>
                                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", flexWrap: "wrap", marginTop: 40 }}>
                                    <p id="ContactUsBoxes_Label">Your Name</p>
                                    <Form.Control type="name" id="ContactUsBoxes" placeholder="Your Name" onChange={(e) => setname(e.target.value)} />
                                </div>
                                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", flexWrap: "wrap", marginTop: 20 }}>
                                    <p id="ContactUsBoxes_Label">Your Email</p>
                                    <Form.Control type="email" id="ContactUsBoxes" placeholder="Your Email" onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", flexWrap: "wrap", marginTop: 20 }}>
                                    <p id="ContactUsBoxes_Label">Your Telephone Number</p>
                                    <Form.Control type="number" id="ContactUsBoxes" placeholder="Your Telephone Number" onChange={(e) => setphone(e.target.value)} />
                                </div>
                                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", flexWrap: "wrap", marginTop: 20 }}>
                                    <p id="ContactUsBoxes_Label">Subject</p>
                                    <Form.Control type="text" id="ContactUsBoxes" placeholder="Subject" onChange={(e) => setsubject(e.target.value)} />
                                </div>
                                <div style={{ display: "flex", flexDirection: "row", marginTop: 20, flexWrap: "wrap", marginBottom: 20 }}>
                                    <p id="ContactUsBoxes_Label">Your Message</p>
                                    <FloatingLabel controlId="floatingTextarea2" id="ContactUsBoxes">
                                        <Form.Control
                                            as="textarea"
                                            placeholder="Leave a comment here"
                                            onChange={(e) => setmessage(e.target.value)}
                                            style={{ height: '100px', verticalAlign: "top" }}
                                        />
                                    </FloatingLabel>
                                </div>
                                <Button id="signinBtn_Big" disabled={name && email && re.test(email) && phone && subject && message ? false : true} style={{ width: "90%", margin: '0 auto', background: name && email && re.test(email) && phone && subject && message ? "#18498B" : "#BDBDBD" }}>Submit</Button>
                            </div>
                        </div>
                        <div id="ContactUs_ImgBox">
                            <img src={ContactUsSecond} style={{ width: "100%", maxHeight: 500 }} />
                        </div>
                    </div>
                    <br />
                    <b>Spirit of Truth NAC</b><br />
                    <b>P.O. Box 2045 Ava,</b><br />
                    <b>MO 65608 U.S.A.</b>
                    <br /><br />
                    <p>If you desire to send in correspondence, please use the address above.</p>
                </Container>
                <Footer /></>}
            {isLoading && <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flex: 1, height: "90vh" }}>
                <img src={loader} style={{ width: 300 }}/>
            </div>}

        </div>
    )
}