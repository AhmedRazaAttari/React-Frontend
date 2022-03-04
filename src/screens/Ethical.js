import React from 'react';
import '../css/RiseofMedical.css';
import { Navbar, Container, Nav, Button, Form, Carousel } from 'react-bootstrap';
import Footer from '../components/footer';
import { ArrowForward, ArrowBack } from '@material-ui/icons'
import NavbarComp from '../components/navbar';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import Ethical from '../assets/Ethical.png';

export default function Constitution() {
    return (
        <div>
            <NavbarComp />
            <Container style={{ padding: 15 }}>
                <p id="RiseOfMedicalText">Etcical Code Of Conduct</p>
                <Carousel nextIcon={<div style={{ background: '#FFFFFF', border: '1px solid #4F4F4F', marginLeft: 30, boxSizing: 'border-box', borderRadius: 2, height: 30, width: 30, color: "black" }}><ArrowForward /></div>} prevIcon={<div style={{ background: '#FFFFFF', border: '1px solid #4F4F4F', marginRight: 30, boxSizing: 'border-box', borderRadius: 2, height: 30, width: 30, color: "black" }}><ArrowBack /></div>} indicators={false}>
                    <Carousel.Item>
                        <div style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
                            <h1 id="paragraphStyle" style={{ fontSize: 28, textAlign: "center", color: "black", alignSelf: "center" }}>Spirit of Truth Native American Church
                                Ethical Code of Conduct</h1>
                            <p id="paragraphStyle" style={{ fontSize: 19, color: "black", fontWeight: "bold", textAlign: "left" }}>Introduction</p>
                            <p id="paragraphStyle" style={{ color: "black", fontSize: 16, marginTop: -5 }}>The Spirit of Truth Native American Church is a group of Members who strive to live and practice the Sacred
                                Healing Way of their Ancient Ancestors. Each Spirit of Truth Native American Church Chapter Medicine
                                Person is a duly adopted Member of the Spiritual Family of the Principal Medicine Chief and has made
                                Covenant Declarations that complete the requirements to be inducted into Ministry. The Sacred Healing Way is
                                a system of teachings and practices which has been developed and approved under the direction of the Principle
                                Medicine Chief and appropriate councils, for the creation and training of the Church's Ministers of Medicine
                                Men and Medicine Women.</p>
                            <p id="paragraphStyle" style={{ color: "black", fontSize: 16, marginTop: -5 }}>
                                Spirit of Truth Native American Church Medicine People are committed to the use of their knowledge,
                                experience, and training to enhance and further the condition of individuals, families, communities, all of
                                society, and the planet. Our Medicine Men and Medicine Women respect and protect the civil and human rights
                                of others and their freedom of inquiry and spiritual experience. They strive to assist the public and other
                                Members of the Church to understand and learn about the Creator, the creation, healing, freedom of health care,
                                informed judgment, the self-empowered choice regarding religion, Spirit, health, ceremony, education, and so
                                forth. In doing so, they perform many functions including Healer, Teacher, Support Person, Consultant,
                                Counselor, Spiritual Guide, Interventionist, Minister, Clergy, Role Model, and so forth. </p>
                            <p id="paragraphStyle" style={{ color: "black", fontSize: 16, marginTop: -5 }}>Medicine Men and Medicine Women should understand that by the very virtue of their position and chosen way
                                of life, they are models for society and their way of administering their healing services. By them living within
                                a code created by the Spirit and by ethical consideration, they are doing all that is reasonably within their power
                                to perform, to teach, and to heal.</p>
                            <p id="paragraphStyle" style={{ color: "black", fontSize: 16, marginTop: -5 }}>The Spirit of Truth Native American Church Ethical Code of Conduct is intended to provide guides to
                                encompass most scenarios found in Healing. Found in it are the guides to establish and protect the safety and
                                welfare of individuals, communities, society, and the world. The goal of the Ethical Code of Conduct is to
                                educate its Members and Ministers and to inform them that actions can result in outcomes which are sometimes
                                cannot be seen before the fact. Medicine Men and Medicine Women should be dedicated to an Ethical Code of
                                Conduct so the outcomes of their actions will produce much more positive results.</p>
                            <p id="paragraphStyle" style={{ fontSize: 19, color: "black", fontWeight: "bold", textAlign: "left" }}>Ethical Code of Conduct General Guidelines</p>
                            <p id="paragraphStyle" style={{ color: "black", fontSize: 16, marginTop: -5 }}>These general guidelines for the Ethical Code of Conduct assist to inspire the Healing Community and the
                                World toward the spiritual understanding of the Creator, Yeshua, the Holy Spirit, and assist the physical welfare
                                of all. The ethical standards and guidelines form a foundation of integrity and assist the thought process to
                                produce the best result in a situation. Use them as a guide in your Ministry to assist you in creating a better
                                world both physically and also spiritually. </p>
                            <p id="paragraphStyle" style={{ color: "black", fontSize: 16, marginTop: -5 }}>The following Guidelines have within them the Four Great Principles of the Ancestors</p>
                            <p id="paragraphStyle" style={{ fontSize: 19, color: "black", fontWeight: "bold", textAlign: "left" }}>Guideline 1: First, Do Good </p>
                            <p id="paragraphStyle" style={{ color: "black", fontSize: 16, marginTop: -5 }}>In the Ministry, the Spirit of Truth Native American Church Medicine Men and Medicine Women strive to
                                safeguard the rights and welfare of those with whom they interact, other affected persons, the welfare of all
                                living things, and of the Earth itself. They follow the Way as the Peacemaker taught. Methods that might
                                conceivably do harm, directly or as a side effect, are avoided where reasonably possible. Any conflict that may
                                occur, a Medicine Person will strive to resolve it in the most responsible manner and with as little or no harm as
                                they can in their emulation of the Peacemaker.</p>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
                            <p id="paragraphStyle" style={{ color: "black", fontSize: 16, marginTop: -5 }}>Ministers should use the educational materials, Sacred Writings, their Lodge Chapters, District Councils, and so
                                forth to ensure that good comes from their actions and little or no harm ensues. A Medicine Person needs to be
                                vigilant in protecting others from any misuse of their influence. While in service of others, the Medicine Person
                                needs to hold the safety of who they are ministering to as the top priority. </p>
                            <p id="paragraphStyle" style={{ color: "black", fontSize: 16, marginTop: -5 }}>
                                Each Spirit of Truth Native American Church Medicine Man and Medicine Woman also needs to take into
                                consideration of their own physical, mental, and spiritual health and the possible effects of their wellbeing on
                                those with whom they minister.</p>
                            <p id="paragraphStyle" style={{ fontSize: 19, color: "black", fontWeight: "bold", textAlign: "left" }}>Guideline 2: Responsibility</p>
                            <p id="paragraphStyle" style={{ color: "black", fontSize: 16, marginTop: -5 }}>Forming relationships of trust and honesty is the process for all Church Members. Medicine People should also
                                hold themselves to a higher standard of ethical conduct and seek to educate all they work with. Clarifying any
                                healing modality, be it physical or spiritual, and establishing informed consent with the person they are
                                ministering to, is the responsibility of all Medicine Men and Medicine Women. Medicine People also accept
                                fitting responsibility for who they are and for all of their actions</p>
                            <p id="paragraphStyle" style={{ color: "black", fontSize: 16, marginTop: -5 }}>Spirit of Truth Native American Church Ministers make sure they consult with other Spirit of Truth Native
                                American Church Medicine Men and Women, assist other professionals, educate themselves, maintain dignity
                                and respect, and refer their clients to more qualified professional or Healer when appropriate. They are
                                attentive to the Ethical Code of Conduct for themselves and other Ministers in the Church. They strive to only
                                speak positively about all others and avoid "evil speaking" in all its forms. </p>
                            <p id="paragraphStyle" style={{ color: "black", fontSize: 16, marginTop: -5 }}>Ministers regularly perform service, volunteer time, or support the Spiritual Community as appropriate.
                                Contributing to the greater good is an honor and Spiritual duty. </p>
                            <p id="paragraphStyle" style={{ fontSize: 19, color: "black", fontWeight: "bold", textAlign: "left" }}>Guideline 3: Integrity, Honor, and Service</p>
                            <p id="paragraphStyle" style={{ color: "black", fontSize: 16, marginTop: -5 }}>In simple language, the Spirit of Truth Native American Church Healers hold to a Goodness Ethic. They strive
                                to care for themselves, their family, their community, and the planet through cooperation. This leads to living a
                                life of integrity and sustainability. </p>
                            <p id="paragraphStyle" style={{ color: "black", fontSize: 16, marginTop: -5 }}>Through education in all its forms, Medicine Men and Medicine Women maintain competency in their Ministry
                                and a connection to their Healing Services. They should only undertake those activities they can reasonably
                                expect to fulfill. In their Medicine Bundle, they honor the Creator through the symbolism of the Sacraments,
                                Healing Modalities, and so forth. It is an Honor for the Medicine People to stand firm in their Spiritual
                                Commitment by performing the Bundle Opening and Closing Ceremonies in the course of their Healing
                                Services they provide. This brings Honor to the Church at to the Minister. </p>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
                            <p id="paragraphStyle" style={{ color: "black", fontSize: 16, marginTop: -5 }}>Ministers should use the educational materials, Sacred Writings, their Lodge Chapters, District Councils, and so
                                forth to ensure that good comes from their actions and little or no harm ensues. A Medicine Person needs to be
                                vigilant in protecting others from any misuse of their influence. While in service of others, the Medicine Person
                                needs to hold the safety of who they are ministering to as the top priority. </p>
                            <p id="paragraphStyle" style={{ color: "black", fontSize: 16, marginTop: -5 }}>
                                Each Spirit of Truth Native American Church Medicine Man and Medicine Woman also needs to take into
                                consideration of their own physical, mental, and spiritual health and the possible effects of their wellbeing on
                                those with whom they minister.</p>
                            <p id="paragraphStyle" style={{ fontSize: 19, color: "black", fontWeight: "bold", textAlign: "left" }}>Guideline 2: Responsibility</p>
                            <p id="paragraphStyle" style={{ color: "black", fontSize: 16, marginTop: -5 }}>Forming relationships of trust and honesty is the process for all Church Members. Medicine People should also
                                hold themselves to a higher standard of ethical conduct and seek to educate all they work with. Clarifying any
                                healing modality, be it physical or spiritual, and establishing informed consent with the person they are
                                ministering to, is the responsibility of all Medicine Men and Medicine Women. Medicine People also accept
                                fitting responsibility for who they are and for all of their actions</p>
                            <p id="paragraphStyle" style={{ color: "black", fontSize: 16, marginTop: -5 }}>Spirit of Truth Native American Church Ministers make sure they consult with other Spirit of Truth Native
                                American Church Medicine Men and Women, assist other professionals, educate themselves, maintain dignity
                                and respect, and refer their clients to more qualified professional or Healer when appropriate. They are
                                attentive to the Ethical Code of Conduct for themselves and other Ministers in the Church. They strive to only
                                speak positively about all others and avoid "evil speaking" in all its forms. </p>
                            <p id="paragraphStyle" style={{ color: "black", fontSize: 16, marginTop: -5 }}>Ministers regularly perform service, volunteer time, or support the Spiritual Community as appropriate.
                                Contributing to the greater good is an honor and Spiritual duty. </p>
                            <p id="paragraphStyle" style={{ fontSize: 19, color: "black", fontWeight: "bold", textAlign: "left" }}>Guideline 3: Integrity, Honor, and Service</p>
                            <p id="paragraphStyle" style={{ color: "black", fontSize: 16, marginTop: -5 }}>In simple language, the Spirit of Truth Native American Church Healers hold to a Goodness Ethic. They strive
                                to care for themselves, their family, their community, and the planet through cooperation. This leads to living a
                                life of integrity and sustainability. </p>
                            <p id="paragraphStyle" style={{ color: "black", fontSize: 16, marginTop: -5 }}>Through education in all its forms, Medicine Men and Medicine Women maintain competency in their Ministry
                                and a connection to their Healing Services. They should only undertake those activities they can reasonably
                                expect to fulfill. In their Medicine Bundle, they honor the Creator through the symbolism of the Sacraments,
                                Healing Modalities, and so forth. It is an Honor for the Medicine People to stand firm in their Spiritual
                                Commitment by performing the Bundle Opening and Closing Ceremonies in the course of their Healing
                                Services they provide. This brings Honor to the Church at to the Minister. </p>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
                            <p id="paragraphStyle" style={{ color: "black", fontSize: 16, marginTop: -5 }}>Ministers should use the educational materials, Sacred Writings, their Lodge Chapters, District Councils, and so
                                forth to ensure that good comes from their actions and little or no harm ensues. A Medicine Person needs to be
                                vigilant in protecting others from any misuse of their influence. While in service of others, the Medicine Person
                                needs to hold the safety of who they are ministering to as the top priority. </p>
                            <p id="paragraphStyle" style={{ color: "black", fontSize: 16, marginTop: -5 }}>
                                Each Spirit of Truth Native American Church Medicine Man and Medicine Woman also needs to take into
                                consideration of their own physical, mental, and spiritual health and the possible effects of their wellbeing on
                                those with whom they minister.</p>
                            <p id="paragraphStyle" style={{ fontSize: 19, color: "black", fontWeight: "bold", textAlign: "left" }}>Guideline 2: Responsibility</p>
                            <p id="paragraphStyle" style={{ color: "black", fontSize: 16, marginTop: -5 }}>Forming relationships of trust and honesty is the process for all Church Members. Medicine People should also
                                hold themselves to a higher standard of ethical conduct and seek to educate all they work with. Clarifying any
                                healing modality, be it physical or spiritual, and establishing informed consent with the person they are
                                ministering to, is the responsibility of all Medicine Men and Medicine Women. Medicine People also accept
                                fitting responsibility for who they are and for all of their actions</p>
                            <p id="paragraphStyle" style={{ color: "black", fontSize: 16, marginTop: -5 }}>Spirit of Truth Native American Church Ministers make sure they consult with other Spirit of Truth Native
                                American Church Medicine Men and Women, assist other professionals, educate themselves, maintain dignity
                                and respect, and refer their clients to more qualified professional or Healer when appropriate. They are
                                attentive to the Ethical Code of Conduct for themselves and other Ministers in the Church. They strive to only
                                speak positively about all others and avoid "evil speaking" in all its forms. </p>
                            <p id="paragraphStyle" style={{ color: "black", fontSize: 16, marginTop: -5 }}>Ministers regularly perform service, volunteer time, or support the Spiritual Community as appropriate.
                                Contributing to the greater good is an honor and Spiritual duty. </p>
                            <p id="paragraphStyle" style={{ fontSize: 19, color: "black", fontWeight: "bold", textAlign: "left" }}>Guideline 3: Integrity, Honor, and Service</p>
                            <p id="paragraphStyle" style={{ color: "black", fontSize: 16, marginTop: -5 }}>In simple language, the Spirit of Truth Native American Church Healers hold to a Goodness Ethic. They strive
                                to care for themselves, their family, their community, and the planet through cooperation. This leads to living a
                                life of integrity and sustainability. </p>
                            <p id="paragraphStyle" style={{ color: "black", fontSize: 16, marginTop: -5 }}>Through education in all its forms, Medicine Men and Medicine Women maintain competency in their Ministry
                                and a connection to their Healing Services. They should only undertake those activities they can reasonably
                                expect to fulfill. In their Medicine Bundle, they honor the Creator through the symbolism of the Sacraments,
                                Healing Modalities, and so forth. It is an Honor for the Medicine People to stand firm in their Spiritual
                                Commitment by performing the Bundle Opening and Closing Ceremonies in the course of their Healing
                                Services they provide. This brings Honor to the Church at to the Minister. </p>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
                            <p id="paragraphStyle" style={{ color: "black", fontSize: 16, marginTop: -5 }}>Ministers should use the educational materials, Sacred Writings, their Lodge Chapters, District Councils, and so
                                forth to ensure that good comes from their actions and little or no harm ensues. A Medicine Person needs to be
                                vigilant in protecting others from any misuse of their influence. While in service of others, the Medicine Person
                                needs to hold the safety of who they are ministering to as the top priority. </p>
                            <p id="paragraphStyle" style={{ color: "black", fontSize: 16, marginTop: -5 }}>
                                Each Spirit of Truth Native American Church Medicine Man and Medicine Woman also needs to take into
                                consideration of their own physical, mental, and spiritual health and the possible effects of their wellbeing on
                                those with whom they minister.</p>
                            <p id="paragraphStyle" style={{ fontSize: 19, color: "black", fontWeight: "bold", textAlign: "left" }}>Guideline 2: Responsibility</p>
                            <p id="paragraphStyle" style={{ color: "black", fontSize: 16, marginTop: -5 }}>Forming relationships of trust and honesty is the process for all Church Members. Medicine People should also
                                hold themselves to a higher standard of ethical conduct and seek to educate all they work with. Clarifying any
                                healing modality, be it physical or spiritual, and establishing informed consent with the person they are
                                ministering to, is the responsibility of all Medicine Men and Medicine Women. Medicine People also accept
                                fitting responsibility for who they are and for all of their actions</p>
                            <p id="paragraphStyle" style={{ color: "black", fontSize: 16, marginTop: -5 }}>Spirit of Truth Native American Church Ministers make sure they consult with other Spirit of Truth Native
                                American Church Medicine Men and Women, assist other professionals, educate themselves, maintain dignity
                                and respect, and refer their clients to more qualified professional or Healer when appropriate. They are
                                attentive to the Ethical Code of Conduct for themselves and other Ministers in the Church. They strive to only
                                speak positively about all others and avoid "evil speaking" in all its forms. </p>
                            <p id="paragraphStyle" style={{ color: "black", fontSize: 16, marginTop: -5 }}>Ministers regularly perform service, volunteer time, or support the Spiritual Community as appropriate.
                                Contributing to the greater good is an honor and Spiritual duty. </p>
                            <p id="paragraphStyle" style={{ fontSize: 19, color: "black", fontWeight: "bold", textAlign: "left" }}>Guideline 3: Integrity, Honor, and Service</p>
                            <p id="paragraphStyle" style={{ color: "black", fontSize: 16, marginTop: -5 }}>In simple language, the Spirit of Truth Native American Church Healers hold to a Goodness Ethic. They strive
                                to care for themselves, their family, their community, and the planet through cooperation. This leads to living a
                                life of integrity and sustainability. </p>
                            <p id="paragraphStyle" style={{ color: "black", fontSize: 16, marginTop: -5 }}>Through education in all its forms, Medicine Men and Medicine Women maintain competency in their Ministry
                                and a connection to their Healing Services. They should only undertake those activities they can reasonably
                                expect to fulfill. In their Medicine Bundle, they honor the Creator through the symbolism of the Sacraments,
                                Healing Modalities, and so forth. It is an Honor for the Medicine People to stand firm in their Spiritual
                                Commitment by performing the Bundle Opening and Closing Ceremonies in the course of their Healing
                                Services they provide. This brings Honor to the Church at to the Minister. </p>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
                            <p id="paragraphStyle" style={{ color: "black", fontSize: 16, marginTop: -5 }}>Ministers should use the educational materials, Sacred Writings, their Lodge Chapters, District Councils, and so
                                forth to ensure that good comes from their actions and little or no harm ensues. A Medicine Person needs to be
                                vigilant in protecting others from any misuse of their influence. While in service of others, the Medicine Person
                                needs to hold the safety of who they are ministering to as the top priority. </p>
                            <p id="paragraphStyle" style={{ color: "black", fontSize: 16, marginTop: -5 }}>
                                Each Spirit of Truth Native American Church Medicine Man and Medicine Woman also needs to take into
                                consideration of their own physical, mental, and spiritual health and the possible effects of their wellbeing on
                                those with whom they minister.</p>
                            <p id="paragraphStyle" style={{ fontSize: 19, color: "black", fontWeight: "bold", textAlign: "left" }}>Guideline 2: Responsibility</p>
                            <p id="paragraphStyle" style={{ color: "black", fontSize: 16, marginTop: -5 }}>Forming relationships of trust and honesty is the process for all Church Members. Medicine People should also
                                hold themselves to a higher standard of ethical conduct and seek to educate all they work with. Clarifying any
                                healing modality, be it physical or spiritual, and establishing informed consent with the person they are
                                ministering to, is the responsibility of all Medicine Men and Medicine Women. Medicine People also accept
                                fitting responsibility for who they are and for all of their actions</p>
                            <p id="paragraphStyle" style={{ color: "black", fontSize: 16, marginTop: -5 }}>Spirit of Truth Native American Church Ministers make sure they consult with other Spirit of Truth Native
                                American Church Medicine Men and Women, assist other professionals, educate themselves, maintain dignity
                                and respect, and refer their clients to more qualified professional or Healer when appropriate. They are
                                attentive to the Ethical Code of Conduct for themselves and other Ministers in the Church. They strive to only
                                speak positively about all others and avoid "evil speaking" in all its forms. </p>
                            <p id="paragraphStyle" style={{ color: "black", fontSize: 16, marginTop: -5 }}>Ministers regularly perform service, volunteer time, or support the Spiritual Community as appropriate.
                                Contributing to the greater good is an honor and Spiritual duty. </p>
                            <p id="paragraphStyle" style={{ fontSize: 19, color: "black", fontWeight: "bold", textAlign: "left" }}>Guideline 3: Integrity, Honor, and Service</p>
                            <p id="paragraphStyle" style={{ color: "black", fontSize: 16, marginTop: -5 }}>In simple language, the Spirit of Truth Native American Church Healers hold to a Goodness Ethic. They strive
                                to care for themselves, their family, their community, and the planet through cooperation. This leads to living a
                                life of integrity and sustainability. </p>
                            <p id="paragraphStyle" style={{ color: "black", fontSize: 16, marginTop: -5 }}>Through education in all its forms, Medicine Men and Medicine Women maintain competency in their Ministry
                                and a connection to their Healing Services. They should only undertake those activities they can reasonably
                                expect to fulfill. In their Medicine Bundle, they honor the Creator through the symbolism of the Sacraments,
                                Healing Modalities, and so forth. It is an Honor for the Medicine People to stand firm in their Spiritual
                                Commitment by performing the Bundle Opening and Closing Ceremonies in the course of their Healing
                                Services they provide. This brings Honor to the Church at to the Minister. </p>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
                            <p id="paragraphStyle" style={{ color: "black", fontSize: 16, marginTop: -5 }}>Ministers should use the educational materials, Sacred Writings, their Lodge Chapters, District Councils, and so
                                forth to ensure that good comes from their actions and little or no harm ensues. A Medicine Person needs to be
                                vigilant in protecting others from any misuse of their influence. While in service of others, the Medicine Person
                                needs to hold the safety of who they are ministering to as the top priority. </p>
                            <p id="paragraphStyle" style={{ color: "black", fontSize: 16, marginTop: -5 }}>
                                Each Spirit of Truth Native American Church Medicine Man and Medicine Woman also needs to take into
                                consideration of their own physical, mental, and spiritual health and the possible effects of their wellbeing on
                                those with whom they minister.</p>
                            <p id="paragraphStyle" style={{ fontSize: 19, color: "black", fontWeight: "bold", textAlign: "left" }}>Guideline 2: Responsibility</p>
                            <p id="paragraphStyle" style={{ color: "black", fontSize: 16, marginTop: -5 }}>Forming relationships of trust and honesty is the process for all Church Members. Medicine People should also
                                hold themselves to a higher standard of ethical conduct and seek to educate all they work with. Clarifying any
                                healing modality, be it physical or spiritual, and establishing informed consent with the person they are
                                ministering to, is the responsibility of all Medicine Men and Medicine Women. Medicine People also accept
                                fitting responsibility for who they are and for all of their actions</p>
                            <p id="paragraphStyle" style={{ color: "black", fontSize: 16, marginTop: -5 }}>Spirit of Truth Native American Church Ministers make sure they consult with other Spirit of Truth Native
                                American Church Medicine Men and Women, assist other professionals, educate themselves, maintain dignity
                                and respect, and refer their clients to more qualified professional or Healer when appropriate. They are
                                attentive to the Ethical Code of Conduct for themselves and other Ministers in the Church. They strive to only
                                speak positively about all others and avoid "evil speaking" in all its forms. </p>
                            <p id="paragraphStyle" style={{ color: "black", fontSize: 16, marginTop: -5 }}>Ministers regularly perform service, volunteer time, or support the Spiritual Community as appropriate.
                                Contributing to the greater good is an honor and Spiritual duty. </p>
                            <p id="paragraphStyle" style={{ fontSize: 19, color: "black", fontWeight: "bold", textAlign: "left" }}>Guideline 3: Integrity, Honor, and Service</p>
                            <p id="paragraphStyle" style={{ color: "black", fontSize: 16, marginTop: -5 }}>In simple language, the Spirit of Truth Native American Church Healers hold to a Goodness Ethic. They strive
                                to care for themselves, their family, their community, and the planet through cooperation. This leads to living a
                                life of integrity and sustainability. </p>
                            <p id="paragraphStyle" style={{ color: "black", fontSize: 16, marginTop: -5 }}>Through education in all its forms, Medicine Men and Medicine Women maintain competency in their Ministry
                                and a connection to their Healing Services. They should only undertake those activities they can reasonably
                                expect to fulfill. In their Medicine Bundle, they honor the Creator through the symbolism of the Sacraments,
                                Healing Modalities, and so forth. It is an Honor for the Medicine People to stand firm in their Spiritual
                                Commitment by performing the Bundle Opening and Closing Ceremonies in the course of their Healing
                                Services they provide. This brings Honor to the Church at to the Minister. </p>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
                            <p id="paragraphStyle" style={{ color: "black", fontSize: 16, marginTop: -5 }}>Ministers should use the educational materials, Sacred Writings, their Lodge Chapters, District Councils, and so
                                forth to ensure that good comes from their actions and little or no harm ensues. A Medicine Person needs to be
                                vigilant in protecting others from any misuse of their influence. While in service of others, the Medicine Person
                                needs to hold the safety of who they are ministering to as the top priority. </p>
                            <p id="paragraphStyle" style={{ color: "black", fontSize: 16, marginTop: -5 }}>
                                Each Spirit of Truth Native American Church Medicine Man and Medicine Woman also needs to take into
                                consideration of their own physical, mental, and spiritual health and the possible effects of their wellbeing on
                                those with whom they minister.</p>
                            <p id="paragraphStyle" style={{ fontSize: 19, color: "black", fontWeight: "bold", textAlign: "left" }}>Guideline 2: Responsibility</p>
                            <p id="paragraphStyle" style={{ color: "black", fontSize: 16, marginTop: -5 }}>Forming relationships of trust and honesty is the process for all Church Members. Medicine People should also
                                hold themselves to a higher standard of ethical conduct and seek to educate all they work with. Clarifying any
                                healing modality, be it physical or spiritual, and establishing informed consent with the person they are
                                ministering to, is the responsibility of all Medicine Men and Medicine Women. Medicine People also accept
                                fitting responsibility for who they are and for all of their actions</p>
                            <p id="paragraphStyle" style={{ color: "black", fontSize: 16, marginTop: -5 }}>Spirit of Truth Native American Church Ministers make sure they consult with other Spirit of Truth Native
                                American Church Medicine Men and Women, assist other professionals, educate themselves, maintain dignity
                                and respect, and refer their clients to more qualified professional or Healer when appropriate. They are
                                attentive to the Ethical Code of Conduct for themselves and other Ministers in the Church. They strive to only
                                speak positively about all others and avoid "evil speaking" in all its forms. </p>
                            <p id="paragraphStyle" style={{ color: "black", fontSize: 16, marginTop: -5 }}>Ministers regularly perform service, volunteer time, or support the Spiritual Community as appropriate.
                                Contributing to the greater good is an honor and Spiritual duty. </p>
                            <p id="paragraphStyle" style={{ fontSize: 19, color: "black", fontWeight: "bold", textAlign: "left" }}>Guideline 3: Integrity, Honor, and Service</p>
                            <p id="paragraphStyle" style={{ color: "black", fontSize: 16, marginTop: -5 }}>In simple language, the Spirit of Truth Native American Church Healers hold to a Goodness Ethic. They strive
                                to care for themselves, their family, their community, and the planet through cooperation. This leads to living a
                                life of integrity and sustainability. </p>
                            <p id="paragraphStyle" style={{ color: "black", fontSize: 16, marginTop: -5 }}>Through education in all its forms, Medicine Men and Medicine Women maintain competency in their Ministry
                                and a connection to their Healing Services. They should only undertake those activities they can reasonably
                                expect to fulfill. In their Medicine Bundle, they honor the Creator through the symbolism of the Sacraments,
                                Healing Modalities, and so forth. It is an Honor for the Medicine People to stand firm in their Spiritual
                                Commitment by performing the Bundle Opening and Closing Ceremonies in the course of their Healing
                                Services they provide. This brings Honor to the Church at to the Minister. </p>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
                            <p id="paragraphStyle" style={{ color: "black", fontSize: 16, marginTop: -5 }}>Ministers should use the educational materials, Sacred Writings, their Lodge Chapters, District Councils, and so
                                forth to ensure that good comes from their actions and little or no harm ensues. A Medicine Person needs to be
                                vigilant in protecting others from any misuse of their influence. While in service of others, the Medicine Person
                                needs to hold the safety of who they are ministering to as the top priority. </p>
                            <p id="paragraphStyle" style={{ color: "black", fontSize: 16, marginTop: -5 }}>
                                Each Spirit of Truth Native American Church Medicine Man and Medicine Woman also needs to take into
                                consideration of their own physical, mental, and spiritual health and the possible effects of their wellbeing on
                                those with whom they minister.</p>
                            <p id="paragraphStyle" style={{ fontSize: 19, color: "black", fontWeight: "bold", textAlign: "left" }}>Guideline 2: Responsibility</p>
                            <p id="paragraphStyle" style={{ color: "black", fontSize: 16, marginTop: -5 }}>Forming relationships of trust and honesty is the process for all Church Members. Medicine People should also
                                hold themselves to a higher standard of ethical conduct and seek to educate all they work with. Clarifying any
                                healing modality, be it physical or spiritual, and establishing informed consent with the person they are
                                ministering to, is the responsibility of all Medicine Men and Medicine Women. Medicine People also accept
                                fitting responsibility for who they are and for all of their actions</p>
                            <p id="paragraphStyle" style={{ color: "black", fontSize: 16, marginTop: -5 }}>Spirit of Truth Native American Church Ministers make sure they consult with other Spirit of Truth Native
                                American Church Medicine Men and Women, assist other professionals, educate themselves, maintain dignity
                                and respect, and refer their clients to more qualified professional or Healer when appropriate. They are
                                attentive to the Ethical Code of Conduct for themselves and other Ministers in the Church. They strive to only
                                speak positively about all others and avoid "evil speaking" in all its forms. </p>
                            <p id="paragraphStyle" style={{ color: "black", fontSize: 16, marginTop: -5 }}>Ministers regularly perform service, volunteer time, or support the Spiritual Community as appropriate.
                                Contributing to the greater good is an honor and Spiritual duty. </p>
                            <p id="paragraphStyle" style={{ fontSize: 19, color: "black", fontWeight: "bold", textAlign: "left" }}>Guideline 3: Integrity, Honor, and Service</p>
                            <p id="paragraphStyle" style={{ color: "black", fontSize: 16, marginTop: -5 }}>In simple language, the Spirit of Truth Native American Church Healers hold to a Goodness Ethic. They strive
                                to care for themselves, their family, their community, and the planet through cooperation. This leads to living a
                                life of integrity and sustainability. </p>
                            <p id="paragraphStyle" style={{ color: "black", fontSize: 16, marginTop: -5 }}>Through education in all its forms, Medicine Men and Medicine Women maintain competency in their Ministry
                                and a connection to their Healing Services. They should only undertake those activities they can reasonably
                                expect to fulfill. In their Medicine Bundle, they honor the Creator through the symbolism of the Sacraments,
                                Healing Modalities, and so forth. It is an Honor for the Medicine People to stand firm in their Spiritual
                                Commitment by performing the Bundle Opening and Closing Ceremonies in the course of their Healing
                                Services they provide. This brings Honor to the Church at to the Minister. </p>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </Container>
            <Footer />
        </div>
    )
}