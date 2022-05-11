import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import './Navbar.scss'

const Navbar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

  return (
    <nav className='navbar'>
          
        <div className="container">
              <h1>AZ</h1>

            <ul className={click ? 'nav active' : 'nav'}>
              
              <Link to='/' className='link'>Home</Link>
              <Link to='/experience' className='link'>Experience</Link>
              <Link to='/education' className='link'>Education</Link>
              <Link to='/experience' className='link'>Projects</Link>
             
             </ul>
                <div onClick={handleClick} className="hamburger">
                    {click ? (<AiOutlineClose className='icon' />) : (<AiOutlineMenu className='icon' />)}
                </div>
        </div>

    </nav>
  )
}

export default Navbar