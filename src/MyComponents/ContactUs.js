import React from 'react'

export default function ContactUs() {
  return (
    <>
    <section style={{ background: "#BEBEBE" }}>
                <div className="container">
                    <div className="home home1 p-5">
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
    </>
  )
}
