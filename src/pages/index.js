import React from "react"
import VideoBackground from "../components/videoBackground"
import "../styles/index.scss"

const IndexPage = () => (
  <div className="Index">
    <div className="hero">
      <div className="video-background">
        <VideoBackground />
      </div>
      <div className="hero-text">
        <h1>JVM</h1>
        <h2>Jase Van Meeteren</h2>
        <h3>
          <span>Writer.</span> 
          <span>Director.</span> 
          <span>Producer.</span>
        </h3>
      </div>
    </div>
    <nav>
      <div className="links">
        <li>Work</li>
        <li>About</li>
        <li>Contact</li>
        <li>Resume</li>
      </div>
      <div className="social-icons">
        <li>instagram</li>
        <li>vimeo</li>
        <li>linkedin</li>
      </div>
    </nav>
  </div>
)

export default IndexPage
