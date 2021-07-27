import React from 'react'
import { useProductsContext } from '../context/ProductsProvider'
import Loader from '../pages/Loader'
import Capture1 from '../img/Capture1.png'
import { Button } from 'react-bootstrap'
import { BsEnvelopeOpenFill } from 'react-icons/bs'
import { HiLocationMarker } from 'react-icons/hi'
import { FaPhone } from 'react-icons/fa'

const Contacts = () => {
  const { Loading, setLoading } = useProductsContext()

  setTimeout(() => {
    setLoading(false)
  }, 1000)

  if (Loading) {
    return <Loader />
  }
  return (
    <div className='my-5'>
      <div className='container m-t'>
        <div className='text-center'>
          <h3 className='p-5' style={{ color: '#1d5e90' }}>
            تماس با ما
          </h3>
        </div>
        <div className=' my-5 '>
          <h4 className='text text-center mb-4' style={{ color: '#1d5e90' }}>
            با ما در تماس باشید
          </h4>
          <div>
            <div className='bar mx-auto'></div>
          </div>
          <p className='text-center' style={{ fontSize: 'small' }}>
            خوشحال خواهیم شد که از طریق ایمیل info@api.ir با ما در ارتباط باشید
          </p>
        </div>

        <div className='row  mt-4 mx-2'>
          <div className='col-12 order-2 order-md-1 col-lg-6  '>
            <input
              className='form-input my-3'
              type='text'
              name='name'
              placeholder='نام'
            ></input>
            <input
              className='form-input my-3'
              type='email'
              name='name'
              placeholder='ایمیل'
            ></input>
            <input
              className='form-input my-3'
              type='text'
              name='name'
              placeholder='تلفن'
            ></input>
            <input
              className='form-input my-3'
              type='text'
              name='name'
              placeholder='موضوع'
            ></input>
            <textarea
              className='form-input my-3'
              type='text'
              name='name'
              placeholder='متن پیغام'
              style={{ height: '100px' }}
            ></textarea>
            <Button variant=' my-3 mr-3 ' className='login-btn px-3 hover-item'>
              ارسال پیغام
            </Button>
          </div>

          <div className='col-12 order-1 order-md-2 col-lg-6 mt-5'>
            <img src={Capture1} at='tarh' className='img-w ' alt='img' />
          </div>
        </div>

        <div className='row my-5 justify-content-center mx-1'>
          <div className='col-lg-3 col-md-5 col-sm-5 col-12 text-center box2 mr-1 my-2  '>
            <div className=' d-flex justify-content-center'>
              <div className='bg-circle1'>
                <FaPhone
                  className='icon-color'
                  size={30}
                  style={{ color: '#be9b30' }}
                />
              </div>
            </div>

            <h5 className='mt-4' style={{ color: '#1d5e90' }}>
              تلفن تماس
            </h5>
            <p className='mt-3'>021-41757001</p>
          </div>

          <div className='col-lg-3 col-md-5 col-sm-5 col-12 text-center box2 mr-1 my-2  '>
            <div className=' d-flex justify-content-center'>
              <div className='bg-circle1'>
                <HiLocationMarker
                  className='icon-color'
                  size={30}
                  style={{ color: '#be9b30' }}
                />
              </div>
            </div>

            <h5 className='mt-4' style={{ color: '#1d5e90' }}>
              آدرس
            </h5>
            <p className='mt-3'>تهران، خیابان استاد مطهری ، پلاک 28</p>
          </div>
          <div className='col-lg-3 col-md-5 col-sm-5 col-12 text-center box2 mr-1 my-2  '>
            <div className=' d-flex justify-content-center'>
              <div className='bg-circle1'>
                <BsEnvelopeOpenFill
                  className='icon-color'
                  size={30}
                  style={{ color: '#be9b30' }}
                />
              </div>
            </div>

            <h5 className='mt-4' style={{ color: '#1d5e90' }}>
              ایمیل
            </h5>
            <p className='mt-3'>barati@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacts
