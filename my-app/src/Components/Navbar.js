import React from 'react'
import Logo from '../Images/react-icon-small.png'


function Navbar() {
  return (
    <div className="navbar">
      <img className="logo" src={Logo} alt="" />
      <h1 className="facts">ReactFacts</h1>
      <h1 className="navh1">React Course - Project 1</h1>
    </div>
  )
}

export default Navbar