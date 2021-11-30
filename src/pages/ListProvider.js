import { React, useState, useEffect } from 'react'
import { useProductsContext } from '../context/ProductsProvider'
import Loader from './Loader'
import { Button } from 'react-bootstrap'
import api from '../img/api.png'
import dargah from '../img/dargah.png'
import web from '../img/web.png'
import set from '../img/set.jpg'
import { FiCalendar } from 'react-icons/fi'
import { Link, link } from 'react-router-dom'
import Loading1 from './Loading1'
import { BsArrowLeft } from 'react-icons/bs'
import { BsFillSquareFill } from 'react-icons/bs'
import { BiUpArrowAlt, BiDownArrowAlt } from 'react-icons/bi'
import { LinkContainer } from 'react-router-bootstrap'
import { BsFillGrid3X3GapFill } from 'react-icons/bs'
import { FaListUl } from 'react-icons/fa'
import { AiFillStar } from 'react-icons/ai'
import { AiOutlineStar } from 'react-icons/ai'
import ReactStarsRating from 'react-awesome-stars-rating'
import axios from 'axios'
import { Cookies, useCookies } from 'react-cookie'
const ListProvider = ({ provider }) => {
  const [cookies, setCookie, removeCookie] = useCookies(['user'])
  const { userData, setUserData } = useProductsContext()
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

  useEffect(() => {
    if (cookies['user']) {
      getIndividualInfo()
    }
  }, [])
  return (
    <>
      {provider &&
        provider.map((e) => {
          return (
            <LinkContainer
              to={`provider/${e.id}`}
              key={e.id}
              className='row col-12 justify-content-end  mt-4'
              style={{
                margin: '0px',
                background: 'white',
                border: '1px solid #bc992f',
                borderRadius: '15px',
                padding: '15px 0 15px 0',
                height: 'fit-content',
                cursor: 'pointer',
              }}
            >
              <div key={e.id} className='row col-12 justify-content-end  mt-4'>
                <div className='col-lg-8 order-lg-1 col-md-12 order-md-2 col-sm-12 order-sm-2 col-12 order-2 m-auto text-right'>
                  <h3
                    className=' text-right fontsize-name mt-4'
                    style={{ fontSize: '20px', color: 'black' }}
                  >
                    {e.name}
                  </h3>

                  {/* <div className='mt-4' style={{ textAlign: 'right' }}>
                    <AiFillStar style={{ color: '#bf9b30' }} />
                    <AiFillStar style={{ color: '#bf9b30' }} />
                    <AiFillStar style={{ color: '#bf9b30' }} />
                    <AiFillStar style={{ color: '#bf9b30' }} />
                    <AiOutlineStar style={{ color: '#bf9b30' }} />
                  </div> */}
                  <ReactStarsRating
                    primaryColor={'#bf9b30'}
                    isEdit={false}
                    size={15}
                    value={e.rate}
                  />
                  <h3
                    className=' text-right fontsize-name mt-3'
                    style={{
                      fontSize: '14px',
                      color: '#423e3e',
                      lineHeight: '30px',
                    }}
                  >
                    در گروه کاری پوشاک و صنف فروش لباس زنانه پذیرنده خود را
                    انتخاب کنیددر گروه کاری پوشاک و صنف فروش لباس زنانه پذیرنده
                    خود را انتخاب کنیددر گروه کاری پوشاک و صنف فروش لباس زنانه
                    پذیرنده خود را انتخاب کنیددر گروه کاری پوشاک و صنف فروش لباس
                    زنانه پذیرنده خود را انتخاب کنید
                  </h3>
                  <div className='mt-5' style={{ textAlign: '-webkit-right' }}>
                    {levelId ? (
                      <div
                        className='col-lg-2 col-md-4 col-sm-4 col-4 d-flex mt-3'
                        style={{
                          textAlign: '-webkit-right',

                          padding: '7px',
                          background: '#920303',
                          borderRadius: '25px',
                          color: '#ffff',
                        }}
                      >
                        <p
                          className=' fontsize-name'
                          style={{ color: '#ffffff', margin: 'auto' }}
                        >
                          تخفیف
                        </p>
                        {levelId == '1' ? (
                          <p
                            className='mx-auto'
                            style={{
                              color: '#ffffff',
                              margin: 'auto',
                            }}
                          >
                            {e.discountPercent
                              ? e.discountPercent * (90 / 100)
                              : null}
                            %
                          </p>
                        ) : null}
                        {levelId == '2' ? (
                          <p
                            className='mx-auto'
                            style={{
                              color: '#ffffff',
                              margin: 'auto',
                            }}
                          >
                            {e.discountPercent
                              ? e.discountPercent * (75 / 100)
                              : null}
                            %
                          </p>
                        ) : null}
                        {levelId == '3' ? (
                          <p
                            className='mx-auto'
                            style={{
                              color: '#ffffff',
                              margin: 'auto',
                            }}
                          >
                            {e.discountPercent
                              ? e.discountPercent * (60 / 100)
                              : null}
                            %
                          </p>
                        ) : null}

                        {levelId == '4' ? (
                          <p
                            className='mx-auto'
                            style={{
                              color: '#ffffff',
                              margin: 'auto',
                            }}
                          >
                            {e.discountPercent
                              ? e.discountPercent * (50 / 100)
                              : null}
                            %
                          </p>
                        ) : null}
                      </div>
                    ) : (
                      <div
                        className='col-lg-2 col-md-4 col-sm-4 col-10 d-flex mt-3'
                        style={{
                          textAlign: 'center',

                          padding: '7px',
                          background: '#920303',
                          borderRadius: '25px',
                          color: '#ffff',
                        }}
                      >
                        <p
                          className=' fontsize-name'
                          style={{ color: '#ffffff', margin: 'auto' }}
                        >
                          تخفیف
                        </p>

                        <p
                          className='mx-auto'
                          style={{
                            color: '#ffffff',
                            margin: 'auto',
                          }}
                        >
                          {e.discountPercent ? e.discountPercent : null}% تا
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                <div className='col-lg-4 order-lg-2 col-md-12 order-md-1 col-sm-12 order-sm-1 col-12 order-1 m-auto           '>
                  {e.providerLevel ? (
                    <img
                      style={{
                        width: '40px',
                        position: 'absolute',
                        top: '0px',
                        left: '20px',
                      }}
                      src={e.providerLevel.icon}
                      alt='img'
                    />
                  ) : null}
                  <img
                    src={e.avatar}
                    style={{
                      width: '100%',
                      height: 'fit-content',
                      borderRadius: '15px ',
                      objectFit: 'contain',
                      border: '1px solid #cccaca',
                    }}
                    alt={e.id}
                  />
                </div>
              </div>
            </LinkContainer>
          )
        })}
    </>
  )
}

export default ListProvider
