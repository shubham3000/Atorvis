import React from 'react'

export default function Footer() {
  return (
    <>
    <section style={{background: "#050A30"}}>
        <div className="container">
            <div className="footer d-flex flex-column justify-content-center">
                <div className="row">
                    <div className="col-lg-2">
                        <img src='images/Home/atorvislogofooter.svg' />
                    </div>
                    <div className="col-lg-8">
                        <div className="about" style={{padding: "0 50px"}}>
                            <h4>About Us</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="social">
                            <h4>Follow Us</h4>
                            <div className="social-icons">
                                <i class="fab fa-twitter"></i>
                                <i class="fab fa-facebook-f"></i>
                                <i class="fab fa-instagram"></i>
                                <i class="fab fa-youtube"></i>
                                <i class="fab fa-linkedin-in"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section  style={{background: "#12163A"}}>
        <div className="container">
            <div className="copyright">
                <div className="rights">
                    <h4>&#169; 2022 Atorvis. All rights reserved</h4>
                </div>

                <div className='copyright-list'>
                    <ul>
                        <li><a>Support</a></li>
                        <li><a>Terms of Service</a></li>
                        <li><a>Privacy  Policy</a></li>
                        <li><a>Help & FAQ</a></li>
                    </ul>
                </div>
                
            </div>
        </div>
    </section>
    </>
  )
}
