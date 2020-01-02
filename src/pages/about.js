import React from "react"
import Nav from "../components/nav"
import profileImg from '../images/jase-van-meeteren.png'

export default () => {
  return (
    <div className="about-page">
      <Nav route="about" />
      <div className="about-container">
        <header>
          <h1>About Jase</h1>
        </header>
        <p>
          My name is Jase Van Meeteren. I am a driven creative with a strong
          passion for film. I started when I was young, making small YouTube
          videos with my friends. This hobby turned into a career path when I
          entered Brigham Young University. Since entering school I have worked
          freelance as a director, cinematographer, and a writer for various
          international and local companies. I love my line of work and am
          committed to creating the best product possible.
        </p>
        <img src={profileImg} alt="Jase Van Meeteren"/>
      </div>
    </div>
  )
}
