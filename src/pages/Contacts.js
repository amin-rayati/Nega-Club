import { React, useState, useEffect, useCallback } from 'react'
import { useProductsContext } from '../context/ProductsProvider'
import Loader from '../pages/Loader'
import Capture1 from '../img/Capture1.png'

import { Button } from 'react-bootstrap'
import { BsEnvelopeOpenFill } from 'react-icons/bs'
import { HiLocationMarker } from 'react-icons/hi'
import { FaPhone } from 'react-icons/fa'
import validator from 'validator'
import axios from 'axios'
import { Cookies, useCookies } from 'react-cookie'
import Swal from 'sweetalert2'
import BuyModal from './BuyModal'
import Loading1 from '../pages/Loading1'
import swal from 'sweetalert'
import contact from '../img/telus.png'
import { Helmet } from 'react-helmet'

const Contacts = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['user'])

  const { Loading, setLoading } = useProductsContext()
  const [loading1, setLoading1] = useState(false)

  const [name, setName] = useState('')
  const [lastName, setLastNAme] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [catId, setCatID] = useState('')
  const [subCatID, setSubCatID] = useState('')

  const [cat, setCat] = useState('')
  const [subcat, setSubCat] = useState('')
  const [subcatShow, setSubCatShow] = useState(false)
  const [emailRequire, setEmailRequire] = useState(false)

  const handleCatChange = (e) => {
    getSubCat(e.target.value)
  }

  const handleNameChange = (e) => {
    setName(e.target.value)
  }
  const handleLastNameChange = (e) => {
    setLastNAme(e.target.value)
  }
  const handleEmailChange = (e) => {
    setEmail(e.target.value)
    setEmailRequire(false)
  }
  const handleMessageChange = (e) => {
    setMessage(e.target.value)
  }
  const validateEmail = (email) => {
    if (validator.isEmail(email)) {
      setEmailRequire(false)
      return true
    } else {
      return false
    }
  }

  const getCats = async () => {
    try {
      const rawResponse = await fetch(
        'https://negaclub.ir/admin/TicketSubjects/API/_ticketSubjects?token=test',
        {
          method: 'POST',
          headers: {
            token: 'test',
          },
        }
      )
      const content = await rawResponse.json()
      if (content.isDone) {
        setCat(content.data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const getSubCat = async (id) => {
    axios
      .post(
        'https://negaclub.ir/admin/SubTicketSubjects/API/_subSubject?token=test',
        {
          subjectId: id,
        }
      )
      .then((response) => {
        if (response.data.isDone) {
          if (response.data.data.length !== 0) {
            setSubCat(response.data.data)
            setSubCatShow(true)
          } else {
            setSubCatShow(false)
          }
        }
      })
      .catch((error) => {
        console.error(error)
      })
  }

  const sendMessage = () => {
    if (!subcatShow) {
      if (!validateEmail(email)) {
        setEmailRequire(true)
      } else {
        setLoading1(true)
        axios
          .post(
            'https://negaclub.ir/admin/Tickets/API/_sendTicket?token=test',
            {
              fname: name,
              lname: lastName,
              subjectId: document.getElementById('cat').value,
              subSubjectId: 0,
              email: email,
              message: message,
            },
            {
              headers: {
                token: 'test',
              },
            }
          )

          .then((response) => {
            setLoading1(false)
            if (response.data.isDone) {
              Swal.fire({
                type: 'success',
                text: 'پیام شما با موفقیت ثبت شد',
              })
            }
          })
          .catch((error) => {
            console.error(error)
          })
      }
    } else {
      if (!validateEmail(email)) {
        setEmailRequire(true)
      } else {
        setLoading1(true)
        axios
          .post(
            'https://negaclub.ir/admin/Tickets/API/_sendTicket?token=test',
            {
              fname: name,
              lname: lastName,
              subjectId: document.getElementById('cat').value,
              subSubjectId: document.getElementById('sub').value,
              email: email,
              message: message,
            },
            {
              headers: {
                token: 'test',
              },
            }
          )

          .then((response) => {
            setLoading1(false)
            if (response.data.isDone) {
              Swal.fire({
                type: 'success',
                text: 'پیام شما با موفقیت ثبت شد',
              })
            }
          })
          .catch((error) => {
            console.error(error)
          })
      }
    }
  }

  useEffect(() => {
    getCats()
  }, [])

  setTimeout(() => {
    setLoading(false)
  }, 1000)

  if (Loading) {
    return <Loader />
  }
  return (
    <div className='my-5 '>
      <div className='container m-t marginTop px-0'>
        <div
          className='text-center'
          style={{
            backgroundColor: '#4a4848',
            color: '#ffffff',
          }}
        >
          <h1 className='p-5' style={{ color: '#ffffff' }}>
            تماس با ما
          </h1>
          <Helmet>
            <title> تماس با نگاکلاب</title>
          </Helmet>
        </div>
        {/* <div className=' my-5 '>
          <div>
            <div className='bar mx-auto'></div>
          </div>
        </div> */}

        <div className='row  mt-4 mx-2 px-3'>
          <div className='col-12 order-2 order-md-1 col-lg-6  '>
            <input
              value={name}
              onChange={handleNameChange}
              className='form-input my-3'
              type='text'
              name='name'
              placeholder='نام'
            ></input>

            <input
              value={lastName}
              onChange={handleLastNameChange}
              className='form-input my-3'
              type='text'
              name='name'
              placeholder='نام خانوادگی'
            ></input>

            <select
              onChange={handleCatChange}
              id='cat'
              className=' form-input my-3'
              placeholder='دسته بندی'
              type='text'
              title='Ten digits code'
            >
              <option disabled>نوع درخواست</option>
              {cat &&
                cat.map((e) => {
                  return (
                    <option key={e.id} value={e.id}>
                      {e.subject}
                    </option>
                  )
                })}
            </select>

            {subcatShow ? (
              <select
                id='sub'
                className=' form-input my-3'
                placeholder='دسته بندی'
                type='text'
                title='Ten digits code'
              >
                {subcat &&
                  subcat.map((e) => {
                    return (
                      <option key={e.subSubjectId} value={e.subSubjectId}>
                        {e.name}
                      </option>
                    )
                  })}
              </select>
            ) : null}

            <input
              value={email}
              onChange={handleEmailChange}
              className={
                emailRequire ? 'form-input-red my-3' : 'form-input my-3'
              }
              type='email'
              name='name'
              placeholder='ایمیل'
            ></input>
            {emailRequire ? (
              <h5
                className='mt-2'
                style={{
                  color: '#dc3545',
                  textAlign: 'right',
                  fontSize: '10px',
                }}
              >
                لطفا ایمیل را به درستی وارد کنید
              </h5>
            ) : null}

            <textarea
              value={message}
              onChange={handleMessageChange}
              className='form-input my-3'
              type='text'
              name='name'
              placeholder='متن پیغام'
              style={{ height: '100px' }}
            ></textarea>
            <Button
              variant=' my-3 mr-3 '
              onClick={sendMessage}
              className='login-btn px-3 hover-item'
            >
              {loading1 ? <Loading1 /> : 'ارسال پیغام'}
            </Button>
          </div>

          <div className='col-12 order-1 order-md-2 col-lg-6 '>
            <img
              src={contact}
              at='tarh'
              style={{ borderRadius: '15px', width: '100%' }}
              alt='img'
            />
          </div>
        </div>
        <BuyModal />

        <div className='row my-5 justify-content-center mx-1'>
          <div className='col-lg-3 col-md-5 col-sm-5 col-12 text-center box2  my-2  '>
            <div className=' d-flex justify-content-center'>
              <div className='bg-circle1'>
                <FaPhone
                  className='icon-color'
                  size={30}
                  style={{ color: '#be9b30' }}
                />
              </div>
            </div>

            <h5 className='mt-4' style={{ color: '#1d5e90' }}>
              تلفن تماس
            </h5>
            <p className='mt-3'> 026-34239231 - 026-34239221</p>
          </div>
          <div className='col-lg-3 col-md-5 col-sm-5 col-12 text-center box2  my-2  '>
            <div className=' d-flex justify-content-center'>
              <div className='bg-circle1'>
                <FaPhone
                  className='icon-color'
                  size={30}
                  style={{ color: '#be9b30' }}
                />
              </div>
            </div>

            <h5 className='mt-3' style={{ color: '#1d5e90' }}>
              تلفن های سراسری
            </h5>
            <p className='mt-3'> 021-91071231 - 0211-91071232</p>
          </div>
          <div className='col-lg-3 col-md-5 col-sm-5 col-12 text-center box2  my-2  '>
            <div className=' d-flex justify-content-center'>
              <div className='bg-circle1'>
                <HiLocationMarker
                  className='icon-color'
                  size={30}
                  style={{ color: '#be9b30' }}
                />
              </div>
            </div>

            <h5 className='mt-4' style={{ color: '#1d5e90' }}>
              آدرس
            </h5>
            <p className='mt-3'>
              کرج-بلوارشهید بهشتی-نبش دهقان ویلای دوم-ساختمان اتیه-طبقه ششم
            </p>
          </div>
          <div className='col-lg-3 col-md-5 col-sm-5 col-12 text-center box2  my-2  '>
            <div className=' d-flex justify-content-center'>
              <div className='bg-circle1'>
                <BsEnvelopeOpenFill
                  className='icon-color'
                  size={30}
                  style={{ color: '#be9b30' }}
                />
              </div>
            </div>

            <h5 className='mt-4' style={{ color: '#1d5e90' }}>
              ایمیل
            </h5>
            <p className='mt-3'>info@negaclub.ir</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacts
