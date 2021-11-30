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
    if (data.status === 200) {
      this.setState({ info: data.data })
    }
  }

  render() {
    const {
      state: { info },
    } = this
    return (
      <>
        <div className='row d-flex my-5 justify-content-center mx-1'>
          {this.mapInfo(info)}
        </div>
        <p
          className=' mt-5'
          style={{
            fontSize: '15px',
            textAlign: 'justify',
            direction: 'rtl',
            lineHeight: '30px',
          }}
        >
          گروه{' '}
          <a
            href='https://negarine.com/'
            className='mx-2'
            style={{ color: '#bf9b30', fontSize: '20px' }}
          >
            نگارینه
          </a>
          با سالها تجربه در حوزه راه اندازی باشگاه مشتریان، و همچنین راهبری
          باشگاههای مختلف در بخش اجرایی، بازرگانی و زیرساختی، و با در دست داشتن
          قراردادهای معتبر در بخشهای مالی، اعتباری، گردشگری، بیمه، خدماتی و ...
          توانسته است رویکردی جدید در هم افزایی خدمات و مشتریان باشگاههای مختلف
          ایجاد کرده تا بصورت کاملا برد برد، هر باشگاهی بتواند از خدمات و
          مشتریان باشگاههای دیگر استفاده کرده و با صرف کمترین هزینه، بیشترین
          فروش و افزایش مشتری و وفادارسازی را برای هر فروشگاه و به تبع آن باشگاه
          مشتریان به ارمغان آورد. برای رسیدن به این منظور نگارینه خدمات متعددی
          را برای باشگاه های طرف قرارداد، پذیرندگان (فروشگاههای طرف قرارداد هر
          باشگاه) و دارندگان (مشتریان هر پذیرنده، باشگاه و یا سیستمهای نگارینه)
          در نظر گرفته است که در این سند به برخی از این ویژگی ها، اشاره خواهد
          شد.
        </p>
      </>
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
        className='col-lg-3 col-md-5 col-sm-5 col-12 text-center box  box-m  mb-2  '
      >
        <div className=' d-flex justify-content-center'>
          <div
            className='bg-circle'
            style={{ background: this.shadeColor(e.color, 60) }}
          >
            <img
              src={e.icon}
              className='icon-color'
              style={{ color: this.shadeColor(e.color, -50), width: '100%' }}
            />
          </div>
        </div>

        <h6 className='mt-5'>{e.name}</h6>
        <p
          className='box-font mt-5'
          style={{
            fontSize: '13px',
            textAlign: 'justify',
            direction: 'rtl',
            border: '1px solid #ece2e2',
            padding: '10px',
            borderRadius: '12px',
            height: '200px',
          }}
        >
          {e.text}
        </p>
      </div>
    )
  }
}

export default Box
