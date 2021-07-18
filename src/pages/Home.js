import React from 'react'

import Comments from '../components/Comments'
import Header from '../components/Header'
import Box from '../components/Box'
import CheckBox from '../components/CheckBox'
import Services from '../components/Services'
import Number from '../components/Number'
import Teach from '../components/Teach'

import '../App.css'

function Home() {
  return (
    <div>
      <div className='container m-t bg-color'>
        <Header />

        <Box />

        <CheckBox />

        <Services />

        <Number />

        <Comments />

        <Teach />

        <hr className='mt-4' />

        <p className='text-center' style={{ fontSize: '10px' }}>
          محفوظ میباشد Nega Market کلیه حقوق این پرتال نزد
        </p>
      </div>
    </div>
  )
}

export default Home
