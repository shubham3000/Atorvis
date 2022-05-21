import React from 'react'

export default function Commentsection() {
  return (
    <>
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
    </>
  )
}
