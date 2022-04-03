import React from 'react'
import MainVideo from '../../assets/back.jpg'
import HeroText from './HeroText'
import LightSpeed from 'react-reveal/LightSpeed';
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