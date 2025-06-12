import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className='about-container'>
       <h1>About This App</h1>
      <p>This is a simple React application to demonstrate routing with React Router DOM.</p>
      <Link to="/">Back to Home</Link>
    </div>
  )
}

export default About
