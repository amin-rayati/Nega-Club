import { React, useState, useEffect } from 'react'
import { useProductsContext } from '../context/ProductsProvider'
import Loader from '../pages/Loader'
import Negacart from './Negacart'
import axios from 'axios'
import { Button } from 'react-bootstrap'
import nega1 from '../img/nega1.png'
import nega2 from '../img/nega2.png'
import nega3 from '../img/nega3.png'
import nega4 from '../img/nega4.png'
import Table from 'react-bootstrap/Table'
import rate from '../img/454545.png'
import gift from '../img/787878.png'
import { Helmet } from 'react-helmet'

const Pazirandegan = () => {
  const [Loading, setLoading] = useState(false)
  const [normalColor, setNormalColor] = useState(false)
  const [bronzeColor, setBronzeColor] = useState(false)
  const [silverColor, setSiverColor] = useState(false)
  const [goldColor, setGoldColor] = useState(false)

  const [normalColor1, setNormalColor1] = useState(false)
  const [bronzeColor1, setBronzeColor1] = useState(false)
  const [silverColor1, setSiverColor1] = useState(false)
  const [goldColor1, setGoldColor1] = useState(false)
  const nummber = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  const convert = (string) => {
    if (string.includes('ريال')) {
      return string.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    } else {
      return string.split('-').map(function (item, idx) {
        return (
          <span key={idx}>
            {item}
            <br />
          </span>
        )
      })
    }
  }

  const [table, setTable] = useState('')
  const [table2, setTable2] = useState('')

  const hoverNormal = () => {
    setNormalColor(true)
    setBronzeColor(false)
    setSiverColor(false)
    setGoldColor(false)
  }
  const hoverBronze = () => {
    setNormalColor(false)
    setBronzeColor(true)
    setSiverColor(false)
    setGoldColor(false)
  }
  const hoverSilver = () => {
    setNormalColor(false)
    setBronzeColor(false)
    setSiverColor(true)
    setGoldColor(false)
  }
  const hoverGold = () => {
    setNormalColor(false)
    setBronzeColor(false)
    setSiverColor(false)
    setGoldColor(true)
  }

  const leaveNormal = () => {
    setNormalColor(false)
  }
  const leaveBronze = () => {
    setBronzeColor(false)
  }
  const leaveSilver = () => {
    setSiverColor(false)
  }
  const leaveGold = () => {
    setGoldColor(false)
  }

  const hoverNormal1 = () => {
    setNormalColor1(true)
    setBronzeColor1(false)
    setSiverColor1(false)
    setGoldColor1(false)
  }
  const hoverBronze1 = () => {
    setNormalColor1(false)
    setBronzeColor1(true)
    setSiverColor1(false)
    setGoldColor1(false)
  }
  const hoverSilver1 = () => {
    setNormalColor1(false)
    setBronzeColor1(false)
    setSiverColor1(true)
    setGoldColor1(false)
  }
  const hoverGold1 = () => {
    setNormalColor1(false)
    setBronzeColor1(false)
    setSiverColor1(false)
    setGoldColor1(true)
  }

  const leaveNormal1 = () => {
    setNormalColor1(false)
  }
  const leaveBronze1 = () => {
    setBronzeColor1(false)
  }
  const leaveSilver1 = () => {
    setSiverColor1(false)
  }
  const leaveGold1 = () => {
    setGoldColor1(false)
  }

  const getTable = () => {
    axios
      .post(
        'https://negaclub.ir/admin/GetPoints/API/_getPointsTable?token=test',

        {
          headers: {
            token: 'test',
          },
        }
      )

      .then((response) => {
        console.log(response)
        if (response.data.isDone) {
          setTable(response.data.data)
        }
      })
      .catch((error) => {
        console.error(error)
      })
  }
  const getTable2 = () => {
    axios
      .post(
        'https://negaclub.ir/admin/ProviderServices/API/_getTable?token=test',

        {
          headers: {
            token: 'test',
          },
        }
      )

      .then((response) => {
        if (response.data.isDone) {
          setTable2(response.data.data)
        }
      })
      .catch((error) => {
        console.error(error)
      })
  }

  useEffect(() => {
    getTable()
    getTable2()
  }, [])

  setTimeout(() => {
    setLoading(false)
  }, 1000)

  if (Loading) {
    return <Loader />
  }
  return (
    <div className='mt-5'>
      <div className='container m-t marginTop px-0'>
        <div className='text-center'>
          <h1
            className='p-5'
            style={{
              backgroundColor: '#4a4848',
              color: '#ffffff',
            }}
          >
            پذیرندگان نگاکلاب
          </h1>
          <Helmet>
            <title>پذیرندگان نگاکلاب</title>
          </Helmet>
          {/* <div>
            <div className='bar mx-auto'></div>
          </div> */}
        </div>
      </div>

      <div className='px-3 container m-t'>
        <p
          className='text my-3 '
          style={{
            fontSize: '15px',
            textAlign: 'justify',
            direction: 'rtl',
            lineHeight: '30px',
          }}
        >
          منظور از پذیرندگان، فروشگاههایی می باشند که عضو باشگاه مشتریان نگاکلاب
          و یا دیگر باشگاههایی که به واسطه سیستم تجمیع باشگاههای نگاهاب میتوانند
          از خدمات نگارینه استفاده کنند. عضویت در شبکه باشگاه پذیرندگان نگاکلاب
          و سایر باشگاههای طرف قرارداد، میتواند جذابیتهای زیادی برای فروشندگان و
          کسب و کارها ایجاد کند که برخی از آنها به شرح زیر می باشند:
        </p>
        <ul style={{ direction: 'rtl' }}>
          <li className='mt-3' style={{ textAlign: 'right' }}>
            افزایش فروش با توجه به مشتریان متعدد در باشگاه های طرف قرارداد{' '}
          </li>
          <li className='mt-3' style={{ textAlign: 'right' }}>
            دریافت دستگاه کارتخوان بانکی عضو شتاب از psp های مطرح و معتبر کشور
            بدون نیاز به سپرده گذاری و زمانهای طولانی
          </li>
          <li className='mt-3' style={{ textAlign: 'right' }}>
            حضور در جشنواره های متعدد و افزایش مشتریان
          </li>
          <li className='mt-3' style={{ textAlign: 'right' }}>
            تبلیغات در نرم افزارها و سایتهای باشگاه مشتریان طرف قرارداد
          </li>
          <li className='mt-3' style={{ textAlign: 'right' }}>
            امکان دریافت نرم افزار یکپارچه مدیریت مالی{' '}
          </li>
          <li className='mt-3' style={{ textAlign: 'right' }}>
            امکان دریافت نرم افزار مدیریت ارتباط با مشتریان اختصاصی
          </li>
          <li className='mt-3' style={{ textAlign: 'right' }}>
            امکان دریافت پنل اختصاصی ارسال پیامک
          </li>
          <li className='mt-3' style={{ textAlign: 'right' }}>
            امکان دریافت پنل اختصاصی ارسال پیام صوتی
          </li>
          <li className='mt-3' style={{ textAlign: 'right' }}>
            امکان دریافت باشگاه مشتریان اختصاصی
          </li>
          <li className='mt-3' style={{ textAlign: 'right' }}>
            امکان دریافت پنل کاربری برای فروش آنلاین محصولات در نگااپ
          </li>
          <li className='mt-3' style={{ textAlign: 'right' }}>
            امکان دریافت سایت فروشگاهی اختصاصی
          </li>
          <li className='mt-3' style={{ textAlign: 'right' }}>
            امکان دریافت اپلیکیشن اختصاصی
          </li>
          <li className='mt-3' style={{ textAlign: 'right' }}>
            امکان معرفی محصولات، خدمات و پروموشن ها به تمام مشتریان باشگاهها
            همراه با فیلتر های هوشمند انتخاب مشتریان
          </li>
          <li className='mt-3' style={{ textAlign: 'right' }}>
            استفاده از پنل اختصاصی اطلاع رسانی به محدوده وسیع مشتریان
          </li>
          <li className='mt-3' style={{ textAlign: 'right' }}>
            امکان حضور در استارت آپ ها اختصاصی نگارینه
          </li>
          <li className='mt-3' style={{ textAlign: 'right' }}>
            امکان صدور کارتهای اختصاصی وفاداری مشتریان عضو شبکه شتاب
          </li>
          <li className='mt-3' style={{ textAlign: 'right' }}>
            امکان استفاده از خدمات گسترده باشگاه بعنوان دارنده کارت
          </li>
          <li className='mt-3' style={{ textAlign: 'right' }}>
            امکان دریافت نگاکارت رایگان با توجه به درصد تخفیف ارائه شده در
            قرارداد
          </li>
          <li className='mt-3' style={{ textAlign: 'right' }}>
            امکان استفاده از خدمات فروش اعتباری
          </li>
          <li className='mt-3' style={{ textAlign: 'right' }}>
            امکان استفاده از خدمات فروش اقساطی
          </li>
          <li className='mt-3' style={{ textAlign: 'right' }}>
            و ...
          </li>
        </ul>
        <p
          className='text mb-3 '
          style={{
            fontSize: '15px',
            textAlign: 'justify',
            direction: 'rtl',
            lineHeight: '30px',
          }}
        >
          بدیهی است جهت حضور و استفاده از شرایط فوق، اولین قدم، اختصاص درصدی
          تخفیف برای مشتریان باشگاه خواهد بود که بخشی از این درصد، بصورت تخفیف
          آنی و یا بازگشت اعتبار به مشتری اختصاص داده شده و این تخفیف باعث
          افزایش مراجعات و خریدها خواهد شده و عملا شعار سود کمتر، فروش بیشتر،
          محقق خواهد شد.
        </p>

        <hr className='mt-3' />
        <div className='container m-t'>
          <h4
            className='text text-center mb-4 mt-5'
            style={{ color: '#1d5e90', fontSize: '15px' }}
          >
            عضویت و رده بندی پذیرندگان
          </h4>

          <div>
            <div className='bar mx-auto'></div>
          </div>
          <p
            className='text mb-3'
            style={{
              fontSize: '15px',
              textAlign: 'justify',
              direction: 'rtl',
              lineHeight: '30px',
            }}
          >
            عضویت پذیرندگان در باشگاه مشتریان نگاکلاب، مستلزم عقد قرارداد با
            شرکت و ارائه مستندات و مدارک لازم جهت دریافت دستگاه کارتخوان می
            باشد. در قرارداد فیمابین هر پذیرنده متعهد می شود، کالا یا حدمات خود
            را با درصدی تخفیف در اختیار مشتریان معرفی شده توسط باشگاه قرار دهد.
            واحد تحقیق و توسعه شرکت، با صرف زمان و هزینه زیاد و تحقیقات میدانی
            در شهرهای مختلف، و بررسی میزان سود اصناف مختلف، برای هر صنف درصد
            تخفیف متعادلی را در نظر گرفته است که این تخفیف باعث افزایش فروش و
            دریافت خدمات متعددی خواهد شد که در نهایت منجر به سودآوری بیشتر برای
            هر پذیرنده می گردد.
          </p>
          <p
            className='text mb-3'
            style={{
              fontSize: '15px',
              textAlign: 'justify',
              direction: 'rtl',
              lineHeight: '30px',
            }}
          >
            بخشی از مبلغ تخفیف در نظر گرفته شده در قرارداد، بعنوان کارمزد برای
            شرکت ارائه دهنده دستگاه کارتخوان (PSP) و شرکت نگارینه منظور شده و
            الباقی بعنوان تخفیف آنی، بازگشت اعتبار، پروموشن ها و قرعه کشی های
            مختلف در اختیار مشتری قرار میگیرد تا علاوه بر لذت خریدی ارزانتر،
            وفاداری بیشتری به باشگاه و پذیرندگان آن پیدا کند.
          </p>
          <div
            className='text-center mt-5'
            style={{ width: '100%', overflow: 'auto', direction: 'rtl' }}
          >
            <Table hover>
              <thead>
                <tr>
                  <th>درجه پذیرنده</th>

                  {/* <th>
                  <h6 style={{ fontSize: '15px', fontWeight: 'bold' }}>
                    گروه های کاری با بیش از 15 % تخفیف
                  </h6>
                </th> */}
                  <th>
                    <h6 style={{ fontSize: '15px', fontWeight: 'bold' }}>
                      درصد تخفیف
                    </h6>
                  </th>
                </tr>
              </thead>
              <tbody>
                <>
                  <tr>
                    <td
                      className='p-4'
                      style={{
                        color: '#02a7dc',
                        verticalAlign: 'middle',
                        textAlign: '-webkit-center',
                      }}
                    >
                      عادی
                    </td>

                    <td
                      className='p-4'
                      style={{
                        verticalAlign: 'middle',
                        textAlign: '-webkit-center',
                      }}
                    >
                      تا 50% کف تخفیف
                    </td>
                  </tr>
                  <tr>
                    <td
                      className='p-4'
                      style={{
                        color: '#c88348',
                        verticalAlign: 'middle',
                        textAlign: '-webkit-center',
                      }}
                    >
                      برنزی
                    </td>

                    <td
                      className='p-4'
                      style={{
                        verticalAlign: 'middle',
                        textAlign: '-webkit-center',
                      }}
                    >
                      تا 70% کف تخفیف
                    </td>
                  </tr>
                  <tr>
                    <td
                      className='p-4'
                      style={{
                        verticalAlign: 'middle',
                        textAlign: '-webkit-center',
                        color: '#97a0a5',
                      }}
                    >
                      نقره ای
                    </td>

                    <td
                      className='p-4'
                      style={{
                        verticalAlign: 'middle',
                        textAlign: '-webkit-center',
                      }}
                    >
                      تا 100% کف تخفیف
                    </td>
                  </tr>
                  <tr>
                    <td
                      className='p-4'
                      style={{
                        verticalAlign: 'middle',
                        textAlign: '-webkit-center',
                        color: '#d0a74c',
                      }}
                    >
                      طلایی
                    </td>

                    <td
                      className='p-4'
                      style={{
                        verticalAlign: 'middle',
                        textAlign: '-webkit-center',
                      }}
                    >
                      بیش از 100% کف تخفیف
                    </td>
                  </tr>
                </>
              </tbody>
            </Table>
          </div>

          <hr style={{ marginTop: '30px' }} />
        </div>

        <div className='container m-t'>
          <h4
            className='text text-center mb-4 mt-5'
            style={{ color: '#1d5e90', fontSize: '15px' }}
          >
            روش های دریافت امتیاز
          </h4>

          <div>
            <div className='bar mx-auto'></div>
          </div>

          <div
            className='text-center mt-5 col-lg-12 col-md-12 col-sm-12 col-12'
            style={{ overflow: 'auto', direction: 'rtl' }}
          >
            <Table hover>
              <thead>
                <tr>
                  <th>شرح عملیات</th>
                  <th
                    style={{ cursor: 'pointer' }}
                    onMouseEnter={hoverNormal}
                    onMouseLeave={leaveNormal}
                  >
                    <h6 style={{ fontSize: '15px', fontWeight: 'bold' }}>
                      عادی
                    </h6>
                    <div className='text-center justify-content-center '>
                      <div
                        style={{
                          background: '#02a7dc',
                          width: '45%',
                          height: '55px',
                          borderRadius: '50%',
                          margin: 'auto',
                        }}
                        className='d-block table-circle'
                      ></div>
                    </div>
                  </th>
                  <th
                    style={{ cursor: 'pointer' }}
                    onMouseEnter={hoverBronze}
                    onMouseLeave={leaveBronze}
                  >
                    <h6 style={{ fontSize: '15px', fontWeight: 'bold' }}>
                      برنزی
                    </h6>
                    <div className='text-center justify-content-center '>
                      <div
                        style={{
                          background: '#c88348',
                          width: '45%',
                          height: '55px',
                          borderRadius: '50%',
                          margin: 'auto',
                        }}
                        className='d-block table-circle'
                      ></div>
                    </div>
                  </th>
                  <th
                    style={{ cursor: 'pointer' }}
                    onMouseEnter={hoverSilver}
                    onMouseLeave={leaveSilver}
                  >
                    <h6 style={{ fontSize: '14px', fontWeight: 'bold' }}>
                      نقره‌‌ای
                    </h6>
                    <div className='text-center justify-content-center '>
                      <div
                        style={{
                          background: '#97a0a5',
                          width: '45%',
                          height: '55px',
                          borderRadius: '50%',
                          margin: 'auto',
                        }}
                        className='d-block table-circle'
                      ></div>
                    </div>
                  </th>
                  <th
                    style={{ cursor: 'pointer' }}
                    onMouseEnter={hoverGold}
                    onMouseLeave={leaveGold}
                  >
                    <h6 style={{ fontSize: '15px', fontWeight: 'bold' }}>
                      طلایی
                    </h6>
                    <div className='text-center justify-content-center '>
                      <div
                        style={{
                          background: '#d0a74c',
                          width: '45%',
                          height: '55px',
                          borderRadius: '50%',
                          margin: 'auto',
                        }}
                        className='d-block table-circle'
                      ></div>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <>
                  {table &&
                    table.map((e) => {
                      return (
                        <>
                          <tr>
                            <td
                              className='py-4'
                              style={{
                                verticalAlign: 'middle',
                                textAlign: '-webkit-center',
                              }}
                            >
                              {e.get_point_title}
                            </td>
                            <td
                              onMouseEnter={hoverNormal}
                              onMouseLeave={leaveNormal}
                              className='py-4'
                              style={
                                !normalColor
                                  ? {
                                      verticalAlign: 'middle',
                                      textAlign: '-webkit-center',
                                      width: '15%',
                                      cursor: 'pointer',
                                    }
                                  : {
                                      verticalAlign: 'middle',
                                      textAlign: '-webkit-center',
                                      width: '15%',
                                      backgroundColor: '#02a7dc',
                                      color: '#ffffff',
                                      cursor: 'pointer',
                                    }
                              }
                            >
                              <div className='status-span'>
                                <span
                                  style={{
                                    borderRadius: '5px',
                                    padding: '6px',
                                    width: '15%',
                                  }}
                                >
                                  {e.get_point_normal}
                                </span>
                              </div>
                            </td>
                            <td
                              onMouseEnter={hoverBronze}
                              onMouseLeave={leaveBronze}
                              className='py-4'
                              style={
                                !bronzeColor
                                  ? {
                                      verticalAlign: 'middle',
                                      textAlign: '-webkit-center',
                                      width: '15%',
                                      cursor: 'pointer',
                                    }
                                  : {
                                      verticalAlign: 'middle',
                                      textAlign: '-webkit-center',
                                      width: '15%',
                                      backgroundColor: '#c88348',
                                      color: '#ffffff',
                                      cursor: 'pointer',
                                    }
                              }
                            >
                              <div className='status-span'>
                                <span
                                  style={{
                                    borderRadius: '5px',
                                    padding: '6px',
                                    width: '15%',
                                  }}
                                >
                                  {e.get_point_bronze}
                                </span>
                              </div>
                            </td>
                            <td
                              onMouseEnter={hoverSilver}
                              onMouseLeave={leaveSilver}
                              className='py-4'
                              style={
                                !silverColor
                                  ? {
                                      verticalAlign: 'middle',
                                      textAlign: '-webkit-center',
                                      width: '15%',
                                      cursor: 'pointer',
                                    }
                                  : {
                                      verticalAlign: 'middle',
                                      textAlign: '-webkit-center',
                                      width: '15%',
                                      backgroundColor: '#97a0a5',
                                      color: '#ffffff',
                                      cursor: 'pointer',
                                    }
                              }
                            >
                              <div className='status-span'>
                                <span
                                  style={{
                                    borderRadius: '5px',
                                    padding: '6px',
                                    width: '15%',
                                  }}
                                >
                                  {e.get_point_silver}
                                </span>
                              </div>
                            </td>
                            <td
                              onMouseEnter={hoverGold}
                              onMouseLeave={leaveGold}
                              className='py-4'
                              style={
                                !goldColor
                                  ? {
                                      verticalAlign: 'middle',
                                      textAlign: '-webkit-center',
                                      width: '15%',
                                      cursor: 'pointer',
                                    }
                                  : {
                                      verticalAlign: 'middle',
                                      textAlign: '-webkit-center',
                                      width: '15%',
                                      backgroundColor: '#d0a74c',
                                      color: '#ffffff',
                                      cursor: 'pointer',
                                    }
                              }
                            >
                              <div className='status-span'>
                                <span
                                  style={{
                                    borderRadius: '5px',
                                    padding: '6px',
                                    width: '15%',
                                  }}
                                >
                                  {e.get_point_gold}
                                </span>
                              </div>
                            </td>
                          </tr>
                        </>
                      )
                    })}
                </>
              </tbody>
            </Table>
          </div>

          <hr style={{ marginTop: '30px' }} />
        </div>

        <div className='container m-t'>
          <div className='text-center'>
            <h3 className='p-5' style={{ color: '#1d5e90', fontSize: '15px' }}>
              مزایای عضویت در باشگاه پذیرندگان
            </h3>
            <div>
              <div className='bar mx-auto'></div>
            </div>
            <p
              className='text mb-3 '
              style={{
                fontSize: '15px',
                textAlign: 'justify',
                direction: 'rtl',
                lineHeight: '30px',
              }}
            >
              با توجه به درجه بندی های فوق، روشهای متنوعی برای جذب مشتری،
              بالابردن فروش و مشارکت در درآمد نگاکلاب برای پذیرندگان وجود خواهد
              داشت که در ادامه به برخی از آنها اشاره می شود:
            </p>
          </div>

          <div
            className='text-center mt-5 col-lg-12 col-md-12 col-sm-12 col-12'
            style={{ overflow: 'auto', direction: 'rtl' }}
          >
            <Table hover>
              <thead>
                <tr>
                  <th>شرح خدمات</th>
                  <th
                    style={{ cursor: 'pointer' }}
                    onMouseEnter={hoverNormal1}
                    onMouseLeave={leaveNormal1}
                  >
                    <h6 style={{ fontSize: '15px', fontWeight: 'bold' }}>
                      عادی
                    </h6>
                    <div className='text-center justify-content-center '>
                      <div
                        style={{
                          background: '#02a7dc',
                          width: '45%',
                          height: '55px',
                          borderRadius: '50%',
                          margin: 'auto',
                        }}
                        className='d-block table-circle2'
                      ></div>
                    </div>
                  </th>
                  <th
                    style={{ cursor: 'pointer' }}
                    onMouseEnter={hoverBronze1}
                    onMouseLeave={leaveBronze1}
                  >
                    <h6 style={{ fontSize: '15px', fontWeight: 'bold' }}>
                      برنزی
                    </h6>
                    <div className='text-center justify-content-center '>
                      <div
                        style={{
                          background: '#c88348',
                          width: '45%',
                          height: '55px',
                          borderRadius: '50%',
                          margin: 'auto',
                        }}
                        className='d-block table-circle1'
                      ></div>
                    </div>
                  </th>
                  <th
                    style={{ cursor: 'pointer' }}
                    onMouseEnter={hoverSilver1}
                    onMouseLeave={leaveSilver1}
                  >
                    <h6 style={{ fontSize: '14px', fontWeight: 'bold' }}>
                      نقره‌‌ای
                    </h6>
                    <div className='text-center justify-content-center'>
                      <div
                        style={{
                          background: '#97a0a5',
                          width: '45%',
                          height: '55px',
                          borderRadius: '50%',
                          margin: 'auto',
                        }}
                        className='d-block table-circle1'
                      ></div>
                    </div>
                  </th>
                  <th
                    style={{ cursor: 'pointer' }}
                    onMouseEnter={hoverGold1}
                    onMouseLeave={leaveGold1}
                  >
                    <h6 style={{ fontSize: '15px', fontWeight: 'bold' }}>
                      طلایی
                    </h6>
                    <div className='text-center justify-content-center '>
                      <div
                        style={{
                          background: '#d0a74c',
                          width: '45%',
                          height: '55px',
                          borderRadius: '50%',
                          margin: 'auto',
                        }}
                        className='d-block table-circle1'
                      ></div>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <>
                  {table2 &&
                    table2.map((e) => {
                      return (
                        <>
                          <tr>
                            <td
                              className='py-4'
                              style={{
                                verticalAlign: 'middle',
                                textAlign: '-webkit-center',
                              }}
                            >
                              {e.provider_service_title}
                            </td>
                            <td
                              onMouseEnter={hoverNormal1}
                              onMouseLeave={leaveNormal1}
                              className='py-4'
                              style={
                                !normalColor1
                                  ? {
                                      verticalAlign: 'middle',
                                      textAlign: '-webkit-center',
                                      width: '15%',
                                      cursor: 'pointer',
                                    }
                                  : {
                                      verticalAlign: 'middle',
                                      textAlign: '-webkit-center',
                                      width: '15%',
                                      backgroundColor: '#02a7dc',
                                      color: '#ffffff',
                                      cursor: 'pointer',
                                    }
                              }
                            >
                              <div className='status-span'>
                                <span
                                  style={{
                                    borderRadius: '5px',
                                    padding: '6px',
                                    width: '15%',
                                  }}
                                >
                                  {convert(e.provider_service_normal)}
                                </span>
                              </div>
                            </td>
                            <td
                              onMouseEnter={hoverBronze1}
                              onMouseLeave={leaveBronze1}
                              className='py-4'
                              style={
                                !bronzeColor1
                                  ? {
                                      verticalAlign: 'middle',
                                      textAlign: '-webkit-center',
                                      width: '15%',
                                      cursor: 'pointer',
                                    }
                                  : {
                                      verticalAlign: 'middle',
                                      textAlign: '-webkit-center',
                                      width: '15%',
                                      backgroundColor: '#c88348',
                                      color: '#ffffff',
                                      cursor: 'pointer',
                                    }
                              }
                            >
                              <div className='status-span'>
                                <span
                                  style={{
                                    borderRadius: '5px',
                                    padding: '6px',
                                    width: '15%',
                                  }}
                                >
                                  {convert(e.provider_service_bronze)}
                                </span>
                              </div>
                            </td>
                            <td
                              onMouseEnter={hoverSilver1}
                              onMouseLeave={leaveSilver1}
                              className='py-4'
                              style={
                                !silverColor1
                                  ? {
                                      verticalAlign: 'middle',
                                      textAlign: '-webkit-center',
                                      width: '15%',
                                      cursor: 'pointer',
                                    }
                                  : {
                                      verticalAlign: 'middle',
                                      textAlign: '-webkit-center',
                                      width: '15%',
                                      backgroundColor: '#97a0a5',
                                      color: '#ffffff',
                                      cursor: 'pointer',
                                    }
                              }
                            >
                              <div className='status-span'>
                                <span
                                  style={{
                                    borderRadius: '5px',
                                    padding: '6px',
                                    width: '15%',
                                  }}
                                >
                                  {convert(e.provider_service_silver)}
                                </span>
                              </div>
                            </td>
                            <td
                              onMouseEnter={hoverGold1}
                              onMouseLeave={leaveGold1}
                              className='py-4'
                              style={
                                !goldColor1
                                  ? {
                                      verticalAlign: 'middle',
                                      textAlign: '-webkit-center',
                                      width: '15%',
                                      cursor: 'pointer',
                                    }
                                  : {
                                      verticalAlign: 'middle',
                                      textAlign: '-webkit-center',
                                      width: '15%',
                                      backgroundColor: '#d0a74c',
                                      color: '#ffffff',
                                      cursor: 'pointer',
                                    }
                              }
                            >
                              <div className='status-span'>
                                <span
                                  style={{
                                    borderRadius: '5px',
                                    padding: '6px',
                                    width: '15%',
                                  }}
                                >
                                  {convert(e.provider_service_gold)}
                                </span>
                              </div>
                            </td>
                          </tr>
                        </>
                      )
                    })}
                </>
              </tbody>
            </Table>

            <p
              className='text mt-5 '
              style={{
                fontSize: '15px',
                textAlign: 'justify',
                direction: 'rtl',
                lineHeight: '30px',
              }}
            >
              با توجه به درجه بندی های فوق، روشهای متنوعی برای جذب مشتری،
              بالابردن فروش و مشارکت در درآمد نگاکلاب برای پذیرندگان وجود خواهد
              داشت که در ادامه به برخی از آنها اشاره می شود:
            </p>

            <p
              className='text mt-5 '
              style={{
                fontSize: '15px',
                textAlign: 'justify',
                direction: 'rtl',
                lineHeight: '30px',
              }}
            >
              بعنوان یک پذیرنده، تصور کنید هر یک از مشتریان شما، دارای نگاکارت
              اختصاصی باشند... دیگر نگران تخفیفی که به آنها می دهید نباشید، چرا
              که طبق تعاریف نگاکارت، هر مشتری از هر فروشنده ای که عضو سیستم
              نگاکلاب باشد، خرید کند، درصدی از تخفیف دریافت شده به حساب شما
              منتقل خواهد شد!! بنابراین نه تنها با تخفیف دادن، درآمد شما کم نمی
              شود، بلکه از تمام شبکه تخفیف و خرید مشتریان می توانید بهره مند
              شوید و این به معنای واقعی یعنی افزایش درآمد!!!
            </p>
            <p
              className='text mt-5 '
              style={{
                fontSize: '15px',
                textAlign: 'justify',
                direction: 'rtl',
                lineHeight: '30px',
              }}
            >
              کافی است شما به عنوان دارنده نگاکارت (که با توجه به درجه عضویت شما
              بصورت رایگان در اختیارتان قرار خواهد گرفت)، خدمات باشگاه مشتریان
              نگاکلاب را به مشتریان، خانواده، دوستان، اقوام، همکاران و ... معرفی
              کرده و با استفاده از خدمات متنوعی که این باشگاه در اختیار آنها
              قرار خواهد داد آنها را مشتاق به عضویت در نگاکلاب و تهیه نگاکارت
              نمایید. از همین لحظه کسب درآمد شما شروع میشود! به ازای هر خریدی که
              معرفی شدگان توسط شما انجام دهند، درصدی از تخفیف لحاظ شده مستقیما
              به حساب نگاکارت و یا کیف پول نگاکلاب شما واریز میشود. هیچ محدودیت
              و کف و سقفی برای برداشت این مبالغ وجود نخواهد داشت.
            </p>
          </div>
          <div className='col-12 text-center mt-4'>
            <img src={gift} style={{ width: 'inherit' }} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pazirandegan
