import React, { useEffect } from 'react'
import '../css/Home.css'
import axios from 'axios'

const Home = () => {
  
  return (
    <div className='hero'>
        <div className="hero-content">
            <h1 className='hero-text'>Book Shop</h1>
            <p className='hero-description'>
            Browse the collection of our best top interresting Books.
            you will definitely find what you are looking for.
            </p>
        </div>
        <div className="hero-image"></div>
    </div>
  )
}

export default Home