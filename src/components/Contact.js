import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../contact.css'
import { Form, Row, Col, Button } from 'react-bootstrap';
import { ToastContainer, toast } from "react-toastify";
import { db } from "../firebase.js";
import "react-toastify/dist/ReactToastify.css";
const Contact = () => {
    const [first, setFirst] = useState("");
    const [last, setLast] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [item, setItem] = useState("");
    const [message, setMessage] = useState("");

    const [loader, setLoader] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true);

        db.collection("contacts")
            .add({
                first: first,
                last: last,
                email: email,
                phone: phone,
                item: item,
                message: message,
            })
            .then(() => {
                setLoader(false);
                toast.success("Thank you for contacting us.");
                //   alert("Your message has been submitted👍");
            })

            .catch((error) => {
                //   alert(toast.error.message);
                setLoader(false);
                toast.error("Please provide value in each input field");

            });

        setFirst("");
        setLast("");
        setEmail("");
        setPhone("");
        setItem("");
        setMessage("");
    };


    return (

        <>
            <section className="section gray-bg my-4" id="contactus">
                <ToastContainer position="top-center" />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="section-title">
                                <h2>Get In Touch</h2>
                                {/* <p>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites</p> */}
                            </div>
                        </div>
                    </div>
                    <div className="row flex-row-reverse">
                        <div className="col-md-7 col-lg-8 m-15px-tb">
                            <div className="contact-form">
                                <Form onSubmit={handleSubmit}>
                                    <Row>
                                        <Col>
                                            <Form.Control type="text" placeholder="First name*" required autoComplete="offf" value={first}
                                                onChange={(e) => setFirst(e.target.value)} />
                                        </Col>
                                        <Col>
                                            <Form.Control type="text" placeholder="Last name*" required autoComplete="offf" value={last}
                                                onChange={(e) => setLast(e.target.value)} />
                                        </Col>
                                    </Row>
                                    <Row className="my-2">
                                        <Col>
                                            <Form.Control type="email" placeholder="Email*" required autoComplete="offf" value={email}
                                                onChange={(e) => setEmail(e.target.value)} />
                                        </Col>
                                        <Col>
                                            <Form.Control type="number" placeholder="Phone*" required autoComplete="offf" value={phone}
                                                onChange={(e) => setPhone(e.target.value)} />
                                        </Col>
                                    </Row>
                                    <Row className="my-2">
                                        <Col>
                                          
                                            <select value={item}
                                                onChange={(e) => setItem(e.target.value)} name="select" className="custom_dropdown form-select">
                                                <option disabled selected hidden value="">
                                                    Select what we can help you with
                                                </option>
                                                <option value="FRM">
                                                    FRM
                                                </option>
                                                <option value="CFA">
                                                    CFA
                                                </option>
                                                <option value="NCFM">
                                                   NCFM
                                                </option>
                                              
                                            </select>
                                        </Col>
                                    </Row>



                                    <Row>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">

                                            <Form.Control placeholder="Message*" as="textarea" required rows={3} value={message}
                                                onChange={(e) => setMessage(e.target.value)} />
                                        </Form.Group>
                                    </Row>
                                    <Button type="submit" className="contactPageBtn">Submit</Button>
                                </Form>
                            </div>
                        </div>
                        <div className="col-md-5 col-lg-4 m-15px-tb">
                            <div className="contact-name">
                                <h5>Mail</h5>
                                <p>younity@gmail.com</p>
                            </div>
                            <div className="contact-name">
                                <h5>Visit Our Office</h5>
                                <p>DW 300 Deer wood Nirvana Country Gurgaon Haryana 122018</p>
                            </div>
                            <div className="contact-name">
                                <h5>Phone</h5>
                                <p>+91 9756102244</p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>







        </>
    )
}

export default Contact
