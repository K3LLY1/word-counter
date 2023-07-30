import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div>

        <footer>

            <h1><span>W</span>ord <span>C</span>ounter</h1>

            <div className='details'>

                <div className='home'>
                  <ul>
                    <li>Home</li>
                    <li>Blog</li>
                    <li>Contact Us</li>
                    <li>Help Word Counter</li>
                  </ul>
                </div>

                <div className='report'>
                  <ul>
                    <li>Report an Issue</li>
                    <li>privacy Policy</li>
                  </ul>  
                </div>

                <div className='follow'>
                  <ul>
                    <li id='fol'>Follow</li>
                    <li>FaceBook</li>
                    <li>Twitter</li>
                  </ul>
                </div>

            </div>

             <p className='codex'>A Codex product.We are commited to build awesome digital products for all .<a>Contact Us</a></p>

        </footer>

    </div>
  )
}

export default Footer