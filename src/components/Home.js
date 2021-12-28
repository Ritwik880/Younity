import React from 'react'
import '../App.css'
import join from '../image/join.jpg'
const Home = () => {

    return (

        <>
            <div className="header pb-6 d-flex align-items-center about">

                <span className="mask about-gradient opacity-7"></span>
                <div className="container d-flex">
                    <div className="text-white mt-5 upper">
                        <div className="display-2 text">
                            Younity Finschool
                        </div>
                        <p className='para'>First Digital Student Community Of INDIA</p>
                        <button className='btn btn-primary home-btn'>Get Started</button>

                    </div>
                </div>

            </div>

            <section name="Landing" class="landing-section container py-5 pb-0 my-4">
                <div className="row">
                    <div className="col-lg-6 col-md-12 justify-content-center align-items-center p-5 pb-0">
                        <div class="landing-text ">
                            <h1 class="dinot-haeding header">WHAT IS YOUNITY FINSCHOOL?

                            </h1>
                            <h5>About Younity Finschool</h5>



                            <div class="d-flex pt-4 d-none d-lg-block d-xl-block d-md-block">
                                <a href="" class="mr-2 home-btn btn btn-primary">Join Us</a>

                            </div>
                        </div>


                    </div>
                    <div class="col-lg-6 col-md-12 justify-content-center align-items-center p-5 pb-0 padding-none-m">
                        <li>Younity Finschool is a subsidiary of Younity Ed-Tech Pvt Ltd, a digital student community with more than 30,000 registered members pan-india.  </li>
                        <br></br>
                        <li>Younity Finschool is a platform which provides with the training of certified and most renowned finance courses all across the globe.  </li>


                    </div>
                    <div class="arrow-right"></div>

                </div>

            </section>
            <section name="Landing" class="container py-5 pb-0 my-4">
                <div className="row">
                    <div className="col-lg-6 col-md-12 justify-content-center align-items-center p-5 pb-0">
                    <img className='image' src={join} alt='second-img' />



                    </div>
                    <div class="col-lg-6 col-md-12 justify-content-center align-items-center p-5 pb-0 padding-none-m">
                        <div class="landing-text ">
                            <h1 class="dinot-haeding header">WHY JOIN YOUNITY FINSCHOL?

                            </h1>
                            <h5>Younity Finschool Advantage</h5>
                            <li>We provide live sessions which enables two way communication between the mentor and the student providing a better understanding of the courses.

                            </li>
                            <br></br>
                            <li>  We also conduct doubt solving sessions and exposure to practical thinking.  </li>



                            <div class="d-flex pt-4 d-none d-lg-block d-xl-block d-md-block">
                                <a href="" class="mr-2 home-btn btn btn-primary">Join Us</a>

                            </div>
                        </div>



                    </div>
                    <div class="arrow-right"></div>

                </div>

            </section>

        </>
    )
}

export default Home
