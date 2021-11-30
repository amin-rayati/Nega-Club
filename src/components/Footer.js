import React from 'react'
import logo from '../img/NegaMarket.png'

import { BsFillSquareFill } from 'react-icons/bs'
import { FiFacebook, FiTwitter, FiLinkedin } from 'react-icons/fi'
import { GoLocation } from 'react-icons/go'
import { FaVoicemail, FaInstagram } from 'react-icons/fa'
import { AiOutlinePhone } from 'react-icons/ai'
import { Link, link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'

const Footer = () => {
  const instagram = () => {
    const url = 'https://www.instagram.com/nega.club/'
    window.open(url, '_blank')
  }
  return (
    <div style={{ marginTop: '150px' }}>
      <div className='row mx-1 '>
        <div className='col-lg-3 order-lg-1 col-md-12  order-md-4 col-sm-12 order-sm-2 col-12 order-4 footer-box'>
          <h6 className='mt-4'>ارتباط با ما</h6>
          <hr className='mt-2' />
          <div className='footer-add d-flex flex-row mt-4'>
            <p className='m-0' style={{ color: '#666666', fontSize: '13px' }}>
              آدرس : کرج-بلوارشهید بهشتی-نبش دهقان ویلای دوم-ساختمان اتیه-طبقه
              ششم
            </p>
            <GoLocation className='ml-1' style={{ color: '#be9b30' }} />
          </div>

          <div className='footer-add d-flex flex-row mt-4'>
            <p className='m-0' style={{ color: '#666666', fontSize: '13px' }}>
              info@negaclub.ir : ایمیل
            </p>
            <FaVoicemail className='ml-1' style={{ color: '#be9b30' }} />
          </div>

          <div className='footer-add d-flex flex-row mt-4'>
            <p className='m-0' style={{ color: '#666666', fontSize: '13px' }}>
              026-34239231 - 026-تلفن :34239221
            </p>
            <AiOutlinePhone className='ml-1' style={{ color: '#be9b30' }} />
          </div>
          <div className='footer-add d-flex flex-row mt-4'>
            <p className='m-0' style={{ color: '#666666', fontSize: '13px' }}>
              021-9107132 - 021-تلفن های سراسری:91071231
            </p>
            <AiOutlinePhone className='ml-1' style={{ color: '#be9b30' }} />
          </div>
          <div
            className=' d-flex flex-row mt-2  social-icons'
            style={{ justifyContent: 'flex-end' }}
          >
            {/* <div
              className='bg-circle1 bg-circle4'
              style={{ border: '1px solid #0077B5' }}
            >
              <FiLinkedin
                className='inlink'
                style={{ color: '#0077B5', marginTop: '7px' }}
                size={15}
              />
            </div> */}
            <p style={{ margin: 'inherit' }}>اینستاگرام</p>

            <div
              className='bg-circle1 bg-circle5 ml-2 '
              style={{ border: '1px solid #bf9b30' }}
            >
              <FaInstagram
                className='instagram'
                style={{ color: '#bf9b30', marginTop: '7px' }}
                size={15}
                onClick={instagram}
              />
            </div>
            {/* <div
              className='bg-circle1 bg-circle3 mx-2'
              style={{ border: '1px solid #0077B5' }}
            >
              <FiTwitter
                className='tweeter'
                style={{ color: '#0077B5', marginTop: '7px' }}
                size={15}
              />
            </div>
            <div
              className='bg-circle1 bg-circle2'
              style={{ border: '1px solid #4267b2' }}
            >
              <FiFacebook
                className='facebook'
                style={{ color: '#4267b2', marginTop: '7px' }}
                size={15}
              />
            </div> */}
          </div>
        </div>

        <div className='col-lg-3 order-lg-2 col-md-12 order-md-3 col-sm-12 order-sm-2 col-12 order-3 footer-box'>
          <h6 className='mt-4'>لینک های مفید</h6>
          <hr className='mt-2' />
          <div
            className='footer-add d-flex flex-row mt-4'
            style={{ cursor: 'pointer' }}
          >
            <LinkContainer to='/negacart'>
              <p className='m-0' style={{ color: '#666666', fontSize: '10px' }}>
                نگاکارت
              </p>
            </LinkContainer>

            <BsFillSquareFill
              className='ml-2 mt-1'
              size={8}
              style={{ color: '#be9b30' }}
            />
          </div>
          <div
            className='footer-add d-flex flex-row mt-2'
            style={{ cursor: 'pointer' }}
          >
            <LinkContainer to='/providers'>
              <p className='m-0' style={{ color: '#666666', fontSize: '10px' }}>
                پذیرندگان
              </p>
            </LinkContainer>

            <BsFillSquareFill
              className='ml-2 mt-1'
              size={8}
              style={{ color: '#be9b30' }}
            />
          </div>
          <div
            className='footer-add d-flex flex-row mt-2'
            style={{ cursor: 'pointer' }}
          >
            <LinkContainer to='/aboutus'>
              <p className='m-0' style={{ color: '#666666', fontSize: '10px' }}>
                درباره ما
              </p>
            </LinkContainer>
            <BsFillSquareFill
              className='ml-2 mt-1'
              size={8}
              style={{ color: '#be9b30' }}
            />
          </div>
        </div>

        <div className='col-lg-3 order-lg-3 col-md-12 order-md-2 col-sm-12 order-sm-2 col-12 order-2 footer-box'>
          <h6 className='mt-4'>دسترسی سریع</h6>
          <hr className='mt-2' />
          <div
            className='footer-add d-flex flex-row mt-4'
            style={{ cursor: 'pointer' }}
          >
            <LinkContainer to='/negacart'>
              <p className='m-0' style={{ color: '#666666', fontSize: '10px' }}>
                نگاکارت
              </p>
            </LinkContainer>

            <BsFillSquareFill
              className='ml-2 mt-1'
              size={8}
              style={{ color: '#be9b30' }}
            />
          </div>
          <div
            className='footer-add d-flex flex-row mt-2'
            style={{ cursor: 'pointer' }}
          >
            <LinkContainer to='/providers'>
              <p className='m-0' style={{ color: '#666666', fontSize: '10px' }}>
                پذیرندگان
              </p>
            </LinkContainer>

            <BsFillSquareFill
              className='ml-2 mt-1'
              size={8}
              style={{ color: '#be9b30' }}
            />
          </div>
          <div
            className='footer-add d-flex flex-row mt-2'
            style={{ cursor: 'pointer' }}
          >
            <LinkContainer to='/aboutus'>
              <p className='m-0' style={{ color: '#666666', fontSize: '10px' }}>
                درباره ما
              </p>
            </LinkContainer>
            <BsFillSquareFill
              className='ml-2 mt-1'
              size={8}
              style={{ color: '#be9b30' }}
            />
          </div>
        </div>

        <div className='col-lg-3 order-lg-4 col-md-12 order-md-1 col-sm-12 order-sm-1 col-12 order-1 footer-box'>
          <img src={logo} className='logo-w1 mt-4' alt='logo' />
          <h6 className='mt-4'>باشگاه مشتریان نگاکلاب</h6>
          <a
            className='enamad-style'
            referrerpolicy='origin'
            target='_blank'
            href='https://trustseal.enamad.ir/?id=181193&amp;Code=3Qt4Ln79mJ8B0yjvSdTZ'
          >
            <img
              referrerpolicy='origin'
              src={
                'https://Trustseal.eNamad.ir/logo.aspx?id=181193&amp;Code=3Qt4Ln79mJ8B0yjvSdTZ'
              }
              alt=''
              style={{ cursor: 'pointer' }}
              id='3Qt4Ln79mJ8B0yjvSdTZ'
            />
          </a>
        </div>
      </div>

      <hr className='mt-4' />

      <p className='text-center' style={{ fontSize: '10px' }}>
        کلیه حقوق این پرتال نزد گروه شرکت های
        <a
          href='https://negarine.com/'
          className='mx-2'
          style={{ color: '#bf9b30', fontSize: '20px' }}
        >
          نگارینه
        </a>
        محفوظ میباشد
      </p>
    </div>
  )
}

export default Footer
