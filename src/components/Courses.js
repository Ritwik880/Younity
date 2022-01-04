import React, { useState } from 'react'
import '../App.css'
import frm from '../image/frm.jpg'
import cfa from '../image/cfa.jpg'
import ncfm from '../image/ncfm.jpg'
import { Modal } from 'react-bootstrap';
const Courses = () => {
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
            <div className="pb-6 d-flex align-items-center courses-page">


                <div className="container d-flex align-items-center">
                    <div className="text-white mx-auto mt-5 upper">
                        <div className="display-2 text-center">
                            All Courses
                        </div>


                    </div>
                </div>
            </div>
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

export default Courses