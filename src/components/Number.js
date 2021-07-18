import React from 'react'
import { Button } from 'react-bootstrap'

const Number = () => {
  return (
    <div className=' my-5'>
      <h4 className='text text-center mb-4'>برخی از آمار مجموعه</h4>
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
              style={{ color: '#44ce6f', fontSize: '30px' }}
            >
              10 +
            </h6>
            <p className='text-center'>تعداد وب سرویس ها</p>
          </div>

          <div className='col-lg-3 col-md-6 col-sm-6 col-12 p-5 num-box'>
            <h6
              className='text-center'
              style={{ color: '#44ce6f', fontSize: '30px' }}
            >
              97 %
            </h6>
            <p className='text-center'>رضایت از خدمات</p>
          </div>

          <div className='col-lg-3 col-md-6 col-sm-6 col-12 p-5 num-box'>
            <h6
              className='text-center'
              style={{ color: '#44ce6f', fontSize: '30px' }}
            >
              5000 +
            </h6>
            <p className='text-center'>مشتری</p>
          </div>

          <div className='col-lg-3 col-md-6 col-sm-6 col-12 p-5 num-box'>
            <h6
              className='text-center'
              style={{ color: '#44ce6f', fontSize: '30px' }}
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
              <Button
                variant=' my-3 mr-3 '
                className='call-btn px-3 hover-item'
              >
                تماس با ما
              </Button>
            </div>
            <div className='col-lg-6  order-lg-2 col-md-12 order-md-1 col-sm-12 order-sm-1 col-12 order-sm-1 mt-5'>
              <h5
                style={{
                  fontSize: '12px',
                }}
              >
                آیا پرسشی درباره خدمات مجموعه ما دارید؟
              </h5>
              <p
                style={{
                  fontSize: '11px',
                }}
              >
                با کارشناسان فروش مجموعه ما ارتباط برقرار نمایید. ما بهترین وب
                سرویس ها را به شما معرفی می نماییم.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Number
