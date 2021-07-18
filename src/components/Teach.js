import { Component, React } from 'react'
import web from '../img/web.png'
import api from '../img/api.png'
import dargah from '../img/dargah.png'

import { BsArrowLeft } from 'react-icons/bs'
import { FiCalendar } from 'react-icons/fi'

const url = 'https://negaclub.ir/admin/BlogPosts/API/_allBlogPosts'

class Teach extends Component {
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
    console.log(data.data)
  }

  render() {
    const {
      state: { info },
    } = this
    return (
      <div className='margintop'>
        <h4 className='text text-center mb-4'>
          آخرین های مطالب آموزشی و معرفی وب سرویس ها
        </h4>
        <div>
          <div className='bar mx-auto'></div>
        </div>
        <div className='my-5 '>
          <div className='row d-flex justify-content-center'>
            {this.mapInfo(info)}
          </div>
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
        key={e.id}
        className='col-lg-3 order-lg-1 col-md-12 order-md-3   col-sm-12 order-sm-3 col-12 order-3 mt-3'
      >
        <img src={e.image} className='th-img' alt='web' />
        <div className='th-btn d-flex flex-row'>
          <p className='m-0' style={{ color: '#fff', fontSize: '10px' }}>
            بهمن ۱۶, ۱۳۹۸
          </p>
          <FiCalendar className='ml-1' />
        </div>
        <div className='mt-2' style={{ textAlign: 'end' }}>
          <h3 className='title'> {e.name} </h3>
          <p className='mt-3' style={{ fontSize: '11px' }}>
            {e.shortText}
          </p>

          <BsArrowLeft
            className='mr-2'
            style={{ color: '#1d5e90' }}
            size={20}
          />
          <h6 className='title' style={{ fontSize: '10px' }}>
            ادامه مطالب
          </h6>
        </div>
      </div>
    )
  }
}

export default Teach
