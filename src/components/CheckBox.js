import { Component, React } from 'react'
import { FaCheck } from 'react-icons/fa'
import tarh2 from '../img/tarh2.png'

const url = 'https://negaclub.ir/admin/SampleCodes/API/_getSampleCodes'

class CheckBox extends Component {
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
        'Content-Type': 'application/x-www-form-urlencoded',
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
      <div className='row  margintop'>
        <div className='col-12 order-2 order-md-1 col-lg-6  '>
          <h4 className='text mb-4'>انواع نمونه کد های وب سرویس ها</h4>
          <div className='text-right'>
            <div className='bar'></div>
          </div>

          <p className='text' style={{ fontSize: 'small' }}>
            پرتال جامع وب سرویس ایران برای سهولت استفاده جامعه برنامه نویسان
            برای تمامی وب سرویس ها نمونه کد های زبان های مختلف را قرار داده است
          </p>
          <div className='row d-flex justify-content-center'>
            {this.mapInfo(info)}
          </div>
        </div>

        <div className='col-12 order-1 order-md-2 col-lg-6 mt-5'>
          <img src={tarh2} at='tarh' className='img-w ' alt='img' />
        </div>
      </div>
    )
  }

  mapInfo = (info) => {
    return info.map((e) => this.buildDiv(e))
  }

  buildDiv = (e) => {
    return (
      <div
        key={e.sample_code_id}
        className='col-10 col-lg-5 col-md-5 col-sm-5 mx-1 text-right   box-bg mt-3'
      >
        <div className='row'>
          <p className='box-font  box-p col-10 mt-3'>{e.sample_code_name}</p>

          <div className='text-right col-2'>
            <FaCheck
              className='icon-color1'
              style={{ color: '#44ce6f' }}
              size={15}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default CheckBox
