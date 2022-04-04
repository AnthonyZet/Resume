import React from 'react'
import MainVideo from '../../assets/back.jpg'
import HeroText from './HeroText'

import './Hero.scss'

const Hero = () => {
  return (
    <div className='hero'>
    <div id="background">
      <img src={MainVideo} alt="" />
    </div>
    <div className="hero-container">
      <HeroText />
     
    </div>
    </div>
  )
}

export default Hero