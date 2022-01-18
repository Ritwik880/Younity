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
            <section class="section gray-bg" id="contactus">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="section-title">
                                <h2>Get In Touch</h2>
                                {/* <p>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites</p> */}
                            </div>
                        </div>
                    </div>
                    <div class="row flex-row-reverse">
                        <div class="col-md-7 col-lg-8 m-15px-tb">
                            <div class="contact-form">
                                <form class="contactform contact_form" id="contact_form">
                                    <div class="returnmessage valid-feedback p-15px-b" data-success="Your message has been received, We will contact you soon."></div>
                                    <div class="empty_notice invalid-feedback p-15px-b"><span>Please Fill Required Fields</span></div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <input id="name" type="text" placeholder="Full Name" class="form-control" />
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <input id="email" type="text" placeholder="Email Address" class="form-control" />
                                            </div>
                                        </div>
                                        {/* <br /> */}
                                        <div class="col-12">
                                            <div class="form-group">
                                                <input id="subject" type="text" placeholder="Subject" class="form-control" />
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <textarea id="message" placeholder="Message" class="form-control" rows="3"></textarea>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="send">
                                                <a id="send_message" class="px-btn theme" href="#"><span>Contact Us</span> <i class="arrow"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="col-md-5 col-lg-4 m-15px-tb">
                            <div class="contact-name">
                                <h5>Mail</h5>
                                <p>younity@gmail.com</p>
                            </div>
                            <div class="contact-name">
                                <h5>Visit Our Office</h5>
                                <p>Delhi Office : 1st Floor, 29 UA, Block UA <br />Jawahar Nagar, Kamla Nagar, Delhi- 110007</p>
                            </div>
                            <div class="contact-name">
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
