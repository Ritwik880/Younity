import React from 'react'
// import '../App.css'
import image1 from '../image/image1.webp'
import image3 from '../image/image3.jpg'
import happy from '../image/happy.jpg'
// import image2 from '../image/image2.heic'
const Home = () => {
    // const about = {
    //     backgroundColor: '#f1f5fd',
    //     width: '100%'
    // }

    return (

        <>
            <section className="about">
                <h1>About Younity Finschool</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                <div className="row">
                    <div className="about-col">
                        <img src={image1} alt="" />
                        <p>Younity Finschool is a subsidiary of Younity Ed-Tech Pvt Ltd, a digital student community with more than 30,000 registered members pan-india.</p>
                    </div>
                    <div className="about-col">
                        <img src={image3} alt="" />
                        <p>Younity Finschool is a platform which provides with the training of certified and most renowned finance courses all across the globe. </p>
                    </div>
                </div>
            </section>



            <section name="Landing" class="container py-5 pb-0 my-4 advantage">
                <div className="row">
                    <div className="col-lg-6 col-md-12 justify-content-center align-items-center p-5 pb-0">
                        <img className='image' src={happy} alt='second-img' />



                    </div>
                    <div class="col-lg-6 col-md-12 justify-content-center align-items-center p-5 pb-0 padding-none-m">
                        <div class="landing-text ">
                            <h3 class="heading">WHY JOIN YOUNITY FINSCHOL?

                            </h3>
                            <h5>Younity Finschool Advantage</h5>
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

            <section className="course">
                <h1>Courses We Offer</h1>
                <p>Launching Prep Courses for the most renowned courses in the Finance World across the globe. </p>
              
                <div className="row">
                    <div className="course-col">
                        <h2>Level 1</h2>
                        <h3 className='h3'>FRM: Financial Risk Management Certification | GARP </h3>
                        <p>Duration: 120 Hours (2 hours/chapter)</p>
                        <p>Batches Available: </p>
                        <li>Weekday Batch</li>
                        <li>Weekend Batch</li>
                        <p>Batch fee will include 2 attempts of exam, taxes, guide and institute books and financial calculator.</p>
                    </div>
                    <div className="course-col">
                        <h2>Level 1</h2>
                        <h3 className='h3'>CFA: Chartered Financial Analyst | USA </h3>
                        <p>Duration: 120 Hours (2 hours/chapter)</p>
                        <p>Batches Available: </p>
                        <li>Weekday Batch</li>
                        <li>Weekend Batch</li>
                        <p>Batch fee will include 2 attempts of exam, taxes, guide and institute books and financial calculator.</p>
                    </div>
                    <div className="course-col">
                        <h2>Learn Upto Level 4</h2>
                        <h3 className='h3'>NCFM: NSE Academy Certification in Financial Markets | NSE India </h3>
                        <p>Duration: 120 Hours (2 hours/chapter)</p>
                        <p>Batches Available: </p>
                        <li>Weekday Batch</li>
                        <li>Weekend Batch</li>
                        <p>Batch fee will include 2 attempts of exam, taxes, guide and institute books and financial calculator.</p>
                    </div>
                </div>
            </section>

            {/* <section className="footer">
                <h4>Contact Us</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias atque, animi ducimus dolor natus consequuntur, quia expedita ipsa asperiores dolore ex
                    <br /> veniam magnam fugit a perspiciatis esse quasi enim voluptatum!</p>
                    <div className="icons">
                        <i class='fa fa-facebook'></i>
                        <i class='fa fa-twitter'></i>
                        <i class='fa fa-instagram'></i>
                        <i class='fa fa-linkedin'></i>
                       
                    </div>
            </section> */}

        </>
    )
}

export default Home
