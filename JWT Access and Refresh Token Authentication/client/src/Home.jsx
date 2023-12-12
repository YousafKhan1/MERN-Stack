import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <h2>Home <Link to="/register">Register</Link></h2>
  )
}

export default Home