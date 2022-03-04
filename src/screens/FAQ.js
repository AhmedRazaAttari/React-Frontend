import React, { useState, useEffect } from 'react';
import '../css/homepage.css';
import { Navbar, Container, Nav, Button, Form } from 'react-bootstrap';
import { ArrowForward } from '@material-ui/icons'
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import Footer from '../components/footer';
import NavbarComp from '../components/navbar';
import FAQ from '../assets/FAQ.png';
import homepagePoster from '../assets/homepagePoster.png';
import loader from '../assets/loader.gif';

export default function Home() {

    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    })

    return (
        <div>
            {!isLoading && <><NavbarComp />
                <img src={FAQ} style={{ width: "100%" }} />
                <Container style={{ padding: 15 }}>
                    <p id="welcome" style={{ textAlign: "center" }}>Frequently Asked Questions</p>
                    <p id="paragraphStyle" style={{ fontWeight: "bold" }}>1.  Is there a cost for Adoption? </p>
                    <p id="paragraphStyle"> No, but you should read and take your covenant obligations serious.  All the money collected by the Spirit of Truth Native American Church is used for the Missions of the Church that include education, establishing a fund for any pending legal battles, purchasing Ceremonial Grounds, supporting the members of the Church, and so forth.  We are a Church and not a business!  We hold all of our bona fide Ceremonies and Traditional Practices as Sacred and do not have a paid clergy</p>
                    <p id="paragraphStyle" style={{ fontWeight: "bold" }}>2.  After I send in my adoption form, what should I expect?</p>
                    <p id="paragraphStyle">Once your adoption request is approved, you will receive a Welcome Letter, Certificate of Adoption, and access to the first training course material. In the Welcome Letter, you will receive instructions on how to proceed.  The first-course assignment includes you getting more of a basic understanding of the church.</p>
                    <p id="paragraphStyle" style={{ fontWeight: "bold" }}>3.  How is a Medicine Person different than a member?</p>
                    <p id="paragraphStyle">The simple answer is the difference between a minister and regular people in the congregation.  As a member, you are legally considered an “Indian” under the law.  As such you have another layer of protection from government interference. </p>
                    <p id="paragraphStyle">Now as a Medicine Person, you become a minister in the church.  You now have the right to perform weddings and do all the other religious ceremonies that ministers in most other religions do.  You also have another layer of protection under the law to perform our Church bona fide Ceremonies. </p>
                    <p id="paragraphStyle" style={{ fontWeight: "bold" }}>4.  I am a Natural Healer that runs a small clinic.  How can I be legally protected by the Spirit of Truth Native American Church? </p>
                    <p id="paragraphStyle">As you go through our Education Courses, we will train you in this in quite some detail.  To make it brief, as a Healer you have to demonstrate to the government that you are sincere in your religious belief and are competent in what you are doing.  (Not harming the public.)  So, the first step is for you to become adopted and then you will want to become a Medicine Man or Medicine Woman before any governmental harassment occurs.  (If governmental harassment is occurring before you do this, it is harder to show you are really sincere in your beliefs and not just trying to find a loophole in the law.)</p>
                    <p id="paragraphStyle">By becoming Adopted and becoming a Medicine Person you show the sincerity of belief and you can now use your Healing Modalities, that you have been trained in using, during your Ceremony of Healing. </p>
                    <p id="paragraphStyle">Extreme example:  Let’s say as a Healer you have a clinic and are using the Peyote Sacrament to assist people to be better and be healed.  According to the law, you are committing a felony and would probably go to jail for being a drug dealer and/or practicing medicine without a license.</p>
                    <p id="paragraphStyle">Once you become a Spirit of Truth Medicine Person you can legally use the Peyote Sacrament during your Bundle Ceremony for you and your family.  Your religious belief system and Ceremony is protected under the law.  You still cannot use the Peyote Sacrament for the public, however, once you have the necessary training and approval by the Spirit of Truth Native American Church you then could legally perform your Peyote Healing Ceremonies to the public.</p>
                    <p id="paragraphStyle">The above example is the same legal position you will need as a Healer for essential oils, herbs, and other natural healing modalities.  If you are following the Spirit of Truth Ethical Code of Conduct in the administration of Ceremonies and then some government agency harasses you, we can offer objective evidence of the sincerity of your religious beliefs.  If you get harassed by a government agency, we suggest that you show them your Minister Identification Card and inform them that you are a Medicine Man or Medicine Woman performing a Native American Ceremony. </p>
                    <p id="paragraphStyle">If the government agency continues to ask questions or further harass you in any way, we suggest that you exercise your right to remain silent and politely agree to temporarily refrain from the religious exercise being challenged until you get legal advice specific to your situation. </p>
                    <p id="paragraphStyle">If you are arrested, we suggest you immediately inform the arresting officers that you are going to remain silent and that you want to speak with an attorney.  (The government officials want you to talk so they can trick or trap you into saying something they can use against you.  They do not care about protecting your religious beliefs.  Do not be fooled by their tactics and remember they are not your friend.  They are at war with your religious belief so remain silent!)</p>
                    <p id="paragraphStyle">Remember you can contact us at the telephone number or email on your Welcome Letter to discuss your options.  As a member of the church, you will gain access to a reservoir of legal information that can assist you in asserting your rights to exercise your religious freedom.  The Spirit of Truth Native American Church is dedicated to protecting our Healers’ rights and we would be happy to inform the offending agency how they are not only violating our legal rights but also breaking the law themselves.</p>
                    <p id="paragraphStyle">5.  What is your policy in dealing with other religions and tribal organizations?</p>
                    <p id="paragraphStyle">We try to follow the example of the Peacemaker and First, Do Good.  We realize that other religions or tribal organizations may have different opinions but we stand fast to our religious beliefs.</p>
                    <p id="paragraphStyle">Example:  We have heard quite often how offensive it is that we allow “White Men” into our church and Ceremonies.  Even when we have provided proof that our ancestors held the same belief, we have been demanded to change.  We politely still hold to our religious convictions while respecting their right to believe how they choose.  Our church does not believe the Creator’s truth should have anything to do with blood ancestry.  (One does not have to have Jewish ancestry to be a Christian.)</p>
                    <p id="paragraphStyle">Sadly, many times we have been attacked by uneducated individuals that have violated their own religious beliefs and propagated false materials about our church and its members.  With the internet age upon us, this continues to grow.  We choose to still walk the way of the Yeshua and are happy to answer any sincere questions of those wanting to understand truth or gain clarity on any subject.  </p>
                    <p id="paragraphStyle">6.  What plants can be used in a certified Native American Ceremony?</p>
                    <p id="paragraphStyle">There are literally millions of sacred plants used by Native Americans and other indigenous peoples in Ceremony.  According to the Spirit of Truth Native American Church beliefs, in your personal Religious Ceremony, you can use any part of the natural plant, animal, mineral, or other material that has a sacred use as long as that use does not harm others.  This creates powerful legal protection for you as a Medicine Person from misguided government agents who sometimes overlook the law and rather than try to protect our freedoms, try to take them away.</p>
                    <p id="paragraphStyle">The general rule for getting something certified is for the item to “First, Do Good” under normal Ceremonial use.  (Read more about “First, Do Good” in the Ethical Code of Conduct.)  An easy way for you to have a personal item certified by the Church is to include it in your personal Bundle Ceremony.  Once we have read and approved your Ceremony, it will be filed and become a Certified Ceremony for your personal use and for sharing with all Spirit of Truth Native American Church Members. </p>
                    <p id="paragraphStyle">Another way to have an item approved is to request its approval through the Spirit of Truth Native American Church.  Simply write us a letter with the description of the item you want to be Certified and how you would be using it in Ceremony or Traditional Practice. </p>
                    <p id="paragraphStyle">Example:  If you discovered a new energy healing device and want to use it in your Healing Center, simply request its approval. </p>
                    <p id="paragraphStyle">We are a “Living Church” that constantly adapts to new technology, environments, and circumstances.  We ask all members to remember to “First, Do Good” and practice their Healing Ministry wisely.</p>
                    <p id="paragraphStyle">Now keep in mind that just because you are sincerely practicing your religion, some governmental official can still take offense of your religion and try to prosecute you.  They can make you spend tens or even hundreds of thousands of dollars in defending yourself and your legal rights.  Sadly, it historically seems to be the practice of our government agencies to take away freedoms rather than defend them.  We highly suggest you keep a low profile if you are using anything in your Ceremonies that may trigger any governmental prejudices.  Over the next few decades, we are sure that there will be other laws and court cases that will continue to support our religion.</p>
                    <p id="paragraphStyle">7.  Can I have my Ceremonies anywhere?</p>
                    <p id="paragraphStyle">You will have to get permission from any landholder to use private land for Ceremonies.  For public lands, you will have to follow the laws according to the freedom of assembly. </p>
                    <p id="paragraphStyle">Example:  Holding a ceremony in your house, car, or at the local park during assigned hours of operation is more likely to be legally protected, whereas forcing your way into a large corporate office and holding a ceremony in their foyer is trespassing. Respect others and “First, Do Good”.    </p>
                    <p id="paragraphStyle">8.  Is being Adopted permanent?</p>
                    <p id="paragraphStyle">Yes, a person can only be removed from the Spirit of Truth Native American Church by personal request or by the Principle Medicine Chief for not following the Constitution or the Ethical Code of Conduct of the Church.  (Normal disassociation from the Spirit of Truth Native American Church is when a member is not following Ceremonial Practices or doing harm to others.)  Respect the Ceremonies and respect others.</p>
                    <p id="paragraphStyle">9.  How do I have a Ceremony?</p>
                    <p id="paragraphStyle">You can attend any number of the different organized Ceremonies put on by the Spirit of Truth Native American Church or establish your own personal Ceremony.  An easy Ceremony is your own personal Medicine Bundle Ceremony, which will be among your assignments.  You can tailor this Ceremony into your own life and personal belief systems and make it simple or complex.  There are numerous other Ceremonies and Traditional Practices that you can adapt to your own personal Ceremony as well.</p>
                    <p id="paragraphStyle">Remember to “First, Do Good” when performing Ceremonies of any kind.  If you desire to hold your own Ceremony with others, you will have to be trained and certified in the Ceremony you want to perform. </p>
                    <p id="paragraphStyle">Example:  Anyone wanting to officiate in the Sweat Lodge Ceremony should feel that they have been instructed by the Creator to perform the Ceremony, pass the training program for this Ceremony, and at least have attended a minimum of 12 Sweat Lodge Ceremonies conducted by trained Medicine Person. </p>
                    <p id="paragraphStyle">You will find some Ceremonies are specifically tailored to more specific belief systems where others are very general in their application.  Train in the Ceremonies that you feel called to do and assist in sharing the Sacred Healing Way.</p>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <p id="paragraphStyle" style={{ fontSize: 32, textAlign: "center", display: "unset" }}>If you have unanswered questions, please email us under the <Link to={{ pathname: "/ContactUs" }}>Contact</Link> tab.</p>
                    </div>
                </Container>
                <Footer /></>}
            {isLoading && <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flex: 1, height: "90vh" }}>
                <img src={loader} style={{ width: 300 }}/>
            </div>}

        </div>
    )
}