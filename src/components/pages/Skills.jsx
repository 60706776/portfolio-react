import React from 'react'
import "../pages/StylesPages/Skills.css"
import { BsBootstrap, BsFiletypeCss, BsFiletypeHtml, BsGithub, BsScissors } from 'react-icons/bs'
import { GithubAuthProvider } from 'firebase/auth/web-extension'
import { FiFigma } from 'react-icons/fi'
import { DiJavascript } from 'react-icons/di'

export default function Diagrams() {
  return (
    <>
      <div className="container">
            <div className="skills">
                <h1>Professional Skills</h1>
                <p>Here you can see my favourite tools:</p>
            </div>
            <div className="line"></div>
            <div className="skill">
                <h1>HTML</h1>
                <ul>
                  <li><BsFiletypeHtml/></li>
                </ul>
            </div>
            <div className="line_skills"></div>
            <div className="skill">
                <h1>CSS</h1>
                <ul>
                  <li><BsFiletypeCss/></li>
                </ul>
            </div>
            <div className="line_skills"></div>
            <div className="skill">
                <h1>JAVA SCRIPT</h1>
                <ul>
                  <li><DiJavascript/></li>
                </ul>
            </div>
            <div className="line_skills"></div>
            <div className="skill">
                <h1>FIGMA</h1>
                <ul>
                  <li><FiFigma/></li>
                </ul>
            </div>
            <div className="line_skills"></div>
            <div className="skill">
                <h1>GITHUB</h1>
                <ul>
                  <li><BsGithub/></li>
                </ul>
            </div>
            <div className="line_skills"></div>
            <div className="skill">
                <h1>BOOTSTRAP</h1>
                <ul>
                  <li><BsBootstrap/></li>
                </ul>
            </div>
            <div className="line_skills"></div>
        </div>
    </>
  )
}
