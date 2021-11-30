/* eslint-disable no-undef */
import { React, useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Login from './Login'
import { Link, link } from 'react-router-dom'
import links from '../utils/Links'
import { LinkContainer } from 'react-router-bootstrap'
import { AiFillPhone } from 'react-icons/ai'
import logo from '../img/NegaMarket.png'
import { Button, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
import { useProductsContext } from '../context/ProductsProvider'

import { useLocation } from 'react-router-dom'
import { act } from 'react-dom/test-utils'

const NavbarComponent = () => {
  const { pathname } = useLocation()
  const activePath = pathname.split('/')[1]
  const [navbar, setNavbar] = useState(false)
  const { type, setType } = useProductsContext()

  const [active, setActive] = useState('')

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  useEffect(() => {
    changeBackground()
    if (!activePath) {
      setActive('home')
    } else {
      setActive(activePath)
    }
    window.addEventListener('scroll', changeBackground)
  })

  return (
    <>
      <Navbar
        className={
          navbar
            ? 'nav-bg py-4 container  fixed-top d-lg-block d-md-none d-sm-none d-none mb-5'
            : 'nav py-4  container  fixed-top d-lg-block d-md-none d-sm-none d-none mb-5'
        }
        expand='lg'
        style={{ background: '#ffffff', zIndex: '1031', boxShadow: 'none' }}
      >
        <Navbar.Toggle aria-controls='basic-navbar-nav ' />

        <Navbar.Collapse id='basic-navbar-nav '>
          <div>
            <Login />
          </div>
          <div>
            <AiFillPhone
              className='mr-4'
              size={25}
              style={{ color: '#bf9b30', marginBottom: '5px' }}
            />

            <a
              href='tel:026-34239231'
              style={{ color: '#bf9b30', fontSize: '25px' }}
            >
              026-34239231
            </a>
          </div>

          <img src={logo} className='logo-w my-2' alt='logo' />
        </Navbar.Collapse>
      </Navbar>

      <Navbar
        className={
          navbar
            ? 'nav-bg py-4 container  fixed-top  d-lg-block d-md-none d-sm-none  d-none mb-5'
            : 'nav py-4  container  fixed-top  d-lg-block d-md-none d-sm-none d-none mb-5'
        }
        expand='lg'
        style={{ marginTop: '85px', backgroundColor: 'white' }}
      >
        <Navbar.Toggle aria-controls='basic-navbar-nav' />

        <Navbar.Collapse id='basic-navbar-nav '>
          <Nav className='m-auto ' dir='rtl'>
            <LinkContainer
              className='nav-link1 mt-2'
              to='/'
              style={{ cursor: 'pointer' }}
            >
              <h6
                onClick={() => setActive('home')}
                className={active === 'home' ? 'nav-color-active' : null}
                style={{ color: '#757a80', fontSize: '25px' }}
              >
                صفحه اصلی
              </h6>
            </LinkContainer>
            <LinkContainer
              className='nav-link1 mt-2'
              to='/negacart'
              style={{ cursor: 'pointer' }}
            >
              <h6
                onClick={() => setActive('negacart')}
                className={active === 'negacart' ? 'nav-color-active' : null}
                style={{ color: '#757a80', fontSize: '25px' }}
              >
                نگاکارت
              </h6>
            </LinkContainer>
            <LinkContainer
              className='nav-link1 mt-2'
              to='/negaclub'
              style={{ cursor: 'pointer' }}
            >
              <h6
                onClick={() => setActive('negaclub')}
                className={
                  active === 'negaclub' || active === 'castes'
                    ? 'nav-color-active'
                    : null
                }
                style={{ color: '#757a80', fontSize: '25px' }}
              >
                پذیرندگان نگاکلاب
              </h6>
            </LinkContainer>
            <LinkContainer
              className='nav-link1 mt-2'
              to='/providers'
              style={{ cursor: 'pointer' }}
            >
              <h6
                onClick={() => setActive('providers')}
                className={active === 'providers' ? 'nav-color-active' : null}
                style={{ color: '#757a80', fontSize: '25px' }}
              >
                پذیرندگی
              </h6>
            </LinkContainer>
            <LinkContainer
              className='nav-link1 mt-2'
              to='/workwithus'
              style={{ cursor: 'pointer' }}
            >
              <h6
                onClick={() => setActive('workwithus')}
                className={active === 'workwithus' ? 'nav-color-active' : null}
                style={{ color: '#757a80', fontSize: '25px' }}
              >
                همکاری با ما
              </h6>
            </LinkContainer>
            <NavDropdown
              onClick={() => setActive('magazine')}
              className={active === 'magazine' ? 'nav-color-active' : null}
              title='مجله نگاکلاب'
              id='navbarScrollingDropdown'
            >
              {type &&
                type.map((e) => {
                  return (
                    <>
                      <LinkContainer
                        key={e.id}
                        className='nav-link1 mt-2 text-right '
                        to={`/articles/${e.id}`}
                        style={{ cursor: 'pointer' }}
                      >
                        <h6 style={{ color: '#757a80', fontSize: '25px' }}>
                          {e.type}
                        </h6>
                      </LinkContainer>
                      <NavDropdown.Divider />
                    </>
                  )
                })}
            </NavDropdown>
            <LinkContainer
              className='nav-link1 mt-2'
              to='/qouestion'
              style={{ cursor: 'pointer' }}
            >
              <h6
                onClick={() => setActive('qouestion')}
                className={active === 'qouestion' ? 'nav-color-active' : null}
                style={{ color: '#757a80', fontSize: '25px' }}
              >
                سوالات متداول
              </h6>
            </LinkContainer>
            <LinkContainer
              className='nav-link1 mt-2'
              to='/specialoffer'
              style={{ cursor: 'pointer' }}
            >
              <h6
                onClick={() => setActive('specialoffer')}
                className={
                  active === 'specialoffer' ? 'nav-color-active' : null
                }
                style={{ color: '#757a80', fontSize: '25px' }}
              >
                پیشنهاد ویژه
              </h6>
            </LinkContainer>
            <LinkContainer
              className='nav-link1 mt-2'
              to='/aboutus'
              style={{ cursor: 'pointer' }}
            >
              <h6
                onClick={() => setActive('aboutus')}
                className={active === 'aboutus' ? 'nav-color-active' : null}
                style={{ color: '#757a80', fontSize: '25px' }}
              >
                درباره ما
              </h6>
            </LinkContainer>
            <LinkContainer
              className='nav-link1 mt-2'
              to='/contactus'
              style={{ cursor: 'pointer' }}
            >
              <h6
                onClick={() => setActive('contactus')}
                className={active === 'contactus' ? 'nav-color-active' : null}
                style={{ color: '#757a80', fontSize: '25px' }}
              >
                تماس با ما
              </h6>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Navbar
        className={
          navbar
            ? 'nav-bg py-4 container  fixed-top  d-lg-none d-md-block d-sm-block d-block'
            : 'nav py-4  container  fixed-top  d-lg-none d-md-block d-sm-block d-block'
        }
        expand='lg'
      >
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse style={{ textAlign: 'end' }} id='basic-navbar-nav '>
          <Login />
          <Nav className='m-auto ' dir='rtl'>
            <LinkContainer
              className='nav-link1 mt-2 nav-item-mt'
              to='/'
              style={{ cursor: 'pointer' }}
            >
              <h6
                className='nav-align '
                style={{
                  color: '#757a80',
                  fontSize: '25px',
                }}
              >
                صفحه اصلی
              </h6>
            </LinkContainer>
            <LinkContainer
              className='nav-link1 mt-2 nav-item-mt'
              to='/negacart'
              style={{ cursor: 'pointer' }}
            >
              <h6
                className='nav-align '
                style={{ color: '#757a80', fontSize: '25px' }}
              >
                نگاکارت
              </h6>
            </LinkContainer>
            <LinkContainer
              className='nav-link1 mt-2 nav-item-mt'
              to='/negaclub'
              style={{ cursor: 'pointer' }}
            >
              <h6
                className='nav-align '
                style={{ color: '#757a80', fontSize: '25px' }}
              >
                پذیرندگان نگاکلاب
              </h6>
            </LinkContainer>
            <LinkContainer
              className='nav-link1 mt-2 nav-item-mt'
              to='/providers'
              style={{ cursor: 'pointer' }}
            >
              <h6
                className='nav-align '
                style={{ color: '#757a80', fontSize: '25px' }}
              >
                پذیرندگی
              </h6>
            </LinkContainer>
            <LinkContainer
              className='nav-link1 mt-2 nav-item-mt'
              to='/workwithus'
              style={{ cursor: 'pointer' }}
            >
              <h6
                className='nav-align '
                style={{ color: '#757a80', fontSize: '25px' }}
              >
                همکاری با ما
              </h6>
            </LinkContainer>

            <NavDropdown
              className='nav-align '
              title='مجله نگاکلاب'
              id='navbarScrollingDropdown'
            >
              {type &&
                type.map((e) => {
                  return (
                    <>
                      <LinkContainer
                        key={e.id}
                        className='nav-link1 mt-2 text-right '
                        to={`/articles/${e.id}`}
                        style={{ cursor: 'pointer' }}
                      >
                        <h6 style={{ color: '#757a80', fontSize: '25px' }}>
                          {e.type}
                        </h6>
                      </LinkContainer>
                      <NavDropdown.Divider />
                    </>
                  )
                })}
            </NavDropdown>

            <LinkContainer
              className='nav-link1 '
              to='/qouestion'
              style={{ cursor: 'pointer' }}
            >
              <h6
                className='nav-align '
                style={{ color: '#757a80', fontSize: '25px' }}
              >
                سوالات متداول
              </h6>
            </LinkContainer>
            <LinkContainer
              className='nav-link1 mt-2 nav-item-mt'
              to='/specialoffer'
              style={{ cursor: 'pointer' }}
            >
              <h6
                className='nav-align '
                style={{ color: '#757a80', fontSize: '25px' }}
              >
                پیشنهاد ویژه
              </h6>
            </LinkContainer>
            <LinkContainer
              className='nav-link1 mt-2 nav-item-mt'
              to='/aboutus'
              style={{ cursor: 'pointer' }}
            >
              <h6
                className='nav-align '
                style={{ color: '#757a80', fontSize: '25px' }}
              >
                درباره ما
              </h6>
            </LinkContainer>
            <LinkContainer
              className='nav-link1 mt-2 nav-item-mt'
              to='/contactus'
              style={{ cursor: 'pointer' }}
            >
              <h6
                className='nav-align '
                style={{ color: '#757a80', fontSize: '25px' }}
              >
                تماس با ما
              </h6>
            </LinkContainer>
          </Nav>
          {/* <img src={logo} className='logo-w mt-2' alt='logo' /> */}
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default NavbarComponent
