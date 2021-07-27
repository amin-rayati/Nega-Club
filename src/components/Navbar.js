/* eslint-disable no-undef */
import { React, useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Login from './Login'
import { Link, link } from 'react-router-dom'
import links from '../utils/Links'

import logo from '../img/NegaMarket.png'

const NavbarComponent = () => {
  const [navbar, setNavbar] = useState(false)

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  useEffect(() => {
    changeBackground()
    window.addEventListener('scroll', changeBackground)
  })

  return (
    <Navbar
      className={
        navbar
          ? 'nav-bg py-4 container  fixed-top mb-5'
          : 'nav py-4 container  fixed-top mb-5'
      }
      expand='lg'
    >
      <Navbar.Toggle aria-controls='basic-navbar-nav' />

      <Navbar.Collapse id='basic-navbar-nav'>
        <Login />
        <Nav className='mr-auto' dir='rtl'>
          {links.map((link) => {
            return (
              <Link key={link.id} className='nav-link1' to={link.url}>
                {link.text}
              </Link>
            )
          })}
        </Nav>
      </Navbar.Collapse>
      <img src={logo} className='logo-w' alt='logo' />
    </Navbar>
  )
}

export default NavbarComponent
