import React, { useState } from 'react'
import '../App.css'
import '../index.css'
import frm from '../image/frm.jpg'
import cfa from '../image/cfa.jpg'
import ncfm from '../image/ncfm.jpg'
import "slick-carousel/slick/slick.css";
import hindu from '../image/hindu.png';
import pti from '../image/pti.png';
import week from '../image/week.png';
import silicon from '../image/silicon.png';
import tribune from '../image/tribune.png';
import dev from '../image/dev.jpg';
import education from '../image/education.jpg';
import hunt from '../image/hunt.png';
import mid from '../image/mid.jpg';
import india from '../image/india.jpg';
import newfrm from '../image/newfrm.jpeg'
import newcfm from '../image/newcfm.jpeg'
import newcfa from '../image/newcfa.jpeg'
import { Modal } from 'react-bootstrap';
import six from '../image/six.png'
import { BrowserRouter as Router, Link } from 'react-router-dom';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';


const Home = () => {
    const AutoplaySlider = withAutoplay(AwesomeSlider);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const showItem = () => {
        const showText = document.getElementById('menu');
        if (showText.style.display == "none") {
            showText.style.display = "block";
        }
        else {
            showText.style.display = "none";

        }
    }

    return (


        <>

            <section name="Landing" className="aagam-landing-section container pb-0">
                <div className="row">
                    <div className="col-lg-6 col-md-12 justify-content-center align-items-center p-5 pb-0">
                        <div className="aagam-landing-text ">
                            <h1 className="dinot-haeding">Younity <br /> Finschool

                            </h1>
                            <p className="pt-4">Younity Finschool is a subsidiary of Younity Ed-Tech Pvt Ltd, a digital student community with more than 30,000 registered members pan-india. It is a platform which provides the preparation and training of globally recognized
                                master level finance programmes like CFA, FRM and NCFM.
                            </p>
                            <div className="d-flex pt-4">
                                <button onClick={handleShow} className="btn btn-primary mr-2" id='mybtn'>Learn More</button>
                                <Modal
                                    show={show}
                                    onHide={handleClose}
                                    backdrop="static"
                                    keyboard={false}
                                >
                                    <Modal.Header closeButton className='modal-title'>
                                        <Modal.Title>Younity Finschool</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body className='modal-body'>
                                        <div className="row">
                                            <div className="modal-col">
                                                <p> We focus on educating about
                                                    the finance sector and widening the career prospects for young students and professionals.
                                                    We provide hand holding by mentors, practical learning, guardian community, masters and
                                                    MIM courses assistance, placement assistance, internship assistance, two attempts of
                                                    examinations, one-on-one doubt solving, experienced mentor, specialised softwares like
                                                    Spider for stock analysis, live classes with two way communication, immediate recordings
                                                    assistance, institute enrollment assistance, instalment payments, personalised groups,
                                                    unlimited question banks, ebooks, subject wise and overall mock tests and much more.</p>


                                            </div>
                                            <div className="modal-col">

                                            </div>
                                        </div>
                                    </Modal.Body>

                                </Modal>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 justify-content-center align-items-center slider" id='landingImage'>
                        {/* <Slider {...settings}> */}
                        <AutoplaySlider
                            play={true}
                            cancelOnInteraction={false} // should stop playing on user interaction
                            interval={6000}
                        // className='reactSider'
                        >
                            {/* <Link to='/frm'> */}
                            <div data-src={newfrm} />
                            {/* </Link> */}
                            {/* <Link to='/cfa'> */}
                            <div data-src={newcfa} />
                            {/* </Link>
                            {/* <Link to='/ncfm'> */}
                            <div data-src={newcfm} />
                            {/* </Link> */}

                            {/* <div>
                                <Link to='/frm'>
                                    <img className="home-image" src={newfrm} alt='home-img' />
                                </Link>

                            </div>
                            <div>
                                <Link to='/cfa'>
                                    <img className="home-image" src={newcfa} alt='home-img' />
                                </Link>

                            </div>
                            <div>
                                <Link to='/ncfm'>ncfm
                                    <img className="home-image" src={newcfm} alt='home-img' />
                                </Link>

                            </div> */}
                        </AutoplaySlider>
                        {/* </Slider> */}




                    </div>
                    <div className="arrow-right"></div>

                </div>

            </section>
            <section className='course reveal'>
                <h1 className='home-title'>Our Flagship Courses</h1>
                <p className='py-3 course-para'>Select from the below range of skillful courses to be at top of your Financial game.</p>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <Link to='/frm'>
                                <img src={frm} width='250' alt='Image' />
                            </Link>


                            <h6 className='my-4'>FRM by GARP US (Financial Risk Management Certification)</h6>

                        </div>
                        <div className="col-lg-4">
                            <Link to='/cfa'>
                                <img src={cfa} width='250' alt='Image' />
                            </Link>

                            <h6 className='my-4'>CFA Institute by USA (Chartered Financial Analyst Certification)</h6>

                        </div>
                        <div className="col-lg-4">
                            <Link to='/ncfm'>
                                <img src={ncfm} width='250' alt='Image' />
                            </Link>

                            <h6 className='my-4'>NCFM by NSE India (NSE Academy Certification in Financial Markets)</h6>

                        </div>
                    </div>
                </div>
            </section>
            <section className='landing-section-why py-5'>
                <h1 className="text-center">Why Younity Finschool?</h1>
                <div className="container mt-5">
                    <div className="row g-2">
                        <div className="col-md-4 mb-3 d-flex align-items-stretch">
                            <div className="card p-3 px-4 shadow mb-5 bg-white rounded">

                                <div className="user-content">
                                    <img src={six} alt="" />
                                    <h5 className="mb-0 py-4">Hand-Holded by Mentors</h5>
                                    <p className='py-3'>Our aim is to provide hand-holding to students right from their
                                        entry into the Finance world till the time they get their Charter Holding / Masters / Placement.</p>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-4 mb-3 d-flex align-items-stretch">
                            <div className="card p-3 px-4 shadow mb-5 bg-white rounded">

                                <div className="user-content">
                                    <img src={six} alt="" />
                                    <h5 className="mb-0 py-4">Practical Learning</h5>
                                    <p className='py-3'>We make students focus on practical learning than only clearing the
                                        examination so that they are job ready and ready to step into the real world.</p>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-4 mb-3 d-flex align-items-stretch">
                            <div className="card p-3 px-4 shadow mb-5 bg-white rounded">

                                <div className="user-content">
                                    <img src={six} alt="" />
                                    <h5 className="mb-0 py-4">Guardian Community</h5>
                                    <p className='py-3'>To make their guardian aware about the student's career, course
                                        and performance so that they get more confidence in the child through special one-on-one
                                        PTMs in both language Hindi and English.</p>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-4 mb-3 d-flex align-items-stretch">
                            <div className="card p-3 px-4 shadow mb-5 bg-white rounded">

                                <div className="user-content">
                                    <img src={six} alt="" />
                                    <h5 className="mb-0 py-4">Master Assistance</h5>
                                    <p className='py-3'>To provide guidance and assist them towards the right B-School or
                                        MIM Courses for their future.</p>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-4 mb-3 d-flex align-items-stretch">
                            <div className="card p-3 px-4 shadow mb-5 bg-white rounded">

                                <div className="user-content">
                                    <img src={six} alt="" />
                                    <h5 className="mb-0 py-4">Placement Assistance</h5>
                                    <p className='py-3'>To assist in finding and getting the right placement all across the
                                        globe.</p>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-4 mb-3 d-flex align-items-stretch">
                            <div className="card p-3 px-4 shadow mb-5 bg-white rounded">

                                <div className="user-content">
                                    <img src={six} alt="" />
                                    <h5 className="mb-0 py-4">Internship Assistance</h5>
                                    <p className='py-3'>To give paid internships specifically in the finance domain to
                                        master the skills sets through practical exposure and live projects</p>
                                </div>

                            </div>
                        </div>
                    </div>


                    <div className="container mt-5" id='menu'>
                        <div className="row g-2">
                            <div className="col-md-4 mb-3 d-flex align-items-stretch">
                                <div className="card p-3 px-4 shadow mb-5 bg-white rounded">

                                    <div className="user-content">
                                        <img src={six} alt="" />
                                        <h5 className="mb-0 py-4">Double Attempt of the Examination</h5>
                                        <p className='py-3'>We strive to help the student pass the examination in one attempt. If they are unable to, we also assist and train them through the second attempt of the examination for the same fee. </p>
                                    </div>

                                </div>
                            </div>
                            <div className="col-md-4 mb-3 d-flex align-items-stretch">
                                <div className="card p-3 px-4 shadow mb-5 bg-white rounded">

                                    <div className="user-content">
                                        <img src={six} alt="" />
                                        <h5 className="mb-0 py-4">Experienced Mentor</h5>
                                        <p className='py-3'>Our mentors are 15+ years experienced in the Finance field and
                                            have a 90% success rate of helping the students clear their examinations in their first
                                            attempt.</p>
                                    </div>

                                </div>
                            </div>
                            <div className="col-md-4 mb-3 d-flex align-items-stretch">
                                <div className="card p-3 px-4 shadow mb-5 bg-white rounded">

                                    <div className="user-content">
                                        <img src={six} alt="" />
                                        <h5 className="mb-0 py-4">Specialised Softwares</h5>
                                        <p className='py-3'>Our mentors teach the students through special softwares to
                                            make their learning better and insightful, like using Spider for NCFM program for in depth stock market/ trading analysis</p>
                                    </div>

                                </div>
                            </div>
                            <div className="col-md-4 mb-3 d-flex align-items-stretch">
                                <div className="card p-3 px-4 shadow mb-5 bg-white rounded">

                                    <div className="user-content">
                                        <img src={six} alt="" />
                                        <h5 className="mb-0 py-4">Live Classes & Recordings</h5>
                                        <p className='py-3'>Our classes are conducted live with the focus on 2-way
                                            communication for better clarity and easy doubt-solving during the program with the facility
                                            to access the recordings to recapitulate the classes in case of any lack.</p>
                                    </div>

                                </div>
                            </div>
                            <div className="col-md-4 mb-3 d-flex align-items-stretch">
                                <div className="card p-3 px-4 shadow mb-5 bg-white rounded">

                                    <div className="user-content">
                                        <img src={six} alt="" />
                                        <h5 className="mb-0 py-4">Enrollment Assistance</h5>
                                        <p className='py-3'>Our team provides with enrollment/registration assistance for the
                                            examinations in the respective institutes for a smooth process with no scope of errors.</p>
                                    </div>

                                </div>
                            </div>
                            <div className="col-md-4 mb-3 d-flex align-items-stretch">
                                <div className="card p-3 px-4 shadow mb-5 bg-white rounded">

                                    <div className="user-content">
                                        <img src={six} alt="" />
                                        <h5 className="mb-0 py-4">Installment Payment</h5>
                                        <p className='py-3'>We provide with the facility of Installment Payment through a
                                            formalised structure in 2 or 3 instalments.</p>
                                    </div>

                                </div>
                            </div>
                            <div className="col-md-4 mb-3 d-flex align-items-stretch">
                                <div className="card p-3 px-4 shadow mb-5 bg-white rounded">

                                    <div className="user-content">
                                        <img src={six} alt="" />
                                        <h5 className="mb-0 py-4">Personalised Groups</h5>
                                        <p className='py-3'>We make personalised groups of 5 students each for doubt
                                            solving and group study to make learning more interactive. We help students gain
                                            confidence and to polish their knowledge by presenting a powerpoint presentation on
                                            financial markets in front of the class by teaching them.</p>
                                    </div>

                                </div>
                            </div>
                            <div className="col-md-4 mb-3 d-flex align-items-stretch">
                                <div className="card p-3 px-4 shadow mb-5 bg-white rounded">

                                    <div className="user-content">
                                        <img src={six} alt="" />
                                        <h5 className="mb-0 py-4">Mock Tests & Question Banks</h5>
                                        <p className='py-3'>To prepare students by giving them regular mock tests
                                            and question banks of all the important questions</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="send">
                    <button className="explore-all-btn" id='menu-button' onClick={showItem}>Explore all &rarr;</button>
                    {/* <a className="explore-all-btn" href="#"><i className="arrow">Explore all</i></a> */}
                </div>
            </section>



            <section className='landing-about-section py-3'>
                <h1 className='text-center'>Want to know more about us</h1>
                <p className='text-center'>Checkout our media response</p>
                <div className="outer-grid">
                    <div className="inner-grid">

                        <a href="https://www.hindustantimes.com/brand-post/younity-moving-forward-with-a-vision-to-build-world-leaders-101620034534815.html"><img src={hindu} /></a>

                    </div>
                    <div className="inner-grid">
                        <a href="https://www.tribuneindia.com/news/jobs-careers/a-booming-stream-of-career-the-stock-markets-240363">   <img src={tribune} /></a>

                    </div>
                    <div className="inner-grid">
                        <a href="http://www.ptinews.com/pressrelease/46221_press-subTaking-baby-steps-to-achieve-big">  <img src={pti} /></a>

                    </div>

                    <div className="inner-grid">
                        <a href="https://www.theweek.in/wire-updates/business/2021/04/06/pwr20-younity-and-letsbookmypg.com.html">  <img src={week} /></a>

                    </div>
                    <div className="inner-grid">
                        <a href="https://www.devdiscourse.com/article/education/1523849-taking-baby-steps-to-achieve-big"> <img src={dev} /></a>

                    </div>

                    <div className="inner-grid">
                        <a href="https://www.mid-day.com/lifestyle/infotainment/article/counseling-sessions-with-prafful-garg-23176322"><img src={mid} /></a>

                    </div>
                    <div className="inner-grid">
                        <a href="https://m.dailyhunt.in/news/india/english/republic+news+india-epaper-dhfacc36dfce9c4bb68db0e89d033c921b/younity+helps+find+plasma+for+covid+19+patients-newsid-dhfacc36dfce9c4bb68db0e89d033c921b_b27f2150b80711ebbee461f237ed05b3">   <img src={hunt} /></a>

                    </div>
                    <div className="inner-grid">
                        <a href="https://www.educationtimes.com/article/newsroom/74253857/it-is-imperative-to-guide-youth-towards-science-and-technology-says-csir-official.html">  <img src={education} /></a>

                    </div>
                    <div className="inner-grid">
                        <a href="https://www.indiatoday.in/education-today/news/story/hindu-college-starts-discussion-on-non-binary-gender-gap-in-industries-in-its-youth-summit-2020-1648440-2020-02-20"> <img src={india} /></a>

                    </div>
                    <div className="inner-grid">
                        <a href="https://startup.siliconindia.com/viewpoint/cxoinsights/enroute-to-a-career-guide-for-the-millenials-nwid-27966.html"> <img src={silicon} /></a>

                    </div>




                </div>
            </section>




        </>
    )
}

export default Home
