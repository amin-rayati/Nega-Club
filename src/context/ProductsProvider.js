import React, { useContext, useState } from 'react'

const ProductsContext = React.createContext()

export const ProductsProvider = ({ children }) => {
  const [showModal, setshowModal] = useState(false)

  const openModal = () => {
    setshowModal(true)
  }
  const closeMOdal = () => {
    setshowModal(false)
  }

  return (
    <ProductsContext.Provider value={{ showModal, openModal, closeMOdal }}>
      {children}
    </ProductsContext.Provider>
  )
}
// make sure use
export const useProductsContext = () => {
  return useContext(ProductsContext)
}
