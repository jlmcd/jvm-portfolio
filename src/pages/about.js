import React from "react"
import Nav from "../components/nav"

export default () => {
  return (
    <div className="about-page">
      <Nav route="about" />
      <div className="about-container">
        <h1>About Jase</h1>
        <p>
          My name is Jase Van Meeteren. I am a driven creative with a strong
          passion for film. I started when I was young, making small YouTube
          videos with my friends. This hobby turned into a career path when I
          entered Brigham Young University. Since entering school I have worked
          freelance as a director, cinematographer, and a writer for various
          international and local companies. I love my line of work and am
          committed to creating the best product possible.
        </p>
      </div>
    </div>
  )
}
