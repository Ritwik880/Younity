import React from 'react'
import '../footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Footer = () => {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="sec aboutus">
                        <h2 className='h2'>Younity</h2>
                        <p>Younity Finschool is a subsidiary of Younity Ed-Tech Pvt Ltd, a digital student community with more than 30,000 registered members pan-india.</p>
                        <ul className="sci">
                            <li><a href="#"><i class="fa fa-facebook" aria-hidden='true'></i></a></li>
                            <li><a href="#"><i class="fa fa-linkedin" aria-hidden='true'></i></a></li>
                            <li><a href="#"><i class="fa fa-youtube" aria-hidden='true'></i></a></li>
                            <li><a href="#"><i class="fa fa-instagram" aria-hidden='true'></i></a></li>
                        </ul>
                    </div>
                    <div className="sec quickLinks">
                        <h2>Quick Links</h2>
                        <ul>
                            <li><a href="#">About</a></li>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Help</a></li>
                            <li><a href="#">Terms & Conditions</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div className="sec contact">
                        <h2>Contact Info</h2>
                        <ul className='info'>
                            <li>
                                <span><i class="fa fa-map-marker" aria-hidden='true'></i></span>

                                <span>Delhi Office : 1st Floor, 29 UA, Block UA, Jawahar Nagar, Kamla Nagar, Delhi- 110007</span>
                            </li>
                            <li>
                                <span><i class="fa fa-phone" aria-hidden='true'></i></span>

                                <span>9756102244</span>
                            </li>
                            <li>
                                <span><i class="fa fa-envelope" aria-hidden='true'></i></span>

                               <p><a href="mailto:younity@gmail.com">younity@gmail.com</a></p>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
            <div className="copyright">
                <p>Copyright &#169; 2021 Younity Finschool. All Rights Reserved</p>
            </div>

        </>
    )
}

export default Footer
