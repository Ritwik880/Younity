import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../contact.css'

const Contact = () => {
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
            <section className="section gray-bg" id="contactus">
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
                                <form className="contactform contact_form" id="contact_form">
                                    <div className="returnmessage valid-feedback p-15px-b" data-success="Your message has been received, We will contact you soon."></div>
                                    <div className="empty_notice invalid-feedback p-15px-b"><span>Please Fill Required Fields</span></div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input id="name" type="text" placeholder="Full Name" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input id="email" type="text" placeholder="Email Address" className="form-control" />
                                            </div>
                                        </div>
                                        {/* <br /> */}
                                        <div className="col-12">
                                            <div className="form-group">
                                                <input id="subject" type="text" placeholder="Subject" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <textarea id="message" placeholder="Message" className="form-control" rows="3"></textarea>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="send">
                                                <a id="send_message" className="px-btn theme" href="#"><span>Contact Us</span> <i className="arrow"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </form>
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
