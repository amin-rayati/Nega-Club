import { React, useEffect, useState } from 'react'
import { Button, Form, FormControl } from 'react-bootstrap'
import tarh from '../img/tarh.png'
import ModalDownload from './ModalDownload'

import { useProductsContext } from '../context/ProductsProvider'

const Header = () => {
  const { openModal, showModal } = useProductsContext()
  return (
    <div className='row d-flex align-middle '>
      <div className='col-12 order-2 order-md-1 col-lg-7 '>
        <img src={tarh} alt='tarh' className='img-w ' />
      </div>

      <div className='col-12  order-1 order-md-2 col-lg-5 m-auto '>
        <h4 className='text mb-4 mt-3'>باشگاه مشتریان نگا کلاب</h4>
        <p className='text'>
          معرفی انواع وب سرویس ها ، تکنولوژی های api ، ارائه بهترین وب سرویس
          <br />
          های کشور
        </p>
        <div className='text-right'>
          <Button
            variant=' my-3 mr-3 '
            className='login-btn px-3 hover-item'
            onClick={openModal}
          >
            لینک های دانلود
          </Button>
          {showModal ? <ModalDownload /> : null}
        </div>
      </div>
    </div>
  )
}

export default Header
