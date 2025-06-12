import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home-container'>
      <h1>Welcome to the Multi-Page React App</h1>
      <p>This app demonstrates basic routing using React Router.</p>
      <Link to="/about">Go to About</Link> | <Link to="/users">Go to Users</Link>
    </div>
  )
}

export default Home
