import React from 'react'
import '../App.css'
import '../index.css'
import '../about.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../testimonial.css";
import one from '../image/one.png'
import two from '../image/two.png'
import three from '../image/three.png'
import four from '../image/four.png'
import culture from '../image/culture.jpg'
import unity from '../image/unity.jpg'

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
            <section name="Landing" className="aboutSection pb-0">
                <div className="row container">
                    <div className="col-lg-6 col-md-12 justify-content-center align-items-center p-5 pb-0">
                        <div className="aagam-landing-text ">
                        <span>COMPANY MISSION</span>
                            <h5 className='my-2'>“Success is based on
                                pro-active and dedicated
                                teamwork in a professional
                                and ethical environment...”

                            </h5>
                            <p className="pt-4">We strongly believe that success is based on pro-active and
                                dedicated teamwork in a professional and ethical environment that
                                leads to creative solutions and fully deserved rewards.
                                This said, we always focus on safety, quality, a detailed approach,
                                and above all, diligent handling of budgetary means to maintain high
                                standards at all levels of our activities, especially in dealings with
                                employees, suppliers, subcontractors, and customers.
                            </p>

                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 d-flex justify-content-center align-items-center p-5 pb-0 padding-none-m">
                        <img className="aboutMiddle" width={400} src={unity} />
                    </div>


                </div>

            </section>
            <section name="Landing" className="aboutSection pb-0">
                <div className="row container">
                    <div className="col-lg-6 col-md-12 d-flex justify-content-center align-items-center p-5 pb-0">
                        <img className="aboutMiddle" width={400} src={culture} />

                    </div>
                    <div className="col-lg-6 col-md-12 justify-content-center align-items-center p-5 pb-0 padding-none-m">
                        <div className="aagam-landing-text ">
                            <span>COMPANY CULTURE</span>
                            <ul className='my-2'>
                                <li>Foster a professional and ethical work environment</li>
                                <li>Set safety and quality as our top priorities</li>
                                <li>Encourage creativity and innovation in every aspect of our work.</li>
                                <li>Recognize the value of a continuous improvement.</li>
                                <li>Be open, listen to our customers, and adapt to change.</li>
                            </ul>

                        </div>

                    </div>


                </div>

            </section>


            <section id="clients" className="clients my-4">
                <div className="container">

                    <div className="row no-gutters clients-wrap clearfix wow fadeInUp">

                        <div className="col-lg-3 col-md-4 col-12">
                            <div className="client-logo">
                                <img src={one} className="img-fluid" alt="Image" />
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4 col-12">
                            <div className="client-logo">
                                <img src={two} className="img-fluid" alt="Image" />
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4 col-12">
                            <div className="client-logo">
                                <img src={three} className="img-fluid" alt="Image" />
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4 col-12">
                            <div className="client-logo">
                                <img src={four} className="img-fluid" alt="Image" />
                            </div>
                        </div>



                    </div>

                </div>
            </section>








        </>
    )
}

export default About
