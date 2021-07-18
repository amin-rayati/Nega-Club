import React from 'react'
import {
  Home,
  About,
  Articles,
  Contacts,
  Plugins,
  SingleProduct,
  WebServices,
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
        <Route path='/'>
          <Home />
        </Route>
        <Route path='/products:/1'>
          <SingleProduct />
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
