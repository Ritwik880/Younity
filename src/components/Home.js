import React, { useState } from 'react'
import '../App.css'
import '../index.css'
import user from '../image/user.png'
import frm from '../image/frm.jpg'
import frmcircle from '../image/frmcircle.png'
import cfacircle from '../image/cfacircle.png'
import ncfmcircle from '../image/ncfmcircle.png'
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


    // window.addEventListener('scroll', reveal);

    // function reveal() {
    //     var reveals = document.querySelectorAll('.reveal');

    //     for (var i = 0; i < reveals.length; i++) {

    //         var windowheight = window.innerHeight;
    //         var revealtop = reveals[i].getBoundingClientRect().top;
    //         var revealpoint = 150;

    //         if (revealtop < windowheight - revealpoint) {
    //             reveals[i].classList.add('active');
    //         }
    //         else {
    //             reveals[i].classList.remove('active');
    //         }
    //     }
    // }


    return (

        <>
            <section name="Landing" class="aagam-landing-section container py-5 pb-0">
                <div class="row">
                    <div class="col-lg-6 col-md-12 justify-content-center align-items-center p-5 pb-0">
                        <div class="my-5 py-5 aagam-landing-text ">
                            <h1 class="dinot-haeding">Younity <br /> Finschool

                            </h1>
                            <p class="pt-4">Younity Finschool is a subsidiary of Younity Ed-Tech Pvt Ltd, a digital student community with more than 30,000 registered members pan-india. It is a platform which provides with the training of certified and most renowned finance courses all across the globe.
                            </p>
                            <div class="d-flex pt-4">
                                <button href="#" class="btn btn-primary mr-2" id='mybtn'>Learn More</button>

                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12 d-flex justify-content-center align-items-center p-5 pb-0 padding-none-m">
                        <img class="home-image" src={frm} alt='home-img' />
                    </div>
                    <div class="arrow-right"></div>

                </div>

            </section>
            <section className='course reveal'>
                <h1 className='home-title'>Our Flagship Courses</h1>
                <p className='my-5 course-para'>Select from the below range of skillful courses to be at top of your Financial game.</p>
                <div class="container marketing">


                    <div class="row">
                        <div class="col-lg-4">
                            <img src={frmcircle} width='200' alt="" srcset="" />


                            <h2 className='my-4'>Frm</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, blanditiis quisquam impedit ad nam excepturi.</p>
                            {/* <p><a class="btn btn-secondary" href="#">View details &raquo;</a></p> */}
                        </div>
                        <div class="col-lg-4">
                            <img src={cfacircle} width='200' alt="" srcset="" />

                            <h2 className='my-4'>Cfa</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, blanditiis quisquam impedit ad nam excepturi.</p>
                            {/* <p><a class="btn btn-secondary" href="#">View details &raquo;</a></p> */}
                        </div>
                        <div class="col-lg-4">
                            <img src={ncfmcircle} width='200' alt="" srcset="" />

                            <h2 className='my-4'>Ncfm</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, blanditiis quisquam impedit ad nam excepturi.</p>
                        </div>
                    </div>
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

            <section className='cta reveal'>
                <div className="display-2 text-center">
                    Our Vision
                </div>
                <p className='my-3'>Our aim is to focus on building a group of individuals of finance enthusiasts by providing financial knowledge and training irrespective of their career path and age. Our vision is to make everyone financially independent and to make financial education accessible to people.</p>


            </section>

            <section className='landing-about-section'>
                <h1 className='text-center'>Want to know more about us</h1>
                <p className='text-center'>Checkout our media response</p>
                <div className="container">
                    <div className="box1 mx-1">
                        <p>Facebook</p>
                    </div>
                    <div className="box2 mx-1">
                        <p>Linkedin</p>
                    </div>
                    <div className="box3 mx-1">
                        <p>Twitter</p>
                    </div>
                    <div className="box4 mx-1">
                        <p>Instagram</p>
                    </div>
                    <div className="box5 mx-1">
                        <p>Medium</p>
                    </div>
                </div>
            </section>
            <section className='landing-last-section py-4'>
                <h1 className='text-center'>Our Clients Speaks</h1>
                <p className='text-center'>We have been working with clients around the world</p>
                <div class="container marketing">


                    <div class="row">

                        <div class="col-lg-4 text-center">
                            <div className="lastBox">
                                <h5 className='my-3'>Efficient Collaborating</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, blanditiis quisquam impedit ad nam excepturi.</p>
                            </div>
                            <img className='my-3' src={user} width='70' alt="" srcset="" />
                            <h6>Lara Cooper</h6>
                            <p>CEO at ABC corporation</p>
                        </div>

                        <div class="col-lg-4 text-center">
                            <div className="lastBox">
                                <h5 className='my-3'>Intuitive Design</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, blanditiis quisquam impedit ad nam excepturi.</p>
                            </div>
                            <img className='my-3' src={user} width='70' alt="" srcset="" />
                            <h6>Lara Cooper</h6>
                            <p>CEO at ABC corporation</p>
                        </div>

                        <div class="col-lg-4 text-center">
                            <div className="lastBox">
                                <h5 className='my-3'>Mindblowing Service</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, blanditiis quisquam impedit ad nam excepturi.</p>
                            </div>
                            <img className='my-3' src={user} width='70' alt="" srcset="" />
                            <h6>Lara Cooper</h6>
                            <p>CEO at ABC corporation</p>
                        </div>

                    </div>
                </div>

            </section >





        </>
    )
}

export default Home
