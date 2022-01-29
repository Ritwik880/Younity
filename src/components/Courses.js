import React, { useState } from 'react'
import '../App.css'
import frm from '../image/frm.jpg'
import cfa from '../image/cfa.jpg'
import ncfm from '../image/ncfm.jpg'
import '../testimonial.css'
import { Modal } from 'react-bootstrap';
import { BrowserRouter as Router, Link } from 'react-router-dom';
const Courses = () => {
    // const [show, setShow] = useState(false);

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    // const [show1, setShow1] = useState(false);

    // const handleClose1 = () => setShow1(false);
    // const handleShow1 = () => setShow1(true);

    // const [show2, setShow2] = useState(false);

    // const handleClose2 = () => setShow2(false);
    // const handleShow2 = () => setShow2(true);


    return (
        <>
            <div className="pb-6 d-flex align-items-center courses-page">


                <div className="container d-flex align-items-center">
                    <div className="text-white mx-auto mt-5 upper">
                        <div className="display-2 text-center">
                            Courses
                        </div>


                    </div>
                </div>
            </div>
            <section className='mainCoursePage reveal'>
                <h1 className='home-title'>Our Flagship Courses</h1>
                <p className='my-3'>Select from the below range of skillful courses to be at top of your Financial game.</p>
                <div className="course-box">
                    <div className="courses">
                        <Link className='link' to='/frm'>
                            <img src={frm} alt="" />
                            <div className="details">
                                <span>Level 1</span>
                                <h6>FRM: Financial Risk Management Certification | GARP</h6>
                            </div>
                            <div className="cost">
                                view
                            </div>
                        </Link>

                    </div>
                    <div className="courses">
                        <Link className='link' to='/cfa'>
                            <img src={cfa} alt="" />
                            <div className="details">
                                <span>Level 1</span>
                                <h6>CFA: Chartered Financial Analyst
                                    <br /> | USA</h6>
                            </div>
                            <div className="cost">
                                view
                            </div>
                        </Link>

                    </div>
                    <div className="courses">
                        <Link className='link' to='/ncfm'>
                            <img src={ncfm} alt="" />
                            <div className="details">
                                <span>Upto Level 4</span>
                                <h6>NCFM: NSE Academy Certification in Financial Markets | NSE India</h6>
                            </div>
                            <div className="cost">
                                view
                            </div>
                        </Link>

                    </div>
                </div>
            </section>





        </>
    )
}

export default Courses
