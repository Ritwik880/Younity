import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


const Contact = () => {


    return (

        <>
            <div className="pb-6 d-flex align-items-center contact-page">


                <div className="container d-flex align-items-center">
                    <div className="text-white mx-auto mt-5 upper">
                        <div className="display-2 text-center">
                            Contact
                        </div>


                    </div>
                </div>
            </div>
            <section className="contact1">
                <div className="content1">
                    <h2>Contact Us</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid alias totam doloribus.</p>
                </div>
                <div className="container1">
                    <div className="contactInfo1">
                        <div className="box1">
                            <div className="icon"><i className="fa fa-map-marker"></i></div>
                            <div className="text">
                                <h3>Address</h3>
                                <p>Delhi Office : 1st Floor, 29 UA, Block UA, Jawahar Nagar, Kamla Nagar, Delhi- 110007</p>
                            </div>
                        </div>
                        <div className="box1">
                            <div className="icon"><i className="fa fa-phone"></i></div>
                            <div className="text">
                                <h3>Phone</h3>
                                <p>9756102244</p>
                            </div>
                        </div>
                        <div className="box1">
                            <div className="icon"><i className="fa fa-envelope"></i></div>
                            <div className="text">
                                <h3>Email</h3>
                                <p>younityfinschool@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="contactForm">
                        <form action="">
                            <h2>Send Message</h2>
                            <div className="inputBox">
                                <input type="text" name="" id="" required />
                                <span>Full Name</span>
                            </div>
                            <div className="inputBox">
                                <input type="email" name="" id="" required />
                                <span>Email</span>
                            </div>
                            <div className="inputBox">
                                <input type="number" name="" id="" required />
                                <span>Phone Number</span>
                            </div>
                            <div className="inputBox">
                                <textarea required></textarea>
                                <span>Message</span>
                            </div>
                            <div className="inputBox">
                                <input type="submit" name="" id="" value='send' />

                            </div>



                        </form>
                    </div>
                </div>
            </section>





        </>
    )
}

export default Contact
