import React from 'react'
import Footer from './Footer'
import Header from './Header'

export default function Career() {
    return (
        <>
            <Header />

            <section style={{ backgroundImage: "url(/images/Career/careerbg.svg)", backgroundSize: "cover" }}>
                <div className="container">
                    <div className="home d-flex justify-content-center align-items-center flex-column">
                        <div className="home--detailsbg text-center">
                            <h1>Thinking of joining the<span style={{ color: "#F88502" }}> revolution</span></h1>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="achieve mt-5">
                        <h2>What can we help you achieve</h2>
                    </div>
                    <div className="achieve-img my-5">
                        <div className="row">
                            <div className="col-lg-4">
                                <img className='gallery-img' src='images/Career/career1.png' />
                            </div>
                            <div className="col-lg-4">
                                <img className='gallery-img' src='images/Career/career2.png' />
                            </div>
                            <div className="col-lg-4">
                                <img className='gallery-img' src='images/Career/career3.png' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="achieve mt-5 mb-15">
                        <h2>Helps you pollishing your Skills</h2>
                    </div>
                    <div className="skills">
                        <div className="row">
                            <div className="col-lg-4 p-3">
                                <div className="skills-head">
                                    <h5>Web Devlopment</h5>
                                </div>
                                <div className="skills-para">
                                    <p>of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 p-3">
                                <div className="skills-head">
                                    <h5>Application Development</h5>
                                </div>
                                <div className="skills-para">
                                    <p>of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 p-3">
                                <div className="skills-head">
                                    <h5>Content Writting</h5>
                                </div>
                                <div className="skills-para">
                                    <p>of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>
                            </div>

                            <div className="mb-15"></div>

                            <div className="col-lg-4 p-3">
                                <div className="skills-head">
                                    <h5>Design</h5>
                                </div>
                                <div className="skills-para">
                                    <p>of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 p-3">
                                <div className="skills-head">
                                    <h5>Analytics & Product Improvement</h5>
                                </div>
                                <div className="skills-para">
                                    <p>of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 p-3">
                                <div className="skills-head">
                                    <h5>Lorem Ipsum</h5>
                                </div>
                                <div className="skills-para">
                                    <p>of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>
                            </div>

                            <div className="mb-15"></div>
                        </div>
                    </div>
                </div>
            </section>

            <section style={{ background: "#BEBEBE" }}>
                <div className="container">
                    <div className="home p-5">
                        <div className="row">
                            <div className="col-lg-6 p-4" style={{ background: "#4D4D4D" }}>
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
                            <div className="col-lg-6  position-relative" style={{ background: "#FFFFFF", paddingLeft: "50px", paddingTop: "1rem" }}>
                                <div className="contactus">
                                    <h3 style={{ color: "#4D4D4D" }}>Contact</h3>
                                </div>
                                <div className="contact-details d-flex flex-column mt-5">
                                    <p><i className="far fa-at" style={{ marginRight: "25px" }}></i>email_address&#64;gmail.com</p>
                                    <p><i className="fas fa-phone-alt" style={{ marginRight: "25px" }}></i>+91 999 999 9999</p>
                                    <p><i className="fas fa-map-marker-alt" style={{ marginRight: "25px" }}></i>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                                <div className="pattern">
                                    <img src='images/Services/pattern.svg' />
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
