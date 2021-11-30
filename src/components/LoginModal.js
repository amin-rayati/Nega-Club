import { useState, useCallback, useEffect } from 'react'
import { Modal } from 'react-bootstrap'
import { useProductsContext } from '../context/ProductsProvider'
import { ImCross } from 'react-icons/im'
import axios from 'axios'
import Loading from '../pages/Loading'
import Swal from 'sweetalert2'
import { Button } from 'react-bootstrap'
import { Cookies, useCookies } from 'react-cookie'

const mobileUrl =
  'https://negaclub.ir/admin/Customers/API/_startLoginRegister?token=test'

const registerUrl =
  'https://negaclub.ir/admin/admin/Customers/API/_completeRegister?token=test'

const LoginModal = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['user'])
  const { userData, setUserData } = useProductsContext()
  const {
    Id,
    RegisterShow,
    RegisterClose,
    registerModal,
    buyModal,
    buyModalClose,
    loginModal,
    loginModalClose,
    loginModalShow,
  } = useProductsContext()

  const handleCookie = (infoObject) => {
    console.log(infoObject)
    setUserData(infoObject)
    setCookie(
      'user',
      {
        mobile: infoObject.mobile,
      },
      {
        path: '/',
      }
    )
  }

  const [phone, setPhone] = useState('')
  const [code, setCode] = useState('')
  const [newpass1, setnewpass1] = useState('')
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [Referer, setReferer] = useState('')
  const [name1, setName1] = useState()
  const [lastName1, setLastName1] = useState()
  const [password, setPassword] = useState('')
  const [gender, setGender] = useState('')
  const [nationalCode, setNationalCode] = useState('')

  const [seconds, setSeconds] = useState(30)
  const [isCodeSent, setIsCodeSent] = useState(false)
  const [ispass, setIsPass] = useState(false)
  const [btn, setBtn] = useState(true)
  const [btnLogin, setBtnLogin] = useState(false)
  const [btnRegister, setBtnRegister] = useState(false)
  const [resendcode, setresendcode] = useState(false)
  const [coundown, setCountdown] = useState(false)
  const [loading, setLoading] = useState(false)
  const [loading1, setLoading1] = useState(false)
  const [btnsetpass, setbtnsetpass] = useState(false)
  const [inputcode1, setinputcode1] = useState(false)
  const [btncode1, setbtncode1] = useState(false)
  const [setnewpass, setsetnewpass] = useState(false)
  const [btnnewpass, setbtnnewpass] = useState(false)
  const [nationCodeShow, setNationCodeShow] = useState(false)

  const handlePhoneChange = (e) => {
    setPhone(e.target.value)
  }
  const handleNationalCodeChange = (e) => {
    setNationalCode(e.target.value)
  }
  const handleNewPassChange = (e) => {
    setnewpass1(e.target.value)
  }
  const handleCodeChange = (e) => {
    setCode(e.target.value)
  }
  const handleNameChange = (e) => {
    setName(e.target.value)
  }
  const handleLnameChange = (e) => {
    setLastName(e.target.value)
  }
  const handleLRefererChange = (e) => {
    setReferer(e.target.value)
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }
  const handleGenderChange = (e) => {
    setGender(e.target.value)
  }

  const validateMobilephone = (input) => {
    let mobile = /^09{1}[\d]{9}$/
    if (mobile.test(input)) {
      return input
    } else {
      Swal.fire({
        type: 'error',
        text: 'لطفا شماره تماس را درست وارد کنید',
        confirmButtonText: 'فهمیدم',
      })
      return false
    }
  }

  const validateNationCode = (input) => {
    let antioncodevalidate = /^\d{10}$/
    if (antioncodevalidate.test(input)) {
      return input
    } else {
      Swal.fire({
        type: 'error',
        text: 'لطفا  کد ملی خود را درست وارد کنید',
        confirmButtonText: 'فهمیدم',
      })
      return false
    }
  }

  const handleCountDown = useCallback(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000)
    } else {
      setCountdown(false)
      setresendcode(true)
      setTimeout(() => {
        setLoading1(false)
      }, 4000)
    }
  }, [seconds])

  const foregtpass = (e) => {
    e.preventDefault()
    setBtnLogin(false)
    setIsPass(false)
    setbtnsetpass(false)

    setbtncode1(true)
    handleCountDown()

    setCountdown(true)
    setinputcode1(true)

    e.preventDefault()

    axios
      .post(
        'https://negaclub.ir/admin/Customers/API/_forgotPassword?token=test',
        {
          mobile: phone,
        },
        {
          headers: {
            token: 'test',
          },
        }
      )

      .then((response) => {})
      .catch((error) => {
        console.error(error)
      })
  }

  const resendCode = (e) => {
    e.preventDefault()
    setLoading1(true)
    setTimeout(() => {
      setCountdown(true)
      setresendcode(false)
      setSeconds(30)
    }, 2000)

    e.preventDefault()
    validateMobilephone(phone)
    if (validateMobilephone(phone) === false) return

    axios
      .post(
        'https://negaclub.ir/admin//Customers/API/_startLoginRegister?token=test',
        {
          mobile: phone,
        },
        {
          headers: {
            token: 'test',
          },
        }
      )
      .then((response) => {
        if (response.status === 200) {
          Swal.fire({
            type: 'success',
            text: 'کد تایید ارسال شد',
            confirmButtonText: 'فهمیدم',
          })
        } else {
          Swal.fire({
            type: 'error',
            text: 'دوباره تلاش کنید',
            confirmButtonText: 'فهمیدم',
          })
        }
      })
      .catch((error) => {
        console.error(error)
      })
  }

  const sendCode1 = (e) => {
    e.preventDefault()
    setLoading(true)
    if (code === '') {
      Swal.fire({
        icon: 'error',
        text: 'تمام فیلد ها پر شود',
        confirmButtonText: 'فهمیدم',
        onAfterClose: () => {
          setLoading(false)
          setbtncode1(false)
        },
      })
    } else {
      axios
        .post(
          'https://negaclub.ir/admin//Customers/API/_forgotPasswordConfirm?token=test',
          {
            mobile: phone,
            code: code,
          },
          {
            headers: {
              token: 'test',
            },
          }
        )

        .then((response) => {
          if (response.data.isDone === true) {
            buyModalClose()
            getIndividualInfo(e)
            setLoading(false)
            // BuyLevel()
            Swal.fire({
              type: 'success',
              text: 'به نگاکلاب خوش آمدید',
              confirmButtonText: 'فهمیدم',
              onAfterClose: () => {
                loginModalClose()
                setLoading(false)
              },
            })
          } else {
            Swal.fire({
              type: 'error',
              text: response.data.data['message'],
              confirmButtonText: 'فهمیدم',
            })
          }

          setLoading(false)
        })
        .catch((error) => {
          console.error(error)
        })
    }
  }

  const setNewpassword = (e) => {
    e.preventDefault()
    setLoading(true)
    if (newpass1 === '') {
      Swal.fire({
        icon: 'error',
        text: 'تمام فیلد ها پر شود',
        confirmButtonText: 'فهمیدم',
        onAfterCloseL: () => {
          setLoading(false)
        },
      })
    } else {
      axios
        .post(
          'https://negaclub.ir/admin/Customers/API/_changePassword?token=test',
          {
            mobile: phone,
            newpassword: newpass1,
          },
          {
            headers: {
              token: 'test',
            },
          }
        )

        .then((response) => {
          if (response.status === 200) {
            if (response.data.isDone === true) {
              Swal.fire({
                icon: 'success',
                text: 'رمز جدید با موفقیت ثبت شد',
                confirmButtonText: 'فهمیدم',
              }).then((result) => {
                if (result.isConfirmed) {
                  buyModalClose()
                }
              })
            }
          } else {
            Swal.fire({
              icon: 'error',
              text: 'دوباره تلاش کنید',
              confirmButtonText: 'فهمیدم',
            })
          }
          setLoading(false)
        })
        .catch((error) => {
          console.error(error)
        })
    }
  }

  const sendMobile = (e) => {
    e.preventDefault()
    validateMobilephone(phone)
    if (validateMobilephone(phone) === false) return
    setLoading(true)
    axios
      .post(
        mobileUrl,
        {
          mobile: phone,
        },
        {
          headers: {
            token: 'test',
          },
        }
      )
      .then((response) => {
        if (response.data.isDone) {
          if (response.data.data['type'] == 'login') {
            setBtn(false)
            setBtnLogin(true)
            setIsPass(true)
            setbtnsetpass(true)
          } else {
            handleCountDown()
            setCountdown(true)
            setBtn(false)
            setBtnRegister(true)
            setIsCodeSent(true)
          }
        } else {
          Swal.fire({
            icon: 'error',
            text: 'دوباره تلاش کنید',
            confirmButtonText: 'فهمیدم',
          })
        }
        setLoading(false)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  const sendCode = (e) => {
    e.preventDefault()
    setLoading(true)
    if (code === '') {
      Swal.fire({
        type: 'error',
        text: 'تمام فیلد ها پر شود',
        confirmButtonText: 'فهمیدم',
        showConfirmButton: false,
        showCloseButton: true,
        onAfterClose: () => {
          setLoading(false)
        },
      })
    } else {
      axios
        .post(
          'https://negaclub.ir/admin/Customers/API/_register?token=test',
          {
            mobile: phone,
            code: code,
          },
          {
            headers: {
              token: 'test',
            },
          }
        )

        .then((response) => {
          if (response.status === 200) {
            setIsCodeSent(true)

            if (response.data.isDone === true) {
              // buyModalClose()
              RegisterShow()
            } else {
              Swal.fire({
                type: 'error',
                text: response.data.data['message'],
                confirmButtonText: 'فهمیدم',
              })
            }
          } else {
            Swal.fire({
              icon: 'error',
              text: 'دوباره تلاش کنید',
              confirmButtonText: 'فهمیدم',
            })
          }
          setLoading(false)
        })
        .catch((error) => {
          console.error(error)
        })
    }
  }

  const Register = (e) => {
    e.preventDefault()
    if (Referer) {
      validateMobilephone(Referer)
      if (validateMobilephone(Referer) === false) return
    }

    setLoading(true)
    if (name === '' || lastName === '' || gender === '') {
      Swal.fire({
        icon: 'error',
        text: 'تمام فیلد ها پر شود',
        confirmButtonText: 'فهمیدم',
        onAfterClose: () => {
          setLoading(false)
        },
      })
    } else {
      axios
        .post(
          registerUrl,
          {
            name: name,
            lastName: lastName,
            mobile: phone,
            referer: Referer,
            gender: gender,
            code: code,
          },
          {
            headers: {
              token: 'test',
            },
          }
        )

        .then((response) => {
          if (response.data.isDone) {
            handleCookie(response.data.data.customerData)
            setIsCodeSent(true)
            setLoading(false)
            setNationCodeShow(true)
          } else {
            Swal.fire({
              icon: 'error',
              text: 'دوباره تلاش کنید',
              confirmButtonText: 'فهمیدم',
            })
          }
          setLoading(false)
        })
        .catch((error) => {
          console.error(error)
        })
    }
  }

  const sendNatinaolCode = () => {
    validateNationCode(nationalCode)
    if (validateNationCode(nationalCode) === false) return
    setLoading(true)
    if (
      name === '' ||
      lastName === '' ||
      gender === '' ||
      nationalCode === ''
    ) {
      Swal.fire({
        icon: 'error',
        text: 'تمام فیلد ها پر شود',
        confirmButtonText: 'فهمیدم',
        onAfterClose: () => {
          setLoading(false)
        },
      })
    } else {
      axios
        .post(
          'https://negaclub.ir/admin/admin/Customers/API/_setNationalCode?token=test',
          {
            nationalCode: nationalCode,
            customerId: userData['id'],
          },
          {
            headers: {
              token: 'test',
            },
          }
        )

        .then((response) => {
          if (response.data.isDone) {
            // BuyLevel()

            RegisterClose()
            Swal.fire({
              type: 'success',
              text: 'به نگاکلاب خوش آمدید',
              confirmButtonText: 'فهمیدم',
              onAfterClose: () => {
                RegisterClose()
                loginModalClose()
                setLoading(false)
              },
            })
          }
        })
        .catch((error) => {
          console.error(error)
        })
    }
  }

  const sendPass = (e) => {
    e.preventDefault()
    setLoading(true)
    if (code === '') {
      Swal.fire({
        type: 'error',
        text: 'تمام فیلد ها پر شود',
        confirmButtonText: 'فهمیدم',
        onAfterClose: () => {
          setLoading(false)
        },
      })
    } else {
      axios
        .post(
          'https://negaclub.ir/admin/Customers/API/_login?token=test',
          {
            mobile: phone,
            password: code,
          },
          {
            headers: {
              token: 'test',
            },
          }
        )

        .then((response) => {
          if (response.status === 200) {
            setLoading(false)
            if (response.data.isDone) {
              getIndividualInfo(e)
              setLoading(false)
              buyModalClose()
              // BuyLevel()
              setLoading(false)
              Swal.fire({
                type: 'success',
                text: 'به نگاکلاب خوش آمدید',
                confirmButtonText: 'فهمیدم',
                onAfterClose: () => {
                  loginModalClose()
                  setLoading(false)
                },
              })
            } else {
              Swal.fire({
                type: 'error',
                text: response.data.data['message'],
                confirmButtonText: 'فهمیدم',
              })
            }
          } else {
            Swal.fire({
              icon: 'error',
              text: 'دوباره تلاش کنید',
              confirmButtonText: 'فهمیدم',
            })
          }
        })
        .catch((error) => {
          console.error(error)
        })
    }
  }

  const getIndividualInfo = (e) => {
    e.preventDefault()
    axios
      .post(
        'https://negaclub.ir/admin/admin/Customers/API/_getCustomerData?token=test',
        {
          customerId: 0,
          customerMobile: phone,
        },
        {
          headers: {
            token: 'test',
          },
        }
      )
      .then((response) => {
        handleCookie(response.data.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  const BuyLevel = () => {
    axios
      .post(
        'https://negaclub.ir/admin/Services/API/_buyLevel?token=test',
        {
          customerId: userData['id'],
          levelId: Id,
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
        } else {
          Swal.fire({
            type: 'warning',
            text: response.data.data,
            confirmButtonText: 'فهمیدم',
          })
        }
      })
      .catch((error) => {
        console.error(error)
      })
  }

  useEffect(() => {
    if (isCodeSent) {
      const timerID = setInterval(() => handleCountDown(), 1000)
      return () => clearInterval(timerID)
    }
    if (inputcode1) {
      const timerID = setInterval(() => handleCountDown(), 1000)
      return () => clearInterval(timerID)
    }
  }, [handleCountDown, isCodeSent, inputcode1])
  return (
    <>
      <Modal show={loginModal} onHide={loginModalClose}>
        <Modal.Header>
          <Modal.Title>ورود به سایت</Modal.Title>
          <ImCross
            onClick={loginModalClose}
            style={{ fontSize: '10px', color: '#a0a8af' }}
          />
        </Modal.Header>
        <Modal.Body>
          <div style={{ textAlign: 'right' }}>
            <label>
              <h6 style={{ color: '#0000006b' }}>شماره موبایل</h6>
            </label>
          </div>
          <div className='row mx-0 mt-2'>
            <input
              onChange={handlePhoneChange}
              value={phone}
              required
              className=' select'
              placeholder='شماره موبایل'
              pattern='[0-9]{5}[-][0-9]{7}[-][0-9]{1}'
              type='text'
              title='Ten digits code'
              style={{
                textAlign: 'right',
                borderRadius: '0.45rem',
                border: '1px solid #0000004f',
                height: '30px',
                width: '100%',
                outline: 'none',
                background: '#e8f0fe',
              }}
            />
          </div>

          {isCodeSent ? (
            <div className='row mx-0 mt-5'>
              <input
                onChange={handleCodeChange}
                value={code}
                required
                placeholder='کد تایید'
                className=' select'
                type='text'
                title='Ten digits code'
                style={{
                  borderRadius: '0.45rem',
                  border: '1px solid #0000004f',
                  height: '30px',
                  width: '100%',
                  outline: 'none',
                  background: '#e8f0fe',
                  textAlign: 'right',
                }}
              />
            </div>
          ) : null}
          {ispass ? (
            <div className='row mx-0 mt-5'>
              <input
                onChange={handleCodeChange}
                value={code}
                required
                placeholder='رمز عبور'
                className=' select'
                type='password'
                title='Ten digits code'
                style={{
                  borderRadius: '0.45rem',
                  border: '1px solid #0000004f',
                  height: '30px',
                  outline: 'none',
                  width: '100%',
                  background: '#e8f0fe',
                  textAlign: 'right',
                }}
              />
            </div>
          ) : null}

          {inputcode1 ? (
            <div className='row mx-0 mt-5'>
              <input
                onChange={handleCodeChange}
                value={code}
                required
                placeholder='کد تایید'
                className=' select'
                type='text'
                title='Ten digits code'
                style={{
                  borderRadius: '0.45rem',
                  border: '1px solid #0000004f',
                  height: '30px',
                  width: '100%',
                  outline: 'none',
                  background: '#e8f0fe',
                  textAlign: 'right',
                }}
              />
            </div>
          ) : null}

          {setnewpass ? (
            <div className='row mx-0 mt-5'>
              <input
                onChange={handleNewPassChange}
                value={newpass1}
                required
                placeholder='پسورد جدید '
                className=' select'
                type='text'
                title='Ten digits code'
                style={{
                  borderRadius: '0.45rem',
                  border: '1px solid #0000004f',
                  height: '30px',
                  width: '100%',
                  outline: 'none',
                  background: '#e8f0fe',
                  textAlign: 'right',
                }}
              />
            </div>
          ) : null}

          <div className='d-flex justify-content-between mt-4'>
            {resendcode ? (
              <Button
                variant=' my-3 mr-3 '
                className='login-btn '
                onClick={resendCode}
              >
                {!loading1 ? 'ارسال مجدد کد' : <Loading />}
              </Button>
            ) : null}
            {coundown ? (
              <p className='text-left mt-auto'>
                {`${
                  seconds !== 0
                    ? `${seconds}   ثانیه در ارسال مجدد کد تائید  `
                    : ` ارسال مجدد کد تایید`
                }`}
              </p>
            ) : null}
          </div>

          <div className='d-flex justify-content-between mt-4'>
            {btnsetpass ? (
              <Button
                variant=' my-3 mr-3 '
                className='login-btn'
                onClick={foregtpass}
              >
                فراموشی رمز
              </Button>
            ) : null}
            {/* {coundown ? (
              <p className='text-left mt-auto'>
                {`${
                  seconds !== 0
                    ? `${seconds}   ثانیه در ارسال مجدد کد تائید  `
                    : ` ارسال مجدد کد تایید`
                }`}
              </p>
            ) : null} */}
          </div>
        </Modal.Body>
        <Modal.Footer className='justify-content-center'>
          {btn ? (
            <Button
              variant=' my-3 mr-3 '
              className='login-btn px-3 hover-item p-2'
              onClick={sendMobile}
            >
              {!loading ? 'ورود/ثبت نام' : <Loading />}
            </Button>
          ) : null}

          {btnRegister ? (
            <Button
              variant=' my-3 mr-3 '
              className='login-btn px-3 hover-item p-2'
              onClick={sendCode}
            >
              {!loading ? 'ورود/ثبت نام' : <Loading />}
            </Button>
          ) : null}

          {btnLogin ? (
            <Button
              variant=' my-3 mr-3 '
              className='login-btn px-3 hover-item p-2'
              onClick={sendPass}
            >
              {!loading ? 'ورود/ثبت نام' : <Loading />}
            </Button>
          ) : null}
          {btncode1 ? (
            <Button
              variant=' my-3 mr-3 '
              className='login-btn px-3 hover-item p-2'
              onClick={sendCode1}
            >
              {!loading ? 'ورود/ثبت نام' : <Loading />}
            </Button>
          ) : null}
          {btnnewpass ? (
            <Button
              variant=' my-3 mr-3 '
              className='login-btn px-3 hover-item'
              p-2
              onClick={setNewpassword}
            >
              {!loading ? 'ورود/ثبت نام' : <Loading />}
            </Button>
          ) : null}
        </Modal.Footer>
      </Modal>
      <Modal show={registerModal} onHide={RegisterClose}>
        <Modal.Header>
          <Modal.Title>ثبت نام</Modal.Title>
          <ImCross
            style={{ fontSize: '10px', color: '#a0a8af' }}
            onClick={RegisterClose}
          />
        </Modal.Header>
        <Modal.Body style={{ direction: 'rtl', textAlign: 'right' }}>
          <div className='row mx-0'>
            <div className='col-3 my-auto'>
              <label>نام :</label>
            </div>
            <input
              onChange={handleNameChange}
              value={name}
              required
              className='col-9 mt-3'
              id='name'
              type='text'
              placeholder='نام'
              style={{
                borderRadius: '0.45rem',
                border: '1px solid #0000004f',
                height: '30px',
                width: '100%',
                outline: 'none',
                background: '#e8f0fe',
              }}
            />
          </div>

          <div className='row mx-0 mt-2'>
            <div className='col-3 my-auto'>
              <label>نام خانوادگی :</label>
            </div>
            <input
              onChange={handleLnameChange}
              value={lastName}
              required
              className='col-9 mt-3'
              id='lastname'
              type='text'
              placeholder='نام خانوادگی'
              style={{
                borderRadius: '0.45rem',
                border: '1px solid #0000004f',
                height: '30px',
                width: '100%',
                outline: 'none',
                background: '#e8f0fe',
              }}
            />
          </div>

          <div className='row mx-0 mt-2'>
            <div className='col-3 my-auto'>
              <label>موبایل معرف :</label>
            </div>
            <input
              onChange={handleLRefererChange}
              value={Referer}
              required
              className='col-9 mt-3'
              id='lastname'
              type='text'
              placeholder='موبایل معرف'
              style={{
                borderRadius: '0.45rem',
                border: '1px solid #0000004f',
                height: '30px',
                width: '100%',
                outline: 'none',
                background: '#e8f0fe',
              }}
            />
          </div>

          {nationCodeShow ? (
            <div className='row mx-0 mt-2'>
              <div className='col-3 my-auto'>
                <label> کد ملی:</label>
              </div>
              <input
                onChange={handleNationalCodeChange}
                value={nationalCode}
                required
                className='col-9 mt-3'
                id='lastname'
                type='text'
                placeholder='کد ملی '
                style={{
                  borderRadius: '0.45rem',
                  border: '1px solid #0000004f',
                  height: '30px',
                  width: '100%',
                  outline: 'none',
                  background: '#e8f0fe',
                }}
              />
            </div>
          ) : null}

          <div className='row mx-0 mt-4' style={{ textAlign: 'end' }}>
            <div
              className='col-3 my-auto  text-right'
              style={{ textAlign: 'right' }}
            >
              <label>جنسیت :</label>
            </div>
            <div className='row col-7 col-lg-9 col-md-8 col-sm-8  '>
              <div className='col-6 col-lg-6 col-md-6 col-sm-6 text-right'>
                <label className='fontsize-sm ' style={{ marginLeft: '15px' }}>
                  خانم
                </label>
                <input
                  onChange={handleGenderChange}
                  value={gender}
                  required
                  type='radio'
                  name='sex'
                  className='sex text-start'
                  value='2'
                  style={{ textAlign: 'end' }}
                />
              </div>
              <div className='col-6 col-lg-6 col-md-6 col-sm-6 text-right'>
                <label className='fontsize-sm ' style={{ marginLeft: '15px' }}>
                  اقا
                </label>
                <input
                  onChange={handleGenderChange}
                  value={gender}
                  required
                  type='radio'
                  name='sex'
                  className='sex text-start'
                  value='1'
                  style={{ textAlign: 'end' }}
                />
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className='justify-content-center'>
          {!nationCodeShow ? (
            <Button
              variant=' my-3 mr-3 '
              className='login-btn'
              onClick={Register}
            >
              {!loading ? 'ورود/ثبت نام' : <Loading />}
            </Button>
          ) : null}

          {nationCodeShow ? (
            <>
              <Button
                variant=' my-3 mr-3 '
                className='login-btn'
                onClick={sendNatinaolCode}
              >
                {!loading ? 'ورود/ثبت نام' : <Loading />}
              </Button>
            </>
          ) : null}
        </Modal.Footer>
      </Modal>
    </>
  )
}
export default LoginModal
