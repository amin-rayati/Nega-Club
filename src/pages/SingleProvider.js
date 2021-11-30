import { React, useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import ReactStarsRating from 'react-awesome-stars-rating'
import plugin from '../img/plugin.png'
import Capture from '../img/Capture.PNG'
import { GiPriceTag } from 'react-icons/gi'
import { FaMedal } from 'react-icons/fa'
import premium from '../img/premium.png'
import { ImLocation2 } from 'react-icons/im'
import { FiPhoneCall } from 'react-icons/fi'
import { useLocation } from 'react-router-dom'
import { Cookies, useCookies } from 'react-cookie'
import Breadcrump from './Breadcrump'
import { useProductsContext } from '../context/ProductsProvider'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'
import ProviderSlider from './ProviderSlider'
import MapComponent from './Map'
import {
  AiFillStar,
  AiFillPhone,
  AiOutlineStar,
  AiOutlineComment,
} from 'react-icons/ai'
import { BsCalendarFill } from 'react-icons/bs'
import 'react-image-gallery/styles/css/image-gallery.css'
import ImageGallery from 'react-image-gallery'
import { Helmet } from 'react-helmet'
import Swal from 'sweetalert2'
import LoginModal from '../components/LoginModal'

import { AiOutlineClockCircle } from 'react-icons/ai'
import star from 'react-awesome-stars-rating/dist/star'
import Loading from './Loading'
import axios from 'axios'

const url = 'https://negaclub.ir/admin/Providers/API/_singleProvider?token=test'

const rateUrl =
  'https://negaclub.ir/admin/Providers/API/_rateProvider?token=test'

const SingleProvider = () => {
  const mapStyles = {
    width: '100%',
    height: '100%',
  }
  const { pathname } = useLocation()
  const workgroupId = pathname.split('/')[2]
  const providerId = pathname.split('/')[4]
  const {
    idCast,
    filterProvider,
    setFilterProvider,
    userData,
    setUserData,
    loginModal,
    loginModalClose,
    loginModalShow,
  } = useProductsContext()
  const [singleProvider, setSingleProvider] = useState('')
  const [cookies, setCookie, removeCookie] = useCookies(['user'])
  const [cookies3, setCookie3, removeCookie3] = useCookies(['castname'])
  const [cookies4, setCookie4, removeCookie4] = useCookies(['workname'])
  const [cookies5, setCookie5, removeCookie5] = useCookies(['provider'])
  const [starValue, setStarValue] = useState('')
  const [starValueCm, setStarValueCm] = useState(0)
  const [cmText, setCmText] = useState('')
  const [btnDisable, setBtnDisable] = useState(false)
  const [loading, setLoading] = useState(false)

  const [levelId, setLevelId] = useState()

  const getIndividualInfo = () => {
    axios
      .post(
        'https://negaclub.ir/admin/admin/Customers/API/_getCustomerData?token=test',
        {
          customerId: 0,
          customerMobile: cookies['user']['mobile'],
        },
        {
          headers: {
            token: 'test',
          },
        }
      )
      .then((response) => {
        setLevelId(response.data.data['level']['id'])
      })
      .catch((error) => {
        console.error(error)
      })
  }

  const handleCmChange = (e) => {
    setCmText(e.target.value)
  }

  const handleStarChange = async (value) => {
    setStarValueCm(value)
  }

  const rate = async () => {
    setLoading(true)
    if (userData) {
      try {
        const rawResponse = await fetch(rateUrl, {
          method: 'POST',
          headers: new Headers({
            'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type
          }),
          body: JSON.stringify({
            providerId: singleProvider['provider_code'],
            customerId: userData['id'],
            rate: starValueCm * 2,
            comment: cmText,
          }),
        })
        const content = await rawResponse.json()
        setLoading(false)
        console.log(content)
        // if (content.isDone) {
        //   setBtnDisable(true)
        //   Swal.fire({
        //     text: 'امتیاز شما ثبت شد',
        //     type: 'success',
        //   })
        // }
      } catch (error) {
        console.log(error)
      }
    } else {
      setLoading(true)
      Swal.fire({
        text: 'ابتدا باید وارد سایت شوید',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#1fb811',
        cancelButtonColor: '#ff8900',
        cancelButtonText: 'بعدا',
        confirmButtonText: 'ثبت نام',
      }).then((result) => {
        setLoading(false)
        if (result.value) {
          loginModalShow()
        }
      })
    }
  }

  const images = [
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
  ]

  const getSingleProvider = async () => {
    try {
      const rawResponse = await fetch(url, {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type
        }),
        body: JSON.stringify({
          providerId: providerId,
        }),
      })
      const content = await rawResponse.json()

      if (content.isDone) {
        setStarValue(content.data['rate'])
        setSingleProvider(content.data)
        setProviderName(content.data['senf_name'])
      }
    } catch (error) {
      console.log(error)
    }
  }

  const setProviderName = (name) => {
    setCookie3('provider', name, {
      path: '/',
    })
  }

  useEffect(() => {
    getSingleProvider()
    if (cookies['user']) {
      getIndividualInfo()
    }
  }, [pathname])

  return (
    <div className='container mt-5 px-0'>
      <div className=' m-t marginTop px-0'>
        <div className='text-center' style={{ backgroundColor: '#4a4848' }}>
          <h1 className='p-5' style={{ color: '#ffffff' }}>
            {singleProvider ? singleProvider['senf_name'] : null}
          </h1>
          <Helmet>
            <title>{singleProvider ? singleProvider['senf_name'] : null}</title>
          </Helmet>
        </div>
        <Breadcrump
          workgroup={cookies4['workname']}
          workid={workgroupId}
          idcast={idCast}
          cast={cookies3['castname']}
          provider={cookies5['provider']}
        />
      </div>

      <div className='justify-content-center px-2 mt-3'>
        <div
          className='col-lg-12 col-md-12 col-sm-12 col-12 '
          style={{
            background: '#ffffff',
            borderRadius: '15px',
            boxShadow: '0px 0px 12px 12px rgba(249 238 238 /50%)',
            padding: '20px',
          }}
        >
          <span
            class='badge span-badge '
            style={{
              backgroundColor: '#bf9b30',
              color: '#fff',
              width: '80px',
              height: '30px',
              fontSize: '20px',
            }}
          >
            {singleProvider ? singleProvider['discount_cash'] : null} % تخفیف
          </span>
          <div
            className='d-flex justify-content-right mt-comment-provider'
            style={{ justifyContent: 'right' }}
          >
            <p
              style={{
                margin: 'auto 15px auto auto',
              }}
            >
              تعداد بازدید {singleProvider['views']}
            </p>

            <div
              className='d-flex'
              style={{
                borderRadius: '5px',
                border: '1px solid #dcdcdc',
                width: 'fitcontent',
                padding: '5px',
                marginRight: '15px',
              }}
            >
              <ReactStarsRating size={15} isEdit={false} value={starValue} />
            </div>
            <h5
              style={{
                margin: 'auto 0 auto 0',
                fontSize: '15px',
                textAlign: 'right',
              }}
            >
              {singleProvider ? singleProvider['senf_name'] : null}
            </h5>
          </div>
          {/* {singleProvider ? singleProvider['discount_cash'] : null} % */}
          {levelId ? (
            <div className='mt-4 text-right' style={{ fontWeight: 'bolder' }}>
              <h4>
                {singleProvider ? singleProvider['senf_name'] : null}{' '}
                <span className='mx-2'>با</span>
                {levelId == '1'
                  ? singleProvider['discount_cash'] * (90 / 100)
                  : null}
                {levelId == '2'
                  ? singleProvider['discount_cash'] * (75 / 100)
                  : null}
                {levelId == '3'
                  ? singleProvider['discount_cash'] * (60 / 100)
                  : null}
                {levelId == '4'
                  ? singleProvider['discount_cash'] * (50 / 100)
                  : null}
                <span className='mr-2'>تخفیف</span>
              </h4>
            </div>
          ) : (
            <div className='mt-4 text-right' style={{ fontWeight: 'bolder' }}>
              <h4>
                {singleProvider ? singleProvider['senf_name'] : null} تا
                {singleProvider ? singleProvider['discount_cash'] : null} %
                تخفیف
              </h4>
            </div>
          )}
          <div className='d-flex mt-4' style={{ justifyContent: 'right' }}>
            <p className='mr-3'>
              {' '}
              {singleProvider ? singleProvider['main_street'] : null}
            </p>
            <ImLocation2 size={20} style={{ color: '#a0a0a0' }} />
          </div>
          <ImageGallery items={images} />
          <div className='mt-5 text-right' style={{ fontWeight: 'bolder' }}>
            <h1>روش های خرید</h1>
          </div>
          <div
            className='mt-5 text-right'
            style={{ fontWeight: 'bolder', borderBottom: 'dashed 1px #dcdcdc' }}
          >
            <h4>استفاده از نگاکارت و یا کارت های بانکی متصل به آن</h4>
          </div>
          <div
            style={{
              fontSize: '14px',
              paddingTop: ' 20px',
              margin: '0',
              position: 'relative',
              textAlign: 'right',
            }}
          >
            <p style={{ direction: 'rtl' }}>
              <span style={{ fontSize: '15px', fontWeight: '500' }}>
                ای خرید از این مجموعه میتوانید مبلغ خرید مورد نظر خود را بر روی
                دستگاه های کارتخوان منتخب باشگاه(پارسیان و به پرداخت) وارد کرده
                و تخفیف بطور خودکار اعمال میشود.
              </span>
            </p>
            <p style={{ direction: 'rtl' }}>
              <span style={{ fontSize: '15px', fontWeight: '500' }}>
                توجه داشته باشید استفاده از کارت های متفرقه و یا دستگاه های خارج
                از قرارداد این باشگاه امکان استفاده از تخفیف را از بین میبرد.
              </span>
            </p>
          </div>
          <div
            className='mt-5 text-right'
            style={{ fontWeight: 'bolder', borderBottom: 'dashed 1px #dcdcdc' }}
          >
            <h4>استفاده از اپلیکیشن نگاکلاب</h4>
          </div>
          <div
            style={{
              fontSize: '14px',
              paddingTop: ' 20px',
              margin: '0',
              position: 'relative',
              textAlign: 'right',
            }}
          >
            <p style={{ direction: 'rtl' }}>
              <span style={{ fontSize: '15px', fontWeight: '500' }}>
                در صورت نیاز میتوانید در اپ نگاکلاب فروشگاه موردنظر را انتخاب
                کرده و مبلغ مورد نظر را بصورت آنلاین پرداخت کنید. بدیهی است کارت
                مورد استفاده هنگام خرید آنلاین باید شرایط بند قبل را داشته باشد.
              </span>
            </p>
          </div>
          <div
            className='mt-5 text-right'
            style={{ fontWeight: 'bolder', borderBottom: 'dashed 1px #dcdcdc' }}
          >
            <h4>استفاده از بارکد نصب شده در فروشگاه</h4>
          </div>
          <div
            style={{
              fontSize: '14px',
              paddingTop: ' 20px',
              margin: '0',
              position: 'relative',
              textAlign: 'right',
            }}
          >
            <p style={{ direction: 'rtl' }}>
              <span style={{ fontSize: '15px', fontWeight: '500' }}>
                در هر فروشگاه یک بارکد متعلق به باشگاه وجود دارد که با اسکن آن
                به صفحه اختصاصی پرداخت به پذیرنده وارد میشوید و مطابق بند قبل
                میتوانید پرداخت را انجام دهید.{' '}
              </span>
            </p>
          </div>
          <div
            className='mt-4'
            style={{
              boxShadow: '0 0 12px 12px rgba(249 238 238 /50%)',
              borderRadius: '5px',
              backgroundColor: '#fff1ef',
              border: 'solid 1px #E54E63',
              padding: '30px 10px',
            }}
          >
            <h6 style={{ textAlign: 'center', direction: 'rtl' }}>
              توجه داشته باشید در پرداخت آنلاین مبلغ مورد نیاز را میتوانید علاوه
              بر کارت بانکی توسط کیف پول نیز پرداخت کنید.
            </h6>
          </div>
        </div>

        <div
          className='col-lg-12 col-md-12 col-sm-12 col-12  mt-3'
          style={{
            background: '#ffffff',
            borderRadius: '15px',
            boxShadow: '0px 0px 12px 12px rgba(249 238 238 /50%)',
            padding: '20px',
          }}
        >
          <div className='text-right'>
            <h5
              style={{
                margin: 'auto 0 auto 0',
                fontSize: '15px',
                textAlign: 'right',
              }}
            >
              اطلاعات {singleProvider ? singleProvider['senf_name'] : null}
            </h5>
          </div>

          <div
            className='row mt-5'
            style={{
              borderBottom: '1px solid #d9d9d9',
              justifyContent: 'right',
            }}
          >
            <div
              className='col-lg-6 col-md-10 col-sm-10 col-10  d-flex'
              style={{ justifyContent: 'right' }}
            >
              <p> 17 </p>
              <p className='mx-3'> تا </p>
              <p> 12 </p>
              <p
                style={{
                  color: '#787878',
                  marginRight: '15px',
                  marginLeft: '15px',
                }}
              >
                : ساعت کاری
              </p>

              <AiOutlineClockCircle style={{ color: '#787878' }} size={20} />
            </div>
          </div>

          <div
            className='d-flex mt-3'
            style={{
              borderBottom: '1px solid #d9d9d9',
              justifyContent: 'right',
            }}
          >
            <p>{singleProvider ? singleProvider['telephone'] : null}</p>
            <p style={{ marginRight: '15px', marginLeft: '15px' }}>
              {' '}
              : شماره تلفن
            </p>
            <AiFillPhone style={{ color: '#787878' }} size={20} />
          </div>

          <div
            className='d-flex mt-3'
            style={{
              borderBottom: '1px solid #d9d9d9',
              justifyContent: 'right',
            }}
          >
            <p>{singleProvider ? singleProvider['main_street'] : null}</p>
            <p style={{ marginRight: '15px', marginLeft: '15px' }}> : آدرس</p>
            <ImLocation2 style={{ color: '#787878' }} size={20} />
          </div>
          <div
            className='d-flex mt-3'
            style={{
              justifyContent: 'right',
            }}
          >
            <p style={{ marginRight: '15px', marginLeft: '15px' }}>: ثبت نظر</p>
            <AiOutlineComment style={{ color: '#787878' }} size={20} />
          </div>

          <div style={{ textAlign: 'right' }}>
            <ReactStarsRating
              size={15}
              onChange={handleStarChange}
              value={starValueCm}
            />

            <textarea
              value={cmText}
              onChange={handleCmChange}
              className='form-input-cm my-3'
              type='text'
              name='name'
              placeholder='متن نظر'
              style={{ height: '80px', width: 'inherit' }}
            ></textarea>
            <button
              className={
                btnDisable
                  ? 'd-none'
                  : 'login-btn px-3 hover-item btn btn- mb-3  '
              }
              onClick={rate}
            >
              {loading ? <Loading /> : 'ثبت نظر'}
            </button>
          </div>

          <h5
            className='mt-4'
            style={{
              margin: 'auto 0 auto 0',
              fontSize: '15px',
              textAlign: 'right',
            }}
          >
            موقعیت روی نقشه
          </h5>

          <div className='d-flex justify-content-end my-3 mx-3' style={{}}>
            <MapComponent />
          </div>
        </div>
      </div>

      <div className='col-lg-12 col-md-12 col-sm-12 col-12'>
        <h1
          className='my-4'
          style={{
            margin: 'auto 0 auto 0',
            fontSize: '18px',
            textAlign: 'right',
          }}
        >
          فروشگاه های مشابه
        </h1>
        <ProviderSlider className='mt-4' filterProvider={filterProvider} />
      </div>
    </div>
  )
}

export default SingleProvider
