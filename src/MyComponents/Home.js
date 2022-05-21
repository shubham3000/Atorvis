import React from 'react'
import Header from './Header'

import { Link } from 'react-router-dom'
import Footer from './Footer'

export default function home() {
    return (
        <>
            <Header />
            <section style={{ backgroundImage: "url(/images/Home/home1.svg)", backgroundSize: "cover" }}>
                <div className="container">
                    <div className="home d-flex align-items-center">
                        <div className="home-details">
                            <h1>
                                Grow Your
                                <br /> Business With Us
                            </h1>
                            <button className='home-btn'>WORK WITH US</button>
                        </div>
                    </div>
                </div>
            </section>

            <section style={{ backgroundImage: "url(/images/Home/home2.svg)", backgroundSize: "cover" }}>
                <div className="container">
                    <div className="home d-flex align-items-center">
                        <div className="home-brief text-center">
                            <h2>brief detail of what we do here</h2>
                            <p className='mt-5'>Lorem Ipsum is simply
                                dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container mb-5">
                    <div className="success mt-5">
                        <h3>Success Stories</h3>
                    </div>
                    <div className="home mt-5">
                        <div className="stories">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="stories-img">
                                        <img src='images/Home/stories1.svg' />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="stories-wrap">
                                        <div className="stories-img">
                                            <img src='images/Home/stories2.svg' />
                                        </div>
                                        <div className="stories-details">
                                            <h4>Lorem Ipsum is simply dummy text</h4>
                                            <p className='mt-5'>of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                            </p>
                                            <Link to="#">Read more <i className="fal fa-long-arrow-right" /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 order-md-1 order-2">
                                    <div className="stories-wrap">
                                        <div className="stories-img">
                                            <img src='images/Home/stories3.svg' />
                                        </div>
                                        <div className="stories-details">
                                            <h4>Lorem Ipsum is simply dummy text</h4>
                                            <p className='mt-5'>of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                            </p>
                                            <Link to="#">Read more <i className="fal fa-long-arrow-right" /></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 order-md-2 order-1">
                                    <div className="stories-img">
                                        <img src='images/Home/stories4.svg' />
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section style={{ backgroundImage: "url(/images/Home/servicesbg.svg)", backgroundSize: "cover", marginTop: "120px" }}>
                <div className="container my-5">
                    <div className="home d-flex align-items-center">
                        <div className="service-details text-center">
                            <h2>Services we provide</h2>
                            <p className='mt-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="client mb-5">
                        <h4>Check what our clients are saying</h4>
                    </div>
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="client-img">
                                <img src='images/Home/clients.svg' />
                                <div className="arrow-next mt-3">
                                    <Link to="#"><i className="fal fa-long-arrow-left" style={{background: "#F88502"}}/></Link>
                                    <Link to="#"><i className="fal fa-long-arrow-right" style={{color: "#111111"}}/></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 d-flex align-items-start flex-column justify-content-center">
                            <div className="client-review">
                                <h3>Save Time Managing Social Media For Your Business</h3>
                                <p>
                                Is be upon sang fond must shew. Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly.
                                Believing neglected so so allowance existence departure in. In design active temper be uneasy. 
                                </p>
                                <div className="rating">

                                </div>
                                <div className="client-details">
                                    <h5>Client Name</h5>
                                    <h6 style={{color: "#4D4D4D"}}>Designation</h6>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            </section>

            <section style={{background: "#4D4D4D"}}>
                <div className="container my-5">
                    <div className="project-details d-flex justify-content-between align-items-center">
                        <div className="details">
                            <h4>6</h4>
                            <p>Happy Clients</p>
                        </div>
                        <div className="details">
                            <h4>11</h4>
                            <p>Completed Projects</p>
                        </div>
                        <div className="details">
                            <h4>7M</h4>
                            <p>Transactions</p>
                        </div>
                        <div className="details">
                            <h4>600+</h4>
                            <p>Customers</p>
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
                                    <img src='images/Home/featured1.svg'/>
                                </div>
                                <div className="featured-date d-flex mt-2">
                                    <h3 style={{marginRight: "35px"}}>08-11-2021</h3>
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
                                    <img src='images/Home/featured2.svg'/>
                                </div>
                                <div className="featured-date d-flex mt-2">
                                    <h3 style={{marginRight: "35px"}}>08-11-2021</h3>
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
                                    <img src='images/Home/featuredblog1.svg'/>
                                </div>
                                <div className="blog-details">
                                    <div className="blog-date d-flex align-items-baseline">
                                        <h3 style={{marginRight: "35px"}}>08-11-2021</h3>
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
                                    <img src='images/Home/featuredblog2.svg'/>
                                </div>
                                <div className="blog-details">
                                    <div className="blog-date d-flex align-items-baseline">
                                        <h3 style={{marginRight: "35px"}}>08-11-2021</h3>
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
                                    <img src='images/Home/featuredblog3.svg'/>
                                </div>
                                <div className="blog-details">
                                    <div className="blog-date d-flex align-items-baseline">
                                        <h3 style={{marginRight: "35px"}}>08-11-2021</h3>
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
                                    <img src='images/Home/featuredblog4.svg'/>
                                </div>
                                <div className="blog-details">
                                    <div className="blog-date d-flex align-items-baseline">
                                        <h3 style={{marginRight: "35px"}}>08-11-2021</h3>
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

            <section style={{ backgroundImage: "url(/images/Home/contactbg.svg)", backgroundSize: "cover", marginTop: "120px" }}>
                <div className="container">
                    <div className="contact d-flex flex-column justify-content-center">
                        <div className="row">
                            <div className="col-lg-4 col-sm-12">
                                <div className='contact-info'>
                                    <h4>Contact</h4>
                                    <div className="contact-details d-flex flex-column mt-4">
                                        <p><i className="far fa-at" style={{marginRight: "25px"}}></i>email_address&#64;gmail.com</p>
                                        <p><i className="fas fa-phone-alt" style={{marginRight: "25px"}}></i>+91 999 999 9999</p>
                                        <p><i className="fas fa-map-marker-alt" style={{marginRight: "25px"}}></i>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="insights px-5">
                                    <h3>Stay up to date with insights from atorvis.</h3>
                                    <div className='subscribe position-relative'>
                                        <input type="text" placeholder='Enter your email address.'></input>
                                        <button>Subscribe</button>
                                    </div>
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
