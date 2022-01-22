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
            <section className="aboutYounityFinschool py-3">
                <h1 className='text-center py-4' style={{width: '50%', margin: "auto"}}>Our Story</h1>
                <p className='text-center' style={{width: '50%', margin: "auto"}}>Younity Finschool Pvt Ltd is a subsidiary of Younity Ed-Tech Pvt Ltd, a digital student
                    community with more than 30,000 registered members Pan-India.
                    Younity Finschool is a platform which provides the prep and training of globally recognized
                    master level finance programmes like CFA, FRM and NCFM. We focus on educating about
                    the finance sector and widening the career prospects for young students and professionals.
                  
                </p>
                <br />
                <p className='text-center' style={{width: '50%', margin: "auto"}}>  We provide hand holding by mentors, practical learning, guardian community, masters and
                    MIM courses assistance, placement assistance, internship assistance, two attempts of
                    examinations, one-on-one doubt solving, experienced mentor, specialised softwares like
                    Spider for stock analysis, live classes with two way communication, immediate recordings
                    assistance, institute enrolment assistance, instalment payments, personalised groups,
                    unlimited question banks, ebooks, subject wise and overall mock tests and much more.</p>


            </section>
            <section className='cta reveal'>
                <div className="display-2 text-center">
                    Our Vision
                </div>
                <p className='my-3'>Our aim is to focus on building a group of individuals of finance enthusiasts by providing financial knowledge and training irrespective of their career path and age. Our vision is to make everyone financially independent and to make financial education accessible to people.</p>


            </section>

            {/* <div class="section5 reveal">
                <div class="container5">
                    <div class="content-section5">
                        <div class="title5">
                            <h2>What Is Younity
                                <br />
                                Finschool?</h2>
                        </div>
                        <div class="content5">
                       
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
            </div> */}





        </>
    )
}

export default About
