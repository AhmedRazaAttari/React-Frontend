import React, { useState } from 'react';
import '../css/RiseofMedical.css';
import { Navbar, Container, Nav, Button, Carousel, Modal } from 'react-bootstrap';
import Footer from '../components/footer';
import { ArrowBack, ArrowForward } from '@material-ui/icons'
import NavbarComp from '../components/navbar';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import ConstitutionImg from '../assets/Constitution.png';
import constitutionCertificate from '../assets/constitutionCertificate.png';

export default function Constitution() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Modal
                show={show}
                size="lg"
                onHide={handleClose}
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
            <NavbarComp />
            <img src={ConstitutionImg} style={{ width: "100%" }} />
            <Container style={{ padding: 15 }}>
                <p id="paragraphStyle">Spirit of Truth Native American Church’s Medicine Men and Medicine Women are dedicated to following the Sacred Healing Way.  As an Independent Governing Branch of the Native American Church, our Spiritual Authority directly stems from the Lakota Sioux’s Native American Church, Rosebud Reservation of South Dakota. In the Declaration of Good Conscience and Practice, Constitution, and Establishment of the Church, We Walk In The Sacred Way!</p>                 <p id="RiseOfMedicalText">Constitution Preamble</p>
                <p id="paragraphStyle">We believe in the Creator and that the Creator made all men and women who have lived, do now live, and who will yet live, as free and equal beings.  We recognize the inherent, ancestral, sovereign rights granted to all people by the Creator, human conscience, international law, and legal constructs of reciprocity, mutuality, and comity, which cannot be diminished or extinguished.</p>
                <p id="paragraphStyle">We believe that we derive from and that we may become like the natives who lived in this land anciently and that, through their literal descendants, we claim the right to form a church organization based upon their teachings which have been passed down to us through the traditions, customs, ceremonies, records which have been guarded through the ages by their descendants.</p>
                <p id="paragraphStyle">Accordingly, we believe that we are all relations one to another and we are children of the same Creator.  We affirm the UNITED NATIONS Declaration on the Rights of Indigenous Peoples (U.N. Subcommission on Prevention of Discrimination and Protection of Minorities, 1994/45, August 26, 1994. U.N. Doc. E/CN.4/1995/2, E/CN.4/sub.2/1994/56, at 105 (1994)), which finally culminated in the Unanimous Ratification of the Members States and has become part of International Rights Law.</p>
                <p id="paragraphStyle">Fundamental to our traditions is the truth that, as children of the Creator, we are entitled to the freedoms of thought, religion, education, assembly, opinion, speech, movement, our sacred rights of worship and methods of healing, our traditional lifestyle and security within our historical territories, insofar as that freedom does not prevent others from likewise enjoying the same freedoms.  We believe that men and women have been endowed with intelligence enough to govern themselves in such a manner as to guarantee to themselves these freedoms, to establish just and right ways to deal with each other, to maintain a tranquil and secure domestic life, provide for the defense of these rights when needed, and to ensure for ourselves and our posterity the blessings that our culture, traditions, and teachings bring.</p>
                <p id="paragraphStyle">Accordingly, we exercise the Right of Self-Determination, which has been guaranteed by International and Domestic Law, to form the Spirit of Truth Native American Church comprised of individuals out of many Federally and Crown-Recognized Tribes and Bands, Non-recognized Tribes and Bands, Native Hawaiian, Native Alaskan, other Indigenous Peoples worldwide, and also from those individuals whom the Church shall see fit to admit by the exercise of our Religion and the administration of our Cultural Traditions and Institutions, whom we recognize as Our People, founded upon the Customs, Traditions, Principles, Religion, Governance, and Belief Systems cited herein, and we ordain and establish this Constitution for the Spirit of Truth Native American Church as an Indigenous Group under U.N.D.R.I.P.</p>
                <p id="RiseOfMedicalText"><Link onClick={() => setShow(true)}>Click here for our full Constitution</Link></p>
            </Container>
            <Footer />
        </div>
    )
}