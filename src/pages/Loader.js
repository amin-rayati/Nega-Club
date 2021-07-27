import React from 'react'
import { Spinner } from 'react-bootstrap'

const Loader = () => {
  return (
    <div className='text-center'>
      <Spinner
        animation='border'
        role='status'
        style={{ marginTop: '20%', marginBottom: '20%' }}
      >
        <span className='visually-hidden'></span>
      </Spinner>
    </div>
  )
}

export default Loader
