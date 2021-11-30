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

export default function Carousel({ filterProvider }) {
  const slickDefaults = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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

  return (
    <Slider {...slickDefaults} style={{ cursor: 'pointer' }}>
      {filterProvider &&
        filterProvider.map((e) => {
          return (
            // <LinkContainer to={`${e.id}`}>
            <div className='d-flex '>
              <div
                className='col-6 pt-3'
                style={{
                  height: '180px',
                  borderRadius: '15px  0px 0px 15px',
                  border: '1px solid #eaeaea',
                }}
              >
                <p
                  style={{
                    fontSize: '15px',
                    fontWeight: 'bolder',
                    textAlign: 'end',
                  }}
                >
                  {e.name}
                </p>

                <p
                  style={{
                    color: '#bf9b30',
                    textAlign: 'end',
                    fontSize: '13px',
                  }}
                >
                  عضویت طلایی
                </p>
                <div
                  className='my-1'
                  style={{
                    textAlign: 'end',
                  }}
                >
                  <AiFillStar style={{ color: '#bf9b30' }} />
                  <AiFillStar style={{ color: '#bf9b30' }} />
                  <AiFillStar style={{ color: '#bf9b30' }} />
                  <AiFillStar style={{ color: '#bf9b30' }} />
                  <AiOutlineStar style={{ color: '#bf9b30' }} />
                </div>

                <div
                  className='col-12 d-flex justify-content-center   mr-0 '
                  style={{
                    textAlign: 'center',
                    marginTop: '5px',

                    background: '#920303c9',
                    borderRadius: '25px',
                    color: '#ffff',
                  }}
                >
                  <p
                    className='my-2'
                    style={{
                      color: '#ffffff',
                      fontSize: '10px',
                      marginRight: '5px',
                    }}
                  >
                    تخفیف
                  </p>
                  <p
                    className='my-2'
                    style={{
                      color: '#ffffff',
                      fontSize: '10px',
                    }}
                  >
                    {e.discountPercent}%
                  </p>
                </div>
              </div>
              <div className='col-6 pl-0' style={{ margin: 'inherit' }}>
                <img
                  src={plugin}
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '0  15px 15px 0',
                    objectFit: 'cover',
                  }}
                  alt='plugin'
                />
              </div>
            </div>
            // </LinkContainer>
          )
        })}
    </Slider>
  )
}
