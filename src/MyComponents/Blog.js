import React from 'react'
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

            <section style={{background: "#BEBEBE"}}>
            <div class="container">
                <div class="comment-section">
                    <h3>Leave us a comment</h3>
                    <div class="row">
                        <div class="col-lg-6 col-sm-12">
                            <div class="message">
                                <form>
                                    <input type="text" placeholder="Subject" />
                                    <input type="email" placeholder="Email" />
                                    <textarea placeholder="Message"></textarea>
                                </form>
                                <div className="submit mb-5">
                                  <button type='submit'>Submit</button>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-6 col-sm-12">
                            <div class="recent-blog">
                                <div className='search position-relative'>
                                    <input type="text" placeholder='Search'></input>
                                    <i class="fa fa-search"></i>
                                </div>
                                <div class="viewed mt-4">
                                    <h3>Recently viewed</h3>
                                    <div class="blog-list">
                                        <div class="blog-img"></div>
                                        <div class="blog-details">
                                            <h4>24 Feb, 2020</h4>
                                            <h3>This is article title</h3>
                                        </div>
                                    </div>
                                    <hr />
                                    <div class="blog-list">
                                        <div class="blog-img"></div>
                                        <div class="blog-details">
                                            <h4>24 Feb, 2020</h4>
                                            <h3>This is article title</h3>
                                        </div>
                                    </div>
                                    <hr />
                                    <div class="blog-list">
                                        <div class="blog-img"></div>
                                        <div class="blog-details">
                                            <h4>24 Feb, 2020</h4>
                                            <h3>This is article title</h3>
                                        </div>
                                    </div>
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
