import React from "react"
import VideoBackground from "../components/videoBackground"
import Nav from "../components/nav"
import "../styles/style.scss"

const IndexPage = () => (
  <div className="index-page">
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
    <Nav route="home" />
  </div>
)

export default IndexPage
