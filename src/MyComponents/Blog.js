import React from 'react'
import Commentsection from './Commentsection'
import Footer from './Footer'
import Header from './Header'


export default function Blog() {
  return (
    <>
    <Header />

    <section style={{ backgroundImage: "url(/images/Blog/blog.svg)", backgroundSize: "cover" }}>
        <div className="container">
            <div className="home d-flex justify-content-center align-items-center mb-15">
                <div className="home--detailsbg">
                <h1>catchy <span style={{ color: "#F88502" }}>phrases</span></h1>
                </div>
          </div>
        </div>
    </section>

    <section>
                <div className="container">
                    <div className="featured d-flex justify-content-between mb-5">
                        <div className="blog">
                            <div className="blog-heading">
                                <h3 style={{color: "#000000"}}>Lorem Ipsum is simply dummy....</h3>
                            </div>
                            <div className="blog-writer d-flex">
                                <h4 style={{color: "#4D4D4D"}}>Written by John doe</h4>
                                <h4 style={{ marginLeft: "22px", color: "#4D4D4D" }}>Monday  May 20</h4>
                            </div>
                        </div>
                        <button>See All Blog Posts</button>
                    </div>
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="blog-paragragh">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 


                                1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="more-blogs d-flex">
                                <div className="blog-img">
                                    <img src='images/Home/featuredblog1.svg'/>
                                </div>
                                <div className="blog-details">
                                    <div className="blog-date d-flex">
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
                                    <div className="blog-date d-flex">
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
                                    <div className="blog-date d-flex">
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
                                    <div className="blog-date d-flex">
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

            <section style={{ backgroundImage: "url(/images/Blog/blogquote.svg)", backgroundSize: "cover" }}>
                <div className="container">
                    <div className="home d-flex justify-content-center align-items-center">
                    <div className="quote" style={{ marginTop: "200px" }}>
                            <div className="quote-img" style={{ marginBottom: "-65px" }}>
                                <img src='images/Aboutus/quote.svg' />
                            </div>
                            <div className="quote-para" style={{ paddingLeft: "65px"}}>
                                <p style={{color: "#4D4D4D" }}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Commentsection />

        <Footer />
    </>
  )
}
