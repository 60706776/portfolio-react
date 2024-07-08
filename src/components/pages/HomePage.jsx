import React from 'react'
import "../pages/StylesPages/HomePage.css"
import { BsBootstrap, BsFacebook, BsFiletypeCss, BsFiletypeHtml, BsGithub, BsInstagram, BsTelegram, BsTwitter } from 'react-icons/bs'
import { TypeAnimation } from 'react-type-animation'
import photo from "../../image/photo_2024-05-30_14-29-27.jpg"
import { FiFigma } from 'react-icons/fi'
import { DiJavascript } from 'react-icons/di'
import { FaReact } from 'react-icons/fa'
6
export default function HomePage() {
  return (
    <>
      <section className='home'>
        <div className='home-content'>
          <h3>Hello, It's me</h3>
          <h1>I.Axmadjon</h1>
          <h3>And I'm a
            <TypeAnimation
              sequence={[
                'Frontend Developer',
                1500,
                'Student',
                1500,
                'Graphic Design',
                1500,
                () => {
                  console.log('Sequence completed');
                },
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: '35px', display: 'inline-block' }}
            />
          </h3>
          <p>I'm a web Designer with experience for over 1 years exeprtise is to create and website design
            Frontend Design.</p>
          <div className='social-media'>
            <ul>
              <li><BsTelegram size={20} /></li>
              <li><BsInstagram size={20} /></li>
              <li><BsTwitter size={20} /></li>
              <li><BsFacebook size={20} /></li>
            </ul>
          </div>
          <button className='btn'>Download CV</button>

        </div>
        <div className='home-img'>
          <img src={photo} alt="" />
        </div>
      </section>

      <section className="about" id="about">
        <div className="about-img">
          <img src={photo} alt="" />
        </div>
        <div className="about-content">
          <h2 className="heading">About <span>Me</span></h2>
          <h3>Frontent Developer!</h3>
          <p> Hello, my name is Akhmadjon, my family is Isomukhamedov, I am a 11th grade student of school 300.
            I have 1 year experience in IT field. I currently know HTML, CSS, Javascript, React, FIGMA, GITHUB and BOOTSTRAP LIBRARY. I
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

      <div className="container">
        <div className="skills">
          <h1>Professional Skills</h1>
          <p>Here you can see my favourite tools:</p>
        </div>
        <div className="line"></div>
        <div className="skill">
          <h1>HTML</h1>
          <ul>
            <li><BsFiletypeHtml /></li>
          </ul>
        </div>
        <div className="line_skills"></div>
        <div className="skill">
          <h1>CSS</h1>
          <ul>
            <li><BsFiletypeCss /></li>
          </ul>
        </div>
        <div className="line_skills"></div>
        <div className="skill">
          <h1>JAVA SCRIPT</h1>
          <ul>
            <li><DiJavascript /></li>
          </ul>
        </div>
        <div className="line_skills"></div>
        <div className="skill">
          <h1>FIGMA</h1>
          <ul>
            <li><FiFigma /></li>
          </ul>
        </div>
        <div className="line_skills"></div>
        <div className="skill">
          <h1>GITHUB</h1>
          <ul>
            <li><BsGithub /></li>
          </ul>
        </div>
        <div className="line_skills"></div>
        <div className="skill">
          <h1>BOOTSTRAP</h1>
          <ul>
            <li><BsBootstrap /></li>
          </ul>
        </div>
        <div className="line_skills"></div>
        <div className="skill">
          <h1>REACT JS</h1>
          <ul>
            <li><FaReact /></li>
          </ul>
        </div>
        <div className="line_skills"></div>
      </div>
    </>
  )
}
