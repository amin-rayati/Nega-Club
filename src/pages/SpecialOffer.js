import React from 'react'
import { Cookies, useCookies } from 'react-cookie'
import { useProductsContext } from '../context/ProductsProvider'
import { Helmet } from 'react-helmet'

const SpecialOffer = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['user'])
  const { userData, setUserData } = useProductsContext()

  return (
    <div className='mt-5'>
      <div className='container m-t marginTop px-0'>
        <div
          className='text-center'
          style={{
            backgroundColor: '#4a4848',
            color: '#ffffff',
          }}
        >
          <h1 className='p-5' style={{ color: '#fff' }}>
            پیشنهاد ویژه
          </h1>
          <Helmet>
            <title> پیشنهادات ویژه نگاکلاب</title>
          </Helmet>
        </div>
      </div>

      <div className='container m-t '>
        <div className='bg-color1'>
          {userData ? (
            <div className='text-center mt-5'>
              <h3>درحال حاضر پیشنهاد ویژه ای برای شما وجود ندارد</h3>
            </div>
          ) : (
            <div className='text-center mt-5'>
              <h3>برای دیدن پیشنهادات ویژه ابتدا باید در سایت ثبت نام کنید</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default SpecialOffer
