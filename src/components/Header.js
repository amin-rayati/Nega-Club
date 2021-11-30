import { React, useEffect, useState } from 'react'
import { Button, Form, FormControl } from 'react-bootstrap'
import tarh from '../img/tarh.png'
import ModalDownload from './ModalDownload'
import HeaderSlider from './HeaderSlider'
import { useProductsContext } from '../context/ProductsProvider'

const Header = () => {
  const { openModal, showModal } = useProductsContext()
  return <HeaderSlider />
}

export default Header
