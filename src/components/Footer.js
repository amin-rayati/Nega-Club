import React from 'react'
import logo from '../img/NegaMarket.png'

import { BsFillSquareFill } from 'react-icons/bs'
import { FiFacebook, FiTwitter, FiLinkedin } from 'react-icons/fi'
import { GoLocation } from 'react-icons/go'
import { FaVoicemail, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='my-5'>
      <div className='row mx-1 '>
        <div className='col-lg-3 order-lg-1 col-md-12  order-md-4 col-sm-12 order-sm-2 col-12 order-4 footer-box'>
          <h6 className='mt-4'>ارتباط با ما</h6>
          <hr className='mt-2' />
          <div className='footer-add d-flex flex-row mt-4'>
            <p className='m-0' style={{ color: '#666666', fontSize: '10px' }}>
              تهران، خیابان مطهری، پلاک 28
            </p>
            <GoLocation className='ml-1' style={{ color: '#be9b30' }} />
          </div>

          <div className='footer-add d-flex flex-row mt-4'>
            <p className='m-0' style={{ color: '#666666', fontSize: '10px' }}>
              ایمیل : info@api.ir
            </p>
            <FaVoicemail className='ml-1' style={{ color: '#be9b30' }} />
          </div>

          <div
            className=' d-flex flex-row mt-2  social-icons'
            style={{ justifyContent: 'flex-end' }}
          >
            <div
              className='bg-circle1 bg-circle4'
              style={{ border: '1px solid #0077B5' }}
            >
              <FiLinkedin
                className='inlink'
                style={{ color: '#0077B5', marginTop: '7px' }}
                size={15}
              />
            </div>
            <div
              className='bg-circle1 bg-circle5 ml-2'
              style={{ border: '1px solid #231F20' }}
            >
              <FaInstagram
                className='instagram'
                style={{ color: '#231F20', marginTop: '7px' }}
                size={15}
              />
            </div>
            <div
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
            </div>
          </div>
        </div>

        <div className='col-lg-3 order-lg-2 col-md-12 order-md-3 col-sm-12 order-sm-2 col-12 order-3 footer-box'>
          <h6 className='mt-4'>لینک های مفید</h6>
          <hr className='mt-2' />
          <div className='footer-add d-flex flex-row mt-4'>
            <p className='m-0' style={{ color: '#666666', fontSize: '10px' }}>
              درباره ما
            </p>
            <BsFillSquareFill
              className='ml-2 mt-1'
              size={8}
              style={{ color: '#be9b30' }}
            />
          </div>
          <div className='footer-add d-flex flex-row mt-2'>
            <p className='m-0' style={{ color: '#666666', fontSize: '10px' }}>
              وب سرویس ها
            </p>
            <BsFillSquareFill
              className='ml-2 mt-1'
              size={8}
              style={{ color: '#be9b30' }}
            />
          </div>
          <div className='footer-add d-flex flex-row mt-2'>
            <p className='m-0' style={{ color: '#666666', fontSize: '10px' }}>
              آخرین مطالب
            </p>
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
          <div className='footer-add d-flex flex-row mt-4'>
            <p className='m-0' style={{ color: '#666666', fontSize: '10px' }}>
              درباره ما
            </p>
            <BsFillSquareFill
              className='ml-2 mt-1'
              size={8}
              style={{ color: '#be9b30' }}
            />
          </div>
          <div className='footer-add d-flex flex-row mt-2'>
            <p className='m-0' style={{ color: '#666666', fontSize: '10px' }}>
              وب سرویس ها
            </p>
            <BsFillSquareFill
              className='ml-2 mt-1'
              size={8}
              style={{ color: '#be9b30' }}
            />
          </div>
          <div className='footer-add d-flex flex-row mt-2'>
            <p className='m-0' style={{ color: '#666666', fontSize: '10px' }}>
              آخرین مطالب
            </p>
            <BsFillSquareFill
              className='ml-2 mt-1'
              size={8}
              style={{ color: '#be9b30' }}
            />
          </div>
        </div>

        <div className='col-lg-3 order-lg-4 col-md-12 order-md-1 col-sm-12 order-sm-1 col-12 order-1 footer-box'>
          <img src={logo} className='logo-w1 mt-4' alt='logo' />
          <h6 className='mt-4'>پرتال جامع وب سرویس ایران</h6>
        </div>
      </div>

      <hr className='mt-4' />

      <p className='text-center' style={{ fontSize: '10px' }}>
        محفوظ میباشد NegaClub کلیه حقوق این پرتال نزد
      </p>
    </div>
  )
}

export default Footer
