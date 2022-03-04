import React, { useEffect, useState } from 'react';
import '../css/homepage.css';
import { Navbar, Container, Nav, Button, Form } from 'react-bootstrap';
import { ArrowForward } from '@material-ui/icons'
import Footer from '../components/footer';
import NavbarComp from '../components/navbar';
import logo from '../assets/logo.png';
import { Link, useHistory } from 'react-router-dom';
import HomePage from '../assets/HomePage.png';
import homepagePoster from '../assets/homepagePoster.png';
import loader from '../assets/loader.gif';

export default function Home() {

    const history = useHistory();
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    })

    return (
        <div>
            {!isLoading && <><NavbarComp />
                <img src={HomePage} style={{ width: "100%" }} />
                <Container style={{ padding: 15 }}>
                    <p id="welcome">Welcome</p>
                    <p id="welcomeText">We are a legally established and authorized independent Native American Church that desire to protect and restore to the world our religious, cultural, and personal freedoms</p>
                    <div id="boxesParentDiv">
                        <div id="boxes">
                            <span>Authority Page  <ArrowForward /></span>
                            <Button onClick={() => history.push("Authority")}>See Details</Button>
                        </div>
                        <div id="boxes">
                            <span>Ethical Page  <ArrowForward /></span>
                            <Button onClick={() => history.push("Ethical")}>See Details</Button>
                        </div>
                        <div id="boxes">
                            <span>Constitution Page  <ArrowForward /></span>
                            <Button onClick={() => history.push("Constitution")}>See Details</Button>
                        </div>
                    </div>
                    <p id="paragraphStyle">The Creator has allowed us free choice and the health of the body, the mind, the spirit,
                        the community, the society, and the planet are direct consequences of the choices each person makes. Sadly, because of governmental monetary, and political whims, new laws that control and enslave the population continue to "creep" into our legal system. Whether it is forced mandates or other new laws that have classified natural substances, like essential oils, herbs, and other plants, to be illegal when used above 3% strength for healing purposes.  Over the decades many new enslavement laws were "sneaked" into our legal system and
                        we continually see new steps to take away our God-given freedoms.</p>
                    <p id="paragraphStyle" style={{ color: "#AA3C3C", fontWeight: "bold", width: "80%", margin: '0 auto' }}>
                        For example, even a full-blooded, tribal card-carrying, licensed Native American massage therapist is at risk of being sent to federal prison if they use therapeutic essential oils on any client off their reservation. Yes, this probably has never happened yet, but there have been some quite strange happenings like this when healers have taken clients
                        away from the money-hungry corrupt bureaucracy of big pharma and the medical establishment.
                    </p>
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                        <Button id="signinBtn_Big" onClick={() => history.push("RiseofMedical")} style={{ width: 300, margin: 15 }}>Rise of the Medical Epidemic</Button>
                    </div>
                    <p id="paragraphStyle">For thousands of years, the Creator's healing modalities have been used by native peoples.  Now governments around the world have made them illegal.  (Just like peyote, ayahuasca, and many other plant remedies were classified illegal many decades ago, they are trying to take complete control over all of the natural healing and alternative healing modalities.)
                    </p>
                    <p id="paragraphStyle">
                        Because of the many losses of freedom, many people and Natural Healers run to the freedom of religion exemption to find safety.  Sadly, because of the court cases where judges have dictated peoples’ religious beliefs and the established rules that govern what your protection under these religions can be, those organizations have fallen short in their protection and many people have been harmed.
                    </p>
                    <div id="textImgParentDiv">
                        <img id="imageandText_img" src={homepagePoster} />
                        <div id="imageandText_text">
                            <p id="paragraphStyle" style={{ fontWeight: 800, color: "#AA3B3B" }}>Example One: Did you know that it is perfectly legal for the U.S. government to perform harmful and deadly medical experimentation on its citizens?</p>
                            <p id="paragraphStyle" style={{ fontWeight: 800, color: "#AA3B3B" }}>They have legally performed biological warfare experiments, forced inoculations with potentially harmful and deadly vaccines, forced citizens to undergo deadly unnecessary medical treatments, and many more health and welfare injustices.</p>
                        </div>
                    </div>
                    <div id="shortdiv_text">
                        <p id="paragraphStyle" style={{ fontWeight: 800, color: "#AA3B3B" }}>Example Two: Many people have tried to use their religion as a defense for legally using their healing modalities. In times past a natural healer could say, “I am a Christian and then use that religion as a way to stop specific medical actions or allow them to perform specific healing treatments on others.”</p>
                        <p id="paragraphStyle" style={{ fontWeight: 800, color: "#AA3B3B" }}>This defense has failed in court and precedence has been established where a judge can interpret your religious beliefs for you. Using the Christian defense above, the judge can simply say, “I am a Christian too and I don’t believe the same way you do so your defense is not valid.”</p>
                        <p id="paragraphStyle" style={{ fontWeight: 800, color: "#AA3B3B" }}>When asked about using your religion as a defense, the honorable Judge Benjamin Zvenia said that he has never seen a church member (other than the Native American Church) win in court over the charge of practicing medicine without a license solely for the religious exemption. For them to win they have always had to be licensed by a government-approved board for that healing modality.</p>
                    </div>
                    <p id="paragraphStyle">Sadly, here in the U.S.A. most of the religious organizations, even the Native American Churches, that are spouting legal protection do not even meet the basic IRS and federal governments' requirements for that religious exemption. They also do not give a person the protection to prove in court that they are not just looking for a legal loophole, have true sincerity, and a continued religious pattern of behavior.</p>
                    <p id="paragraphStyle">With Spirit of Truth Native American Church, you can find the legal protection through Congressional Acts (where a judge cannot dictate your religious beliefs) and the United Nations that the Native Americans now enjoy.</p>
                    <p id="paragraphStyle"> When an individual joins our church through the Spiritual Adoption process, they have legal declarations that their intentions are religious, they are deemed an “Indian” under the law, and are protected from unethical yet legal governmental practices.</p>
                    <p id="paragraphStyle" style={{ fontWeight: 800, color: "#AA3B3B", width: "70%", margin: '0 auto' }}>Example: The forcing of any “Indian” to participate in medical treatments or a forced vaccination process is considered “Ethnic Cleansing” under World Law.</p>
                    <p id="paragraphStyle">Join the Spirit of Truth Native American Church religious movement and take a stand to protect our Healing Ministry, Traditions, Ceremonies, and Religious Freedom!  We desire all peoples around the world to be fully protected under the law to follow their religion and to use their healing modalities.</p>

                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                        <Button id="signinBtn_Big" style={{ width: 120, margin: 15 }}>Join Now</Button>
                    </div>
                    <p id="paragraphStyle">For thousands of years, the Native American religions did not dictate any official religious dogma over their members, ministers, and healers. Often different Native American Churches had conflicting beliefs, like different colors or totems used to represent the Medicine Wheel, but they would allow their followers to choose for themselves the way to worship.</p>
                    <p id="paragraphStyle">Sadly, in modern times there has been a movement to control or restrict beliefs in some of the Native American Churches. Also, some Native American Churches or Government Recognized Tribes think they have the authority to dictate their opinions and beliefs to other Native American Churches.</p>
                    <div style={{ width: "80%", margin: "0 auto" }}>
                        <p id="paragraphStyle" style={{ fontWeight: 800, color: "#AA3B3B" }}>Example One: There are some Native American Churches that will not allow a “White Man” into their ceremony even though historically it has been proven that their ancestors did not follow that belief.</p>
                        <p id="paragraphStyle" style={{ fontWeight: 800, color: "#AA3B3B" }}>Example Two: Some established Native American Churches think that all other Native American Churches should hold or run Peyote Ceremonies the way they do. They also issue edicts claiming to restrict other ceremonial sacraments from other church organizations just because the practice was lost or not a part of their tribal culture. This is like the Catholic Church issue edicts against the Baptist Church or the Jews issuing edicts against all of Christianity. This type of thinking is just silly and clearly not a Spirit of Truth based way of running things.</p>
                        <p id="paragraphStyle" style={{ fontWeight: 800, color: "#AA3B3B" }}>Example Three: The title of Native American Church has gotten the general misconception that it is a Peyote Religion. This is not the case. There are Native American Churches established in North America that have the direct “Indian Authority” that do not even use Peyote in their ceremonies. Just like there are numerous Christian Churches with different belief systems there are
                            numerous Native American Churches with different general belief systems. The only requirement to be a “True Native American Church” is to have a line of authority duly established from any Native American Church or federal government recognized tribe in North, Central, or South America. (All indigenous peoples from those continents are truly Native Americans!!!)</p>
                    </div>
                    <p id="paragraphStyle">The Spirit of Truth Native American Church requires our members to agree to abide by the simple truths found in our Constitution and Ethical Code of Conduct. But in following our ancestral traditions, we allow our members to exercise the freedom to follow the unique Spiritual Path the Creator has for them.  They follow the dictates of their hearts and can choose their own form of worship and ministry.  Members can follow the spiritual truths of our ancient Native American Ancestors from North, Central, and South American as well as the many different indigenous cultures from around the world.
                        They can even choose to participate or not to participate in whatever bona fide Traditional Ceremonies we have to offer.</p>
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                        <Button id="signinBtn_Big" style={{ width: 120, margin: 15 }}>Join Now</Button>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 20, flexWrap: "wrap" }}>
                        <iframe
                            id="iframe"
                            src={"https://www.youtube.com/embed/f4Npot5NIOY"}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="Embedded youtube"
                        />
                        <iframe
                            id="iframe"
                            src={"https://www.youtube.com/embed/f4Npot5NIOY"}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="Embedded youtube"
                        />
                    </div>
                </Container>
                <Footer /></>}
            {isLoading && <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flex: 1, height: "90vh" }}>
                <img src={loader} style={{ width: 300 }} />
            </div>}
        </div>
    )
}