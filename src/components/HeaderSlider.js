import React, { useState, useEffect, useRef, useCallback } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { AiFillStar } from 'react-icons/ai'
import { AiOutlineStar } from 'react-icons/ai'
import axios from 'axios'
import { LinkContainer } from 'react-router-bootstrap'
import plugin from '../img/plugin.png'
import { filter } from 'dom-helpers'
import { Button, Form, FormControl } from 'react-bootstrap'
import tarh from '../img/tarh.png'
const url = 'https://negaclub.ir/admin/Sliders/API/_sliders?token=test'
export default function Carousel({ filterProvider }) {
  const slickDefaults = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  const [headerslider, setHeaderSlider] = useState('')

  const link = (url) => {
    window.open(url, '_blank')
  }

  const getHeaderSlider = async () => {
    try {
      const rawResponse = await fetch(
        'https://negaclub.ir/admin/Sliders/API/_sliders?token=test',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            token: 'test',
          },
          body: JSON.stringify({
            token: 'test',
          }),
        }
      )
      const content = await rawResponse.json()

      if (content.isDone) {
        setHeaderSlider(content.data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getHeaderSlider()
  }, [])

  return (
    <Slider {...slickDefaults} style={{ cursor: 'pointer' }}>
      {headerslider &&
        headerslider.map((e) => {
          return (
            <div
              key={e.id}
              // className='px-0'
              style={{ height: '510px !important' }}
            >
              <div className='col-12 order-2 order-md-1 col-lg-12 px-0'>
                <img
                  src={e.image}
                  alt='tarh'
                  className='img-w '
                  style={{ height: ' 500px !important' }}
                />
              </div>

              <div
                className='col-12  order-1 order-md-2 col-lg-6 m-auto header-title-md '
                style={{ left: '300px', bottom: '410px' }}
              >
                <h4
                  className='text text-center mb-4 mt-3 header-title-font'
                  style={{
                    color: '#ffffff',
                    fontSize: '45px',
                    fontWeight: 'bold',
                    lineBreak: 'anywhere',
                  }}
                >
                  {e.title}
                </h4>
                <p
                  className='text text-center header-detail-font'
                  style={{ color: '#fff', fontSize: '20px' }}
                >
                  {e.detail}
                </p>

                <div className='text-center'>
                  <Button
                    variant=' my-2 mr-2 '
                    className='login-btn hover-item link-btn header-detail-font'
                    onClick={() => link(e.link)}
                  >
                    لینک
                  </Button>
                </div>
              </div>
            </div>
          )
        })}
    </Slider>
  )
}

/* 
        <div className='text-center'>
          <Button
            variant=' my-3 mr-3 '
            className='login-btn px-3 hover-item'
            onClick={openModal}
          >
            دانلود اپلیکیشن
          </Button>
          {showModal ? <ModalDownload /> : null}
        </div> */
