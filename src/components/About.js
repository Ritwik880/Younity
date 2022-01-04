import React from 'react'
import '../App.css'
import '../index.css'
import splash from '../image/splash.jpg'
import test1 from '../image/test1.jpeg'
import test2 from '../image/test2.jpeg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../testimonial.css";
import { Avatar } from "@material-ui/core";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
const teamPara = {
    textDecoration: 'none'
}
window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');

    for (var i = 0; i < reveals.length; i++) {

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        }
        else {
            reveals[i].classList.remove('active');
        }
    }
}
const PreviousBtn = (props) => {
    console.log(props);
    const { className, onClick } = props;
    return (
        <div className={className} onClick={onClick}>
            <ArrowBackIos style={{ color: "gray", fontSize: "45px" }} />
        </div>
    );
};
const NextBtn = (props) => {
    const { className, onClick } = props;
    return (
        <div className={className} onClick={onClick}>
            <ArrowForwardIos style={{ color: "gray", fontSize: "45px" }} />
        </div>
    );
};
const About = () => {

    return (
        <>
            <div className="pb-6 d-flex align-items-center about-page">


                <div className="container d-flex align-items-center">
                    <div className="text-white mx-auto mt-5 upper">
                        <div className="display-2 text-center">
                            About Us
                        </div>


                    </div>
                </div>
            </div>

            <div class="section5 reveal">
                <div class="container5">
                    <div class="content-section5">
                        <div class="title5">
                            <h2>What Is Younity
                                <br />
                                Finschool?</h2>
                        </div>
                        <div class="content5">
                            {/* <h3>Lorem ipsum dolor sit amet, consectetur adipisicing</h3> */}
                            <p>Younity Finschool is a subsidiary of Younity Ed-Tech Pvt Ltd, a digital student community with more than 30,000 registered members pan-india.</p>
                            <div class="button5">
                                <a href="">Read More</a>
                            </div>
                        </div>
                        <div class="social5">
                            <a href=""><i class="fa fa-facebook"></i></a>
                            <a href=""><i class="fa fa-twitter"></i></a>
                            <a href=""><i class="fa fa-instagram"></i></a>
                        </div>
                    </div>
                    <div class="image-section5">
                        <img src={splash} />
                    </div>
                </div>
            </div>


            <div
                className="testimonial reveal"
                style={{ display: "flex", justifyContent: "center", marginTop: 50 }}
            >
                <div style={{ width: "50%", textAlign: "center" }}>
                    <h1 style={{ marginBottom: 20 }}>Our Team</h1>
                    <Slider prevArrow={<PreviousBtn />} nextArrow={<NextBtn />} dots>
                        <Card2 img2={test2} />
                        <Card img={test1} />

                    </Slider>
                </div>
            </div>


        </>
    )
}
const Card = ({ img }) => {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                textAlign: "center",
                color: "gray",
            }}
        >
            <Avatar

                imgProps={{ style: { borderRadius: "50%" } }}
                src={img}
                style={{

                    width: 200,
                    height: 200,
                    border: "2px solid lightgray",
                    padding: 7,
                    marginBottom: 20,
                }}
            />
            <p>
                Highly learned, proficient and a really magnetic personality, Mr. Alok Sharma stands strong with his glorious 15 years of experience in CFA and FRM.
                Mr.Sharma has also been associated with the leading competitive exam coaching institute- Career Launcher, surpassing his role as the Ex- Associate Vice President(Academics). He also has a strong academia with him being an alumini of the infamous International Institute of Financial Markets. He has the golden words 'Fundamental and Technical Analyst' embedded on his cerfificates
            </p>
            <p style={{ fontStyle: "italic", marginTop: 25 }}>
                <span style={{ fontWeight: 500, color: "green" }}>Alok Sharma</span> ,
                Chief Mentor
            </p>
        </div>
    );
};
const Card2 = ({ img2 }) => {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                textAlign: "center",
                color: "gray",
            }}
        >
            <Avatar
                imgProps={{ style: { borderRadius: "50%" } }}


                src={img2}
                style={{
                    width: 200,
                    height: 200,
                    border: "2px solid lightgray",
                    padding: 7,
                    marginBottom: 20,
                }}
            />
            <p>
                One of the youngest entrepreneurs of the country, a highly influential Public speaker and a author too, Mr. Prafful Garg is very above these pre-defined roles.
                <br />
                Founder of <a style={teamPara} href="https://younity.in/">Younity.in</a> and <a style={teamPara} href="https://letsbookmypg.com/">letsbookmypg.com</a>, Mr. Prafful Garg recently made headlines with the launch of his now best-selling book: The Painkiller- with no side effects.
                <br />
                Following the footsteps of eternal leaders, Mr. Prafful is dignified with REX- Karamveer GYLC Award 2019 by UN at IIT-Delhi. Hailing from the town of Agra, this man was never hindered by borders, and went on to become Sales Engagement Expert, a problem solver and most importantly a leader.
                Mr. Garg is not only bestowed with a number of awards but also has a lot of achievement in his Kitty. He is a CFA Level 2 candidate, and has been featured & quoted in various leading E- paper and magazines like Education Times, India Today and Your story.
            </p>
            <p style={{ fontStyle: "italic", marginTop: 25 }}>
                <span style={{ fontWeight: 500, color: "green" }}>Prafful Garg</span> ,
                Founder / CEO
            </p>
        </div>
    );
};

export default About
