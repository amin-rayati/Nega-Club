import React, { useState, useRef } from 'react'
import Slider from 'react-slick'
import pro from '../img/pro.png'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { FaBlackTie } from 'react-icons/fa'
import { data } from './data'

export default function Carousel({ ...slickProps }) {
  const slider = useRef()

  const slickDefaults = {
    dots: true,
    infinite: false,
    slidesToScroll: 1,
    slidesToShow: 4,
    speed: 200,
    arrows: true,
  }

  const onNext = () => {
    slider.current.slickNext()
  }
  const onPrev = () => {
    slider.current.slickPrev()
  }

  return (
    <Slider
      {...slickDefaults}
      {...slickProps}
      ref={slider}
      className='carousel'
      beforeChange={(_currentSlide, slideIndex) => {
        if (slider.current) {
          // The error occurs here
          const slideElement = slider.current.innerSlider.list.querySelector(
            `[data-index="${slideIndex}"]`
          )

          if (slideElement) {
            const images = slideElement.getElementsByTagName('IMG')
            for (let i = 0; i < images.length; i++) {
              const image = images[i]
              const lazySrc = image.getAttribute('data-lazy')
              if (lazySrc) {
                image.setAttribute('src', lazySrc)
                image.removeAttribute('data-lazy')
              }
            }
          }
        }
      }}
    >
      {data.map((slide) => {
        return (
          <div className='col-lg-12 order-lg-2 col-md-12 order-md-1 col-sm-12 order-sm-1 col-12 order-1'>
            <h2>{}</h2>
            <div className='pro-img-box'>
              <img className='pro-img' src={pro} alt='profile' />
            </div>
          </div>
        )
      })}
    </Slider>
  )
}

// function SampleNextArrow(props) {
//   const { className, style, onClick } = props
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: 'block', background: 'black ' }}
//       onClick={onClick}
//     />
//   )
// }

// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: 'block', background: 'black' }}
//       onClick={onClick}
//     />
//   )
// }

// function Active(props) {
//   const { className, style, onClick } = props
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: 'block', background: 'black ' }}
//       onClick={onClick}
//     />
//   )
// }

// const SimpleSlider = ({ data }) => {
//   const settings = {
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     className: 'center',
//     centerPadding: '60px',
//     nextArrow: <SampleNextArrow />,
//     prevArrow: <SamplePrevArrow />,
//     centerMode: true,
//     focusOnSelect: true,
//   }

//   return (
//     <div>
//       <Slider {...settings}>
//         {data.map((slide) => {
//           return (
//             <div className='col-lg-12 order-lg-2 col-md-12 order-md-1 col-sm-4 order-sm-1 col-4 order-1'>
//               <div className='pro-img-box'>
//                 <img className='pro-img' src={pro} alt='profile' />
//               </div>
//             </div>
//           )
//         })}
//       </Slider>
//     </div>
//   )
// }

// export default SimpleSlider
