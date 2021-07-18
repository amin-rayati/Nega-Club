import { React } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Login from './Login'

import logo from '../img/NegaMarket.png'

const NavbarComponent = () => {
  return (
    <Navbar className='nav py-4 container  fixed-top mb-5' expand='lg'>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />

      <Navbar.Collapse id='basic-navbar-nav'>
        <Login />
        <Nav className='mr-auto'>
          <Nav.Link href='#home' className='nav-link1'>
            صفحه نخست
          </Nav.Link>
          <Nav.Link href='#link' className='nav-link1'>
            وب سرویس ها
          </Nav.Link>
          <Nav.Link href='#home' className='nav-link1'>
            پلاگین{' '}
          </Nav.Link>
          <Nav.Link href='#link' className='nav-link1'>
            مطالب
          </Nav.Link>
          <Nav.Link href='#home' className='nav-link1'>
            درباره ما{' '}
          </Nav.Link>
          <Nav.Link href='#link' className='nav-link1'>
            ارتباط با ما
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <img src={logo} className='logo-w' alt='logo' />
    </Navbar>
  )
}

export default NavbarComponent
