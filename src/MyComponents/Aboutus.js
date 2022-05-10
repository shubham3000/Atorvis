import React from 'react'
import Footer from './Footer'
import Header from './Header'

export default function Aboutus() {
    return (
        <>
            <Header />
            <section style={{ backgroundImage: "url(/images/Aboutus/aboutusbg.svg)", backgroundSize: "cover" }}>
                <div className="container">
                    <div className="home d-flex justify-content-center align-items-center flex-column">
                        <div className="home--detailsbg text-center">
                            <h1>Everything begins with a <span style={{ color: "#F88502" }}>conversation</span></h1>
                        </div>
                        <div className="quote" style={{ marginTop: "200px" }}>
                            <div className="quote-img" style={{ marginBottom: "-65px" }}>
                                <img src='images/Aboutus/quote.svg' />
                            </div>
                            <div className="quote-para" style={{ paddingLeft: "65px" }}>
                                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-lg-6">
                            <h4>Who <span style={{ color: "#F88502" }}>we are....</span></h4>
                            <p className='mt-5'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                <br />
                                <br />
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                <br />
                                <br />
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                        <div className="col-lg-6">
                            <img src='images/Aboutus/aboutus1.svg' />
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container mt-15 mb-15">
                    <div className="story my-5">
                        <h3>Our Story</h3>
                        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>

                    <div className="mission mt-15">
                        <h3>Our Mission</h3>
                        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                </div>
            </section>

            <section style={{ background: "#DFE0DF" }}>
                <div className="container">
                    <div className="home d-flex flex-column justify-content-center align-items-center">
                        <div className="principles mt-15">
                            <h3>Our Principles</h3>
                            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            <br />
                            <br />
                            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            <br />
                            <br />
                            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section style={{ backgroundImage: "url(/images/Aboutus/aboutusbg1.svg)", backgroundSize: "cover" }}>
                <div className="container">
                    <div className="explore  d-flex flex-column justify-content-center align-items-start">
                        <h2>Want to join the revolution of shaping tomorrow?</h2>
                        <div className="explore-btn mt-5">
                            <button>Explore Career Opportunities <i className="fal fa-long-arrow-right" /></button>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="featured d-flex justify-content-between mb-5">
                        <h3>Featured Insights</h3>
                        <button>See All Blog Posts</button>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-sm-12">
                            <div className="featured-blog">
                                <div className="featured-img">
                                    <img src='images/Home/featured1.svg' />
                                </div>
                                <div className="featured-date d-flex mt-2">
                                    <h3 style={{ marginRight: "35px" }}>08-11-2021</h3>
                                    <h4>Category</h4>
                                </div>
                                <div className="featured-head mt-4">
                                    <h4>Lorem Ipsum is simply dummy text</h4>
                                </div>
                                <div className="featured-paragraph mt-4">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12">
                            <div className="featured-blog">
                                <div className="featured-img">
                                    <img src='images/Home/featured2.svg' />
                                </div>
                                <div className="featured-date d-flex mt-2">
                                    <h3 style={{ marginRight: "35px" }}>08-11-2021</h3>
                                    <h4>Category</h4>
                                </div>
                                <div className="featured-head mt-4">
                                    <h4>Lorem Ipsum is simply dummy text</h4>
                                </div>
                                <div className="featured-paragraph mt-4">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12">
                            <div className="more-blogs d-flex">
                                <div className="blog-img">
                                    <img src='images/Home/featuredblog1.svg' />
                                </div>
                                <div className="blog-details">
                                    <div className="blog-date d-flex">
                                        <h3 style={{ marginRight: "35px" }}>08-11-2021</h3>
                                        <h4>Category</h4>
                                    </div>
                                    <div className="blog-head">
                                        <h4>Lorem Ipsum is simply dummy text</h4>
                                    </div>
                                </div>
                            </div>
                            <hr />

                            <div className="more-blogs d-flex">
                                <div className="blog-img">
                                    <img src='images/Home/featuredblog2.svg' />
                                </div>
                                <div className="blog-details">
                                    <div className="blog-date d-flex">
                                        <h3 style={{ marginRight: "35px" }}>08-11-2021</h3>
                                        <h4>Category</h4>
                                    </div>
                                    <div className="blog-head">
                                        <h4>Lorem Ipsum is simply dummy text</h4>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="more-blogs d-flex">
                                <div className="blog-img">
                                    <img src='images/Home/featuredblog3.svg' />
                                </div>
                                <div className="blog-details">
                                    <div className="blog-date d-flex">
                                        <h3 style={{ marginRight: "35px" }}>08-11-2021</h3>
                                        <h4>Category</h4>
                                    </div>
                                    <div className="blog-head">
                                        <h4>Lorem Ipsum is simply dummy text</h4>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="more-blogs d-flex">
                                <div className="blog-img">
                                    <img src='images/Home/featuredblog4.svg' />
                                </div>
                                <div className="blog-details">
                                    <div className="blog-date d-flex">
                                        <h3 style={{ marginRight: "35px" }}>08-11-2021</h3>
                                        <h4>Category</h4>
                                    </div>
                                    <div className="blog-head">
                                        <h4>Lorem Ipsum is simply dummy text</h4>
                                    </div>
                                </div>
                            </div>
                            <hr />
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
