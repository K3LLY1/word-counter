import React from 'react'
import './Component3.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGamepad} from '@fortawesome/free-solid-svg-icons'

function Component3() {
  return (
    <div>
        <div className='game'>
            <button><a href='https://play.typeracer.com/?rt=ybhatna26' target='_blank'>Play A Typing Game</a><p><FontAwesomeIcon icon={faGamepad} /></p></button>
        </div>
</div>
  )
}

export default Component3