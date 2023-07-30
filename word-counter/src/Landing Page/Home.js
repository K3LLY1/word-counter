import React from 'react'
import './Home.css'
import Nav from '../Nav/Nav'
import Component1 from './Component1'
import Component2 from './Component2'
import Component3 from './Component3'
import Footer from '../Footer/Footer'




function Home() {
  return (
    <div>
        <Nav/>
        <Component1/>
        <Component2/>
        <Component3/>
        <Footer/>
    </div>
  )
}

export default Home
