import React from 'react'
import logo from '../img/NegaMarket.png'
import { Button } from 'react-bootstrap'
const NegativeCallBack = () => {
  const link = () => {
    const url = 'https://site.negaclub.ir/'
    window.open(url, '_blank')
  }
  return (
    <div className='container mt-5'>
      <div className='container m-t'>
        <div className='text-center'>
          <h3 className='p-5' style={{ color: '#1d5e90' }}>
            <img src={logo} className='logo-callback ' alt='logo' />
          </h3>
        </div>
      </div>
      <div className='text-center mb-5'>
        <h3 style={{ fontSize: '35px', color: '#c12616' }}>پرداخت ناموفق</h3>
      </div>
      <div
        className=' text-center col-6  col-6 col-md-10  col-sm-10 col-10 m-auto'
        style={{
          background: '#fff',
          padding: '30px',
          borderRadius: '15px',
          color: 'black',
          boxShadow: 'rgb(230 230 230 / 50%) 1px 1px 12px 12px',
        }}
      >
        <p style={{ lineHeight: '35px' }}>
          متاسفانه مشکلی در پرداختتان پیش آمده است.نگران نباشید اگر وجهی از
          حسابتان کم شده است تا کمتر از 72 ساعت دیگر به حسابتان برمیگردد.
        </p>
      </div>
      <div className='text-center mt-5'>
        <Button
          onClick={link}
          variant=' my-3 mr-3 '
          className='login-btn px-3 hover-item navBtn-font navBtn-font '
        >
          بازگشت به نگاکلاب
        </Button>
      </div>
    </div>
  )
}

export default NegativeCallBack
