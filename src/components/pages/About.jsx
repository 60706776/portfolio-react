import React from 'react'
import "../pages/StylesPages/About.css"
import photo from "../../image/photo_2024-05-30_14-29-27.jpg"

export default function Customers() {
  return (
    <>
      <section className="about" id="about">
        <div className="about-img">
          <img src={photo} alt="" />
        </div>
        <div className="about-content">
          <h2 className="heading">About <span>Me</span></h2>
          <h3>Frontent Developer!</h3>
          <p> Hello, my name is Akhmadjon, my family is Isomukhamedov, I am a 10th grade student of school 300.
            I have 1 year experience in IT field. I currently know HTML, CSS, FIGMA, GITHUB and BOOTSTRAP LIBRARY. I
            stream at Coddy Camp Academy.
            I am very interested in the IT field, so I am organizing the IT field. I will continue to work in the IT
            field in the future. In the future, I will work on IT news that will benefit our country.</p>
          <a href="#" class="btn">Read More</a>
        </div>
      </section>

      <section className="services" id="services">
        <h2 className="heading">Our <span>Services</span></h2>
        <div className="services-container">
          <div className="services-box">
            <h3>Web Development</h3>
            <p>A web developer (English: Web developer) is a programmer who specializes in or deals with the
              development of Web applications using a client-server model. Applications typically use HTML, CSS
              and JavaScript for the client, React js, PHP, ASP.NET (C#), Python, Node.js, Go or Java for the
              server, and an http server for communication between the client and the server.</p>
            <a href="#" class="btn">Read More</a>
          </div>
          <div className="services-box">
            <h3>Graphic Design</h3>
            <p>A web developer (English: Web developer) is a programmer who specializes in or deals with the
              development of Web applications using a client-server model. Applications typically use HTML, CSS
              and JavaScript for the client, React js, PHP, ASP.NET (C#), Python, Node.js, Go or Java for the
              server, and an http server for communication between the client and the server.</p>
            <a href="#" class="btn">Read More</a>
          </div>
          <div className="services-box">
            <h3>Digital Marketing</h3>
            <p>A web developer (English: Web developer) is a programmer who specializes in or deals with the
              development of Web applications using a client-server model. Applications typically use HTML, CSS
              and JavaScript for the client, React js, PHP, ASP.NET (C#), Python, Node.js, Go or Java for the
              server, and an http server for communication between the client and the server.</p>
            <a href="#" class="btn">Read More</a>
          </div>
        </div>
      </section>
    </>
  )
}
