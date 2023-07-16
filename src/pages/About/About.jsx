import React from 'react'
import './About.css'
import Navbar from '../../components/navbar/Navbar'
function About() {
  return (
    <div>
        <Navbar/>
    <section>
            <div className ="image">
               <img src="https://cdn.pixabay.com/photo/2017/08/26/23/37/business-2684758__340.png" alt='about'/>
            </div>

            <div className = "content">
                <h2>About Us</h2>
                {/* <span><!-- line here --></span> */}
                <p>Our mission is to facilitate students in findings suitable PG accommodations with utmost ease</p>
                <ul className = "links">
                    <li><a href = "/">HOME</a></li>
                    <div className = "vertical-line"></div>
                    <li><a href = "./about">ABOUT</a></li>
                    <div className = "vertical-line"></div>
                    <li><a href = "./connect">CONTACT</a></li>
                </ul>
                <ul className = "icons">
                    <li>
                        <i className = "fa fa-twitter"></i>
                    </li>
                    <li>
                        <i className = "fa fa-facebook"></i>
                    </li>
                    <li>
                        <i className = "fa fa-github"></i>
                    </li>
                    <li>
                        <i className = "fa fa-pinterest"></i>
                    </li>
                </ul>
            </div>
        </section><br></br>
        
        </div>
  )
}

export default About