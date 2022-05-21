import React from 'react'
import ContactUs from './ContactUs'
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

            <ContactUs />

            <Footer />
        </>
    )
}
