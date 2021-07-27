import { React, useState, useCallback, useEffect, Component } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import Loader from '../pages/Loader'
import Error from '../pages/Error'
import { Button } from 'react-bootstrap'

import { FiCalendar } from 'react-icons/fi'
import { BsFillSquareFill } from 'react-icons/bs'
import { useProductsContext } from '../context/ProductsProvider'

const url = 'https://negaclub.ir/admin/BlogPosts/API/_singlePost?token=test'

// class SingleProduct extends Component {
//   state = {}

//   componentDidMount() {
//     this.getSinglePost()
//     const pathname = window.location.pathname
//     const id = JSON.stringify(pathname.split('/')[2])
//   }

//   getSinglePost = async () => {
//     axios
//       .post(url, {
//         id: this.id,
//       })
//       .then((response) => {
//         this.setState(response.data.data)
//         console.log(this.state)
//       })
//       .catch((error) => {
//         console.error(error)
//       })
//   }
//   render() {
//     // const {
//     //   state: { info },
//     // } = this
//     return (
//       <div className='row my-5 justify-content-center mx-1'>
//         hello
//         {/* {this.mapInfo(info)} */}
//       </div>
//     )
//   }

// mapInfo = (info) => {
//   return info.map((e) => this.buildDiv(e))
// }

// buildDiv = (e) => {
//   return (
//     <div
//       key={e.id}
//       className='col-lg-2 col-md-5 col-sm-5 col-12 text-center box mr-1 my-2  '
//     >
//       <div className=' d-flex justify-content-center'>
//         <div
//           className='bg-circle'
//           style={{ background: this.shadeColor(e.color, 60) }}
//         >
//           <img src={e.icon} className='icon-color' alt='' />
//         </div>
//       </div>

//       <h6 className='mt-3'>{e.name}</h6>
//       <p className='box-font'>{e.text}</p>
//     </div>
//   )
// }
// }

// export default SingleProduct

const SingleProduct = () => {
  const { pathname } = useLocation()
  const id = pathname.split('/')[2]
  const [singleProduct, setSingleProduct] = useState({})
  const { Loading, setLoading } = useProductsContext()
  const { Error, setError } = useProductsContext()

  const getSinglePost = useCallback(async () => {
    setLoading(true)
    axios
      .post(url, {
        id: id,
      })
      .then((response) => {
        setLoading(false)
        setSingleProduct(response.data.data)
        console.log(singleProduct)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [id])

  useEffect(() => {
    getSinglePost()
  }, [getSinglePost])

  if (Loading) {
    return <Loader />
  }
  if (Error) {
    return <Error />
  }
  return (
    <div className='mt-5'>
      <div className='container m-t'>
        <div className='text-center '>
          <h3 className='p-5' style={{ color: '#1d5e90' }}>
            درگاه پرداخت اینترنتی سیزپی
          </h3>
        </div>
        <hr />

        <div className='bg-color1'>
          <div className='row'>
            <div className='col-lg-4 order-lg-1 col-md-12 order-md-2 col-sm-12 order-2 col-12 order-2'>
              <div className='input-group mt-2'>
                <button
                  type='button'
                  className='search-btn btn'
                  style={{ background: '#e8d882', color: '#fff' }}
                >
                  جستجو
                </button>
                <input
                  type='search'
                  className='form-control rounded text-right'
                  placeholder='...جستجو'
                  aria-label='Search'
                  aria-describedby='search-addon'
                />
              </div>
              <div className=' footer-box'>
                <h6 className='mt-4'>لینک های مفید</h6>
                <hr className='mt-2' />
                <div className='footer-add d-flex flex-row mt-4'>
                  <p
                    className='m-0'
                    style={{ color: '#666666', fontSize: '15px' }}
                  >
                    درگاه پرداخت اینترنتی سیزپی
                  </p>
                  <BsFillSquareFill
                    className='ml-2 mt-2'
                    size={8}
                    style={{ color: '#be9b30' }}
                  />
                </div>
                <div className='footer-add d-flex flex-row mt-2'>
                  <p
                    className='m-0'
                    style={{ color: '#666666', fontSize: '15px' }}
                  >
                    وب سرویس ها
                  </p>
                  <BsFillSquareFill
                    className='ml-2 mt-2'
                    size={8}
                    style={{ color: '#be9b30' }}
                  />
                </div>
                <div className='footer-add d-flex flex-row mt-2'>
                  <p
                    className='m-0'
                    style={{ color: '#666666', fontSize: '15px' }}
                  >
                    درگاه پرداخت اینترنتی سیزپی
                  </p>
                  <BsFillSquareFill
                    className='ml-2 mt-2'
                    size={8}
                    style={{ color: '#be9b30' }}
                  />
                </div>
                <div className='footer-add d-flex flex-row mt-2'>
                  <p
                    className='m-0'
                    style={{ color: '#666666', fontSize: '15px' }}
                  >
                    درگاه پرداخت اینترنتی سیزپی
                  </p>
                  <BsFillSquareFill
                    className='ml-2 mt-2'
                    size={8}
                    style={{ color: '#be9b30' }}
                  />
                </div>
                <div className='footer-add d-flex flex-row mt-2'>
                  <p
                    className='m-0'
                    style={{ color: '#666666', fontSize: '15px' }}
                  >
                    درگاه پرداخت اینترنتی سیزپی
                  </p>
                  <BsFillSquareFill
                    className='ml-2 mt-2'
                    size={8}
                    style={{ color: '#be9b30' }}
                  />
                </div>
              </div>
              <div className=' footer-box'>
                <h6 className='mt-4'>اخرین دیدگاه ها</h6>
                <hr className='mt-2' />
                <div className='footer-add d-flex flex-row mt-4'>
                  <p
                    className='m-0'
                    style={{ color: '#666666', fontSize: '15px' }}
                  >
                    درگاه پرداخت اینترنتی سیزپی
                  </p>
                  <BsFillSquareFill
                    className='ml-2 mt-2'
                    size={8}
                    style={{ color: '#be9b30' }}
                  />
                </div>
                <div className='footer-add d-flex flex-row mt-2'>
                  <p
                    className='m-0'
                    style={{ color: '#666666', fontSize: '15px' }}
                  >
                    وب سرویس ها
                  </p>
                  <BsFillSquareFill
                    className='ml-2 mt-2'
                    size={8}
                    style={{ color: '#be9b30' }}
                  />
                </div>
                <div className='footer-add d-flex flex-row mt-2'>
                  <p
                    className='m-0'
                    style={{ color: '#666666', fontSize: '15px' }}
                  >
                    درگاه پرداخت اینترنتی سیزپی
                  </p>
                  <BsFillSquareFill
                    className='ml-2 mt-2'
                    size={8}
                    style={{ color: '#be9b30' }}
                  />
                </div>
                <div className='footer-add d-flex flex-row mt-2'>
                  <p
                    className='m-0'
                    style={{ color: '#666666', fontSize: '15px' }}
                  >
                    درگاه پرداخت اینترنتی سیزپی
                  </p>
                  <BsFillSquareFill
                    className='ml-2 mt-2'
                    size={8}
                    style={{ color: '#be9b30' }}
                  />
                </div>
                <div className='footer-add d-flex flex-row mt-2'>
                  <p
                    className='m-0'
                    style={{ color: '#666666', fontSize: '15px' }}
                  >
                    درگاه پرداخت اینترنتی سیزپی
                  </p>
                  <BsFillSquareFill
                    className='ml-2 mt-2'
                    size={8}
                    style={{ color: '#be9b30' }}
                  />
                </div>
              </div>
              <div className=' footer-box'>
                <h6 className='mt-4'>دسته ها</h6>
                <hr className='mt-2' />
                <div className='footer-add d-flex flex-row mt-4'>
                  <p
                    className='m-0'
                    style={{ color: '#666666', fontSize: '15px' }}
                  >
                    درگاه پرداخت اینترنتی سیزپی
                  </p>
                  <BsFillSquareFill
                    className='ml-2 mt-2'
                    size={8}
                    style={{ color: '#be9b30' }}
                  />
                </div>
                <div className='footer-add d-flex flex-row mt-2'>
                  <p
                    className='m-0'
                    style={{ color: '#666666', fontSize: '15px' }}
                  >
                    وب سرویس ها
                  </p>
                  <BsFillSquareFill
                    className='ml-2 mt-2'
                    size={8}
                    style={{ color: '#be9b30' }}
                  />
                </div>
                <div className='footer-add d-flex flex-row mt-2'>
                  <p
                    className='m-0'
                    style={{ color: '#666666', fontSize: '15px' }}
                  >
                    درگاه پرداخت اینترنتی سیزپی
                  </p>
                  <BsFillSquareFill
                    className='ml-2 mt-2'
                    size={8}
                    style={{ color: '#be9b30' }}
                  />
                </div>
                <div className='footer-add d-flex flex-row mt-2'>
                  <p
                    className='m-0'
                    style={{ color: '#666666', fontSize: '15px' }}
                  >
                    درگاه پرداخت اینترنتی سیزپی
                  </p>
                  <BsFillSquareFill
                    className='ml-2 mt-2'
                    size={8}
                    style={{ color: '#be9b30' }}
                  />
                </div>
                <div className='footer-add d-flex flex-row mt-2'>
                  <p
                    className='m-0'
                    style={{ color: '#666666', fontSize: '15px' }}
                  >
                    درگاه پرداخت اینترنتی سیزپی
                  </p>
                  <BsFillSquareFill
                    className='ml-2 mt-2'
                    size={8}
                    style={{ color: '#be9b30' }}
                  />
                </div>
              </div>

              <div className=' footer-box'>
                <h6 className='mt-4'>برچسب ها</h6>
                <hr className='mt-2' />
                <div className='row justify-content-center'>
                  {singleProduct.tag &&
                    singleProduct.tag.map((item) => {
                      return (
                        <Button
                          key={item}
                          variant=' my-3 mx-2'
                          className='btn-barchasb btn-barchasb px-1 hover-item  col-lg-3 col-md-6 col-sm-6 col-6'
                        >
                          {item}
                        </Button>
                      )
                    })}
                </div>
              </div>
            </div>

            <div
              className='col-lg-8 order-lg-2 col-md-12 order-md-1 col-sm-12 order-sm-1 col-12 order-1 text-end'
              style={{ textAlign: 'end' }}
            >
              <div style={{ border: '1px solid #d2d2d2' }}>
                <img
                  className='col-12'
                  src={singleProduct['image']}
                  alt='dargah'
                />
                <h3 className='mt-2 mr-4' style={{ color: '#1d5e90' }}>
                  {singleProduct['name']}
                </h3>
                <div className='th-btn1 d-flex flex-row'>
                  <p
                    className='mr-3'
                    style={{ color: '#7f7676', fontSize: '13px' }}
                  >
                    بهمن ۱۶, ۱۳۹۸
                  </p>
                  <FiCalendar
                    className='ml-1'
                    size={20}
                    style={{ color: '#be9b30' }}
                  />
                </div>

                <p className='mx-3 mt-3' style={{ textAlign: 'end' }}>
                  {singleProduct['shortText']}
                </p>
                <h3 className='mt-4 mx-4' style={{ color: '#1d5e90' }}>
                  نحوه ایجاد درگاه پرداخت سیزپی در کمتر از 5 دقیقه
                </h3>
                <p className='mx-3 mt-3' style={{ textAlign: 'end' }}>
                  {singleProduct['text']}
                </p>
                <h3 className='mt-4 mx-4' style={{ color: '#1d5e90' }}>
                  نحوه تسویه حساب در درگاه های پرداخت
                </h3>
                <p className='mx-3 mt-3' style={{ textAlign: 'end' }}>
                  {singleProduct['shortText']}
                </p>

                <div className='row justify-content-end'>
                  <div className='col-lg-8 order-lg-1 col-md-12 order-md-2  col-sm-12 order-sm-2 col-12 order-2 text-center'>
                    {singleProduct.tag &&
                      singleProduct.tag.map((item) => {
                        return (
                          <Button
                            variant=' my-3 mx-2'
                            className='btn-barchasb btn-barchasb px-1 hover-item  col-lg-3 col-md-6 col-sm-6 col-6'
                          >
                            {item}
                          </Button>
                        )
                      })}
                  </div>
                  <h6
                    style={{ color: '#1d5e90' }}
                    className='mt-4 text-center col-lg-4 order-lg-2 col-md-12  order-md-1 col-sm-12 order-sm-1 col-12 order-1'
                  >
                    : برچسب ها
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleProduct
