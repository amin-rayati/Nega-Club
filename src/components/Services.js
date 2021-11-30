import { Component, React } from 'react'

import {
  FaCog,
  FaRegEnvelope,
  FaRegQuestionCircle,
  FaWindows,
  FaRegBell,
  FaMousePointer,
} from 'react-icons/fa'

const url = 'https://negaclub.ir/admin/Services/API/_getServices'

class Services extends Component {
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
      <div className=' my-5 '>
        <h4 className='text text-center mb-4' style={{ color: '#1d5e90' }}>
          خدمات ارزش افزوده
        </h4>
        <div>
          <div className='bar mx-auto'></div>
        </div>
        <p style={{ fontSize: '15px', textAlign: 'justify', direction: 'rtl' }}>
          مشتریان باشگاه نگاکلاب و سایر باشگاهها و اپلیکیشن های طرف قرارداد،
          علاوه بر استفاده از خدمات تخفیفی در شبکه گسترده پذیرندگان، می توانند
          از خدمات ارزش افزوده این مجموعه استفاده نمایند. برخی از این خدمات
          عبارتند از :
        </p>

        <div className='row d-flex justify-content-center'>
          {this.mapInfo(info)}
        </div>
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
        className='col-10 col-lg-5 col-md-5 col-sm-5 mx-1 text-center box-bg1 mt-3'
      >
        <div className='row py-4 px-3 text-center'>
          <div className='col-xl-9 order-xl-1 col-lg-9 order-lg-1 col-md-12 order-md-2 col-sm-12 order-sm-2 col-12 order-2 d-flex flex-column  mt-p'>
            <h6 className='text text-center'>{e.name}</h6>
            <p
              className='box-font  box-p mt-3'
              style={{
                fontSize: '15px',
                textAlign: 'justify',
                direction: 'rtl',
              }}
            >
              {e.text}
            </p>
          </div>

          <div className=' col-xl-3 order-xl-2 col-lg-3 order-xl-2 col-md-12  order-lg-2  order-md-1 col-sm-12 order-sm-1 col-12  order-1  box-right'>
            <div
              className='bg-circle'
              style={{ background: this.shadeColor(e.color, 60) }}
            >
              <img
                className='icon-color'
                src={e.icon}
                style={{ color: this.shadeColor(e.color, -50), width: '100%' }}
                alt='icon'
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Services
