import React from 'react'
import { Modal } from 'react-bootstrap'
import { FaDownload, FaRobot } from 'react-icons/fa'
import { SiApple } from 'react-icons/si'
import NegaMarket from '../img/NegaMarket.png'
import { useProductsContext } from '../context/ProductsProvider'

const ModalDownload = () => {
  const { openModal, closeMOdal, showModal } = useProductsContext()

  const downloadAndroid = () => {
    const url = 'https://new.neganoon.ir/app/apk/v2/neganoon.apk'
    window.open(url, '_blank')
  }
  const downloadGoogle = () => {
    const url = 'https://play.google.com/store/apps/details?id=com.neganoon'
    window.open(url, '_blank')
  }
  const downloadIos = () => {
    const url = 'https://anardoni.com/ios/app/hxZrP2ho6'
    window.open(url, '_blank')
  }
  return (
    <Modal show={showModal} onHide={closeMOdal}>
      <Modal.Header closeButton>
        <Modal.Title style={{ color: '#e8d25a' }}>دانلود</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='d-flex flex-column'>
          <div className='text-center'>
            <img src={NegaMarket} alt='logo' style={{ width: '30%' }} />
          </div>
          <div className='d-flex flex-column my-4 row text-center'>
            <div>
              <button
                className='btn-download btn-download-sm my-2  col-12'
                type='button'
                onClick={downloadAndroid}
              >
                دانلود مستقیم (اندروید)
                <FaDownload className=' ml-3' size={15} />
              </button>
              <button
                className='btn-download btn-download-sm my-2  col-12'
                type='button'
                onClick={downloadGoogle}
              >
                دانلود از گوگل پلی (اندروید)
                <FaRobot className=' ml-3' size={15} />
              </button>
              <button
                className='btn-download btn-download-sm my-2 col-12'
                type='button'
                onClick={downloadIos}
              >
                دانلود از اناردونی (ای او اس)
                <SiApple className=' ml-3' size={15} />
              </button>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default ModalDownload
