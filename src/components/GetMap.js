import React, { Component } from 'react'
import { render } from 'react-dom'

class mappp extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(function (position) {})
  }

  render() {
    return (
      <div style={{ marginTop: '500px' }}>
        <h4>Using geolocation JavaScript API in React</h4>
      </div>
    )
  }
}

export default mappp
