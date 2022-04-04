import React, {useState} from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import './Navbar.scss'

const Navbar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

  return (
    <div className='navbar'>
        <div className="container">
            <div className="theme-toggle">
              <h1>Hey</h1>
              <i class="fas fa-toggle-on"></i>
            </div>
            <ul className={click ? 'nav active' : 'nav'}>
                <li className="nav-item"><a href="/">Team</a></li>
                <li className="nav-item"><a href="/">Work</a></li>
                <li className="nav-item"><a href="/">Hackz</a></li>
                <li className="nav-item"><a href="/">War</a></li>
             </ul>
                <div onClick={handleClick} className="hamburger">
                    {click ? (<AiOutlineClose className='icon' />) : (<AiOutlineMenu className='icon' />)}
                </div>
        </div>

    </div>
  )
}

export default Navbar