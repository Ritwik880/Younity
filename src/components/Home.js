import React, { useState } from 'react'
import '../App.css'
import '../index.css'
import happy from '../image/happy.jpg'
import frm from '../image/frm.jpg'
import cfa from '../image/cfa.jpg'
import ncfm from '../image/ncfm.jpg'
import { Modal } from 'react-bootstrap';

const Home = () => {
    // Modal 1
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // Modal 2
    const [show1, setShow1] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);


    // Modal 3
    const [show2, setShow2] = useState(false);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);


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


    return (

        <>
            <section className='header'>
                <h1 className='text-white'>Younity Finschool</h1>


                <p>Younity Finschool is a subsidiary of Younity Ed-Tech Pvt Ltd, a digital student community with more than 30,000 registered members pan-india.
                    It is a platform which provides with the training of certified and most renowned finance courses all across the globe. </p>

                <a href='#' className='home-btn'>Enroll Now</a>


            </section>

            <div class="section6">
                <div class="container6 reveal">
                    <div class="content-section6">
                        <div class="title6">
                            <h2>WHY JOIN YOUNITY
                                <br />
                                Finschool?</h2>
                        </div>
                        <div class="content6">
                            <p>We provide live sessions which enables two way communication between the mentor and the student providing a better understanding of the courses.
                            </p>
                            <p>  We also conduct doubt solving sessions and exposure to practical thinking.  </p>
                            <div class="button6">
                                <a href="">Join Us</a>
                            </div>
                        </div>

                    </div>
                    <div class="image-section6">
                        <img src={happy} />
                    </div>
                </div>
            </div>



            {/* <section name="Landing" class="container py-5 pb-0 my-4 advantage">
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
            </section> */}

            <section className='cta reveal'>
                <h1>Vision</h1>
                <h5>Our aim is to focus on building a group of individuals of finance enthusiasts by providing financial knowledge and training irrespective of their career path and age. Our vision is to make everyone financially independent and to make financial education accessible to people.</h5>
            </section>

            {/* Course */}

            <section className='course reveal'>
                <h1>Our Popular Courses</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium iure nobis soluta!</p>
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
            </section>



        </>
    )
}

export default Home
