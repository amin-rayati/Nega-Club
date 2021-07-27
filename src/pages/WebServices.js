import React from 'react'
import { useProductsContext } from '../context/ProductsProvider'
import Loader from '../pages/Loader'
import Error from '../pages/Error'
import { FiFacebook, FiTwitter, FiLinkedin } from 'react-icons/fi'
const WebServices = () => {
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
            وب سرویس ها
          </h3>
        </div>
        <hr />
      </div>

      <h4 className='text text-center mb-4 mt-5' style={{ color: '#1d5e90' }}>
        ویژگی های خدمات
      </h4>
      <div>
        <div className='bar mx-auto'></div>
      </div>

      <div className='row my-5 justify-content-center mx-1'>
        <div className='col-lg-3 col-md-5 col-sm-5 col-12 text-center box mx-2 my-2  '>
          <div className=' d-flex justify-content-center'>
            <div className='bg-circle' style={{ background: '#cdf1d8' }}>
              <FiFacebook
                className='icon-color1'
                size={20}
                style={{ color: '#44ce6f' }}
              />
            </div>
          </div>
          <h6 className='mt-3'>وب سرویس پیامک</h6>
          <p className='box-font'>
            از طریق این وب سرویس می توانید مناسبت های هر روز را دریافت نموده و
            در نرم افزار خود برای مشتری نمایش دهید . مناسبت بها به صورت سالانه
            بر اساس تقویم مرکز ژئو فیزیک دانشگاه تهران بروزرسانی می شوند
          </p>
        </div>
        <div className='col-lg-3 col-md-5 col-sm-5 col-12 text-center box mx-2 my-2  '>
          <div className=' d-flex justify-content-center'>
            <div className='bg-circle' style={{ background: '#cdf1d8' }}>
              <FiFacebook
                className='icon-color1'
                size={20}
                style={{ color: '#44ce6f' }}
              />
            </div>
          </div>
          <h6 className='mt-3'>وب سرویس پیامک</h6>
          <p className='box-font'>
            از طریق این وب سرویس می توانید مناسبت های هر روز را دریافت نموده و
            در نرم افزار خود برای مشتری نمایش دهید . مناسبت بها به صورت سالانه
            بر اساس تقویم مرکز ژئو فیزیک دانشگاه تهران بروزرسانی می شوند
          </p>
        </div>
        <div className='col-lg-3 col-md-5 col-sm-5 col-12 text-center box mx-2 my-2  '>
          <div className=' d-flex justify-content-center'>
            <div className='bg-circle' style={{ background: '#cdf1d8' }}>
              <FiFacebook
                className='icon-color1'
                size={20}
                style={{ color: '#44ce6f' }}
              />
            </div>
          </div>
          <h6 className='mt-3'>وب سرویس پیامک</h6>
          <p className='box-font'>
            از طریق این وب سرویس می توانید مناسبت های هر روز را دریافت نموده و
            در نرم افزار خود برای مشتری نمایش دهید . مناسبت بها به صورت سالانه
            بر اساس تقویم مرکز ژئو فیزیک دانشگاه تهران بروزرسانی می شوند
          </p>
        </div>
        <div className='col-lg-3 col-md-5 col-sm-5 col-12 text-center box mx-2 my-2  '>
          <div className=' d-flex justify-content-center'>
            <div className='bg-circle' style={{ background: '#cdf1d8' }}>
              <FiFacebook
                className='icon-color1'
                size={20}
                style={{ color: '#44ce6f' }}
              />
            </div>
          </div>
          <h6 className='mt-3'>وب سرویس پیامک</h6>
          <p className='box-font'>
            از طریق این وب سرویس می توانید مناسبت های هر روز را دریافت نموده و
            در نرم افزار خود برای مشتری نمایش دهید . مناسبت بها به صورت سالانه
            بر اساس تقویم مرکز ژئو فیزیک دانشگاه تهران بروزرسانی می شوند
          </p>
        </div>
        <div className='col-lg-3 col-md-5 col-sm-5 col-12 text-center box mx-2 my-2  '>
          <div className=' d-flex justify-content-center'>
            <div className='bg-circle' style={{ background: '#cdf1d8' }}>
              <FiFacebook
                className='icon-color1'
                size={20}
                style={{ color: '#44ce6f' }}
              />
            </div>
          </div>
          <h6 className='mt-3'>وب سرویس پیامک</h6>
          <p className='box-font'>
            از طریق این وب سرویس می توانید مناسبت های هر روز را دریافت نموده و
            در نرم افزار خود برای مشتری نمایش دهید . مناسبت بها به صورت سالانه
            بر اساس تقویم مرکز ژئو فیزیک دانشگاه تهران بروزرسانی می شوند
          </p>
        </div>
        <div className='col-lg-3 col-md-5 col-sm-5 col-12 text-center box mx-2 my-2  '>
          <div className=' d-flex justify-content-center'>
            <div className='bg-circle' style={{ background: '#cdf1d8' }}>
              <FiFacebook
                className='icon-color1'
                size={20}
                style={{ color: '#44ce6f' }}
              />
            </div>
          </div>
          <h6 className='mt-3'>وب سرویس پیامک</h6>
          <p className='box-font'>
            از طریق این وب سرویس می توانید مناسبت های هر روز را دریافت نموده و
            در نرم افزار خود برای مشتری نمایش دهید . مناسبت بها به صورت سالانه
            بر اساس تقویم مرکز ژئو فیزیک دانشگاه تهران بروزرسانی می شوند
          </p>
        </div>
      </div>
    </div>
  )
}

export default WebServices
