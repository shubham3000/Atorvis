import React, { useState } from 'react'
import { Link,NavLink, useParams } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";

export default function Header(props) {
    const [ showMediaIcons, SetshowMediaIcons ]= useState(false);
    
  return (
    <header style={{background: "#171F33"}}>

        <div className="container">
            <div className="navbar">
                <div className="logo">
                   <Link to="/"><img src={"/images/Home/atorvislogo.png"} width="150px" height="60px" alt='' /></Link>
                </div>
               
                <div className={showMediaIcons ? "menu menu-mobile-view" : "menu"}>
                    <ul className="menu-list">
                        <li>
                            <NavLink to="/" >Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/services" className="">Services</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className="">About Us</NavLink>
                        </li>
                        <li>
                            <NavLink to="/bloghighlights" className="">Blog</NavLink>
                        </li>
                        <li>
                            <NavLink to="/career" className="">Career</NavLink>
                        </li>
                        <li>
                            <NavLink to="/ourwork" className="">Our Works</NavLink>
                        </li>
                        {/* <li>
                            <NavLink to="#contactUs" className="">Contact us</NavLink>
                        </li> */}
                    </ul>
                </div>
                

                <div className="hamberger-menu">
                        <a href='#' onClick={() => SetshowMediaIcons(!showMediaIcons)}>
                            <GiHamburgerMenu />
                        </a>
                </div>
            </div>

        </div>
    </header>
  )
  
}
