/* eslint-disable jsx-a11y/alt-text */
import { Component, React } from 'react'
import { BsFillCloudFill } from 'react-icons/bs'

const url = 'https://negaclub.ir/admin/Infrastructures/API/_getInfrastructures'

class Box extends Component {
  state = {
    info: [],
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = async () => {
    const response = await fetch(url, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type
      }),
      body: 'token=test',
    })
    const data = await response.json()
    this.setState({ info: data.data })
  }

  render() {
    const {
      state: { info },
    } = this
    return (
      <div className='row my-5 justify-content-center mx-1'>
        {this.mapInfo(info)}
      </div>
    )
  }

  mapInfo = (info) => {
    return info.map((e) => this.buildDiv(e))
  }

  shadeColor(color, percent) {
    let R = parseInt(color.substring(1, 3), 16)
    let G = parseInt(color.substring(3, 5), 16)
    let B = parseInt(color.substring(5, 7), 16)

    R = parseInt((R * (100 + percent)) / 100)
    G = parseInt((G * (100 + percent)) / 100)
    B = parseInt((B * (100 + percent)) / 100)

    R = R < 255 ? R : 255
    G = G < 255 ? G : 255
    B = B < 255 ? B : 255

    let RR = R.toString(16).length == 1 ? '0' + R.toString(16) : R.toString(16)
    let GG = G.toString(16).length == 1 ? '0' + G.toString(16) : G.toString(16)
    let BB = B.toString(16).length == 1 ? '0' + B.toString(16) : B.toString(16)

    return '#' + RR + GG + BB
  }

  buildDiv = (e) => {
    return (
      <div
        key={e.id}
        className='col-lg-2 col-md-5 col-sm-5 col-12 text-center box mr-1 my-2  '
      >
        <div className=' d-flex justify-content-center'>
          <div
            className='bg-circle'
            style={{ background: this.shadeColor(e.color, 60) }}
          >
            <img
              src={e.icon}
              className='icon-color'
              style={{ color: this.shadeColor(e.color, -50) }}
            />
          </div>
        </div>

        <h6 className='mt-3'>{e.name}</h6>
        <p className='box-font'>{e.text}</p>
      </div>
    )
  }
}

export default Box
