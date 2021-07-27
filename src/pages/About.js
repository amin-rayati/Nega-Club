import React from 'react'
import { useProductsContext } from '../context/ProductsProvider'
import Loader from '../pages/Loader'
import Capture1 from '../img/Capture1.png'
import { Button } from 'react-bootstrap'
import { Link, link } from 'react-router-dom'

const About = () => {
  const { Loading, setLoading } = useProductsContext()

  setTimeout(() => {
    setLoading(false)
  }, 1000)

  if (Loading) {
    return <Loader />
  }
  return (
    <div className='mt-5'>
      <div className='container m-t'>
        <div className='text-center'>
          <h3 className='p-5' style={{ color: '#1d5e90' }}>
            درباره ما
          </h3>
        </div>
        <div className='row  mt-4 mx-2'>
          <div className='col-12 order-2 order-md-1 col-lg-6  '>
            <h4 className='text mb-4' style={{ color: '#1d5e90' }}>
              درباره ما
            </h4>
            <div className='text-right'>
              <div className='bar'></div>
            </div>

            <p className='text' style={{ fontSize: 'small' }}>
              ارائه کاربردی ترین وب سرویس با بالاترین کیفیت و آپتایم ممکن.
            </p>
            <p className='text-right'>وب سرویس های به دو دسته تقسیم مشوند :</p>
            <p className='text-right'>1 – وب سرویس هایی ارائه شده :</p>
            <p className='text-right'>
              وب سرویس هایی که از طریق این مجموعه با بهترین کیفیت و با به روز
              ترین تکنولوژی ها و زیرساخت ها شبکه ای در دسترس کاربران قرار می
              گیرد.
            </p>
            <p className='text-right'>2 – وب سرویس هایی معرفی شده :</p>
            <p className='text-right'>
              وب سرویس های کاربردی و پر استفاده ای که از طریق شرکت های نرم
              افزاری بزرگ ایران ارائه می شوند و ما انها را به شما معرفی می
              نماییم.
            </p>
          </div>

          <div className='col-12 order-1 order-md-2 col-lg-6 mt-5'>
            <img src={Capture1} at='tarh' className='img-w ' alt='img' />
          </div>
        </div>

        <div className='row m-4'>
          <div className='col-lg-4 col-md-12 col-sm-12 col-12'>
            <h4 className='text mb-4' style={{ color: '#1d5e90' }}>
              چشم انداز مجموعه
            </h4>

            <p className='text' style={{ fontSize: 'small' }}>
              ما در تلاشیم مجموعه ای جامع از کاربردی ترین وب سرویس های کشور را
              در پرتال وب سرویس ایران برای شما ارائه نماییم.
            </p>
          </div>
          <div className='col-lg-4 col-md-12 col-sm-12 col-12'>
            <h4 className='text mb-4' style={{ color: '#1d5e90' }}>
              هدف ما
            </h4>

            <p className='text' style={{ fontSize: 'small' }}>
              هدف ماه ارائه وب سرویس های کارآمد و آنلاین در یک بستر یکپارچه و
              معرفی وب سرویس جدید می باشد.
            </p>
          </div>

          <div className='col-lg-4 col-md-12 col-sm-12 col-12'>
            <h4 className='text mb-4' style={{ color: '#1d5e90' }}>
              سوابق ما
            </h4>

            <p className='text' style={{ fontSize: 'small' }}>
              ما از سال 90 وب سرویس های متعددی به جامعه برنامه نویس کشور ارائه
              نمودیم و اکنون برخی از استارت آپ های بزرگ کشور از وب سرویس های
              ارائه شده استفاده می نمایند.
            </p>
          </div>
        </div>
      </div>

      <div
        className='gradiant-color text-center p-5 '
        style={{ color: 'white' }}
      >
        <h4>نیاز به مشاوره فنی دارید؟</h4>
        <p style={{ color: 'white' }}>
          کارشناسان مجرب ما همواره آماده پاسخگویی به پرسش های شما هستند!
        </p>
        <Link to='/contacts'>
          <Button variant=' my-3 mr-3 ' className='login-btn px-3 hover-item'>
            تماس بگیرید
          </Button>
        </Link>
      </div>

      <div className='container my-5'>
        <h4 className='text text-center mb-4' style={{ color: '#1d5e90' }}>
          آماری که از خود برجای گذاشته ایم
        </h4>
        <div>
          <div className='bar mx-auto'></div>
        </div>
        <p className='text-center' style={{ fontSize: 'small' }}>
          روزانه بیش از هزاران کاربر و بازدید کننده از امکانات ، خدمات و مطالب
          علمی این وب سایت دیدن میکنند
        </p>

        <div className='mt-5'>
          <div className='row  mx-2'>
            <div className='col-lg-3 col-md-6 col-sm-6 col-12  p-5 num-box'>
              <h6
                className='text-center'
                style={{ color: '#be9a2f', fontSize: '30px' }}
              >
                10 +
              </h6>
              <p className='text-center'>تعداد وب سرویس ها</p>
            </div>

            <div className='col-lg-3 col-md-6 col-sm-6 col-12 p-5 num-box'>
              <h6
                className='text-center'
                style={{ color: '#be9a2f', fontSize: '30px' }}
              >
                97 %
              </h6>
              <p className='text-center'>رضایت از خدمات</p>
            </div>

            <div className='col-lg-3 col-md-6 col-sm-6 col-12 p-5 num-box'>
              <h6
                className='text-center'
                style={{ color: '#be9a2f', fontSize: '30px' }}
              >
                5000 +
              </h6>
              <p className='text-center'>مشتری</p>
            </div>

            <div className='col-lg-3 col-md-6 col-sm-6 col-12 p-5 num-box'>
              <h6
                className='text-center'
                style={{ color: '#be9a2f', fontSize: '30px' }}
              >
                8 +
              </h6>
              <p className='text-center'>سال فعالیت</p>
            </div>
          </div>
        </div>

        <div className='my-5 '>
          <div className='row d-flex justify-content-center mx-3'>
            <div className='row text-center num-box1'>
              <div className='col-lg-6 order-lg-1 col-md-12 order-md-2 col-sm-12 order-sm-2 col-12 order-2 mt-5'>
                <Link to='/contacts'>
                  <Button
                    variant=' my-3 mr-3 '
                    className='call-btn px-3 hover-item'
                  >
                    تماس با ما
                  </Button>
                </Link>
              </div>
              <div className='col-lg-6  order-lg-2 col-md-12 order-md-1 col-sm-12 order-sm-1 col-12 order-sm-1 mt-5'>
                <h5
                  style={{
                    fontSize: '12px',
                  }}
                >
                  آماده ارسال سفارش خدمات هستید؟
                </h5>
                <p
                  style={{
                    fontSize: '11px',
                  }}
                >
                  با کارشناسان فروش مجموعه با کارشناسان فروش ما ارتباط برقرار
                  کنید.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
