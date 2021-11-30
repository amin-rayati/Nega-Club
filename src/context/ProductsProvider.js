import React, { useContext, useState } from 'react'

const ProductsContext = React.createContext()

export const ProductsProvider = ({ children }) => {
  const [gridView, setGridView] = useState(true)
  const [subjectIdContxt, setSubjectIdContxt] = useState(0)
  const GridView = () => {
    setGridView(true)
  }
  const ListView = () => {
    setGridView(false)
  }
  const [gridViewProvider, setGridViewProvider] = useState(true)
  const GridViewProvider = () => {
    setGridViewProvider(true)
  }
  const ListViewProvider = () => {
    setGridViewProvider(false)
  }
  const [filterProvider, setFilterProvider] = useState([])
  const [Loading, setLoading] = useState(true)
  const [Error, setError] = useState(false)
  const [cardId, setCardId] = useState()
  const [cityId, SetCityId] = useState('')
  const [cityName, SetCityName] = useState('')
  const [idCast, setIdcast] = useState('')
  const [Id, setId] = useState('')

  const [acceptModal, setAcceptModal] = useState(false)
  const acceptModalClose = () => setAcceptModal(false)
  const acceptModalShow = () => setAcceptModal(true)

  const [loginModal, setLoginModal] = useState(false)
  const loginModalClose = () => setLoginModal(false)
  const loginModalShow = () => setLoginModal(true)

  const [buyModal, setBuyModal] = useState(false)
  const buyModalClose = () => setBuyModal(false)
  const buyModalShow = () => setBuyModal(true)

  const [registerModal, setRegisterModal] = useState(false)
  const RegisterClose = () => setRegisterModal(false)
  const RegisterShow = () => setRegisterModal(true)

  const [showModal, setshowModal] = useState(false)
  const openModal = () => setshowModal(true)
  const closeMOdal = () => setshowModal(false)

  const [showModalCity, setshowModalCity] = useState(false)
  const openModalCity = () => setshowModalCity(true)
  const closeModalCity = () => setshowModalCity(false)
  const [userData, setUserData] = useState(null)
  const [type, setType] = useState('')

  return (
    <ProductsContext.Provider
      value={{
        type,
        setType,
        subjectIdContxt,
        setSubjectIdContxt,
        acceptModal,
        acceptModalClose,
        acceptModalShow,
        loginModal,
        loginModalClose,
        loginModalShow,
        gridViewProvider,
        GridViewProvider,
        ListViewProvider,
        GridView,
        ListView,
        gridView,
        filterProvider,
        userData,
        setUserData,
        setFilterProvider,
        idCast,
        setIdcast,
        cityName,
        SetCityName,
        cityId,
        SetCityId,
        openModalCity,
        closeModalCity,
        showModalCity,
        Id,
        setId,
        registerModal,
        RegisterClose,
        RegisterShow,
        buyModal,
        buyModalClose,
        buyModalShow,
        showModal,
        openModal,
        closeMOdal,
        Loading,
        setLoading,
        Error,
        setError,
        cardId,
        setCardId,
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
}
// make sure use
export const useProductsContext = () => {
  return useContext(ProductsContext)
}
