import React from 'react'
import '../App.css'
import happy from '../image/happy.jpg'
import frm from '../image/frm.jpg'
import cfa from '../image/cfa.jpg'
import ncfm from '../image/ncfm.jpg'
const Home = () => {
   

    return (

        <>
            <section className='header'>
                <h1 className='text-white'>Younity Finschool</h1>


                <p>Younity Finschool is a subsidiary of Younity Ed-Tech Pvt Ltd, a digital student community with more than 30,000 registered members pan-india.</p>
                <p>Younity Finschool is a platform which provides with the training of certified and most renowned finance courses all across the globe. </p>


            </section>



            <section name="Landing" class="container py-5 pb-0 my-4 advantage">
                <div className="row">
                    <div className="col-lg-6 col-md-12 justify-content-center align-items-center p-5 pb-0">
                        <img className='image' src={happy} alt='second-img' />
                    </div>
                    <div class="col-lg-6 col-md-12 justify-content-center align-items-center p-5 pb-0 padding-none-m">
                        <div class="landing-text">
                            <h3 class="heading">WHY JOIN YOUNITY FINSCHOL?
                            </h3>
                            <br />
                            <p>We provide live sessions which enables two way communication between the mentor and the student providing a better understanding of the courses.
                            </p>
                            <p>  We also conduct doubt solving sessions and exposure to practical thinking.  </p>
                            <div class="d-flex pt-4 d-none d-lg-block d-xl-block d-md-block">
                                <a href="" class="mr-2 home-btn btn btn-primary">Join Us</a>
                            </div>
                        </div>
                    </div>
                    <div class="arrow-right"></div>
                </div>
            </section>

            <section className='cta'>
                <h1>Vision</h1>
                <h5>Our aim is to focus on building a group of individuals of finance enthusiasts by providing financial knowledge and training irrespective of their career path and age. Our vision is to make everyone financially independent and to make financial education accessible to people.</h5>
            </section>

            {/* Course */}

            <section className='course'>
                <h1>Our Popular Courses</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium iure nobis soluta!</p>
                <div className="course-box">
                    <div className="courses">
                        <img src={frm} alt="" />
                        <div className="details">
                            <span>Level 1</span>
                            <h6>FRM: Financial Risk Management Certification | GARP</h6>
                        </div>
                        <div className="cost">
                            view
                        </div>
                    </div>
                    <div className="courses">
                        <img src={cfa} alt="" />
                        <div className="details">
                            <span>Level 1</span>
                            <h6>CFA: Chartered Financial Analyst
                                <br /> | USA</h6>
                        </div>
                        <div className="cost">
                            view
                        </div>
                    </div>
                    <div className="courses">
                        <img src={ncfm} alt="" />
                        <div className="details">
                            <span>Upto Level 4</span>
                            <h6>NCFM: NSE Academy Certification in Financial Markets | NSE India</h6>
                        </div>
                        <div className="cost">
                            view
                        </div>
                    </div>
                </div>
            </section>

           

        </>
    )
}

export default Home
