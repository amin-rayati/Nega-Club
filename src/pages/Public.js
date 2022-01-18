import React from 'react'
import {
  Home,
  About,
  Contacts,
  Plugins,
  SingleProduct,
  WebServices,
  Error,
  Castes,
} from '../pages/index'

import Provider from '../pages/Provider'
import SingleProvider from '../pages/SingleProvider'
import Pazirandegan from './Pazirandegan'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavbarComponent from '../components/Navbar'
import Footer from '../components/Footer'
import '../App.css'
import Login from '../components/Login'
import Qouestions from './Qouestions'
import ScrollToTop from './ScrollToTop'
import WorkWithUs from './WorkWithUs'
import Map from './Map'
import GetMap from '../components/GetMap'
import News from './News'
import CompeleteProfile from '../components/CompeleteProfile'
import SpecialOffer from './SpecialOffer'
import { Cookies, useCookies } from 'react-cookie'
import { useProductsContext } from '../context/ProductsProvider'

function Public() {
  const [cookies, setCookie, removeCookie] = useCookies(['user'])
  const { userData, setUserData } = useProductsContext()

  return (
    <Router>
      <NavbarComponent />
      <ScrollToTop />
      <Switch>
        <Route exact path='/compeleteProfile'>
          {userData ? <CompeleteProfile /> : <Error />}
        </Route>

        <Route exact path='/specialOffer'>
          <SpecialOffer />
        </Route>

        <Route exact path='/aboutus'>
          <About />
        </Route>

        <Route exact path='/articles/:Typeid'>
          <News />
        </Route>

        <Route exact path='/articles/:Typeid/:articleId'>
          <SingleProduct />
        </Route>

        <Route exact path='/contactus'>
          <Contacts />
        </Route>

        <Route exact path='/map'>
          <Map />
        </Route>

        <Route exact path='/getmap'>
          <GetMap />
        </Route>

        <Route exact path='/workwithus'>
          <WorkWithUs />
        </Route>

        <Route exact path='/qouestion'>
          <Qouestions />
        </Route>

        <Route exact path='/negacart'>
          <WebServices />
        </Route>

        <Route exact path='/providers'>
          <Pazirandegan />
        </Route>

        <Route exact path='/negaclub'>
          <Plugins />
        </Route>

        <Route exact path='/castes/:id'>
          <Castes />
        </Route>

        <Route exact path='/castes/:id/:id'>
          <Provider />
        </Route>

        <Route exact path='/castes/:id/provider/:id'>
          <SingleProvider />
        </Route>

        <Route exact path='/'>
          <Home />
        </Route>

        <Route exact path='*'>
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}

export default Public
