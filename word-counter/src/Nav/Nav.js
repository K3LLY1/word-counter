import React from 'react'
import './Nav.css'
import { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars ,faTimes} from '@fortawesome/free-solid-svg-icons'


function Nav() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle('responsive_nav');

    }
  return (
    <div className='wrappers'>
        <h3>Word Counter</h3>
        <nav ref={navRef} className='navy'> 
            <ul className='menu-list'>
                
                <li><a href='https://copyblogger.com/brilliant-writing-tips/' target='_blank'>Blog</a></li>
                <li>FAQs</li>
                <li>Contact</li>
              
                <button className='nav-btn nav-close-btn'  onClick={showNavbar}>
                   <FontAwesomeIcon icon={faTimes} />
                </button>
            </ul>
        </nav>

        <button className='nav-btn nav-menu ' onClick={showNavbar}>
            <FontAwesomeIcon icon={faBars} />
        </button>
    </div>
  )
}

export default Nav