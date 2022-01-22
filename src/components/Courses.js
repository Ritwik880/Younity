import React, { useState } from 'react'
import '../App.css'
import frm from '../image/frm.jpg'
import cfa from '../image/cfa.jpg'
import ncfm from '../image/ncfm.jpg'
import { Accordion } from 'react-bootstrap';
import '../testimonial.css'
import { BrowserRouter as Router, Link } from 'react-router-dom';
const Courses = () => {


    return (
        <>

            <section name="Landing" class="allCourses container py-5 pb-0">
                <div class="row">
                    <div class="col-lg-6 col-md-12 justify-content-center align-items-center p-5 pb-0 my-5">
                        <div class="aagam-landing-text ">
                            <img src={frm} alt="frmImage" />


                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12 justify-content-center align-items-center p-5 pb-0 my-5">
                        <h5>FRM by GARP US (Financial Risk Management Certification)</h5>
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

            <section name="Landing" class="allCourses container py-5 pb-0">
                <div class="row">
                    <div class="col-lg-6 col-md-12 justify-content-center align-items-center p-5 pb-0 my-5">
                        <h5>CFA Institute by USA (Chartered Financial Analyst Certification)</h5>
                        <p> Learn Level 1</p>
                        <ul>
                            <li>Duration: 120 Hours</li>
                            <li>Number of Classes: 60 Classes with 2 Hours/Class</li>
                            <li>Batches Available: Weekday</li>
                        </ul>

                    </div>
                    <div class="col-lg-6 col-md-12 justify-content-center align-items-center p-5 pb-0">
                        <div class="aagam-landing-text ">
                            <img src={cfa} alt="cfaImage" />


                        </div>

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
            <section name="Landing" class="allCourses container py-5 pb-0">
                <div class="row">
                    <div class="col-lg-6 col-md-12 justify-content-center align-items-center p-5 pb-0">
                        <div class="aagam-landing-text ">
                            <img src={ncfm} alt="ncfmImage" />


                        </div>


                    </div>
                    <div class="col-lg-6 col-md-12 justify-content-center align-items-center p-5 pb-0 my-5">
                        <h5>NCFM by NSE India (NSE Academy Certification in Financial Markets)</h5>
                        <p>Learn Level 1, Level 2, Level 3 and Level 4</p>
                        <ul>
                            <li>Duration: 60 Hours</li>
                            <li>Number of Classes: 30 Classes with 2 Hours/Class</li>
                            <li>Batches Available: Weekday</li>
                            <li>4 Ebooks inclusive worth Rs. 30,000</li>
                        </ul>


                    </div>
                    <div class="arrow-right"></div>

                </div>

            </section>
            <div className="container">
                <Accordion defaultActiveKey="0" className='my-4'>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>LEVEL 1: Equity Derivatives: A Beginner's Module</Accordion.Header>
                        <Accordion.Body>

                            <h5>Introduction, Definition and Applications of Derivatives</h5>
                            <p>Definition and origin of derivatives; Definitions of forwards; futures; options;
                                Moneyless of an option; Participants in the derivatives market and uses of
                                derivatives.</p>
                            <h5>Trading Futures and Options</h5>
                            <p>Pay-off of futures; Theoretical model for future pricing; Option prices.</p>
                            <h5>Derivatives Trading on the Exchange</h5>
                            <p>Derivatives trading and settlement on NSE; using daily newspapers to track
                                futures and options; Accounting and taxation of derivatives.</p>




                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>LEVEL 2: Derivatives Market (Dealers) Module (DMDM)</Accordion.Header>
                        <Accordion.Body>
                            <h5>Introduction to Derivatives</h5>
                            <p>Types of Derivative Contracts, History of Financial Derivatives Markets,
                                Participants in a Derivative Market, Economic Function of the Derivative Market</p>
                            <h5>Understanding Interest Rates and Stock Indices</h5>
                            <p>Understanding Interest rates, Understanding the Stock Index, Economic
                                Significance of Index Movements, Index Construction Issues, Desirable
                                Attributes of an Index, Applications of Index.</p>
                            <h5>Futures Contracts, Mechanism and Pricing Forward Contracts</h5>
                            <p>Limitations of forward markets, Introduction to Futures, Distinction between
                                Futures and Forwards, Contracts, Futures Terminology, Trading Underlying vs. Trading
                                Single Stock Futures, Futures Payoffs, Pricing Futures, Pricing Stock Futures</p>
                            <h5>Application of Futures Contracts</h5>
                            <p>Understanding Beta, Numerical illustration of Applications of Stock Futures</p>
                            <h5>Options Contracts, Mechanism and Applications</h5>
                            <p>Option Terminology, Comparison between Futures and Options, Options
                                Payoffs, Application of Options</p>
                            <h5>Pricing of Options Contracts and Greek Letters</h5>
                            <p>Variables affecting Option Pricing, The Black Scholes Merton Model for Option
                                Pricing (BSO), The Greeks</p>
                            <h5>Trading of Derivatives contracts</h5>
                            <p>Futures and options Trading system, the trader workstation, Future and options
                                Market Instruments, criteria for stocks and index eligibility for trading charges.</p>
                            <h5>Clearing and Settlement</h5>
                            <p>Clearing Entities, Clearing Mechanism, Settlement Procedure, Risk
                                Management, Margining System</p>
                            <h5>Regulatory Framework</h5>
                            <p>Securities Contracts (Regulation) Act, 1956, Securities and Exchange
                                Board of India Act, 1992, Regulation for Derivatives Trading,
                                Adjustments for Corporate Actions</p>
                            <h5>Accounting for Derivatives</h5>
                            <p>Accounting for futures, Accounting for options, Taxation of Derivative
                                Transaction in Securities</p>

                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>LEVEL 3: Options Trading Strategies Module</Accordion.Header>
                        <Accordion.Body>
                            <h5>Introduction to Options</h5>
                            <p>Concept of Options and Option Payoffs of buyers and sellers.</p>
                            <h5>Option Strategies</h5>
                            <p>The 22 different option strategies covered are Long Call, Short Call, Synthetic Long Call,
                                Long Put, Short Put, Covered Call, Long Combo, Protective Call, Covered Put, Long
                                Straddle, Short Straddle, Long Strangle, Short Strangle, Collar, Bull Call Spread Strategy,
                                Bull Put Spread Strategy, Bear Call Spread Strategy, Bear Put Spread Strategy, Long Call
                                Butterfly, Short Call Butterfly, Long Call Condor, Short Call Condor.</p>

                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>LEVEL 4: Options Trading Advanced Module</Accordion.Header>
                        <Accordion.Body>
                            <h5>Options – A Backgrounder</h5>
                            <ol type='A'>
                                <li>Derivative Types</li>
                                <li>Continuous Compounding</li>
                                <li>Option Valuation</li>
                                <li>Option Pricing Band</li>
                                <ol type='i'>
                                    <li>Upper Bound: Call Option </li>
                                    <li>Upper Bound: Put Option</li>
                                    <li>Lower Bound: Call Option</li>
                                    <li>Lower Bound: Put Option</li>

                                </ol>
                                <li>Put-Call Parity: European Options</li>
                                <ol type='i'>
                                    <li>Position A undervalued</li>
                                    <li>Position B Undervalued</li>


                                </ol>
                                <li>Put-Call Parity: American Options</li>
                                <li>Dividends</li>
                            </ol>

                            <h5>Quantitative Concepts – A Backgrounder</h5>
                            <ol type='A'>
                                <li>Normal Distribution</li>
                                <li>Share Prices – Lognormal Distribution</li>
                                <li>Linkages that arise from the Distribution</li>
                                <li>Volatility (s)</li>

                            </ol>
                            <h5>Binomial Option Pricing Model</h5>
                            <ol type='A'>
                                <li>Single Period Binomial</li>
                                <li>Multiple Period Binomial</li>
                                <li>European Put Option</li>
                                <li>Binomial Model for American Options</li>
                                <li>Role of Volatility in ‘u’ and ‘d’</li>

                            </ol>
                            <h5>Black-Scholes Option Pricing Model</h5>
                            <ol type='A'>
                                <li>European Call Option</li>
                                <li>European Put Option</li>
                                <li>Dividends</li>
                                <li>American Options</li>


                            </ol>
                            <h5>Option Greeks</h5>
                            <p><strong>Delta</strong></p>
                            <ol>
                                <li>European Call on non-dividend paying stock</li>
                                <li>European Put on non-dividend paying stock</li>
                                <li>European Call on asset paying a yield of q</li>
                                <li>European Put on asset paying a yield of q</li>


                            </ol>
                            <p><strong>Gamma</strong></p>
                            <ol>
                                <li>European Call / Put on non-dividend paying stock</li>
                                <li>European Call / Put on asset paying a yield of q</li>
                            </ol>
                            <p><strong>Theta</strong></p>
                            <ol>
                                <li>European Call on non-dividend paying stock</li>
                                <li>European Put on non-dividend paying stock</li>
                                <li>European Call on asset paying yield of q.</li>
                                <li>European Put on asset paying yield of q</li>
                            </ol>
                            <p><strong>Vega</strong></p>
                            <ol>
                                <li>European Call / Put on non-dividend paying stock</li>
                                <li>European Call / Put on asset paying yield of q</li>
                            </ol>
                            <p><strong>Rho</strong></p>
                            <ol>
                                <li>European Call on non-dividend paying stock</li>
                                <li>European Put on non-dividend paying stock</li>
                            </ol>
                            <h5>Volatility</h5>
                            <li>Historical Volatility (s)</li>
                            <li>ARCH(m) Model</li>
                            <li>Exponentially Weighted Moving Average (EWMA)</li>
                            <li>GARCH Model</li>
                            <li>Implied Volatility</li>
                            <h5>Basic Option & Stock Positions</h5>
                            <ol type='A'>
                                <li>Pay-off Matrix for Basic Option Positions</li>
                                Long Call,
                                Short Call,
                                Long Put,
                                Short Put
                                <li>Pay-off Matrix for Position in the Share</li>
                                Long Stock,
                                Short Stock
                                <li>Assumptions</li>
                                <li>A Few Option Contract Intricacies</li>
                            </ol>
                            <h5>Option Trading Strategies</h5>
                            <ol type='A'>
                                <li>The Strategies</li>


                                <ol>

                                    <li>Single Option, Single Stock</li>
                                    <ol type='i'>
                                        <li>Protective Put</li>
                                        <li>Covered Put</li>
                                        <li>Covered Call</li>
                                        <li>Protective Call</li>

                                    </ol>
                                    <li>Multiple Options of Same Type</li>
                                    <ol type='i'>
                                        <li>Bull Spread</li>
                                        <li>Bear Spread</li>
                                        <li>Butterfly Spread</li>
                                        <li>Calendar Spread</li>
                                        <li>Diagonal Spread</li>

                                    </ol>
                                    <li>Multiple Options of Different Types</li>
                                    <ol type='i'>
                                        <li>Straddle</li>
                                        <li>Strangle</li>
                                        <li>Collar</li>
                                        <li>Range Forward - Long</li>
                                        <li>Range Forward – Short</li>
                                        <li>Box Spread</li>
                                        <li>Condor</li>


                                    </ol>



                                </ol>
                                <li>Option Chain</li>
                                <li>Contract Fundamentals</li>
                                <li>Option Trading Intricacies</li>
                                <li>Choice of Strike Price</li>
                                <li>Choice of Expiry</li>
                                <li>Roll Over and Covered Calls</li>
                            </ol>
                            <h5>Exotic Options</h5>
                            <ol type='A'>
                                <li>Asian Option</li>
                                <li>Bermudan Option</li>
                                <li>Compound Option</li>
                                <li>Binary Option</li>
                                <li>Barrier Option</li>
                                <li>Look back Option</li>
                                <li>Shout Option</li>
                                <li>Chooser Option</li>
                              
                            </ol>
                            <h5>Market Indicators</h5>
                            <ol type='A'>
                                <li>Put-Call Ratio</li>
                                <li>Open Interest</li>
                                <li>Roll-over</li>
                                <li>Volatility</li>
                                
                            </ol>

                        </Accordion.Body>
                    </Accordion.Item>

                </Accordion>

            </div>

        </>
    )
}

export default Courses
