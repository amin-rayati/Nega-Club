import React from 'react'
import { useProductsContext } from '../context/ProductsProvider'
import Loader from '../pages/Loader'
import about from '../img/about.jpg'
import { Button } from 'react-bootstrap'
import { Link, link } from 'react-router-dom'
import aboutus from '../img/aboutus.png'
import { Helmet } from 'react-helmet'
const About = () => {
  const { Loading, setLoading } = useProductsContext()

  setTimeout(() => {
    setLoading(false)
  }, 1000)

  if (Loading) {
    return <Loader />
  }
  return (
    <div className='mt-5 '>
      <div className='container m-t marginTop px-0'>
        <div
          className='text-center'
          style={{
            backgroundColor: '#4a4848',
            color: '#ffffff',
          }}
        >
          <h1 className='p-5' style={{ color: '#fff' }}>
            درباره ما
          </h1>
          <Helmet>
            <title> درباره نگاکلاب</title>
          </Helmet>
        </div>
        <div className='row  mt-4 mx-2 px-3'>
          <div className='col-12 order-2 order-md-1 col-lg-6  '>
            {/* <div className='text-center'>
              <div className='bar'></div>
            </div> */}

            <h3
              style={{
                textAlign: 'justify',
                direction: 'rtl',
                lineHeight: '50px',
                fontSize: '15px',
                marginTop: '17px',
                fontWeight: 'bolder',
              }}
            >
              گروه شرکت های نگارینه مشاوره و اجرای پرداخت الکترونیک ، انفورماتیک
              و پروژه باشگاه مشتریان
            </h3>

            <p
              className='mt-4'
              style={{
                fontSize: '15px',
                textAlign: 'justify',
                direction: 'rtl',
                lineHeight: '30px',
              }}
            >
              در دنیای کسب و کار امروزی، و با وجود تعدد مشاغل یکسان، قدرت انتخاب
              یک مشتری برای انتخاب یک فروشگاه به شدت بالا رفته و فروشندگان سعی
              دارند با برنامه های متنوع وفاداری، نسبت به وفادارسازی مشتریان و
              تکرار خرید توسط آنها، و همچنین جذب مشتری جدید دامنه فروش خود را
              گسترده تر کنند.
            </p>
            <p
              style={{
                fontSize: '15px',
                textAlign: 'justify',
                direction: 'rtl',
                lineHeight: '30px',
              }}
            >
              به همین دلیل فرمول ساده ی تعداد فروش بیشتر با سود کمتر، مدتهاست
              تکیه گاه اصلی کسب و کارهای تمام دنیا شده است. بدیهی است دستیابی به
              مشتریان جدید و یا وفادارسازی مشتریان فعلی، نیازمند ابزارهای
              تبلیغاتی، ارتباطی، روابط عمومی و غیره می باشد که این مقوله خود
              مستلزم صرف هزینه های هنگفت خواهد بود.
            </p>
            <p
              style={{
                fontSize: '15px',
                textAlign: 'justify',
                direction: 'rtl',
                lineHeight: '30px',
              }}
            >
              گروه نگارینه، با سالها تجربه در حوزه راه اندازی باشگاه مشتریان، و
              همچنین راهبری باشگاههای مختلف در بخش اجرایی، بازرگانی و زیرساختی،
              و با در دست داشتن قراردادهای معتبر در بخشهای مالی، اعتباری،
              گردشگری، بیمه، خدماتی و ... توانسته است رویکردی جدید در هم افزایی
              خدمات و مشتریان باشگاههای مختلف ایجاد کرده تا بصورت کاملا برد برد،
              هر باشگاهی بتواند از خدمات و مشتریان باشگاههای دیگر استفاده کرده و
              با صرف کمترین هزینه، بیشترین فروش و افزایش مشتری و وفادارسازی را
              برای هر فروشگاه و به تبع آن باشگاه مشتریان به ارمغان آورد.
            </p>
          </div>

          <div className='col-12 order-1 order-md-2 col-lg-6 '>
            <img
              src={aboutus}
              at='tarh'
              alt='img'
              style={{ borderRadius: '15px', width: '100%' }}
            />
          </div>
        </div>

        {/* <div className='row m-4'>
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
        </div> */}
      </div>

      <div
        className='gradiant-color text-center p-5 mt-3'
        style={{ color: 'white' }}
      >
        <h4>نیاز به مشاوره فنی دارید؟</h4>
        <p style={{ color: 'white' }}>
          کارشناسان مجرب ما همواره آماده پاسخگویی به پرسش های شما هستند!
        </p>
        <Link to='/contactus'>
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
            <div className='col-lg-3 col-md-6 col-sm-6 col-12 p-5 num-box'>
              <h6
                className='text-center'
                style={{ color: '#be9a2f', fontSize: '30px' }}
              >
                100 +
              </h6>
              <p className='text-center'>خدمات ارزش افزوده</p>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-6 col-12 p-5 num-box'>
              <h6
                className='text-center'
                style={{ color: '#be9a2f', fontSize: '30px' }}
              >
                25000 +
              </h6>
              <p className='text-center'>مشتری وفادار</p>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-6 col-12 p-5 num-box'>
              <h6
                className='text-center'
                style={{ color: '#be9a2f', fontSize: '30px' }}
              >
                4500 +
              </h6>
              <p className='text-center'>پذیرنده مختلف</p>
            </div>

            <div className='col-lg-3 col-md-6 col-sm-6 col-12  p-5 num-box'>
              <h6
                className='text-center'
                style={{ color: '#be9a2f', fontSize: '30px' }}
              >
                370 +
              </h6>
              <p className='text-center'>صنف مختلف</p>
            </div>
          </div>
        </div>

        <div className='my-5 '>
          <div className='row d-flex justify-content-center mx-3'>
            <div className='row text-center num-box1'>
              <div className='col-lg-6 order-lg-1 col-md-12 order-md-2 col-sm-12 order-sm-2 col-12 order-2 mt-5'>
                <Link to='/contactus'>
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
