import React from 'react'
import './Nav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function Nav() {
  return (
    <div>
        <nav>
            <h1>Word Counter</h1>

            <div className='blog'>
                <ul>   
                    <li><a href='https://copyblogger.com/brilliant-writing-tips/' target='_blank'>Blog</a></li>
                    <li>FAQs</li>
                    <li>Contact</li>
                </ul>
            </div>

            <button className='bar'><FontAwesomeIcon icon={faBars} /></button>
       </nav>
      
      {/* second nav bar for the media query*/}
      <div className='blog2'>
        <ul>   
            <li>Home</li>
            <li>FAQs</li>
            <li>Contact</li>
        </ul>
       </div>
    </div>
  )
}

export default Nav