import React from 'react'
import { Spinner } from 'react-bootstrap'

const Loading1 = () => {
  return (
    <div className='text-center'>
      <Spinner animation='border' role='status' className='mx-4'>
        <span className='visually-hidden'></span>
      </Spinner>
    </div>
  )
}

export default Loading1
