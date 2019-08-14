import React, { useState } from "react"
import { Link } from "gatsby"

export default props => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <nav className="navbar-container">
      <div className="main-navbar">
        <div className="links">
          {props.route !== "home" && (
            <Link to="/">
              <li>Home</li>
            </Link>
          )}
          {props.route === "video" ? (
            <Link to="/photo">
              <li>Photo</li>
            </Link>
          ) : props.route === "photo" ? (
            <Link to="/video">
              <li>Video</li>
            </Link>
          ) : (
            <>
              <li onMouseOver={() => setShowMenu(true)}>
                Work
                <div
                  onMouseLeave={() => setShowMenu(false)}
                  className={
                    showMenu && props.route === "home"
                      ? "dropdown show-dropdown"
                      : showMenu && props.route !== "home"
                      ? "dropdown show-dropdown-below"
                      : "dropdown"
                  }
                >
                  <Link to="/photo">
                    <li>Photo</li>
                  </Link>
                  <Link to="video">
                    <li>Video</li>
                  </Link>
                </div>
              </li>
            </>
          )}
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
          <Link to="/resume">
            <li>Resume</li>
          </Link>
        </div>
        <div className="social-icons">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.instagram.com/jasevanm/"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://vimeo.com/user38742204"
          >
            <i className="fab fa-vimeo"></i>
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/jase-van-meeteren-b15112105/"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </nav>
  )
}
