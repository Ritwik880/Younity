import React from 'react'
import '../App.css'
import hero1 from '../image/hero1.jpg'
import hero2 from '../image/hero2.jpg'
import hero3 from '../image/hero3.jpg'
import hero4 from '../image/hero4.jpg'
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
            <section className="container main-hero-container my-4">
                <div className="row">
                    <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start ">
                        <h1 className="display-2">
                            What Is Younity?
                        </h1>
                        <p className="main-hero-para">
                            Younity Finschool is a subsidiary of Younity Ed-Tech Pvt Ltd, a digital student community with more than 30,000 registered members pan-india.
                        </p>

                    </div>
                    {/*  --------------- main header right side--------------  */}
                    <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-herosection-images">
                        <img
                            src={hero1}
                            alt="heroimg"
                            className="img-fluid"
                        />
                        <img
                            src={hero2}
                            alt="heroimg4"
                            className="img-fluid main-hero-img2"
                        />
                    </div>
                </div>
            </section>

        </>
    )
}

export default About
