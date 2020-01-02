import React, { useState } from "react"
import Nav from "../components/nav"

export default () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [comment, setComment] = useState("")
  const submitForm = e => {
    e.preventDefault()
    console.log(name, email, comment)
  }

  return (
    <div className="contact-page">
      <Nav route="contact" />
      <div className="contact-container">
        <header>
          <h1>Contact Me</h1>
          <h2>I'm an open book!</h2>
        </header>
        <form>
          <div className="contact-info">
            <input
              onChange={e => setName(e.target.value)}
              placeholder="Name"
              type="text"
            />  
            <input
              onChange={e => setEmail(e.target.value)}
              placeholder="Email"
              type="text"
            />
          </div>
          <textarea
            onChange={e => setComment(e.target.value)}
            placeholder="What do you want to ask?"
            name=""
            id=""
            cols="30"
            rows="15"
          ></textarea>
          <input type="submit" onClick={submitForm} />
        </form>
      </div>
    </div>
  )
}
