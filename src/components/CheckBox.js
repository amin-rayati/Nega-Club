import { Component, React } from 'react'
import { FaCheck } from 'react-icons/fa'
import tarh2 from '../img/tarh2.png'
import { Tooltip, Overlay, OverlayTrigger, Button } from 'react-bootstrap'
import { FaDownload, FaRobot, FaHeadphones, FaTelegram } from 'react-icons/fa'
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
          <h4 className='text mb-4' style={{ color: '#1d5e90' }}>
            مزیت های عضویت در باشگاه مشتریان نگاکلاب
          </h4>
          <div className='text-right'>
            <div className='bar'></div>
          </div>

          <p
            className='text'
            style={{
              fontSize: '15px',
              textAlign: 'justify',
              direction: 'rtl',
              lineHeight: '30px',
            }}
          >
            دارندگان، یا همان مشتریانی که عضو باشگاه مشتریان نگاکلاب و یا دیگر
            باشگاههایی که به واسطه سیستم تجمیع باشگاههای نگاهاب، هستند، میتوانند
            از خدمات نگارینه استفاده کنند. برای عضویت در نگاکلاب کافیست از طریق
            اپلیکیشن، وبسایت، اسکن بارکد و ابزارهای دیگری که در نظر گرفته شده
            است، اقدام کرد. عضویت در باشگاه نگاکلاب کاملا رایگان بوده و مشتری
            هیچگونه هزینه ای برای استفاده از خدمات این باشگاه نخواهد پرداخت. هر
            چند ممکن است باشگاه های دیگری که بصورت تخصصی در حوزه های خاص برای
            خود فعالیت میکنند برای سیستم خود حق عضویت تعریف کنند.
          </p>
          <div className='row d-flex justify-content-center'>
            <div className='row d-flex justify-content-center'>
              {info &&
                info.map((e) => {
                  return (
                    <div
                      key={e.sample_code_id}
                      className='col-10 col-lg-5 col-md-5 col-sm-5 mx-1 text-right   box-bg mt-3'
                    >
                      <OverlayTrigger
                        placement={'top'}
                        overlay={<Tooltip>{e.sample_code_detail}</Tooltip>}
                      >
                        <div className='row' style={{ cursor: 'pointer' }}>
                          <p
                            className='box-font  box-p col-10 mt-3'
                            style={{ fontSize: '15px' }}
                          >
                            {e.sample_code_name}
                          </p>

                          <div className='text-right col-2'>
                            <FaCheck
                              className='icon-color1'
                              style={{ color: '#be9b30' }}
                              size={15}
                            />
                          </div>
                        </div>
                      </OverlayTrigger>
                    </div>
                  )
                })}
            </div>
          </div>
        </div>

        <div className='col-12 order-1 order-md-2 col-lg-6 '>
          <img src={tarh2} at='tarh' className='img-w ' alt='img' />
        </div>
      </div>
    )
  }
}

export default CheckBox
