import { React, useState } from 'react'
import SimpleSlider from './Slider'
import pro from '../img/pro.png'

const Comments = () => {
  const [active, setActive] = useState(0)

  return (
    <div className='margintop'>
      <h4 className='text text-center mb-4'>نظرات برخی از مشتریان ما</h4>
      <div>
        <div className='bar mx-auto'></div>
      </div>
      <p className='text-center' style={{ fontSize: 'small' }}>
        بسیاری از شرکت ها و استارت آپ های بزرگ کشور از وب سرویس های ارائه شده
        توسط api.ir استفاده می نمایند. api.ir به صورت تخصصی بر روی ارائه وب
        سرویس های مورد نیاز جامعه برنامه نویسی کشور تمرکز دارد.
      </p>

      <div className='box-bg2 container col-lg-6 col-md-12 col-sm-12 col-12 mt-5'>
        <div className='row text-right py-4 pro-div'>
          <div className='col-lg-9 order-lg-1 col-md-12 order-md-2 col-sm-12 order-sm-2 col-12 order-2 mt-3 pro-text-align'>
            <h3 style={{ fontSize: '14px' }}>امین</h3>
            <p style={{ fontSize: '10px', color: '#e8d882' }}>برنامه نویس وب</p>
            <p style={{ fontSize: '10px' }}>
              بسیاری از شرکت ها و استارت آپ های بزرگ کشور از وب سرویس های ارائه
            </p>
          </div>
          <div className='col-lg-3 order-lg-2 col-md-3 order-md-1 col-sm-4 order-sm-1 col-4 order-1'>
            <div className='pro-img-box'>
              <img className='pro-img' src={pro} alt='profile' />
            </div>
          </div>
        </div>
      </div>

      <div className='mt-5' style={{ textAlign: ' -webkit-center' }}>
        <div className=' col-lg-6'>
          <SimpleSlider className='slider' active={active} />
        </div>
      </div>
    </div>
  )
}

export default Comments
