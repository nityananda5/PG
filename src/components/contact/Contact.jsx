import React from 'react'
import './Contact.css'
function Contact() {
  return (
    <div className="container">
    <div className="contact_data2">
      <ul>
        <li>
        <i className="fa-solid fa-envelope"></i>
          <strong>Location:</strong>
          <a href='address' style={{listStyle:"none",textDecoration:"none",marginLeft:"10px"}}>
            Dibrugarh University
          </a>
        </li>
        <li>
          <i className="fa-solid fa-envelope"></i>
          <strong>Email:</strong>
          <a href='gmail' style={{listStyle:"none",textDecoration:"none",marginLeft:"10px"}}>
            google@gmail.com
          </a>
        </li>
        <li>
          <i className="fa-solid fa-envelope"></i>
          <strong>Call:</strong>

          <a href='tel : +91 9365358750' style={{listStyle:"none",textDecoration:"none",marginLeft:"10px"}}>
            111 111 111 111
          </a>
        </li>
      </ul>
   
    </div>
    <div className="contact_data">
      <h2>Contact Me</h2>
      <form action="#">
        <label for="">Name</label>
        <input type="text" />
        <label for="">Email</label>
        <input type="email" />
        <label for="">Subject</label>
        <input type="text" />
        <label for="">Message</label>
        <textarea name="" id="" cols="30" rows="05"></textarea>
        <button>Send Message</button>
      </form>
    </div>
  </div>
  )
}

export default Contact