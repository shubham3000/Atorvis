import React from 'react'
import ContactUs from './ContactUs'
import Footer from './Footer'
import Header from './Header'

export default function ourwork() {
    return (
        <>
            <Header />

            <section style={{ backgroundImage: "url(/images/Aboutus/aboutusbg.svg)", backgroundSize: "cover" }}>
                <div className="container">
                    <div className="home d-flex justify-content-center align-items-center flex-column">
                        <div className="home--detailsbg text-center">
                            <h1>Our <span style={{ color: "#F88502" }}>works </span></h1>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="achieve mt-5 mb-15">
                        <h2>Work we have successfully completed</h2>
                    </div>

                    <div className="row">
                        <div className="col-lg-6">
                            <div className="worked">
                                <div className="work">
                                    <div className="work-head">
                                        <h4>Lorem ipsum</h4>
                                    </div>
                                    <div className="work-para">
                                        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    </div>
                                    <div className="learn-more">
                                        <button>Learn more</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="worked">
                                <div className="work">
                                    <div className="work-head">
                                        <h4>Lorem ipsum</h4>
                                    </div>
                                    <div className="work-para">
                                        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    </div>
                                    <div className="learn-more">
                                        <button>Learn more</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-15"></div>

                        <div className="col-lg-6">
                            <div className="worked">
                                <div className="work">
                                    <div className="work-head">
                                        <h4>Lorem ipsum</h4>
                                    </div>
                                    <div className="work-para">
                                        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    </div>
                                    <div className="learn-more">
                                        <button>Learn more</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="worked">
                                <div className="work">
                                    <div className="work-head">
                                        <h4>Lorem ipsum</h4>
                                    </div>
                                    <div className="work-para">
                                        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    </div>
                                    <div className="learn-more">
                                        <button>Learn more</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mb-15"></div>
                    </div>
                </div>
            </section>

            <ContactUs />

            <Footer />
        </>
    )
}
