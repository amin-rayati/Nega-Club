import React from 'react'

import PositiveCallBack from '../pages/PositiveCallBack'
import NegativeCallBack from '../pages/NegativeCallBack'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
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
