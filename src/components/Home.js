import React, { useState } from 'react'
import '../App.css'
import '../index.css'
// import user from '../image/user.png'
import frm from '../image/frm.jpg'
import cfa from '../image/cfa.jpg'
import ncfm from '../image/ncfm.jpg'
import "slick-carousel/slick/slick.css";
import Swiper from 'swiper';
import Slider from "react-slick";
import hindu from '../image/hindu.png';
import pti from '../image/pti.png';
import week from '../image/week.png';
import silicon from '../image/silicon.png';
import tribune from '../image/tribune.png';
import dev from '../image/dev.jpg';
import outlook from '../image/outlook.jpg';
import education from '../image/education.jpg';
import hunt from '../image/hunt.png';
import mid from '../image/mid.jpg';
import india from '../image/india.jpg';
import newfrm from '../image/newfrm.jpeg'
import newcfm from '../image/newcfm.jpeg'
import newcfa from '../image/newcfa.jpeg'
import { Modal } from 'react-bootstrap';
import { BrowserRouter as Router, Link } from 'react-router-dom';
const Home = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [

            {
                breakpoint: 350,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    // const myFunction = () => {
    //     const dots = document.getElementById("dots");
    //     const moreText = document.getElementById("more");
    //     const btnText = document.getElementById("mybtn");

    //     if (dots.style.display === "none") {
    //         dots.style.display = "inline";
    //         btnText.innerHTML = "Read more";
    //         moreText.style.display = "none";
    //     } else {
    //         dots.style.display = "none";
    //         btnText.innerHTML = "Read less";
    //         moreText.style.display = "inline";
    //     }

    // }
    const showItem = () => {
        const showText = document.getElementById('menu');
        if (showText.style.display === "none") {
            showText.style.display = "block";
        }
        else {
            showText.style.display = "none";

        }
    }
    new Swiper('.clients-slider', {
        speed: 400,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        slidesPerView: 'auto',
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },
        breakpoints: {
            320: {
                slidesPerView: 2,
                spaceBetween: 40
            },
            480: {
                slidesPerView: 3,
                spaceBetween: 60
            },
            640: {
                slidesPerView: 4,
                spaceBetween: 80
            },
            992: {
                slidesPerView: 6,
                spaceBetween: 120
            }
        }
    });
    return (


        <>

            <section name="Landing" class="aagam-landing-section container py-5 pb-0">
                <div class="row">
                    <div class="col-lg-6 col-md-12 justify-content-center align-items-center p-5 pb-0">
                        <div class="my-5 aagam-landing-text ">
                            <h1 class="dinot-haeding">Younity <br /> Finschool

                            </h1>
                            <p class="pt-4">Younity Finschool is a subsidiary of Younity Ed-Tech Pvt Ltd, a digital student community with more than 30,000 registered members pan-india. It is a platform which provides the prep and training of globally recognized
                                master level finance programmes like CFA, FRM and NCFM.
                            </p>
                            <div class="d-flex pt-4">
                                <button onClick={handleShow} class="btn btn-primary mr-2" id='mybtn'>Learn More</button>
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
                                                    assistance, institute enrolment assistance, instalment payments, personalised groups,
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
                    <div class="col-lg-6 col-md-12 justify-content-center align-items-center my-5 slider pb-5-sm">
                        <Slider {...settings}>
                            <div>
                                <img class="home-image" src={newfrm} alt='home-img' />

                            </div>
                            <div>
                                <img class="home-image" src={newcfa} alt='home-img' />

                            </div>
                            <div>
                                <img class="home-image" src={newcfm} alt='home-img' />

                            </div>
                        </Slider>




                    </div>
                    <div class="arrow-right"></div>

                </div>

            </section>
            <section className='course reveal'>
                <h1 className='home-title'>Our Flagship Courses</h1>
                <p className='my-5 course-para'>Select from the below range of skillful courses to be at top of your Financial game.</p>
                <div class="container">




                    <div class="row">
                        <div class="col-lg-4">
                            <Link to='/courses'>
                            <img src={frm} width='250' alt='Image' />
                            </Link>


                            <h6 className='my-4'>FRM by GARP US (Financial Risk Management Certification)</h6>

                        </div>
                        <div class="col-lg-4">
                        <Link to='/courses'>
                            <img src={cfa} width='250' alt='Image' />
                            </Link>

                            <h6 className='my-4'>CFA Institute by USA (Chartered Financial Analyst Certification)</h6>

                        </div>
                        <div class="col-lg-4">
                        <Link to='/courses'>
                            <img src={ncfm} width='250' alt='Image' />
                            </Link>

                            <h6 className='my-4'>NCFM by NSE India (NSE Academy Certification in Financial Markets)</h6>

                        </div>
                    </div>
                </div>
            </section>
            <section className='landing-section-why'>
                <h1 class="text-center py-3">Why Younity Finschool</h1>
                <div class="container mt-5">
                    <div class="row g-2">
                        <div class="col-md-4 mb-3 d-flex align-items-stretch">
                            <div class="card p-3 px-4 shadow mb-5 bg-white rounded">

                                <div class="user-content">
                                    <h5 class="mb-0 py-4">Hand-Holded by Mentors</h5>
                                    <p className='py-3'>Our aim is to provide hand-holding to students right from their
                                        entry into the Finance world till the time they get their Charter Holding / Masters / Placement.</p>
                                </div>

                            </div>
                        </div>
                        <div class="col-md-4 mb-3 d-flex align-items-stretch">
                            <div class="card p-3 px-4 shadow mb-5 bg-white rounded">

                                <div class="user-content">
                                    <h5 class="mb-0 py-4">Practical Learning</h5>
                                    <p className='py-3'>We make students focus on practical learning than only clearing the
                                        examination so that they are job ready and ready to step into the real world.</p>
                                </div>

                            </div>
                        </div>
                        <div class="col-md-4 mb-3 d-flex align-items-stretch">
                            <div class="card p-3 px-4 shadow mb-5 bg-white rounded">

                                <div class="user-content">
                                    <h5 class="mb-0 py-4">Guardian Community</h5>
                                    <p className='py-3'>To make their guardian aware about the student's career, course
                                        and performance so that they get more confidence in the child through special one-on-one
                                        PTMs in both language Hindi and English.</p>
                                </div>

                            </div>
                        </div>
                        <div class="col-md-4 mb-3 d-flex align-items-stretch">
                            <div class="card p-3 px-4 shadow mb-5 bg-white rounded">

                                <div class="user-content">
                                    <h5 class="mb-0 py-4">Master Assistance</h5>
                                    <p className='py-3'>To provide guidance and assist them towards the right B-School or
                                        MIM Courses for their future.</p>
                                </div>

                            </div>
                        </div>
                        <div class="col-md-4 mb-3 d-flex align-items-stretch">
                            <div class="card p-3 px-4 shadow mb-5 bg-white rounded">

                                <div class="user-content">
                                    <h5 class="mb-0 py-4">Placement Assistance</h5>
                                    <p className='py-3'>To assist in finding and getting the right placement all across the
                                        globe.</p>
                                </div>

                            </div>
                        </div>
                        <div class="col-md-4 mb-3 d-flex align-items-stretch">
                            <div class="card p-3 px-4 shadow mb-5 bg-white rounded">

                                <div class="user-content">
                                    <h5 class="mb-0 py-4">Internship Assistance</h5>
                                    <p className='py-3'>To give paid internships specifically in the finance domain to
                                        master the skills sets through practical exposure and live projects</p>
                                </div>

                            </div>
                        </div>
                    </div>


                    <div class="container mt-5" id='menu'>
                        <div class="row g-2">
                            <div class="col-md-4 mb-3 d-flex align-items-stretch">
                                <div class="card p-3 px-4 shadow mb-5 bg-white rounded">

                                    <div class="user-content">
                                        <h5 class="mb-0 py-4">Double Attempt of the Examination</h5>
                                        <p className='py-3'>We focus on helping the student clear their
                                            examination in one attempt, but, if they are unable to, we also assist and train them through
                                            the second attempt of the examination for the same fee.</p>
                                    </div>

                                </div>
                            </div>
                            <div class="col-md-4 mb-3 d-flex align-items-stretch">
                                <div class="card p-3 px-4 shadow mb-5 bg-white rounded">

                                    <div class="user-content">
                                        <h5 class="mb-0 py-4">Experienced Mentor</h5>
                                        <p className='py-3'>Our mentors are 15+ years experienced in the Finance field and
                                            have a 90% success rate of helping the students clear their examinations in their first
                                            attempt.</p>
                                    </div>

                                </div>
                            </div>
                            <div class="col-md-4 mb-3 d-flex align-items-stretch">
                                <div class="card p-3 px-4 shadow mb-5 bg-white rounded">

                                    <div class="user-content">
                                        <h5 class="mb-0 py-4">Specialised Softwares</h5>
                                        <p className='py-3'>Our mentors teach the students through special softwares to
                                            make their learning better and insightful, like using Spider for NCFM program for in-depth
                                            stock analysis.</p>
                                    </div>

                                </div>
                            </div>
                            <div class="col-md-4 mb-3 d-flex align-items-stretch">
                                <div class="card p-3 px-4 shadow mb-5 bg-white rounded">

                                    <div class="user-content">
                                        <h5 class="mb-0 py-4">Live Classes & Recordings</h5>
                                        <p className='py-3'>Our classes are conducted live with the focus on 2-way
                                            communication for better clarity and easy doubt-solving during the program with the facility
                                            to access the recordings to recapitulate the classes in case of any lack.</p>
                                    </div>

                                </div>
                            </div>
                            <div class="col-md-4 mb-3 d-flex align-items-stretch">
                                <div class="card p-3 px-4 shadow mb-5 bg-white rounded">

                                    <div class="user-content">
                                        <h5 class="mb-0 py-4">Enrolment Assistance</h5>
                                        <p className='py-3'>Our team provides with enrolment/registration assistance for the
                                            examinations in the respective institutes for a smooth process with no scope of errors.</p>
                                    </div>

                                </div>
                            </div>
                            <div class="col-md-4 mb-3 d-flex align-items-stretch">
                                <div class="card p-3 px-4 shadow mb-5 bg-white rounded">

                                    <div class="user-content">
                                        <h5 class="mb-0 py-4">Instalment Payment</h5>
                                        <p className='py-3'>We provide with the facility of Instalment Payment through a
                                            formalised structure in 2 or 3 instalments.</p>
                                    </div>

                                </div>
                            </div>
                            <div class="col-md-4 mb-3 d-flex align-items-stretch">
                                <div class="card p-3 px-4 shadow mb-5 bg-white rounded">

                                    <div class="user-content">
                                        <h5 class="mb-0 py-4">Personalised Groups</h5>
                                        <p className='py-3'>We make personalised groups of 5 students each for doubt
                                            solving and group study to make learning more interactive. We help students gain
                                            confidence and to polish their knowledge by presenting a powerpoint presentation on
                                            financial markets in front of the class by teaching them.</p>
                                    </div>

                                </div>
                            </div>
                            <div class="col-md-4 mb-3 d-flex align-items-stretch">
                                <div class="card p-3 px-4 shadow mb-5 bg-white rounded">

                                    <div class="user-content">
                                        <h5 class="mb-0 py-4">Mock Tests & Question Banks</h5>
                                        <p className='py-3'>To prepare students by giving them regular mock tests
                                            and question banks of all the important questions</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="send">
                    <button class="explore-all-btn" id='menu-button' onClick={showItem}>Explore all</button>
                    {/* <a class="explore-all-btn" href="#"><i class="arrow">Explore all</i></a> */}
                </div>
            </section>

            {/* <section className='course reveal'>
                <h1 className='home-title'>Our Flagship Courses</h1>
                <p className='my-5'>Select from the below range of skillful courses to be at top of your Financial game.</p>
                <div className="course-box">
                    <div className="courses">
                        <img src={frm} alt="" />
                        <div className="details">
                            <span>Level 1</span>
                            <h6>FRM: Financial Risk Management Certification | GARP</h6>
                        </div>
                        <div className="cost" onClick={handleShow}>
                            view
                        </div>
                        <Modal
                            show={show}
                            onHide={handleClose}
                            backdrop="static"
                            keyboard={false}
                        >
                            <Modal.Header closeButton className='modal-title'>
                                <Modal.Title>FRM: Financial Risk Management Certification | GARP</Modal.Title>
                            </Modal.Header>
                            <Modal.Body className='modal-body'>
                                <div className="row">
                                    <div className="modal-col">
                                        <p>Duration: 120 Hours (2 hours/chapter)</p>
                                        <p>Batches Available: </p>
                                        <ol>
                                            <li>Weekday Batch
                                            </li>
                                            <li>Weekend Batch</li>

                                        </ol>
                                        <p><b>~ Batch fee will include 2 attempts of exam, taxes, guide and institute books and financial calculator.</b></p>


                                    </div>
                                    <div className="modal-col">

                                    </div>
                                </div>
                            </Modal.Body>

                        </Modal>
                    </div>
                    <div className="courses">
                        <img src={cfa} alt="" />
                        <div className="details">
                            <span>Level 1</span>
                            <h6>CFA: Chartered Financial Analyst
                                <br /> | USA</h6>
                        </div>
                        <div className="cost" onClick={handleShow1}>
                            view
                        </div>
                        <Modal
                            show={show1}
                            onHide={handleClose1}
                            backdrop="static"
                            keyboard={false}
                        >
                            <Modal.Header closeButton className='modal-title'>
                                <Modal.Title>CFA: Chartered Financial Analyst | USA</Modal.Title>
                            </Modal.Header>
                            <Modal.Body className='modal-body'>
                                <div className="row">
                                    <div className="modal-col">
                                        <p>Duration: 120 Hours (2 hours/chapter)</p>
                                        <p>Batches Available: </p>
                                        <ol>
                                            <li>Weekday Batch
                                            </li>
                                            <li>Weekend Batch</li>

                                        </ol>
                                        <p><b>~ Batch fee will include 2 attempts of exam, taxes, guide and institute books and financial calculator.</b></p>


                                    </div>
                                    <div className="modal-col">

                                    </div>
                                </div>
                            </Modal.Body>

                        </Modal>
                    </div>
                    <div className="courses">
                        <img src={ncfm} alt="" />
                        <div className="details">
                            <span>Upto Level 4</span>
                            <h6>NCFM: NSE Academy Certification in Financial Markets | NSE India</h6>
                        </div>
                        <div className="cost" onClick={handleShow2}>
                            view
                        </div>
                        <Modal
                            show={show2}
                            onHide={handleClose2}
                            backdrop="static"
                            keyboard={false}
                        >
                            <Modal.Header closeButton className='modal-title'>
                                <Modal.Title>NCFM: NSE Academy Certification in Financial Markets | NSE India</Modal.Title>
                            </Modal.Header>
                            <Modal.Body className='modal-body'>
                                <div className="row">
                                    <div className="modal-col">
                                        <p>Duration: 48 Hours </p>
                                        <p>Batches Available: </p>
                                        <ol>
                                            <li>Monday Batch
                                            </li>
                                            <li>Thursday Batch</li>

                                        </ol>
                                        <p><b>~ Batch fee will include NSE Examination of 4 levels / 2 levels and taxes.</b></p>


                                    </div>
                                    <div className="modal-col">

                                    </div>
                                </div>
                            </Modal.Body>

                        </Modal>
                    </div>
                </div>
            </section> */}



            <section className='landing-about-section'>
                <h1 className='text-center'>Want to know more about us</h1>
                <p className='text-center'>Checkout our media response</p>
                <div class="media-tiles">
                    <div class="row">
                        <div class="col-md-2 col-sm-2 col-xs-4">
                            <div class="media-div">
                                <a href="https://www.hindustantimes.com/brand-post/younity-moving-forward-with-a-vision-to-build-world-leaders-101620034534815.html"><img src={hindu} /></a>
                            </div>
                        </div>
                        <div class="col-md-2 col-sm-2 col-xs-4">
                            <div class="media-div">
                                <a href="https://www.tribuneindia.com/news/jobs-careers/a-booming-stream-of-career-the-stock-markets-240363">   <img src={tribune} /></a>
                            </div>
                        </div>
                        <div class="col-md-2 col-sm-2 col-xs-4">
                            <div class="media-div">
                                <a href="http://www.ptinews.com/pressrelease/46221_press-subTaking-baby-steps-to-achieve-big">  <img src={pti} /></a>
                            </div>
                        </div>
                        <div class="col-md-2 col-sm-2 col-xs-4">
                            <div class="media-div">
                                <a href="https://www.outlookindia.com/newsscroll/taking-baby-steps-to-achieve-big/2059832"> <img src={outlook} /></a>
                            </div>
                        </div>
                        <div class="col-md-2 col-sm-2 col-xs-4">
                            <div class="media-div">
                                <a href="https://www.theweek.in/wire-updates/business/2021/04/06/pwr20-younity-and-letsbookmypg.com.html">  <img src={week} /></a>
                            </div>
                        </div>
                        <div class="col-md-2 col-sm-2 col-xs-4">
                            <div class="media-div">
                                <a href="https://www.devdiscourse.com/article/education/1523849-taking-baby-steps-to-achieve-big"> <img src={dev} /></a>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="media-tiles media-two my-4">
                    <div class="row">
                        <div class="col-md-2 col-sm-2 col-xs-4 mx-1">
                            <div class="media-div">
                                <a href="https://www.mid-day.com/lifestyle/infotainment/article/counseling-sessions-with-prafful-garg-23176322"><img src={mid} /></a>
                            </div>
                        </div>
                        <div class="col-md-2 col-sm-2 col-xs-4 mx-1">
                            <div class="media-div">
                                <a href="https://m.dailyhunt.in/news/india/english/republic+news+india-epaper-dhfacc36dfce9c4bb68db0e89d033c921b/younity+helps+find+plasma+for+covid+19+patients-newsid-dhfacc36dfce9c4bb68db0e89d033c921b_b27f2150b80711ebbee461f237ed05b3">   <img src={hunt} /></a>
                            </div>
                        </div>
                        <div class="col-md-2 col-sm-2 col-xs-4 mx-1">
                            <div class="media-div">
                                <a href="https://www.educationtimes.com/article/newsroom/74253857/it-is-imperative-to-guide-youth-towards-science-and-technology-says-csir-official.html">  <img src={education} /></a>
                            </div>
                        </div>
                        <div class="col-md-2 col-sm-2 col-xs-4 mx-1">
                            <div class="media-div">
                                <a href="https://www.indiatoday.in/education-today/news/story/hindu-college-starts-discussion-on-non-binary-gender-gap-in-industries-in-its-youth-summit-2020-1648440-2020-02-20"> <img src={india} /></a>
                            </div>
                        </div>
                        <div class="col-md-2 col-sm-2 col-xs-4 mx-1">
                            <div class="media-div">
                                <a href="https://startup.siliconindia.com/viewpoint/cxoinsights/enroute-to-a-career-guide-for-the-millenials-nwid-27966.html"> <img src={silicon} /></a>
                            </div>
                        </div>



                    </div>
                </div>
            </section>




        </>
    )
}

export default Home
