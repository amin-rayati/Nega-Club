import React from 'react'

import Comments from '../components/Comments'
import Header from '../components/Header'
import Box from '../components/Box'
import CheckBox from '../components/CheckBox'
import Services from '../components/Services'
import Number from '../components/Number'
import Teach from '../components/Teach'
import { useProductsContext } from '../context/ProductsProvider'
import Loader from '../pages/Loader'

import '../App.css'

function Home() {
  const { Loading, setLoading } = useProductsContext()

  setTimeout(() => {
    setLoading(false)
  }, 1000)

  if (Loading) {
    return <Loader />
  }
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
      </div>
    </div>
  )
}

export default Home
