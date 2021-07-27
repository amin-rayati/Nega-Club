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
} from './pages/index'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavbarComponent from './components/Navbar'
import Footer from './components/Footer'

import './App.css'

function App() {
  return (
    <Router>
      <NavbarComponent />
      <Switch>
        <Route exact path='/about'>
          <About />
        </Route>
        <Route exact path='/articles'>
          <Articles />
        </Route>
        <Route exact path='/contacts'>
          <Contacts />
        </Route>
        <Route exact path='/plugins'>
          <Plugins />
        </Route>
        <Route exact path='/blogpost/:id'>
          <SingleProduct />
        </Route>
        <Route exact path='/webservices'>
          <WebServices />
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

export default App
