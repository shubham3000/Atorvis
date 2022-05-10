import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'

import Header from './Header'

export default function Services() {
  return (
    <>
    <Header />

    <section style={{ backgroundImage: "url(/images/services/services.svg)", backgroundSize: "cover" }}>
        <div className="container">
            <div className="home d-flex justify-content-center align-items-center">
                <div className="home--detailsbg">
                    <h1>How we help <span style={{color: "#F88502"}}>you</span></h1>
                </div>
            </div>
        </div>
    </section>

    <section>
        <div className="container">
            <div className="service-head my-5">
                <h3>Services we provide</h3>
            </div>
            <div className="service-provide">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="service-img">
                            <img src='images/services/services1.svg' />
                        </div>
                    </div>
                    <div className="col-lg-6 position-relative">
                        <div className="service-title">
                            <h3>1. Big Data & Business Analytics</h3>
                        </div>
                        <div className="service-para">
                            <p>Data is your most valuable asset.But only if you make the most of it.
                            AFQ Tech data scientists and analysts are skilled at mining, modeling, and extracting value from data. Sourced from a range of sectors and with hands-on experience, they put you in charge and draw on the best knowledge and expertise to help you navigate your way forward.
                            </p>
                        </div>
                        <div className="read-more">
                            <button>Read more <i className="fal fa-long-arrow-right" /></button>
                        </div>
                    </div>

                    <div className="mt-15"></div>

                    <div className="col-lg-6 position-relative">
                        <div className="service-title">
                            <h3>2. Web and Software Development</h3>
                        </div>
                        <div className="service-para">
                            <p>From automation to advanced analytics and seamless experiences, we can embed AI in business. We'll deliver new operating models and strategic intelligence for smart processes and data-driven decisions.
                            What, Why and How?
                            </p>
                        </div>
                        <div className="read-more">
                            <button>Read more <i className="fal fa-long-arrow-right" /></button>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="service-img">
                            <img src='images/services/services2.svg' />
                        </div>
                    </div>

                    <div className="mt-15"></div>

                    <div className="col-lg-6">
                        <div className="service-img">
                            <img src='images/services/services3.svg' />
                        </div>
                    </div>
                    <div className="col-lg-6 position-relative">
                        <div className="service-title">
                            <h3>3. Mobile Application Development</h3>
                        </div>
                        <div className="service-para">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
                                type and scrambled it to make a type specimen book. It has survived not only five centu
                                </p>
                        </div>
                        <div className="read-more">
                            <button>Read more <i className="fal fa-long-arrow-right" /></button>
                        </div>
                    </div>

                    <div className="mt-15"></div>
                    
                    <div className="col-lg-6 position-relative">
                        <div className="service-title">
                            <h3>4. Content Writting</h3>
                        </div>
                        <div className="service-para">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
                                type and scrambled it to make a type specimen book. It has survived not only five centu
                                </p>
                        </div>
                        <div className="read-more">
                            <button>Read more <i className="fal fa-long-arrow-right" /></button>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="service-img">
                            <img src='images/services/services4.svg' />
                        </div>
                    </div>

                    <div className="mt-15"></div>

                    <div className="col-lg-6">
                        <div className="service-img">
                            <img src='images/services/services5.svg' />
                        </div>
                    </div>
                    <div className="col-lg-6 position-relative">
                        <div className="service-title">
                            <h3>5. Digital Marketing</h3>
                        </div>
                        <div className="service-para">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
                                type and scrambled it to make a type specimen book. It has survived not only five centu
                                </p>
                        </div>
                        <div className="read-more">
                            <button>Read more <i className="fal fa-long-arrow-right" /></button>
                        </div>
                    </div>

                    <div className="mt-15"></div>
                    
                    <div className="col-lg-6 position-relative">
                        <div className="service-title">
                            <h3>6. Cyber Security</h3>
                        </div>
                        <div className="service-para">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
                                type and scrambled it to make a type specimen book. It has survived not only five centu
                                </p>
                        </div>
                        <div className="read-more">
                            <button>Read more <i className="fal fa-long-arrow-right" /></button>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="service-img">
                            <img src='images/services/services6.svg' />
                        </div>
                    </div>
                </div>
            </div>
            <div className="mb-15"></div>
        </div>
    </section>

    <section style={{background: "#BEBEBE"}}>
        <div className="container">
            <div className="home p-5">
                <div className="row">
                    <div className="col-lg-6 p-4" style={{background: "#4D4D4D"}}>
                        <div className="contactus">
                            <h3>Contact Us</h3>
                        </div>
                        <div className="message-details d-flex flex-column">
                            <input type="text" placeholder='Subject'></input>
                            <input type="text" placeholder='Email'></input>
                            <textarea placeholder='Message'></textarea>
                        </div>
                        <div className="submit text-center my-5">
                            <button type='submit'>Submit</button>
                        </div>
                    </div>
                    <div className="col-lg-6  position-relative" style={{background: "#FFFFFF", paddingLeft: "50px", paddingTop: "1rem"}}>
                        <div className="contactus">
                            <h3 style={{color: "#4D4D4D"}}>Contact</h3>
                        </div>
                        <div className="contact-details d-flex flex-column mt-5">
                            <p><i className="far fa-at" style={{marginRight: "25px"}}></i>email_address&#64;gmail.com</p>
                            <p><i className="fas fa-phone-alt" style={{marginRight: "25px"}}></i>+91 999 999 9999</p>
                            <p><i className="fas fa-map-marker-alt" style={{marginRight: "25px"}}></i>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                        <div className="pattern">
                            <img src='images/Services/pattern.svg'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <Footer />
    </>
  )
}
