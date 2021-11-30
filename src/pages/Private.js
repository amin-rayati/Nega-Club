import React from 'react'
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
} from '../pages/index'

import Provider from '../pages/Provider'
import SingleProvider from '../pages/SingleProvider'
import PositiveCallBack from '../pages/PositiveCallBack'
import NegativeCallBack from '../pages/NegativeCallBack'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavbarComponent from '../components/Navbar'
import Footer from '../components/Footer'
import '../App.css'

function Private() {
  return (
    <Router>
      <Switch>
        <Route exact path='/callback/Positive'>
          <PositiveCallBack />
        </Route>
        <Route exact path='/callback/Negative'>
          <NegativeCallBack />
        </Route>
      </Switch>
    </Router>
  )
}

export default Private
