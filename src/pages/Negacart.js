import { React, useState, useEffect, useCallback } from 'react'
import { FaArrowCircleDown, FaArrowCircleUp } from 'react-icons/fa'
import Fade from 'react-reveal/Fade'
import bronzeii from '../img/bronzeii.jpg'
import gold from '../img/gold.jpg'
import silver from '../img/silver.jpg'
import { Button } from 'react-bootstrap'
import { useProductsContext } from '../context/ProductsProvider'
import BuyModal from './BuyModal'
import { GiPriceTag } from 'react-icons/gi'
import { Cookies, useCookies } from 'react-cookie'
import axios from 'axios'
import Swal from 'sweetalert2'
import { Modal } from 'react-bootstrap'
import { FaDownload, FaRobot } from 'react-icons/fa'
import { SiApple } from 'react-icons/si'
import NegaMarket from '../img/NegaMarket.png'
import LoginModal from '../components/LoginModal'

const Negacart = ({ e }) => {
  const [cookies, setCookie, removeCookie] = useCookies(['user'])

  const {
    buyModalShow,
    setId,
    acceptModal,
    acceptModalClose,
    acceptModalShow,
    Id,
    loginModal,
    loginModalClose,
    loginModalShow,
    userData,
    setUserData,
  } = useProductsContext()

  const [showInfo, setShowInfo] = useState(false)

  const nummber = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  const openModal = (id) => {
    setId(id)
    if (userData) {
      if (userData['fatherName']) {
        acceptModalShow()
      } else {
        Swal.fire({
          type: 'warning',
          text: 'ابتدا باید   پروفایل خود را تکمیل کنید',
          confirmButtonText: 'فهمیدم',
        })
      }
    } else {
      setId(id)
      Swal.fire({
        text: 'ابتدا باید وارد سایت شوید',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#1fb811',
        cancelButtonColor: '#ff8900',
        cancelButtonText: 'بعدا',
        confirmButtonText: 'ثبت نام',
      }).then((result) => {
        if (result.value) {
          loginModalShow()
        }
      })
    }
  }

  const buyLevel = async (id) => {
    axios
      .post(
        'https://negaclub.ir/admin/Services/API/_buyLevel?token=test',
        {
          customerId: userData['id'],
          levelId: id,
        },
        {
          headers: {
            token: 'test',
          },
        }
      )
      .then((response) => {
        if (response.data.isDone) {
          window.location.href = response.data.data
        }
      })
      .catch((error) => {
        console.error(error)
      })
  }

  return (
    <>
      {loginModal ? <LoginModal /> : null}
      {userData ? (
        <Modal show={acceptModal} onHide={acceptModalClose} size='lg'>
          <Modal.Header style={{ direction: 'rtl' }} closeButton>
            <Modal.Title>خرید کارت</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className='d-flex flex-column'>
              <div className='text-center'>
                <img src={NegaMarket} alt='logo' style={{ width: '30%' }} />
              </div>
              {Id == '1' ? (
                <p
                  className='text-center mt-5'
                  style={{
                    fontSize: '15px',
                    fontWeight: 'bolder',
                    direction: 'rtl',
                  }}
                >
                  شما درخواست خرید نگاکارت طلایی را داده اید.نگاکارت شما با این
                  مشخصات ثبت خواهد شد.
                </p>
              ) : null}
              {Id == '2' ? (
                <p
                  className='text-center mt-5'
                  style={{
                    fontSize: '15px',
                    fontWeight: 'bolder',
                    direction: 'rtl',
                  }}
                >
                  شما درخواست خرید نگاکارت نقره ای را داده اید.نگاکارت شما با
                  این مشخصات ثبت خواهد شد.
                </p>
              ) : null}
              {Id == '3' ? (
                <p
                  className='text-center mt-5'
                  style={{
                    fontSize: '15px',
                    fontWeight: 'bolder',
                    direction: 'rtl',
                  }}
                >
                  شما درخواست خرید نگاکارت برنزی را داده اید.نگاکارت شما با این
                  مشخصات ثبت خواهد شد.
                </p>
              ) : null}

              <div
                className='d-flex mr-3'
                style={{
                  justifyContent: 'right',
                  borderBottom: '1px solid #e3e2e2',
                }}
              >
                <div style={{ justifyContent: 'right' }}>
                  <p
                    className='text-right mr-3 mt-1'
                    style={{
                      fontSize: '15px',
                      fontWeight: 'bolder',
                    }}
                  >
                    {userData['firstName']}
                  </p>
                </div>
                <div>
                  <p
                    className='text-right '
                    style={{
                      fontSize: '20px',
                      fontWeight: 'bolder',
                      justifyContent: 'right',
                    }}
                  >
                    : نام
                  </p>
                </div>
              </div>

              <div
                className='d-flex mr-3 mt-4'
                style={{
                  justifyContent: 'right',
                  borderBottom: '1px solid #e3e2e2',
                }}
              >
                <div>
                  <p
                    className='text-right mr-3 mt-1'
                    style={{
                      fontSize: '15px',
                      fontWeight: 'bolder',
                      justifyContent: 'right',
                    }}
                  >
                    {userData['lastName']}
                  </p>
                </div>
                <div>
                  <p
                    className='text-right '
                    style={{
                      fontSize: '20px',
                      fontWeight: 'bolder',
                      justifyContent: 'right',
                    }}
                  >
                    : نام خانوادگی
                  </p>
                </div>
              </div>

              <div
                className='d-flex mr-3 mt-4'
                style={{
                  justifyContent: 'right',
                  borderBottom: '1px solid #e3e2e2',
                }}
              >
                <div>
                  <p
                    className='text-right mr-3 mt-1'
                    style={{
                      fontSize: '15px',
                      fontWeight: 'bolder',
                      justifyContent: 'right',
                    }}
                  >
                    {userData['fatherName']}
                  </p>
                </div>
                <div>
                  <p
                    className='text-right '
                    style={{
                      fontSize: '20px',
                      fontWeight: 'bolder',
                      justifyContent: 'right',
                    }}
                  >
                    : نام پدر
                  </p>
                </div>
              </div>

              <div
                className='d-flex mr-3 mt-4'
                style={{
                  // justifyContent: 'right',
                  borderBottom: '1px solid #e3e2e2',
                  justifyContent: 'right',
                }}
              >
                <div>
                  <p
                    className='text-right mr-3 mt-1'
                    style={{
                      fontSize: '15px',
                      fontWeight: 'bolder',
                      justifyContent: 'right',
                    }}
                  >
                    {userData['nationality'] === true ? 'ایرانی' : 'غیر ایرانی'}
                  </p>
                </div>
                <div>
                  <p
                    className='text-right '
                    style={{
                      fontSize: '20px',
                      fontWeight: 'bolder',
                      justifyContent: 'right',
                    }}
                  >
                    : ملیت
                  </p>
                </div>
              </div>

              {userData['nationalCode'] &&
              userData['passportNumber'] === '0' ? (
                <div
                  className='d-flex mr-3 mt-4'
                  style={{
                    justifyContent: 'right',
                    borderBottom: '1px solid #e3e2e2',
                  }}
                >
                  <div>
                    <p
                      className='text-right mr-3 mt-1'
                      style={{
                        fontSize: '15px',
                        fontWeight: 'bolder',
                        justifyContent: 'right',
                      }}
                    >
                      {userData['nationalCode']}
                    </p>
                  </div>
                  <div>
                    <p
                      className='text-right '
                      style={{
                        fontSize: '20px',
                        fontWeight: 'bolder',
                        justifyContent: 'right',
                      }}
                    >
                      : کد ملی
                    </p>
                  </div>
                </div>
              ) : null}

              {userData['idNumber'] ? (
                <div
                  className='d-flex mr-3 mt-4'
                  style={{
                    justifyContent: 'right',
                    borderBottom: '1px solid #e3e2e2',
                  }}
                >
                  <div>
                    <p
                      className='text-right mr-3 mt-1'
                      style={{
                        fontSize: '15px',
                        fontWeight: 'bolder',
                        justifyContent: 'right',
                      }}
                    >
                      {userData['idNumber']}
                    </p>
                  </div>
                  <div>
                    <p
                      className='text-right '
                      style={{
                        fontSize: '20px',
                        fontWeight: 'bolder',
                        justifyContent: 'right',
                      }}
                    >
                      : شماره شناسنامه
                    </p>
                  </div>
                </div>
              ) : null}

              {userData['passportNumber'] !== '0' ? (
                <div
                  className='d-flex mr-3 mt-4'
                  style={{
                    justifyContent: 'right',
                    borderBottom: '1px solid #e3e2e2',
                  }}
                >
                  <div>
                    <p
                      className='text-right mr-3 mt-1'
                      style={{
                        fontSize: '15px',
                        fontWeight: 'bolder',
                        justifyContent: 'right',
                      }}
                    >
                      {userData['passportNumber']}
                    </p>
                  </div>
                  <div>
                    <p
                      className='text-right '
                      style={{
                        fontSize: '20px',
                        fontWeight: 'bolder',
                        justifyContent: 'right',
                      }}
                    >
                      :شماره پاسپورت
                    </p>
                  </div>
                </div>
              ) : null}

              <div
                className='d-flex mr-3 mt-4'
                style={{
                  justifyContent: 'right',
                  borderBottom: '1px solid #e3e2e2',
                }}
              >
                <div>
                  <p
                    className='text-right mr-3 mt-1'
                    style={{
                      fontSize: '15px',
                      fontWeight: 'bolder',
                      justifyContent: 'right',
                    }}
                  >
                    {userData['mobile']}
                  </p>
                </div>
                <div>
                  <p
                    className='text-right '
                    style={{
                      fontSize: '20px',
                      fontWeight: 'bolder',
                      justifyContent: 'right',
                    }}
                  >
                    : شماره تماس
                  </p>
                </div>
              </div>

              <div
                className='d-flex mr-3 mt-4'
                style={{
                  justifyContent: 'right',
                  borderBottom: '1px solid #e3e2e2',
                }}
              >
                <div>
                  <p
                    className='text-right mr-3 mt-1'
                    style={{
                      fontSize: '15px',
                      fontWeight: 'bolder',
                      justifyContent: 'right',
                    }}
                  >
                    {userData['address']}
                  </p>
                </div>
                <div>
                  <p
                    className='text-right '
                    style={{
                      fontSize: '20px',
                      fontWeight: 'bolder',
                      justifyContent: 'right',
                    }}
                  >
                    : آدرس
                  </p>
                </div>
              </div>

              <div
                className='d-flex mr-3 mt-4'
                style={{
                  justifyContent: 'right',
                  borderBottom: '1px solid #e3e2e2',
                }}
              >
                <div>
                  <p
                    className='text-right mr-3 mt-1'
                    style={{
                      fontSize: '15px',
                      fontWeight: 'bolder',
                      justifyContent: 'right',
                    }}
                  >
                    {userData['birthDate']}
                  </p>
                </div>
                <div>
                  <p
                    className='text-right '
                    style={{
                      fontSize: '20px',
                      fontWeight: 'bolder',
                      justifyContent: 'right',
                    }}
                  >
                    : تاریخ تولد
                  </p>
                </div>
              </div>
            </div>

            <div
              className='d-flex mt-5'
              style={{ justifyContent: 'space-around' }}
            >
              <div className='d-flex'>
                <button
                  className='btn btn-success mr-2'
                  onClick={() => buyLevel(Id)}
                >
                  خرید
                </button>
                <button className='btn btn-danger' onClick={acceptModalClose}>
                  انصراف
                </button>
              </div>
              <div>
                {Id == '1' ? (
                  <div className='text-right mr-4'>
                    <p style={{ fontSize: '20px' }}>
                      قیمت کارت : 199,000 تومان
                    </p>
                  </div>
                ) : null}
                {Id == '2' ? (
                  <div className='text-right mr-4'>
                    <p style={{ fontSize: '20px' }}>
                      قیمت کارت : 149,000 تومان
                    </p>
                  </div>
                ) : null}
                {Id == '3' ? (
                  <div className='text-right mr-4'>
                    <p style={{ fontSize: '20px' }}>قیمت کارت : 99,000 تومان</p>
                  </div>
                ) : null}
              </div>
            </div>
          </Modal.Body>
        </Modal>
      ) : null}

      <div
        key={e.id}
        className={'col-lg-3  col-md-10 col-sm-10 col-12 mx-2 my-4'}
      >
        <img
          src={e.image}
          alt='gold'
          style={{
            width: '100%',
            borderTopLeftRadius: '25px',
            borderTopRightRadius: '25px',
            borderBottomLeftRadius: '0px',
            borderBottomRightRadius: '0px',
            boxShadow: 'rgb(173 168 168 / 43%) 0px -26px 54px 7px',
          }}
        />

        <div
          style={{
            cursor: 'pointer',
            width: '100%',
            margin: 'auto',
            padding: '10px',
            textAlign: 'left',
            borderTop: '1px solid #e2e2e2',
            borderTopLeftRadius: '0px',
            borderTopRightRadius: '0px',
            borderBottomLeftRadius: '25px',
            borderBottomRightRadius: '25px',
            boxShadow: '0px 2px 26px 7px rgb(173 168 168 / 43%)',
          }}
          onClick={() => setShowInfo(!showInfo)}
        >
          <div className='d-flex justify-content-between'>
            {e.title === 'طلایی' ? (
              <button
                style={{
                  border: 'none',
                  outline: 'none',
                  backgroundColor: 'transparent',
                }}
              >
                {!showInfo ? (
                  <FaArrowCircleDown style={{ color: '#bf9b30' }} size={20} />
                ) : (
                  <FaArrowCircleUp style={{ color: '#bf9b30' }} size={20} />
                )}
              </button>
            ) : null}
            {e.title === 'نقره ای' ? (
              <button
                style={{
                  border: 'none',
                  outline: 'none',
                  backgroundColor: 'transparent',
                }}
              >
                {!showInfo ? (
                  <FaArrowCircleDown style={{ color: '#5a717e' }} size={20} />
                ) : (
                  <FaArrowCircleUp style={{ color: '#5a717e' }} size={20} />
                )}
              </button>
            ) : null}
            {e.title === 'برنزی' ? (
              <button
                style={{
                  border: 'none',
                  outline: 'none',
                  backgroundColor: 'transparent',
                }}
              >
                {!showInfo ? (
                  <FaArrowCircleDown style={{ color: '#68402b' }} size={20} />
                ) : (
                  <FaArrowCircleUp style={{ color: '#68402b' }} size={20} />
                )}
              </button>
            ) : null}

            {e.title === 'طلایی' ? (
              <h4 style={{ color: '#bf9b30', fontSize: '20px' }}>
                نگاکارت {e.title}
              </h4>
            ) : null}

            {e.title === 'نقره ای' ? (
              <h4 style={{ color: '#5a717e', fontSize: '20px' }}>
                نگاکارت {e.title}
              </h4>
            ) : null}
            {e.title === 'برنزی' ? (
              <h4 style={{ color: '#68402b', fontSize: '20px' }}>
                نگاکارت {e.title}
              </h4>
            ) : null}
          </div>

          <Fade top when={showInfo}>
            <>
              {showInfo && (
                <>
                  <p
                    className='ml-4 doc-text '
                    style={{
                      marginTop: '30px',
                      fontSize: '14px',
                      lineHeight: '35px',
                      textAlign: 'justify',
                      // textAlign: 'right',
                    }}
                  >
                    {e.description}
                  </p>

                  {e.title === 'طلایی' ? (
                    <>
                      <div className='d-flex justify-content-between'>
                        <Button
                          variant=' my-3 mr-3 '
                          className='login-btn px-3 hover-item'
                          onClick={() => {
                            openModal(e.id)
                          }}
                        >
                          خرید
                        </Button>
                        <div className='d-flex flex-row'>
                          <h3
                            style={{
                              color: '#bf9b30 ',
                              margin: 'auto',
                              marginRight: '10px',
                            }}
                          >
                            تومان
                          </h3>

                          <h3 className='mt-4 ' style={{ color: '#bf9b30 ' }}>
                            {nummber(e.price)}
                          </h3>
                        </div>
                      </div>
                    </>
                  ) : null}

                  {e.title === 'نقره ای' ? (
                    <>
                      <div className='d-flex justify-content-between'>
                        <Button
                          variant=' my-3 mr-3 '
                          className='silver-btn px-3 hover-item'
                          onClick={() => {
                            openModal(e.id)
                          }}
                        >
                          خرید
                        </Button>

                        <div className='d-flex flex-row'>
                          <h3
                            style={{
                              color: '#5a717e ',
                              margin: 'auto',
                              marginRight: '10px',
                            }}
                          >
                            تومان
                          </h3>

                          <h3 className='mt-3 ' style={{ color: '#5a717e ' }}>
                            {nummber(e.price)}
                          </h3>
                        </div>
                      </div>
                    </>
                  ) : null}

                  {e.title === 'برنزی' ? (
                    <>
                      <div className='d-flex justify-content-between'>
                        <Button
                          variant=' my-3 mr-3 '
                          className='bronze-btn px-3 hover-item'
                          onClick={() => {
                            openModal(e.id)
                          }}
                        >
                          خرید
                        </Button>

                        <div className='d-flex flex-row'>
                          <h3
                            style={{
                              color: '#68402b ',
                              margin: 'auto',
                              marginRight: '10px',
                            }}
                          >
                            تومان
                          </h3>

                          <h3 className='mt-3 ' style={{ color: '#68402b ' }}>
                            {nummber(e.price)}
                          </h3>
                        </div>
                      </div>
                    </>
                  ) : null}
                </>
              )}
            </>
          </Fade>
        </div>
        <BuyModal />
      </div>
    </>
  )
}

export default Negacart
