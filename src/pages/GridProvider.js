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
import SingleProvider from './SingleProvider'
import axios from 'axios'
import { Cookies, useCookies } from 'react-cookie'

const GridProvider = ({ provider }) => {
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
      <div className='row col-lg-12 col-md-12 col-sm-12 col-12  justify-content-center mt-5 mx-0'>
        {provider &&
          provider.map((e) => {
            return (
              <LinkContainer
                to={`provider/${e.id}`}
                key={e.id}
                className='col-lg-3 col-md-12 col-sm-12 col-12 text-center box1 my-1  box-provider mt-3 mx-1 w-provider-box'
                style={{
                  cursor: 'pointer',
                  border: '2px solid #bf9b30 ',
                  borderRadius: '15px',
                  height: '300px',
                }}
              >
                <div className=' justify-content-end '>
                  <img
                    src={e.avatar}
                    style={{
                      width: '100%',
                      height: '50%',
                      borderRadius: '15px ',
                      objectFit: 'contain',
                      border: '1px solid #cccaca',
                    }}
                    alt={e.id}
                  />

                  {e.providerLevel ? (
                    <img
                      style={{
                        width: '40px',
                        position: 'absolute',
                        top: '0px',
                        left: '20px',
                      }}
                      alt={e.id}
                      src={e.providerLevel.icon}
                    />
                  ) : null}

                  <h3
                    className=' text-center fontsize-name mt-3'
                    style={{ fontSize: '18px', color: 'black' }}
                  >
                    {e.name}
                  </h3>
                  <ReactStarsRating
                    value={Math.ceil(e.rate)}
                    primaryColor={'#bf9b30'}
                    isEdit={false}
                    size={15}
                    isHalf={true}
                  />

                  {levelId ? (
                    <div
                      className='col-lg-8 col-md-4 col-sm-4 col-10 d-flex mt-3'
                      style={{
                        textAlign: 'center',
                        margin: 'auto',
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
                      className='col-lg-8 col-md-4 col-sm-4 col-10 d-flex mt-3'
                      style={{
                        textAlign: 'center',
                        margin: 'auto',
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
              </LinkContainer>
            )
          })}
      </div>
    </>
  )
}

export default GridProvider
