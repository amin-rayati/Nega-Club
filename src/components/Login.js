import { React } from 'react'
import { Button } from 'react-bootstrap'
import ModalDownload from './ModalDownload'

import { useProductsContext } from '../context/ProductsProvider'

const Login = () => {
  const { openModal, showModal } = useProductsContext()

  return (
    <>
      <Button
        variant=' my-3 mr-3 '
        className='login-btn px-3 hover-item'
        onClick={openModal}
      >
        لینک های دانلود
      </Button>
      {showModal ? <ModalDownload /> : null}
    </>
  )
}

export default Login
