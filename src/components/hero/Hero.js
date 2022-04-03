import React from 'react'
import MainVideo from '../../assets/2.mp4'
import HeroText from './HeroText'
import LightSpeed from 'react-reveal/LightSpeed';
import './Hero.scss'

const Hero = () => {
  return (
    <div className='hero'>
    <video autoPlay loop muted id="video">
      <source src={MainVideo} type="video/mp4"/>
    </video>
    <div className="hero-container">
      <HeroText />
     
    </div>
    </div>
  )
}

export default Hero