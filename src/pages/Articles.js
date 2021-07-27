/* eslint-disable react/jsx-no-undef */
import React from 'react'
import { useProductsContext } from '../context/ProductsProvider'
import Loader from '../pages/Loader'
import { Button } from 'react-bootstrap'
import api from '../img/api.png'
import dargah from '../img/dargah.png'
import web from '../img/web.png'
import set from '../img/set.jpg'
import { FiCalendar } from 'react-icons/fi'
import { Link, link } from 'react-router-dom'

import { BsArrowLeft } from 'react-icons/bs'
import { BsFillSquareFill } from 'react-icons/bs'

const Articles = () => {
  const { Loading, setLoading } = useProductsContext()

  setTimeout(() => {
    setLoading(false)
  }, 1000)

  if (Loading) {
    return <Loader />
  }
  return (
    <div className='mt-5'>
      <div className='container m-t '>
        <div className='text-center '>
          <h3 className='p-5' style={{ color: '#1d5e90' }}>
            بلاگ
          </h3>
        </div>
        <hr />

        <div className='bg-color1'>
          <div className='row'>
            <div className='col-lg-4 order-lg-1 col-md-12 order-md-2 col-sm-12 order-2 col-12 order-2'>
              <div className='input-group mt-2'>
                <button
                  type='button'
                  className='search-btn btn'
                  style={{ background: '#e8d882', color: '#fff' }}
                >
                  جستجو
                </button>
                <input
                  type='search'
                  className='form-control rounded text-right'
                  placeholder='...جستجو'
                  aria-label='Search'
                  aria-describedby='search-addon'
                />
              </div>
              <div className=' footer-box'>
                <h6 className='mt-4'>لینک های مفید</h6>
                <hr className='mt-2' />
                <div className='footer-add d-flex flex-row mt-4'>
                  <p
                    className='m-0'
                    style={{ color: '#666666', fontSize: '15px' }}
                  >
                    درگاه پرداخت اینترنتی سیزپی
                  </p>
                  <BsFillSquareFill
                    className='ml-2 mt-2'
                    size={8}
                    style={{ color: '#be9b30' }}
                  />
                </div>
                <div className='footer-add d-flex flex-row mt-2'>
                  <p
                    className='m-0'
                    style={{ color: '#666666', fontSize: '15px' }}
                  >
                    وب سرویس ها
                  </p>
                  <BsFillSquareFill
                    className='ml-2 mt-2'
                    size={8}
                    style={{ color: '#be9b30' }}
                  />
                </div>
                <div className='footer-add d-flex flex-row mt-2'>
                  <p
                    className='m-0'
                    style={{ color: '#666666', fontSize: '15px' }}
                  >
                    درگاه پرداخت اینترنتی سیزپی
                  </p>
                  <BsFillSquareFill
                    className='ml-2 mt-2'
                    size={8}
                    style={{ color: '#be9b30' }}
                  />
                </div>
                <div className='footer-add d-flex flex-row mt-2'>
                  <p
                    className='m-0'
                    style={{ color: '#666666', fontSize: '15px' }}
                  >
                    درگاه پرداخت اینترنتی سیزپی
                  </p>
                  <BsFillSquareFill
                    className='ml-2 mt-2'
                    size={8}
                    style={{ color: '#be9b30' }}
                  />
                </div>
                <div className='footer-add d-flex flex-row mt-2'>
                  <p
                    className='m-0'
                    style={{ color: '#666666', fontSize: '15px' }}
                  >
                    درگاه پرداخت اینترنتی سیزپی
                  </p>
                  <BsFillSquareFill
                    className='ml-2 mt-2'
                    size={8}
                    style={{ color: '#be9b30' }}
                  />
                </div>
              </div>
              <div className=' footer-box'>
                <h6 className='mt-4'>اخرین دیدگاه ها</h6>
                <hr className='mt-2' />
                <div className='footer-add d-flex flex-row mt-4'>
                  <p
                    className='m-0'
                    style={{ color: '#666666', fontSize: '15px' }}
                  >
                    درگاه پرداخت اینترنتی سیزپی
                  </p>
                  <BsFillSquareFill
                    className='ml-2 mt-2'
                    size={8}
                    style={{ color: '#be9b30' }}
                  />
                </div>
                <div className='footer-add d-flex flex-row mt-2'>
                  <p
                    className='m-0'
                    style={{ color: '#666666', fontSize: '15px' }}
                  >
                    وب سرویس ها
                  </p>
                  <BsFillSquareFill
                    className='ml-2 mt-2'
                    size={8}
                    style={{ color: '#be9b30' }}
                  />
                </div>
                <div className='footer-add d-flex flex-row mt-2'>
                  <p
                    className='m-0'
                    style={{ color: '#666666', fontSize: '15px' }}
                  >
                    درگاه پرداخت اینترنتی سیزپی
                  </p>
                  <BsFillSquareFill
                    className='ml-2 mt-2'
                    size={8}
                    style={{ color: '#be9b30' }}
                  />
                </div>
                <div className='footer-add d-flex flex-row mt-2'>
                  <p
                    className='m-0'
                    style={{ color: '#666666', fontSize: '15px' }}
                  >
                    درگاه پرداخت اینترنتی سیزپی
                  </p>
                  <BsFillSquareFill
                    className='ml-2 mt-2'
                    size={8}
                    style={{ color: '#be9b30' }}
                  />
                </div>
                <div className='footer-add d-flex flex-row mt-2'>
                  <p
                    className='m-0'
                    style={{ color: '#666666', fontSize: '15px' }}
                  >
                    درگاه پرداخت اینترنتی سیزپی
                  </p>
                  <BsFillSquareFill
                    className='ml-2 mt-2'
                    size={8}
                    style={{ color: '#be9b30' }}
                  />
                </div>
              </div>
              <div className=' footer-box'>
                <h6 className='mt-4'>دسته ها</h6>
                <hr className='mt-2' />
                <div className='footer-add d-flex flex-row mt-4'>
                  <p
                    className='m-0'
                    style={{ color: '#666666', fontSize: '15px' }}
                  >
                    درگاه پرداخت اینترنتی سیزپی
                  </p>
                  <BsFillSquareFill
                    className='ml-2 mt-2'
                    size={8}
                    style={{ color: '#be9b30' }}
                  />
                </div>
                <div className='footer-add d-flex flex-row mt-2'>
                  <p
                    className='m-0'
                    style={{ color: '#666666', fontSize: '15px' }}
                  >
                    وب سرویس ها
                  </p>
                  <BsFillSquareFill
                    className='ml-2 mt-2'
                    size={8}
                    style={{ color: '#be9b30' }}
                  />
                </div>
                <div className='footer-add d-flex flex-row mt-2'>
                  <p
                    className='m-0'
                    style={{ color: '#666666', fontSize: '15px' }}
                  >
                    درگاه پرداخت اینترنتی سیزپی
                  </p>
                  <BsFillSquareFill
                    className='ml-2 mt-2'
                    size={8}
                    style={{ color: '#be9b30' }}
                  />
                </div>
                <div className='footer-add d-flex flex-row mt-2'>
                  <p
                    className='m-0'
                    style={{ color: '#666666', fontSize: '15px' }}
                  >
                    درگاه پرداخت اینترنتی سیزپی
                  </p>
                  <BsFillSquareFill
                    className='ml-2 mt-2'
                    size={8}
                    style={{ color: '#be9b30' }}
                  />
                </div>
                <div className='footer-add d-flex flex-row mt-2'>
                  <p
                    className='m-0'
                    style={{ color: '#666666', fontSize: '15px' }}
                  >
                    درگاه پرداخت اینترنتی سیزپی
                  </p>
                  <BsFillSquareFill
                    className='ml-2 mt-2'
                    size={8}
                    style={{ color: '#be9b30' }}
                  />
                </div>
              </div>
              <div className=' footer-box'>
                <h6 className='mt-4'>برچسب ها</h6>
                <hr className='mt-2' />
                <div className='row justify-content-center'>
                  <Button
                    variant=' my-3 mx-2'
                    className='btn-barchasb btn-barchasb px-1 hover-item  col-lg-3 col-md-6 col-sm-6 col-6'
                  >
                    api
                  </Button>
                  <Button
                    variant=' my-3 mx-2'
                    className='btn-barchasb btn-barchasb px-1 hover-item  col-lg-3 col-md-6 col-sm-6 col-6'
                  >
                    api
                  </Button>
                  <Button
                    variant=' my-3 mx-2'
                    className='btn-barchasb btn-barchasb px-1 hover-item  col-lg-3 col-md-6 col-sm-6 col-6'
                  >
                    api
                  </Button>
                </div>
              </div>
            </div>

            <div
              className='col-lg-8 order-lg-2 col-md-12 order-md-1 col-sm-12 order-sm-1 col-12 order-1 text-end'
              style={{ textAlign: 'end' }}
            >
              <div className='row d-flex justify-content-center'>
                <div className='col-lg-6 order-lg-1 col-md-12 order-md-3   col-sm-12 order-sm-3 col-12 order-3 mt-3'>
                  <img src={dargah} className='th-img' alt='web' />
                  <div className='th-btn d-flex flex-row'>
                    <p
                      className='m-0'
                      style={{ color: '#fff', fontSize: '10px' }}
                    >
                      بهمن ۱۶, ۱۳۹۸
                    </p>
                    <FiCalendar className='ml-1' />
                  </div>
                  <div className='mt-2' style={{ textAlign: 'end' }}>
                    <h3 className='title'> نگاکلاب</h3>
                    <p className='mt-3' style={{ fontSize: '11px' }}></p>
                    NET Remoting. یکی از APIهای مایکروسافت است که در سال 2002 با
                    .NET Framework 1.0 منتشر شد . سیستمی کلی برای برقراری ارتباط
                    بین Applicationهاست . یک بازه زمانی در صنعت نرم افزار
                    زمانیکه مفهوم “reusability” اغلب تکرار می شود، وجود دارد .
                    کاربران شروع به استفاده مجدد از کد source-level می کنند.این
                    دلیل مشکل
                  </div>
                  <BsArrowLeft
                    className='mr-2'
                    style={{ color: '#1d5e90' }}
                    size={20}
                  />
                  <Link to={`/products/id`}>
                    <h6 className='title' style={{ fontSize: '10px' }}>
                      ادامه مطالب
                    </h6>
                  </Link>
                </div>
                <div className='col-lg-6 order-lg-1 col-md-12 order-md-3   col-sm-12 order-sm-3 col-12 order-3 mt-3'>
                  <img src={api} className='th-img' alt='web' />
                  <div className='th-btn d-flex flex-row'>
                    <p
                      className='m-0'
                      style={{ color: '#fff', fontSize: '10px' }}
                    >
                      بهمن ۱۶, ۱۳۹۸
                    </p>
                    <FiCalendar className='ml-1' />
                  </div>
                  <div className='mt-2' style={{ textAlign: 'end' }}>
                    <h3 className='title'> نگاکلاب</h3>
                    <p className='mt-3' style={{ fontSize: '11px' }}></p>
                    NET Remoting. یکی از APIهای مایکروسافت است که در سال 2002 با
                    .NET Framework 1.0 منتشر شد . سیستمی کلی برای برقراری ارتباط
                    بین Applicationهاست . یک بازه زمانی در صنعت نرم افزار
                    زمانیکه مفهوم “reusability” اغلب تکرار می شود، وجود دارد .
                    کاربران شروع به استفاده مجدد از کد source-level می کنند.این
                    دلیل مشکل
                  </div>
                  <BsArrowLeft
                    className='mr-2'
                    style={{ color: '#1d5e90' }}
                    size={20}
                  />
                  <Link to={`/products/id`}>
                    <h6 className='title' style={{ fontSize: '10px' }}>
                      ادامه مطالب
                    </h6>
                  </Link>
                </div>
                <div className='col-lg-6 order-lg-1 col-md-12 order-md-3   col-sm-12 order-sm-3 col-12 order-3 mt-3'>
                  <img src={web} className='th-img' alt='web' />
                  <div className='th-btn d-flex flex-row'>
                    <p
                      className='m-0'
                      style={{ color: '#fff', fontSize: '10px' }}
                    >
                      بهمن ۱۶, ۱۳۹۸
                    </p>
                    <FiCalendar className='ml-1' />
                  </div>
                  <div className='mt-2' style={{ textAlign: 'end' }}>
                    <h3 className='title'> نگاکلاب</h3>
                    <p className='mt-3' style={{ fontSize: '11px' }}></p>
                    NET Remoting. یکی از APIهای مایکروسافت است که در سال 2002 با
                    .NET Framework 1.0 منتشر شد . سیستمی کلی برای برقراری ارتباط
                    بین Applicationهاست . یک بازه زمانی در صنعت نرم افزار
                    زمانیکه مفهوم “reusability” اغلب تکرار می شود، وجود دارد .
                    کاربران شروع به استفاده مجدد از کد source-level می کنند.این
                    دلیل مشکل
                  </div>
                  <BsArrowLeft
                    className='mr-2'
                    style={{ color: '#1d5e90' }}
                    size={20}
                  />
                  <Link to={`/products/id`}>
                    <h6 className='title' style={{ fontSize: '10px' }}>
                      ادامه مطالب
                    </h6>
                  </Link>
                </div>
                <div className='col-lg-6 order-lg-1 col-md-12 order-md-3   col-sm-12 order-sm-3 col-12 order-3 mt-3'>
                  <img src={set} className='th-img' alt='web' />
                  <div className='th-btn d-flex flex-row'>
                    <p
                      className='m-0'
                      style={{ color: '#fff', fontSize: '10px' }}
                    >
                      بهمن ۱۶, ۱۳۹۸
                    </p>
                    <FiCalendar className='ml-1' />
                  </div>
                  <div className='mt-2' style={{ textAlign: 'end' }}>
                    <h3 className='title'> نگاکلاب</h3>
                    <p className='mt-3' style={{ fontSize: '11px' }}></p>
                    NET Remoting. یکی از APIهای مایکروسافت است که در سال 2002 با
                    .NET Framework 1.0 منتشر شد . سیستمی کلی برای برقراری ارتباط
                    بین Applicationهاست . یک بازه زمانی در صنعت نرم افزار
                    زمانیکه مفهوم “reusability” اغلب تکرار می شود، وجود دارد .
                    کاربران شروع به استفاده مجدد از کد source-level می کنند.این
                    وب سرویس حسابداری حسابیت در این مطلب قصد داریم در مورد وب
                    سرویس حسابداری حسابیت توضیح دهیم. معرفی API حسابیت وب سرویسی
                    مبتنی بر REST و OAuth 2.0 است که به توسعه دهندگان اجازه
                    میدهد برنامه خود را به حسابیت متصل کنند . از طریق این وب
                    سرویس شما به تمامی بخش های مختلف حسابیت دلیل مشکل
                  </div>
                  <BsArrowLeft
                    className='mr-2'
                    style={{ color: '#1d5e90' }}
                    size={20}
                  />
                  <Link to={`/products/id`}>
                    <h6 className='title' style={{ fontSize: '10px' }}>
                      ادامه مطالب
                    </h6>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Articles
