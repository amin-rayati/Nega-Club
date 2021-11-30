import { ReactChild, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import {
  Home,
  About,
  Articles,
  Contacts,
  Plugins,
  SingleProduct,
  WebServices,
  Error,
  Castes,
} from './pages/index'

import Public from './pages/Public'
import Private from './pages/Private'

import Provider from './pages/Provider'
import SingleProvider from './pages/SingleProvider'
import PositiveCallBack from './pages/PositiveCallBack'
import NegativeCallBack from './pages/NegativeCallBack'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavbarComponent from './components/Navbar'
import Footer from './components/Footer'
import './App.css'

import ScrollToTop from './pages/ScrollToTop'
import axios from 'axios'
import { useCookies } from 'react-cookie'
import { useProductsContext } from './context/ProductsProvider'

function App() {
  const [cookies, setCookie, removeCookie] = useCookies(['user'])
  const { userData, setUserData, type, setType } = useProductsContext()

  window.onbeforeunload = function () {
    window.scrollTo(0, 0)
  }
  const getType = async () => {
    try {
      const rawResponse = await fetch(
        'https://negaclub.ir/admin/ArticleTypes/API/_getTypes?token=test',
        {
          method: 'POST',
          headers: new Headers({
            'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type
          }),
        }
      )
      const content = await rawResponse.json()
      if (content.isDone) {
        setType(content.data)
      }
    } catch (error) {
      console.log(error)
    }
  }
  window.onload = function () {
    if (cookies['user']) {
      getIndividualInfo()
    }
    getType()
  }
  function ScrollToTop() {
    const { pathname } = useLocation()

    useEffect(() => {
      window.scrollTo(0, 0)
    }, [pathname])

    return null
  }
  const getIndividualInfo = () => {
    axios
      .post(
        'https://negaclub.ir/admin/admin/Customers/API/_getCustomerData?token=test',
        {
          customerId: 0,
          customerMobile: cookies['user']['mobile'],
        },
        {
          headers: {
            token: 'test',
          },
        }
      )
      .then((response) => {
        if (response.data.isDone) {
          setUserData(response.data.data)
        }
      })
      .catch((error) => {
        console.error(error)
      })
  }
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route path='/callback' component={Private} />
        <Route path='/' component={Public} />
      </Switch>
    </Router>
  )
}

export default App
