import React from 'react'
import { useProductsContext } from '../context/ProductsProvider'
import Loader from '../pages/Loader'
import plugin from '../img/plugin.png'
import sms from '../img/sms.png'
import { Button } from 'react-bootstrap'

const Plugins = () => {
  const { Loading, setLoading } = useProductsContext()

  setTimeout(() => {
    setLoading(false)
  }, 1000)

  if (Loading) {
    return <Loader />
  }
  return (
    <div className='container mt-5'>
      <div className='container m-t'>
        <div className='text-center'>
          <h3 className='p-5' style={{ color: '#1d5e90' }}>
            افزونه های پیامک
          </h3>
        </div>
        <hr />
        <img src={plugin} alt='plugin' style={{ width: 'inherit' }} />
      </div>
      <h4 className='text text-center mb-4 mt-5' style={{ color: '#1d5e90' }}>
        لیست کامل ماژول های پیامک
      </h4>
      <p className='my-3 text-right'>
        در این قسمت لیستس از افزونه های پیامک که تقریبا برای تمامی cmsها و
        فروشگاه های اینترنتی معروف جهان است را برای شما لیست کرده ایم.
      </p>
      <p className='my-3 text-right'>
        قبل از هر چیز با مفهم افزونه یا پلاگین آشنا شویم
      </p>
      <p className='my-3 text-right'>
        به عبارت کلی میتوان افزونه یا پلاگین را در عبارت زیر خلاصه کرد.
      </p>
      <p className='my-3 text-right'>
        افزونه یا پلاگین ها نوعی نرم افزار کوچک و کاربردی هستند که به برنامه
        اصلی امکانات جانبی و مکملی را اضافه می کنند.
      </p>
      <p className='my-3 text-right'>
        در اکثر برنامه های کاربردی افزونه به صورت مجزا وجود دارد و شما می توانید
        افزونه مربوطه را دانلود کرده و سپس به نرم افزار اضافه نمایید.
      </p>
      <p className='my-3 text-right'>
        یکی از پرکاربردترین پلاگین ها یا افزونه هایی که میتوان از آن نام برد
        افزونه ارسال پیامک است که برای هر نرم افزار مدیریت محتوا و یا فروشگاه
        اینترنتی مورد نیاز است کاربردهای کلی این افزونه ها که میتوان به آن اشاره
        کرد ارسال پیامک برای عضویت به کاربر – ارسال پیامک به مدیر سایت هنگام ثبت
        نام کاربر – احراز هویت کاربر زمان ثبت نام – ارسال پیامک هنگام انجام
        فرایند خرید در یک فروشگاه اینترنتی و … که تمامی این این امکانات در
        افزونه ها و پلاگین های زیر موجود است
      </p>

      <div className='row my-5 justify-content-center mx-1'>
        <div className='col-lg-3 col-md-5 col-sm-5 col-12 text-center box1 mx-2 my-2  '>
          <div className=' d-flex justify-content-center'>
            <div className='bg-circle' style={{ background: '#cdf1d8' }}>
              <img src={sms} />
            </div>
          </div>
          <h6 className='mt-3'>افزونه پیامکی گرویتی فرم</h6>
          <Button variant=' my-3 mr-3 ' className='dwn-btn  px-3 '>
            دانلود
          </Button>
        </div>
        <div className='col-lg-3 col-md-5 col-sm-5 col-12 text-center box1 mx-2 my-2  '>
          <div className=' d-flex justify-content-center'>
            <div className='bg-circle' style={{ background: '#cdf1d8' }}>
              <img src={sms} />
            </div>
          </div>
          <h6 className='mt-3'>افزونه پیامکی گرویتی فرم</h6>
          <Button variant=' my-3 mr-3 ' className='dwn-btn  px-3 '>
            دانلود
          </Button>
        </div>
        <div className='col-lg-3 col-md-5 col-sm-5 col-12 text-center box1 mx-2 my-2  '>
          <div className=' d-flex justify-content-center'>
            <div className='bg-circle' style={{ background: '#cdf1d8' }}>
              <img src={sms} />
            </div>
          </div>
          <h6 className='mt-3'>افزونه پیامکی گرویتی فرم</h6>
          <Button variant=' my-3 mr-3 ' className='dwn-btn  px-3 '>
            دانلود
          </Button>
        </div>
        <div className='col-lg-3 col-md-5 col-sm-5 col-12 text-center box1 mx-2 my-2  '>
          <div className=' d-flex justify-content-center'>
            <div className='bg-circle' style={{ background: '#cdf1d8' }}>
              <img src={sms} />
            </div>
          </div>
          <h6 className='mt-3'>افزونه پیامکی گرویتی فرم</h6>
          <Button variant=' my-3 mr-3 ' className='dwn-btn  px-3 '>
            دانلود
          </Button>
        </div>
        <div className='col-lg-3 col-md-5 col-sm-5 col-12 text-center box1 mx-2 my-2  '>
          <div className=' d-flex justify-content-center'>
            <div className='bg-circle' style={{ background: '#cdf1d8' }}>
              <img src={sms} />
            </div>
          </div>
          <h6 className='mt-3'>افزونه پیامکی گرویتی فرم</h6>
          <Button variant=' my-3 mr-3 ' className='dwn-btn  px-3 '>
            دانلود
          </Button>
        </div>
        <div className='col-lg-3 col-md-5 col-sm-5 col-12 text-center box1 mx-2 my-2  '>
          <div className=' d-flex justify-content-center'>
            <div className='bg-circle' style={{ background: '#cdf1d8' }}>
              <img src={sms} />
            </div>
          </div>
          <h6 className='mt-3'>افزونه پیامکی گرویتی فرم</h6>
          <Button variant=' my-3 mr-3 ' className='dwn-btn  px-3 '>
            دانلود
          </Button>
        </div>
        <div className='col-lg-3 col-md-5 col-sm-5 col-12 text-center box1 mx-2 my-2  '>
          <div className=' d-flex justify-content-center'>
            <div className='bg-circle' style={{ background: '#cdf1d8' }}>
              <img src={sms} />
            </div>
          </div>
          <h6 className='mt-3'>افزونه پیامکی گرویتی فرم</h6>
          <Button variant=' my-3 mr-3 ' className='dwn-btn  px-3 '>
            دانلود
          </Button>
        </div>
        <div className='col-lg-3 col-md-5 col-sm-5 col-12 text-center box1 mx-2 my-2  '>
          <div className=' d-flex justify-content-center'>
            <div className='bg-circle' style={{ background: '#cdf1d8' }}>
              <img src={sms} />
            </div>
          </div>
          <h6 className='mt-3'>افزونه پیامکی گرویتی فرم</h6>
          <Button variant=' my-3 mr-3 ' className='dwn-btn  px-3 '>
            دانلود
          </Button>
        </div>
        <div className='col-lg-3 col-md-5 col-sm-5 col-12 text-center box1 mx-2 my-2  '>
          <div className=' d-flex justify-content-center'>
            <div className='bg-circle' style={{ background: '#cdf1d8' }}>
              <img src={sms} />
            </div>
          </div>
          <h6 className='mt-3'>افزونه پیامکی گرویتی فرم</h6>
          <Button variant=' my-3 mr-3 ' className='dwn-btn  px-3 '>
            دانلود
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Plugins
