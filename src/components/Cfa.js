import React from 'react'
import '../App.css'
import cfa from '../image/cfa.jpg'
import { Accordion } from 'react-bootstrap';
import '../testimonial.css'


const Cfa = () => {
    return (
        <>

            <section name="Landing" class="allCourses container py-5 pb-0">
                <div class="row">
                    <div class="col-lg-6 col-md-12 justify-content-center align-items-center p-5 pb-0 my-5">
                        <div class="aagam-landing-text ">
                            <img src={cfa} alt="cfaImage" />
                        </div>


                    </div>
                    <div class="col-lg-6 col-md-12 justify-content-center align-items-center p-5 pb-0 my-5">

                        <h5>CFA Institute by USA (Chartered Financial Analyst Certification)</h5>
                        <p> Learn Level 1</p>
                        <ul>
                            <li>Duration: 120 Hours</li>
                            <li>Number of Classes: 60 Classes with 2 Hours/Class</li>
                            <li>Batches Available: Weekday</li>
                        </ul>





                    </div>
                    <div class="arrow-right"></div>

                </div>

            </section>
            <div className="container">
                <Accordion defaultActiveKey="0" className='my-4'>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>MODULE 1: INDUSTRY OVERVIEW</Accordion.Header>
                        <Accordion.Body>
                            It is about getting to the heart and the core purpose of the investment industry — its vital role
                            in the world: from helping people save for the future to funding schools, hospitals, roads and
                            other essentials.
                            The benefits this brings when done well (ethically and all parts working together) help serve
                            society.
                            <p>Chapters:</p>
                            <ul>
                                <li>
                                    The Investment Industry: A Top-Down View
                                </li>
                            </ul>



                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>MODULE 2: ETHICS AND REGULATION</Accordion.Header>
                        <Accordion.Body>
                            This module focuses on the essential foundations for the investment world — ethics and
                            regulation. The firm ground on which we build for our clients: trust, reputation, confidence
                            and value — the essentials of a strong and healthy client-focused industry.
                            <p>Chapters:</p>
                            <ul>
                                <li>
                                    Ethics and Investment Professionalism
                                </li>
                                <li>Regulation</li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>MODULE 3: INPUTS AND TOOLS</Accordion.Header>
                        <Accordion.Body>
                            This is about understanding how the (economic) world works — the big picture and the fine
                            detail. How the actions of individuals, corporations and governments play out at micro,
                            macro and international levels, how this translates to a company’s finances, and how to get
                            a clearer understanding of what this all means.
                            <p>Chapters:</p>
                            <ul>
                                <li>
                                    Microeconomics
                                </li>
                                <li>  Macroeconomics</li>
                                <li>Economics of International Trade</li>
                                <li> Financial Statements</li>
                                <li>Quantitative Concepts</li>

                            </ul>

                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>MODULE 4: INVESTMENT INSTRUMENTS</Accordion.Header>
                        <Accordion.Body>
                            This module covers the basic investment options, what they are and their purpose — from
                            conventional equities and bonds to more specialized investments such as real estate and
                            derivatives. <p>Chapters:</p>

                            <ul>
                                <li>
                                    Debt Securities
                                </li>
                                <li>  Equity Securities</li>
                                <li>Derivatives</li>
                                <li>Alternative Investments</li>


                            </ul>

                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>MODULE 5: INDUSTRY STRUCTURE</Accordion.Header>
                        <Accordion.Body>
                            The industry is complex and highly interdependent. This module looks at how the industry
                            helps us invest, who the participants are and what they do, the different markets where
                            investments take place, and the investment products themselves <p>Chapters:</p>

                            <ul>
                                <li>
                                    Structure of the Investment
                                </li>
                                <li>  Industry Investment Vehicles</li>
                                <li>The Functioning of Financial Markets</li>



                            </ul>

                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                        <Accordion.Header>MODULE 6: SERVING CLIENT NEEDS</Accordion.Header>
                        <Accordion.Body>
                            This is about focusing on clients — gaining a clear understanding of their needs,
                            circumstances, motivations and ambitions so investments can be allocated and managed in
                            the right way for them. <p>Chapters:</p>

                            <ul>
                                <li>
                                    Investors and Their Needs
                                </li>
                                <li>  Investment Management</li>



                            </ul>

                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="6">
                        <Accordion.Header>MODULE 7: INDUSTRY CONTROLS</Accordion.Header>
                        <Accordion.Body>
                            Controls are critical in helping ensure everything runs smoothly. In the fast moving world of
                            investments and risk it is essential to understand how systems and controls are used in the
                            industry to ensure the client is properly served. <p>Chapters:</p>

                            <ul>
                                <li>
                                    Risk Management
                                </li>
                                <li> Performance Evaluation</li>
                                <li>Investment Industry Documentation</li>



                            </ul>

                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </>
    );
};

export default Cfa;
