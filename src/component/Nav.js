import React from 'react'
import Intro from './Intro'

const Nav = () => {
  
    window.onscroll = function () {
      if (window.scrollY >= 200) {
        document.querySelector("nav").classList.add("nav-scroll")
      }
      
  }

  function hideMenu() {
    document.querySelector(".nav-link").classList.toggle("hideMenu")
  }
  return (
      <header>
      
    <nav>
        <span>DOESIN</span>
        <div className='nav-link'>
            <a href='#' className='Home' onClick={hideMenu}>Home</a>
            <a href='#servies' onClick={hideMenu}>Services</a>
            <a href='#' onClick={hideMenu}>Features</a>
            <a href='#Pricing' onClick={hideMenu}>Pricing</a>
            <a href='#' onClick={hideMenu}>Blog</a>
            <a href='#contact' onClick={hideMenu}>Contact</a>
        </div>
        <button href='#' className='try'>Try it Free</button>
        <i class="fa-solid fa-bars menu" onClick={hideMenu}></i>
    </nav>
    <Intro/>
    </header>
  )
}

export default Nav