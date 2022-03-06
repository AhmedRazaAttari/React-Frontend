import React, { useState, useEffect } from 'react';
import '../css/RiseofMedical.css';
import { Navbar, Container, Nav, Button, Modal, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../components/footer';
import NavbarComp from '../components/navbar';
import AuthorityImg from '../assets/Authority.png';
import { ArrowBack, ArrowForward } from '@material-ui/icons'
// import JamesMooneyBlessing from '../assets/JamesMooneyBlessing.png';
// import FoolBullBlessing from '../assets/FoolBullBlessing.png';
// import RichardSwallowBlessing from '../assets/RichardSwallowBlessing.png';
// import OfficialPermission from '../assets/OfficialPermission.png';
import loader from '../assets/loader.gif';

export default function Authority() {
    const [showfirst, setShowfirst] = useState(false);
    const [showSecond, setShowSecond] = useState(false);
    const [showThird, setShowThird] = useState(false);
    const [showfourth, setShowfourth] = useState(false);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    })

    return (
        <div>
            <Modal
                show={showfirst}
                size="lg"
                onHide={() => setShowfirst(false)}
                backdrop="static"
                keyboard={false}
                centered
            >
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body style={{ padding: 20 }}>
                    <Carousel nextIcon={<div style={{ background: '#FFFFFF', border: '1px solid #4F4F4F', marginLeft: 30, boxSizing: 'border-box', borderRadius: 2, height: 30, width: 30, color: "black" }}><ArrowForward /></div>} prevIcon={<div style={{ background: '#FFFFFF', border: '1px solid #4F4F4F', marginRight: 30, boxSizing: 'border-box', borderRadius: 2, height: 30, width: 30, color: "black" }}><ArrowBack /></div>} indicators={false}>
                        <Carousel.Item>
                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                                <h1 id="paragraphStyle" style={{ fontSize: 38, textAlign: "center", color: "black" }}>Spirit of Truth Native American Church Constitution</h1>
                                <p id="paragraphStyle" style={{ fontSize: 30, textAlign: "center" }}>(Revised in Council September 8, 2021)</p>
                                <p id="paragraphStyle" style={{ fontSize: 17, textAlign: "center", color: "black" }}>(A Native American Church with direct authority passed from the Lakota Sioux Native American
                                    Church of Wounded Knee and Rosebud.)</p>
                                <p id="paragraphStyle" style={{ fontSize: 17, textAlign: "center", color: "black", marginTop: -10 }}>We, the Charter Members of the Spirit of Truth Native American Church in Council, beginning in
                                    September 2021 and continuously to the present, by Original Constitution and as amended and revised to
                                    present, by the Unanimous Voice do make this
                                </p>
                                <p id="paragraphStyle" style={{ fontSize: 20, fontWeight: "bold", textAlign: "center", color: "black", marginTop: -5, letterSpacing: 2 }}>DeclarationofGoodConscience andPractice,
                                    Constitution, andEstablishment oftheSpirit ofTruthNativeAmericanChurch.</p>
                                <p id="paragraphStyle" style={{ fontSize: 17, textAlign: "center", color: "black" }}>With respect to all in a sacred manner, we make a beginning of our speaking</p>
                                <p id="paragraphStyle" style={{ fontSize: 30, textAlign: "center", color: "black", fontStyle: "italic" }}>Preamble</p>
                                <p id="paragraphStyle" style={{ color: "black", fontSize: 16, marginTop: -5 }}>We the Spirit of Truth Native American Church believe in the Creator and that the Creator made all men and
                                    women who have lived, now live, and who will yet live, as free and equal beings. We recognize all of the
                                    Creator’s works to be for our learning and benefit and most particular we see the Earth as our Holy Temple and
                                    everything the Creator has placed upon it to be for our learning and use. </p>
                                <p id="paragraphStyle" style={{ color: "black", fontSize: 16, marginTop: -5 }}>
                                    We recognize the inherent, ancestral, sovereign rights granted to all people by the Creator, as also by human
                                    conscience, international law, and legal constructs of reciprocity, mutuality, and comity, which cannot be
                                    diminished or extinguished. We believe that we derive from and that we may become like our Ancestral
                                    Spiritual Leaders, as also through the Holy Order of the Church, we claim the right to restore our Sacred
                                    Religion based upon their teachings, which have been passed down to us through the traditions, customs,
                                    ceremonies, writings, and records of Indigenous Peoples, among which we acknowledge the Native American
                                    stories and records, Holy Bible, the Torah, the Vedic Texts, Ancient Egyptian Hieroglyphics, Ayahtkuhyaht
                                    Text, and so forth, by way of example. We see all Holy Spirit inspired writings to be Scripture but do not
                                    recognize their infallibility. We understand that imperfections can arise due to translation errors,
                                    misinterpretations, willful intent, and so forth. We hold the Sacred Scriptures, no matter where they originate
                                    from, to be useful in our Spiritual Progression as long as they do not disagree with the message of the Messiah
                                    and are witnessed to us by the Holy Spirit to be true or founded on principles of truth. We believe the Spirit of
                                    Truth is the ultimate guide to follow on The Sacred Healing Way (also called The Way or Healing Way) in our
                                    journey to Salvation.</p>
                                <p id="paragraphStyle" style={{ color: "black", fontSize: 16, marginTop: -5 }}>In accordance with the Principles and Teachings of the Sacred Records, from which we obtain our foundation,
                                    we believe that we are all Relations one to another and we are children of the same Creator. We affirm the
                                    UNITED NATIONS Declaration on the Rights of Indigenous Peoples (U.N. Sub-commission on Prevention of</p>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                                <p id="paragraphStyle" style={{ color: "black", fontSize: 16, marginTop: -5 }}>Discrimination and Protection of Minorities 1994/45, August 26, 1994. U.N. Doc. E/CN.4/1995/2,
                                    E/CN.4/sub.2/1994/56, at 105 (1994)), which was ratified into International Human Rights Law in 2007. We
                                    also affirm and applaud the Domestic Law of the United States, specifically 21c USC Chapter 42;2000;b(b) and
                                    USC Chapter 43;2000;c, to which we have committed ourselves, to uphold and to defend.
                                    Fundamental to our traditions is the truth that, as Children of the Creator, we are entitled to the freedoms of
                                    thought, religion, sacred objects and our sacraments, ceremonies, rites, observances, and so forth, and to pursue
                                    the same according to the dictates of our own hearts and the doctrines of our religion, insofar as those freedoms
                                    do not prevent others from likewise enjoying the same liberty.</p>
                                <p id="paragraphStyle" style={{ color: "black", fontSize: 16, marginTop: -5 }}>We believe that men and women have been endowed with intelligence enough to govern themselves in such a
                                    manner as to guarantee to themselves these freedoms, to establish just and right ways to deal with each other, to
                                    maintain a tranquil and secure domestic life, provide for the defense of these rights when needed, and to ensure
                                    for ourselves and our posterity the blessings that our culture, traditions, and teachings bring</p>
                                <p id="paragraphStyle" style={{ color: "black", fontSize: 16, marginTop: -5 }}>Accordingly, we exercise the authority passed on to us by our ancestors as well as the rights guaranteed to all
                                    citizens of the United States and by the State of Missouri, to form our Church based upon the restoration of our
                                    Ancient Faith, and we ordain and establish this:</p>
                                <p id="paragraphStyle" style={{ fontSize: 23, textAlign: "center", color: "black" }} >Constitution for the Spirit of Truth Native American Church as a
                                    Native American Church and Ministry</p>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                                <p id="paragraphStyle" style={{ color: "black", fontSize: 16, marginTop: -5 }}>Discrimination and Protection of Minorities 1994/45, August 26, 1994. U.N. Doc. E/CN.4/1995/2,
                                    E/CN.4/sub.2/1994/56, at 105 (1994)), which was ratified into International Human Rights Law in 2007. We
                                    also affirm and applaud the Domestic Law of the United States, specifically 21c USC Chapter 42;2000;b(b) and
                                    USC Chapter 43;2000;c, to which we have committed ourselves, to uphold and to defend.
                                    Fundamental to our traditions is the truth that, as Children of the Creator, we are entitled to the freedoms of
                                    thought, religion, sacred objects and our sacraments, ceremonies, rites, observances, and so forth, and to pursue
                                    the same according to the dictates of our own hearts and the doctrines of our religion, insofar as those freedoms
                                    do not prevent others from likewise enjoying the same liberty.</p>
                                <p id="paragraphStyle" style={{ color: "black", fontSize: 16, marginTop: -5 }}>We believe that men and women have been endowed with intelligence enough to govern themselves in such a
                                    manner as to guarantee to themselves these freedoms, to establish just and right ways to deal with each other, to
                                    maintain a tranquil and secure domestic life, provide for the defense of these rights when needed, and to ensure
                                    for ourselves and our posterity the blessings that our culture, traditions, and teachings bring</p>
                                <p id="paragraphStyle" style={{ color: "black", fontSize: 16, marginTop: -5 }}>Accordingly, we exercise the authority passed on to us by our ancestors as well as the rights guaranteed to all
                                    citizens of the United States and by the State of Missouri, to form our Church based upon the restoration of our
                                    Ancient Faith, and we ordain and establish this:</p>
                                <p id="paragraphStyle" style={{ fontSize: 23, textAlign: "center", color: "black" }} >Constitution for the Spirit of Truth Native American Church as a
                                    Native American Church and Ministry</p>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </Modal.Body>
            </Modal>
            <Modal
                show={showSecond}
                size="lg"
                onHide={() => setShowSecond(false)}
                backdrop="static"
                keyboard={false}
                centered
            >
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body style={{ padding: 20 }}>
                    <Carousel nextIcon={<div style={{ background: '#FFFFFF', border: '1px solid #4F4F4F', marginLeft: 30, boxSizing: 'border-box', borderRadius: 2, height: 30, width: 30, color: "black" }}><ArrowForward /></div>} prevIcon={<div style={{ background: '#FFFFFF', border: '1px solid #4F4F4F', marginRight: 30, boxSizing: 'border-box', borderRadius: 2, height: 30, width: 30, color: "black" }}><ArrowBack /></div>} indicators={false}>
                        <Carousel.Item>
                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                                <h1 id="paragraphStyle" style={{ fontSize: 38, textAlign: "center", color: "black" }}>Spirit of Truth Native American Church Constitution</h1>
                                <p id="paragraphStyle" style={{ fontSize: 30, textAlign: "center" }}>(Revised in Council September 8, 2021)</p>
                                <p id="paragraphStyle" style={{ fontSize: 17, textAlign: "center", color: "black" }}>(A Native American Church with direct authority passed from the Lakota Sioux Native American
                                    Church of Wounded Knee and Rosebud.)</p>
                                <p id="paragraphStyle" style={{ fontSize: 17, textAlign: "center", color: "black", marginTop: -10 }}>We, the Charter Members of the Spirit of Truth Native American Church in Council, beginning in
                                    September 2021 and continuously to the present, by Original Constitution and as amended and revised to
                                    present, by the Unanimous Voice do make this
                                </p>
                                <p id="paragraphStyle" style={{ fontSize: 20, fontWeight: "bold", textAlign: "center", color: "black", marginTop: -5, letterSpacing: 2 }}>DeclarationofGoodConscience andPractice,
                                    Constitution, andEstablishment oftheSpirit ofTruthNativeAmericanChurch.</p>
                                <p id="paragraphStyle" style={{ fontSize: 17, textAlign: "center", color: "black" }}>With respect to all in a sacred manner, we make a beginning of our speaking</p>
                                <p id="paragraphStyle" style={{ fontSize: 30, textAlign: "center", color: "black", fontStyle: "italic" }}>Preamble</p>
                                <p id="paragraphStyle" style={{ color: "black", fontSize: 16, marginTop: -5 }}>We the Spirit of Truth Native American Church believe in the Creator and that the Creator made all men and
                                    women who have lived, now live, and who will yet live, as free and equal beings. We recognize all of the
                                    Creator’s works to be for our learning and benefit and most particular we see the Earth as our Holy Temple and
                                    everything the Creator has placed upon it to be for our learning and use. </p>
                                <p id="paragraphStyle" style={{ color: "black", fontSize: 16, marginTop: -5 }}>
                                    We recognize the inherent, ancestral, sovereign rights granted to all people by the Creator, as also by human
                                    conscience, international law, and legal constructs of reciprocity, mutuality, and comity, which cannot be
                                    diminished or extinguished. We believe that we derive from and that we may become like our Ancestral
                                    Spiritual Leaders, as also through the Holy Order of the Church, we claim the right to restore our Sacred
                                    Religion based upon their teachings, which have been passed down to us through the traditions, customs,
                                    ceremonies, writings, and records of Indigenous Peoples, among which we acknowledge the Native American
                                    stories and records, Holy Bible, the Torah, the Vedic Texts, Ancient Egyptian Hieroglyphics, Ayahtkuhyaht
                                    Text, and so forth, by way of example. We see all Holy Spirit inspired writings to be Scripture but do not
                                    recognize their infallibility. We understand that imperfections can arise due to translation errors,
                                    misinterpretations, willful intent, and so forth. We hold the Sacred Scriptures, no matter where they originate
                                    from, to be useful in our Spiritual Progression as long as they do not disagree with the message of the Messiah
                                    and are witnessed to us by the Holy Spirit to be true or founded on principles of truth. We believe the Spirit of
                                    Truth is the ultimate guide to follow on The Sacred Healing Way (also called The Way or Healing Way) in our
                                    journey to Salvation.</p>
                                <p id="paragraphStyle" style={{ color: "black", fontSize: 16, marginTop: -5 }}>In accordance with the Principles and Teachings of the Sacred Records, from which we obtain our foundation,
                                    we believe that we are all Relations one to another and we are children of the same Creator. We affirm the
                                    UNITED NATIONS Declaration on the Rights of Indigenous Peoples (U.N. Sub-commission on Prevention of</p>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                                <p id="paragraphStyle" style={{ color: "black", fontSize: 16, marginTop: -5 }}>Discrimination and Protection of Minorities 1994/45, August 26, 1994. U.N. Doc. E/CN.4/1995/2,
                                    E/CN.4/sub.2/1994/56, at 105 (1994)), which was ratified into International Human Rights Law in 2007. We
                                    also affirm and applaud the Domestic Law of the United States, specifically 21c USC Chapter 42;2000;b(b) and
                                    USC Chapter 43;2000;c, to which we have committed ourselves, to uphold and to defend.
                                    Fundamental to our traditions is the truth that, as Children of the Creator, we are entitled to the freedoms of
                                    thought, religion, sacred objects and our sacraments, ceremonies, rites, observances, and so forth, and to pursue
                                    the same according to the dictates of our own hearts and the doctrines of our religion, insofar as those freedoms
                                    do not prevent others from likewise enjoying the same liberty.</p>
                                <p id="paragraphStyle" style={{ color: "black", fontSize: 16, marginTop: -5 }}>We believe that men and women have been endowed with intelligence enough to govern themselves in such a
                                    manner as to guarantee to themselves these freedoms, to establish just and right ways to deal with each other, to
                                    maintain a tranquil and secure domestic life, provide for the defense of these rights when needed, and to ensure
                                    for ourselves and our posterity the blessings that our culture, traditions, and teachings bring</p>
                                <p id="paragraphStyle" style={{ color: "black", fontSize: 16, marginTop: -5 }}>Accordingly, we exercise the authority passed on to us by our ancestors as well as the rights guaranteed to all
                                    citizens of the United States and by the State of Missouri, to form our Church based upon the restoration of our
                                    Ancient Faith, and we ordain and establish this:</p>
                                <p id="paragraphStyle" style={{ fontSize: 23, textAlign: "center", color: "black" }} >Constitution for the Spirit of Truth Native American Church as a
                                    Native American Church and Ministry</p>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                                <p id="paragraphStyle" style={{ color: "black", fontSize: 16, marginTop: -5 }}>Discrimination and Protection of Minorities 1994/45, August 26, 1994. U.N. Doc. E/CN.4/1995/2,
                                    E/CN.4/sub.2/1994/56, at 105 (1994)), which was ratified into International Human Rights Law in 2007. We
                                    also affirm and applaud the Domestic Law of the United States, specifically 21c USC Chapter 42;2000;b(b) and
                                    USC Chapter 43;2000;c, to which we have committed ourselves, to uphold and to defend.
                                    Fundamental to our traditions is the truth that, as Children of the Creator, we are entitled to the freedoms of
                                    thought, religion, sacred objects and our sacraments, ceremonies, rites, observances, and so forth, and to pursue
                                    the same according to the dictates of our own hearts and the doctrines of our religion, insofar as those freedoms
                                    do not prevent others from likewise enjoying the same liberty.</p>
                                <p id="paragraphStyle" style={{ color: "black", fontSize: 16, marginTop: -5 }}>We believe that men and women have been endowed with intelligence enough to govern themselves in such a
                                    manner as to guarantee to themselves these freedoms, to establish just and right ways to deal with each other, to
                                    maintain a tranquil and secure domestic life, provide for the defense of these rights when needed, and to ensure
                                    for ourselves and our posterity the blessings that our culture, traditions, and teachings bring</p>
                                <p id="paragraphStyle" style={{ color: "black", fontSize: 16, marginTop: -5 }}>Accordingly, we exercise the authority passed on to us by our ancestors as well as the rights guaranteed to all
                                    citizens of the United States and by the State of Missouri, to form our Church based upon the restoration of our
                                    Ancient Faith, and we ordain and establish this:</p>
                                <p id="paragraphStyle" style={{ fontSize: 23, textAlign: "center", color: "black" }} >Constitution for the Spirit of Truth Native American Church as a
                                    Native American Church and Ministry</p>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </Modal.Body>
            </Modal>
            <Modal
                show={showThird}
                size="lg"
                onHide={() => setShowThird(false)}
                backdrop="static"
                keyboard={false}
                centered
            >
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body style={{ padding: 20 }}>
                    <Carousel nextIcon={<div style={{ background: '#FFFFFF', border: '1px solid #4F4F4F', marginLeft: 30, boxSizing: 'border-box', borderRadius: 2, height: 30, width: 30, color: "black" }}><ArrowForward /></div>} prevIcon={<div style={{ background: '#FFFFFF', border: '1px solid #4F4F4F', marginRight: 30, boxSizing: 'border-box', borderRadius: 2, height: 30, width: 30, color: "black" }}><ArrowBack /></div>} indicators={false}>
                        <Carousel.Item>
                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                                <h1 id="paragraphStyle" style={{ fontSize: 38, textAlign: "center", color: "black" }}>Spirit of Truth Native American Church Constitution</h1>
                                <p id="paragraphStyle" style={{ fontSize: 30, textAlign: "center" }}>(Revised in Council September 8, 2021)</p>
                                <p id="paragraphStyle" style={{ fontSize: 17, textAlign: "center", color: "black" }}>(A Native American Church with direct authority passed from the Lakota Sioux Native American
                                    Church of Wounded Knee and Rosebud.)</p>
                                <p id="paragraphStyle" style={{ fontSize: 17, textAlign: "center", color: "black", marginTop: -10 }}>We, the Charter Members of the Spirit of Truth Native American Church in Council, beginning in
                                    September 2021 and continuously to the present, by Original Constitution and as amended and revised to
                                    present, by the Unanimous Voice do make this
                                </p>
                                <p id="paragraphStyle" style={{ fontSize: 20, fontWeight: "bold", textAlign: "center", color: "black", marginTop: -5, letterSpacing: 2 }}>DeclarationofGoodConscience andPractice,
                                    Constitution, andEstablishment oftheSpirit ofTruthNativeAmericanChurch.</p>
                                <p id="paragraphStyle" style={{ fontSize: 17, textAlign: "center", color: "black" }}>With respect to all in a sacred manner, we make a beginning of our speaking</p>
                                <p id="paragraphStyle" style={{ fontSize: 30, textAlign: "center", color: "black", fontStyle: "italic" }}>Preamble</p>
                                <p id="paragraphStyle" style={{ color: "black", fontSize: 16, marginTop: -5 }}>We the Spirit of Truth Native American Church believe in the Creator and that the Creator made all men and
                                    women who have lived, now live, and who will yet live, as free and equal beings. We recognize all of the
                                    Creator’s works to be for our learning and benefit and most particular we see the Earth as our Holy Temple and
                                    everything the Creator has placed upon it to be for our learning and use. </p>
                                <p id="paragraphStyle" style={{ color: "black", fontSize: 16, marginTop: -5 }}>
                                    We recognize the inherent, ancestral, sovereign rights granted to all people by the Creator, as also by human
                                    conscience, international law, and legal constructs of reciprocity, mutuality, and comity, which cannot be
                                    diminished or extinguished. We believe that we derive from and that we may become like our Ancestral
                                    Spiritual Leaders, as also through the Holy Order of the Church, we claim the right to restore our Sacred
                                    Religion based upon their teachings, which have been passed down to us through the traditions, customs,
                                    ceremonies, writings, and records of Indigenous Peoples, among which we acknowledge the Native American
                                    stories and records, Holy Bible, the Torah, the Vedic Texts, Ancient Egyptian Hieroglyphics, Ayahtkuhyaht
                                    Text, and so forth, by way of example. We see all Holy Spirit inspired writings to be Scripture but do not
                                    recognize their infallibility. We understand that imperfections can arise due to translation errors,
                                    misinterpretations, willful intent, and so forth. We hold the Sacred Scriptures, no matter where they originate
                                    from, to be useful in our Spiritual Progression as long as they do not disagree with the message of the Messiah
                                    and are witnessed to us by the Holy Spirit to be true or founded on principles of truth. We believe the Spirit of
                                    Truth is the ultimate guide to follow on The Sacred Healing Way (also called The Way or Healing Way) in our
                                    journey to Salvation.</p>
                                <p id="paragraphStyle" style={{ color: "black", fontSize: 16, marginTop: -5 }}>In accordance with the Principles and Teachings of the Sacred Records, from which we obtain our foundation,
                                    we believe that we are all Relations one to another and we are children of the same Creator. We affirm the
                                    UNITED NATIONS Declaration on the Rights of Indigenous Peoples (U.N. Sub-commission on Prevention of</p>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                                <p id="paragraphStyle" style={{ color: "black", fontSize: 16, marginTop: -5 }}>Discrimination and Protection of Minorities 1994/45, August 26, 1994. U.N. Doc. E/CN.4/1995/2,
                                    E/CN.4/sub.2/1994/56, at 105 (1994)), which was ratified into International Human Rights Law in 2007. We
                                    also affirm and applaud the Domestic Law of the United States, specifically 21c USC Chapter 42;2000;b(b) and
                                    USC Chapter 43;2000;c, to which we have committed ourselves, to uphold and to defend.
                                    Fundamental to our traditions is the truth that, as Children of the Creator, we are entitled to the freedoms of
                                    thought, religion, sacred objects and our sacraments, ceremonies, rites, observances, and so forth, and to pursue
                                    the same according to the dictates of our own hearts and the doctrines of our religion, insofar as those freedoms
                                    do not prevent others from likewise enjoying the same liberty.</p>
                                <p id="paragraphStyle" style={{ color: "black", fontSize: 16, marginTop: -5 }}>We believe that men and women have been endowed with intelligence enough to govern themselves in such a
                                    manner as to guarantee to themselves these freedoms, to establish just and right ways to deal with each other, to
                                    maintain a tranquil and secure domestic life, provide for the defense of these rights when needed, and to ensure
                                    for ourselves and our posterity the blessings that our culture, traditions, and teachings bring</p>
                                <p id="paragraphStyle" style={{ color: "black", fontSize: 16, marginTop: -5 }}>Accordingly, we exercise the authority passed on to us by our ancestors as well as the rights guaranteed to all
                                    citizens of the United States and by the State of Missouri, to form our Church based upon the restoration of our
                                    Ancient Faith, and we ordain and establish this:</p>
                                <p id="paragraphStyle" style={{ fontSize: 23, textAlign: "center", color: "black" }} >Constitution for the Spirit of Truth Native American Church as a
                                    Native American Church and Ministry</p>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                                <p id="paragraphStyle" style={{ color: "black", fontSize: 16, marginTop: -5 }}>Discrimination and Protection of Minorities 1994/45, August 26, 1994. U.N. Doc. E/CN.4/1995/2,
                                    E/CN.4/sub.2/1994/56, at 105 (1994)), which was ratified into International Human Rights Law in 2007. We
                                    also affirm and applaud the Domestic Law of the United States, specifically 21c USC Chapter 42;2000;b(b) and
                                    USC Chapter 43;2000;c, to which we have committed ourselves, to uphold and to defend.
                                    Fundamental to our traditions is the truth that, as Children of the Creator, we are entitled to the freedoms of
                                    thought, religion, sacred objects and our sacraments, ceremonies, rites, observances, and so forth, and to pursue
                                    the same according to the dictates of our own hearts and the doctrines of our religion, insofar as those freedoms
                                    do not prevent others from likewise enjoying the same liberty.</p>
                                <p id="paragraphStyle" style={{ color: "black", fontSize: 16, marginTop: -5 }}>We believe that men and women have been endowed with intelligence enough to govern themselves in such a
                                    manner as to guarantee to themselves these freedoms, to establish just and right ways to deal with each other, to
                                    maintain a tranquil and secure domestic life, provide for the defense of these rights when needed, and to ensure
                                    for ourselves and our posterity the blessings that our culture, traditions, and teachings bring</p>
                                <p id="paragraphStyle" style={{ color: "black", fontSize: 16, marginTop: -5 }}>Accordingly, we exercise the authority passed on to us by our ancestors as well as the rights guaranteed to all
                                    citizens of the United States and by the State of Missouri, to form our Church based upon the restoration of our
                                    Ancient Faith, and we ordain and establish this:</p>
                                <p id="paragraphStyle" style={{ fontSize: 23, textAlign: "center", color: "black" }} >Constitution for the Spirit of Truth Native American Church as a
                                    Native American Church and Ministry</p>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </Modal.Body>
            </Modal>
            <Modal
                show={showfourth}
                size="lg"
                onHide={() => setShowfourth(false)}
                backdrop="static"
                keyboard={false}
                centered
            >
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body style={{ padding: 20 }}>
                    <Carousel nextIcon={<div style={{ background: '#FFFFFF', border: '1px solid #4F4F4F', marginLeft: 30, boxSizing: 'border-box', borderRadius: 2, height: 30, width: 30, color: "black" }}><ArrowForward /></div>} prevIcon={<div style={{ background: '#FFFFFF', border: '1px solid #4F4F4F', marginRight: 30, boxSizing: 'border-box', borderRadius: 2, height: 30, width: 30, color: "black" }}><ArrowBack /></div>} indicators={false}>
                        <Carousel.Item>
                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                                <h1 id="paragraphStyle" style={{ fontSize: 38, textAlign: "center", color: "black" }}>Spirit of Truth Native American Church Constitution</h1>
                                <p id="paragraphStyle" style={{ fontSize: 30, textAlign: "center" }}>(Revised in Council September 8, 2021)</p>
                                <p id="paragraphStyle" style={{ fontSize: 17, textAlign: "center", color: "black" }}>(A Native American Church with direct authority passed from the Lakota Sioux Native American
                                    Church of Wounded Knee and Rosebud.)</p>
                                <p id="paragraphStyle" style={{ fontSize: 17, textAlign: "center", color: "black", marginTop: -10 }}>We, the Charter Members of the Spirit of Truth Native American Church in Council, beginning in
                                    September 2021 and continuously to the present, by Original Constitution and as amended and revised to
                                    present, by the Unanimous Voice do make this
                                </p>
                                <p id="paragraphStyle" style={{ fontSize: 20, fontWeight: "bold", textAlign: "center", color: "black", marginTop: -5, letterSpacing: 2 }}>DeclarationofGoodConscience andPractice,
                                    Constitution, andEstablishment oftheSpirit ofTruthNativeAmericanChurch.</p>
                                <p id="paragraphStyle" style={{ fontSize: 17, textAlign: "center", color: "black" }}>With respect to all in a sacred manner, we make a beginning of our speaking</p>
                                <p id="paragraphStyle" style={{ fontSize: 30, textAlign: "center", color: "black", fontStyle: "italic" }}>Preamble</p>
                                <p id="paragraphStyle" style={{ color: "black", fontSize: 16, marginTop: -5 }}>We the Spirit of Truth Native American Church believe in the Creator and that the Creator made all men and
                                    women who have lived, now live, and who will yet live, as free and equal beings. We recognize all of the
                                    Creator’s works to be for our learning and benefit and most particular we see the Earth as our Holy Temple and
                                    everything the Creator has placed upon it to be for our learning and use. </p>
                                <p id="paragraphStyle" style={{ color: "black", fontSize: 16, marginTop: -5 }}>
                                    We recognize the inherent, ancestral, sovereign rights granted to all people by the Creator, as also by human
                                    conscience, international law, and legal constructs of reciprocity, mutuality, and comity, which cannot be
                                    diminished or extinguished. We believe that we derive from and that we may become like our Ancestral
                                    Spiritual Leaders, as also through the Holy Order of the Church, we claim the right to restore our Sacred
                                    Religion based upon their teachings, which have been passed down to us through the traditions, customs,
                                    ceremonies, writings, and records of Indigenous Peoples, among which we acknowledge the Native American
                                    stories and records, Holy Bible, the Torah, the Vedic Texts, Ancient Egyptian Hieroglyphics, Ayahtkuhyaht
                                    Text, and so forth, by way of example. We see all Holy Spirit inspired writings to be Scripture but do not
                                    recognize their infallibility. We understand that imperfections can arise due to translation errors,
                                    misinterpretations, willful intent, and so forth. We hold the Sacred Scriptures, no matter where they originate
                                    from, to be useful in our Spiritual Progression as long as they do not disagree with the message of the Messiah
                                    and are witnessed to us by the Holy Spirit to be true or founded on principles of truth. We believe the Spirit of
                                    Truth is the ultimate guide to follow on The Sacred Healing Way (also called The Way or Healing Way) in our
                                    journey to Salvation.</p>
                                <p id="paragraphStyle" style={{ color: "black", fontSize: 16, marginTop: -5 }}>In accordance with the Principles and Teachings of the Sacred Records, from which we obtain our foundation,
                                    we believe that we are all Relations one to another and we are children of the same Creator. We affirm the
                                    UNITED NATIONS Declaration on the Rights of Indigenous Peoples (U.N. Sub-commission on Prevention of</p>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                                <p id="paragraphStyle" style={{ color: "black", fontSize: 16, marginTop: -5 }}>Discrimination and Protection of Minorities 1994/45, August 26, 1994. U.N. Doc. E/CN.4/1995/2,
                                    E/CN.4/sub.2/1994/56, at 105 (1994)), which was ratified into International Human Rights Law in 2007. We
                                    also affirm and applaud the Domestic Law of the United States, specifically 21c USC Chapter 42;2000;b(b) and
                                    USC Chapter 43;2000;c, to which we have committed ourselves, to uphold and to defend.
                                    Fundamental to our traditions is the truth that, as Children of the Creator, we are entitled to the freedoms of
                                    thought, religion, sacred objects and our sacraments, ceremonies, rites, observances, and so forth, and to pursue
                                    the same according to the dictates of our own hearts and the doctrines of our religion, insofar as those freedoms
                                    do not prevent others from likewise enjoying the same liberty.</p>
                                <p id="paragraphStyle" style={{ color: "black", fontSize: 16, marginTop: -5 }}>We believe that men and women have been endowed with intelligence enough to govern themselves in such a
                                    manner as to guarantee to themselves these freedoms, to establish just and right ways to deal with each other, to
                                    maintain a tranquil and secure domestic life, provide for the defense of these rights when needed, and to ensure
                                    for ourselves and our posterity the blessings that our culture, traditions, and teachings bring</p>
                                <p id="paragraphStyle" style={{ color: "black", fontSize: 16, marginTop: -5 }}>Accordingly, we exercise the authority passed on to us by our ancestors as well as the rights guaranteed to all
                                    citizens of the United States and by the State of Missouri, to form our Church based upon the restoration of our
                                    Ancient Faith, and we ordain and establish this:</p>
                                <p id="paragraphStyle" style={{ fontSize: 23, textAlign: "center", color: "black" }} >Constitution for the Spirit of Truth Native American Church as a
                                    Native American Church and Ministry</p>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                                <p id="paragraphStyle" style={{ color: "black", fontSize: 16, marginTop: -5 }}>Discrimination and Protection of Minorities 1994/45, August 26, 1994. U.N. Doc. E/CN.4/1995/2,
                                    E/CN.4/sub.2/1994/56, at 105 (1994)), which was ratified into International Human Rights Law in 2007. We
                                    also affirm and applaud the Domestic Law of the United States, specifically 21c USC Chapter 42;2000;b(b) and
                                    USC Chapter 43;2000;c, to which we have committed ourselves, to uphold and to defend.
                                    Fundamental to our traditions is the truth that, as Children of the Creator, we are entitled to the freedoms of
                                    thought, religion, sacred objects and our sacraments, ceremonies, rites, observances, and so forth, and to pursue
                                    the same according to the dictates of our own hearts and the doctrines of our religion, insofar as those freedoms
                                    do not prevent others from likewise enjoying the same liberty.</p>
                                <p id="paragraphStyle" style={{ color: "black", fontSize: 16, marginTop: -5 }}>We believe that men and women have been endowed with intelligence enough to govern themselves in such a
                                    manner as to guarantee to themselves these freedoms, to establish just and right ways to deal with each other, to
                                    maintain a tranquil and secure domestic life, provide for the defense of these rights when needed, and to ensure
                                    for ourselves and our posterity the blessings that our culture, traditions, and teachings bring</p>
                                <p id="paragraphStyle" style={{ color: "black", fontSize: 16, marginTop: -5 }}>Accordingly, we exercise the authority passed on to us by our ancestors as well as the rights guaranteed to all
                                    citizens of the United States and by the State of Missouri, to form our Church based upon the restoration of our
                                    Ancient Faith, and we ordain and establish this:</p>
                                <p id="paragraphStyle" style={{ fontSize: 23, textAlign: "center", color: "black" }} >Constitution for the Spirit of Truth Native American Church as a
                                    Native American Church and Ministry</p>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </Modal.Body>
            </Modal>
            {!isLoading && <><NavbarComp />
                <img src={AuthorityImg} style={{ width: "100%" }} />
                <Container style={{ padding: 15 }}>
                    <p id="RiseOfMedicalText" style={{ textAlign: "left" }}>Establishment of Authority</p>
                    <p id="paragraphStyle">Even though we believe in our inalienable rights as children of the Creator, we also recognize that we live in a world with different countries that have established their laws that we choose to respect and uphold.  The United States of America has established Freedom of Religion, but sadly in court often the government will not uphold an individual’s religious views.  (For example, the honorable Judge Benjamin Zvenia said that he has never seen the religious exemption defense win in court over the charge of practicing medicine without a license unless that religious exemption also had the established authority from a Native American Church.)  Also, the world courts will not grant full protection over your beliefs if the rights to those beliefs have not been established. </p>
                    <p id="paragraphStyle">In the United States of American, the law (AIRFA, NAFERA, RFRA, and so forth) dictates what may be expressed as a Traditional Organization, Band, or Native American Tribe.  These laws are the rules that we must follow and therefore have established the Spirit of Truth Native American Church within these rules.  </p>
                    <p id="paragraphStyle">The word 'Tribe' is a legal word used by the conquering US Government to legally describe those Native Americans that have treaties with the USA and were allowed to live on a 'reservation'.  The Law of the Land uses the word 'reservation' as a way to establish Government Trusts, Allotments, Hunting Rights, Living Area, and so forth.  Under the Law, the word 'Tribe' does not legally apply to the Spirit of Truth Native American Church, so we do not use that legal word to describe our organization.  Now the words "Lodge" or "Band" are used more by the Native American Peoples than the Conquering Government so we can easily apply these words to the Spirit of Truth Native American Church.</p>
                    <p id="paragraphStyle">The Conquering Government rule allowed many people to conspire to deny the Native Americans their God-given and civil liberties.  The Wounded Knee Massacre in 1890 culminated the Conquering Government's “extermination” agenda and was the last directly sanctioned murder of the members of the Native American Religion.  Because of this atrocity and the political opinion associated with it, the Conquering Government changed to a softer agenda that targeted the “cultural genocide” of the Native Americans by expanding the Native American reeducation boarding school program and that forcibly took Native American children from their families.  (This is now considered Ethnic Cleansing according to World Law.)  </p>
                    <p id="paragraphStyle">Because of these atrocities, the Native American Church went “underground” for almost three decades.  In 1918 persecution once again became mainstream when the Bureau of Indian Affairs petitioned Congress to outlaw the Native American Culture.  Lucky, for the Native Americans and their religious beliefs, there was some wisdom by the people in the Senate and the bill was defeated.  This then lead a group of inspired individuals to use the Conquering Government’s legal system to try to protect the Native American religious culture from future harassment.</p>
                    <p id="paragraphStyle">Because of the wisdom of our Ancestors, in 1918 the first legally established Native American Church was successfully recognized and established.  This then leads to other independent Native American Churches being formed in the surrounding counties, including the Lakota Sioux Rosebud Reservation on July 26, 1924.  Over the last century, there have been more legal actions to further assist in establishing the rights of the Native American religion.</p>
                    <p id="paragraphStyle">Under the law, the Native American Church is a Traditional Organization.  As a Traditional Organization, its members and ministers still cannot take advantage of the Government Trusts, Allotments, Hunting Rights, Living Area, and so forth, but they can use other points in the law to practice their religion.  Like most religions, the Native American Church includes many individuals from all different ethnic backgrounds, not just those comprised of government-recognized tribes.  (For example, in 1969 Andrew Scott from Parks, Arizona wrote about his Native American Church membership stating, “. . . We have a membership of approximately one hundred and twenty people of which 60% are Indian, 20% part Indian, and 20% non-Indians . . .”) </p>
                    <p id="paragraphStyle">The Spirit of Truth Native American Church has a direct establishment of Authority from the Rosebud Native American Church.  Our ministers, therefore, have both the Spiritual Authority and legal protection of being directly affiliated with the Native American Church.  This protection is far greater than what can be obtained from a federally regulated Tribe.  </p>
                    <p id="paragraphStyle">Below is the line of authority of how the Spirit of Truth Native American Church and its Ministers received their authority to establish their branch of the Native American Church.</p>
                    <ul id="paragraphStyle" style={{ listStyle: "inside" }}>The Rosebud Native American Church legally established its authority with the government on July 26, 1924.  </ul>
                    <ul id="paragraphStyle">On March 20, 1998, the authority to start a new branch of the Native American Church was given to James Warren ‘Flaming Eagle’ Mooney of the Oklevueha Earthwalks Native American Church of Utah Inc by Blessing of Chief Leslie Fool Bull the Head of the Rosebud Native American Church.</ul>
                    <ul id="paragraphStyle">Because the government of the state of Utah was discriminating against James ‘Flaming Eagle’ Mooney’s religious freedoms, his original authority was verified and sustained on August 19, 2007, by Richard ‘He Who Has The Foundation’ Swallow the current President of the Native American Church, Rosebud Reservation of South Dakota and the Oglala Sioux Chief of the Eagle Clan.  </ul>
                    <ul id="paragraphStyle">James Warren ‘Flaming Eagle’ Mooney on March 17, 2009, gave Paul 'Man Found Standing' Dean the authority to start a new branch of the Native American Church for “as long as he walks Mother Earth.”</ul>
                    <ul id="paragraphStyle">Paul ‘Man Found Standing’ Dean legally established his branch of the Native American Church in Missouri on April 25, 2013.</ul>
                    <ul id="paragraphStyle">On September 5, 2021, Paul ‘Man Found Standing’ Dean held the New Haven Native American Church Chief’s Council and during that council and it was decided that a new independent branch of the Native American Church should be established with a greater priority focus on Yeshua and his teachings.  On September 8, 2021, Paul ‘Man Found Standing’ Dean legally established a new independent branch called the Spirit of Truth Native American Church in Missouri.</ul>
                    <p id="paragraphStyle">Federal Law states that a Native American Medicine Person, also known as a Minister, Native American Practitioner, or Traditional Spiritual Leader must be either an enrolled member of a Federally Recognized Tribe or Band, or he/she must be recognized as such by Tribes, Bands, or other Native American Traditional Organizations.  Therefore because of the establishment of our authority, every single member of the Spirit of Truth Native American Church enjoys protection and recognition, not as Tribal Medicine People, such as Lakota or Yankton, but as Spirit of Truth Members, Medicine Men, Medicine Women, Ministers, Natural Practitioners, or so forth of the Spirit of Truth Native American Church.  Because of our authority, all members are legally considered “Indians” under the law.  </p>
                    <p id="paragraphStyle">Our Establishment of Authority, as stated above and proven in the links below, does not depend upon the will of every changing political faction within the Tribes or competing organizations, but upon the nature of the Native American Religion that once an acknowledgment has been given it can never be taken away.  This message was upheld by the United States Supreme Court when it delivered its verdict in Gonzales vs O Centro de Espirto Vegetal – that blood quanta and Tribal enrollment are incidental if the organization is recognized by Tribes, Bands, or Traditional Organizations.  This is also the same ruling that the Supreme Court of the State of Utah delivered in Utah vs James W. Mooney, et. al.  This is also the message that the United States Department of Land Management delivered when 800 acres of the Siskyou Wilderness was given to the Maca Oyate Sundance Society of the Nemenhah (essentially giving Federal recognition to another independent branch of the Native American Church).</p>
                    <div id="boxesParentDiv" style={{ alignItems: "baseline" }}>
                        <div id="boxes" style={{ maxWidth: 260 }}>
                            <span>Fool Bull Blessing</span>
                            <Button onClick={() => setShowfirst(true)}>See Details</Button>
                        </div>
                        <div id="boxes" style={{ maxWidth: 260, minWidth: 235 }}>
                            <span>Richard Swallow Blessing</span>
                            <Button onClick={() => setShowSecond(true)}>See Details</Button>
                        </div>
                        <div id="boxes" style={{ maxWidth: 260 }}>
                            <span>James Mooney Blessing</span>
                            <Button onClick={() => setShowThird(true)}>See Details</Button>
                        </div>
                        <div id="boxes" style={{ maxWidth: 260 }}>
                            <span>Official Permission</span>
                            <Button onClick={() => setShowfourth(true)}>See Details</Button>
                        </div>
                    </div>
                </Container>
                <Footer /></>}
            {isLoading && <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flex: 1, height: "90vh" }}>
                <img src={loader} style={{ width: 300 }} />
            </div>}
        </div>
    )
}