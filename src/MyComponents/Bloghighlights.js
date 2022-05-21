import React from 'react'
import Header from './Header'

import { Link } from 'react-router-dom'
import Footer from './Footer'
import Commentsection from './Commentsection'

export default function Bloghighlights() {
  return (
    <>
      <Header />
      <section style={{ backgroundImage: "url(/images/Blog/blog.svg)", backgroundSize: "cover" }}>
        <div className="container">
          <div className="home d-flex justify-content-center align-items-center">
            <div className="home--detailsbg">
              <h1>catchy phrases for <span style={{ color: "#F88502" }}>blog page</span></h1>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="blog-head my-5">
            <h3>Blog Highlights</h3>
          </div>

          <div className="highlights position-relative">
            <div className="highlight-img">
              <Link to="/Blog"><img src='images/Blog/blog1.svg' /></Link>
            </div>
            <div className="highlight-details">
              <h3>Lorem Ipsum is simply dummy....</h3>
            </div>
            <div className="writer d-flex">
              <h4>Written by John doe</h4>
              <h4 style={{ marginLeft: "22px" }}>Monday  May 20</h4>
            </div>
          </div>

          <div className="highlights-items">
            <table>
              <tr>
                <td>
                  <div className="highlights position-relative">
                    <div className="highlight-img">
                      <Link to="/Blog"><img src='images/Blog/blog2.svg' /></Link>
                    </div>
                    <div class="highlight-details">
                      <h3>Lorem Ipsum is simply dummy....</h3>
                    </div>
                    <div class="writer d-flex">
                        <h4>Written by John doe</h4>
                        <h4 style={{ marginLeft: "22px" }}>Monday  May 20</h4>
                      </div>
                  </div>
                </td>
                <td rowSpan={2}>
                  <div className="highlights position-relative">
                    <div className="highlight-img">
                      <Link to="/Blog"><img src='images/Blog/blog4.svg' /></Link>
                    </div>
                    <div class="highlight-details">
                      <h3>Lorem Ipsum is simply dummy....</h3>
                    </div>
                    <div class="writer d-flex">
                        <h4>Written by John doe</h4>
                        <h4 style={{ marginLeft: "22px" }}>Monday  May 20</h4>
                    </div>
                  </div>
                  <div className="see-more mt-3">
                            <button>See More <i className="fal fa-long-arrow-right" /></button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="highlights position-relative">
                    <div className="highlight-img">
                    <Link to="/Blog"><img src='images/Blog/blog3.svg' /></Link>
                    </div>
                    <div class="highlight-details">
                      <h3>Lorem Ipsum is simply dummy....</h3>
                    </div>
                    <div class="writer d-flex">
                        <h4>Written by John doe</h4>
                        <h4 style={{ marginLeft: "22px" }}>Monday  May 20</h4>
                      </div>
                  </div>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </section>

      <Commentsection />

      <Footer />
    </>
  )
}
