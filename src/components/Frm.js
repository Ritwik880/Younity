import React from 'react'
import '../App.css'
import frm from '../image/frm.jpg'
import { Accordion } from 'react-bootstrap';
import '../testimonial.css'


const Frm = () => {
    return (
        <>
            <section name="Landing" className="allCourses container py-5 pb-0">
                <div className="row">
                    <div className="col-lg-6 col-md-12 justify-content-center align-items-center p-5 pb-0 my-5">
                        <div className="aagam-landing-text ">
                            <img src={frm} alt="frmImage" />


                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 justify-content-center align-items-center p-5 pb-0 my-5">
                        <h5>FRM by GARP US (Financial Risk Management Certification)</h5>
                        <p> Learn Level 1</p>
                        <ul>
                            <li>Duration: 120 Hours</li>
                            <li>Number of Classes: 60 Classes with 2 Hours/Class</li>
                            <li>Batches Available: Weekday</li>
                        </ul>
                    </div>
                    <div className="arrow-right"></div>

                </div>

            </section>
            <div className="container">
                <Accordion defaultActiveKey="0" className='my-4'>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>1. Foundations of Risk Management (20%)</Accordion.Header>
                        <Accordion.Body>
                            This area focuses on a candidate’s knowledge of foundational concepts of risk management
                            and how risk management can add value to an organization and includes:
                            <ul>
                                <li>
                                    An understanding of corporate risk governance and the trade-off between risk and return

                                </li>
                                <li>The construction of efficient portfolios</li>
                                <li>Fundamental asset pricing models</li>
                                <li>Enterprise risk management frameworks</li>
                                <li> Data quality management</li>
                                <li>A review of major financial disasters</li>
                                <li>To emphasize the importance of ethics as a fundamental requirement for sound risk
                                    management, applications of the GARP Code of Conduct to professional situations are covered in this section as well</li>

                            </ul>



                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>2. Quantitative Analysis (20%)</Accordion.Header>
                        <Accordion.Body>
                            This area tests a candidate’s knowledge of basic probability and statistics, regression and
                            time series analysis, and various quantitative techniques useful in risk management such as:
                            <ul>
                                <li>Monte Carlo methods
                                </li>
                                <li>Volatility forecasting models</li>
                                <li>Value-at-Risk estimation</li>

                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>3. Financial Markets and Products (30%)</Accordion.Header>
                        <Accordion.Body>
                            This area tests the candidate’s knowledge of financial products and the markets in which
                            they trade, including:
                            <ul>
                                <li>Futures and forwards</li>
                                <li>Equity options, swaps, and other derivatives</li>
                                <li>Commodities</li>
                                <li>Currencies</li>
                                <li>Corporate bonds and interest rates</li>
                                <li>A basic understanding of arbitrage arguments and hedging related to these financial
                                    products</li>
                            </ul>

                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>4. Valuation and Risk Models (30%)</Accordion.Header>
                        <Accordion.Body>
                            This area of FRM Pa will test a candidate’s knowledge of valuation techniques and risk
                            models. This includes:
                            <ul>
                                <li>Basic bond valuation and bond hedging</li>
                                <li>Valuation using binomial trees</li>
                                <li> An understanding of the Black-Scholes-Merton model</li>
                                <li>Value-at-Risk (VaR)</li>
                                <li>Expected and unexpected loss estimation</li>
                                <li>Stress testing</li>
                            </ul>

                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </>
    );
};

export default Frm;
