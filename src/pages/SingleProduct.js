import { React, useState, useCallback, useEffect, Component } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import Loader from '../pages/Loader'
import Error from '../pages/Error'
import { Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

import { FiCalendar } from 'react-icons/fi'
import { BsFillSquareFill } from 'react-icons/bs'
import { useProductsContext } from '../context/ProductsProvider'
import { Helmet } from 'react-helmet'

const url = 'https://negaclub.ir/admin/Articles/API/_singleArticle?token=test'

const SingleProduct = () => {
  const { pathname } = useLocation()
  const typeId = pathname.split('/')[2]
  const id = pathname.split('/')[3]

  const {
    Loading,
    setLoading,
    GridView,
    ListView,
    gridView,
    subjectIdContxt,
    setSubjectIdContxt,
  } = useProductsContext()

  const [subjects, setSubjects] = useState([])
  const [lastNewsList, setLastNewsList] = useState([])
  const [MostViewsList, setMostViewsList] = useState([])

  const [singleProduct, setSingleProduct] = useState({})
  const { Error, setError } = useProductsContext()

  const [type, setType] = useState('')
  const [typeName, setTypeName] = useState('')

  const date = (date) => {
    const newdate = new Date(date * 1000)
    return newdate.toLocaleDateString('fa-Pers')
  }
  const getType = async () => {
    try {
      const rawResponse = await fetch(
        'https://negaclub.ir/admin/ArticleTypes/API/_getTypes?token=test',
        {
          method: 'POST',
          headers: new Headers({
            'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type
          }),
        }
      )
      const content = await rawResponse.json()
      if (content.isDone) {
        setType(content.data)
        setTypeName(content.data.filter((e) => e.id == typeId))
      }
    } catch (error) {
      console.log(error)
    }
  }
  const getSubject = async () => {
    try {
      const rawResponse = await fetch(
        'https://negaclub.ir/admin/Subjects/API/_getSubjects?token=test',
        {
          method: 'POST',
          headers: new Headers({
            'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type
          }),
        }
      )
      const content = await rawResponse.json()
      if (content.isDone) {
        setSubjects(content.data)
      }
    } catch (error) {
      console.log(error)
    }
  }
  const getLastNewsTitle = async () => {
    try {
      const rawResponse = await fetch(
        'https://negaclub.ir/admin/Articles/API/_lastArticles?token=test',
        {
          method: 'POST',
          headers: new Headers({
            'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type
          }),
          body: JSON.stringify({
            typeId: typeId,
            limit: 5,
          }),
        }
      )
      const content = await rawResponse.json()

      if (content.isDone) {
        setLastNewsList(content.data)
      }
    } catch (error) {
      console.log(error)
    }
  }
  const getMostViewNewsTitle = async () => {
    try {
      const rawResponse = await fetch(
        'https://negaclub.ir/admin/Articles/API/_mostViewsArticle?token=test',
        {
          method: 'POST',
          headers: new Headers({
            'Content-Type': 'application/x-www-form-urlencoded',
          }),
          body: JSON.stringify({
            typeId: typeId,
            limit: 5,
          }),
        }
      )
      const content = await rawResponse.json()

      if (content.isDone) {
        setMostViewsList(content.data)
      }
    } catch (error) {
      console.log(error)
    }
  }
  const getSingleNew = async () => {
    setLoading(true)
    axios
      .post(url, {
        typeId: typeId,
        articleId: id,
      })
      .then((response) => {
        setLoading(false)

        if (response.data.isDone) {
          setSingleProduct(response.data.data)
        }
      })
      .catch((error) => {
        console.error(error)
      })
  }

  setTimeout(() => {
    setLoading(false)
  }, 1000)

  useEffect(() => {
    getSubject()
    getType()
    getLastNewsTitle()
    getMostViewNewsTitle()
    getSingleNew()
  }, [id])

  if (Loading) {
    return <Loader />
  }
  if (Error) {
    return <Error />
  }
  return (
    <div className='mt-5 container px-0'>
      <div className=' m-t'>
        <div className=' m-t marginTop '>
          <div
            className='text-center'
            style={{
              backgroundColor: '#4a4848',
              color: '#ffffff',
            }}
          >
            <h1 className='p-5' style={{ color: '#fff' }}>
              {singleProduct['title']}
            </h1>
          </div>
        </div>

        <div className='bg-color1 mt-5'>
          <div className='row'>
            <div className='col-lg-3 order-lg-1 col-md-12 order-md-1  col-sm-12 order-sm-1 col-12 order-1'>
              {/* dasteBandi */}
              <div
                className=' footer-box mt-3'
                style={{
                  cursor: 'pointer',
                  backgroundColor: '#ffffff',
                  border: '1px solid #0000003b',
                  borderRadius: '15px',
                  padding: '10px 20px 10px  20px',
                }}
              >
                <h6 className='mt-4' style={{ fontSize: '20px' }}>
                  دسته بندی
                </h6>
                <hr className='mt-2' />

                <LinkContainer to={`/articles/${typeId}`}>
                  <div
                    onClick={() => {
                      setSubjectIdContxt(0)
                    }}
                    className='footer-add d-flex flex-row mt-4'
                    style={{ cursor: 'pointer' }}
                  >
                    {subjectIdContxt !== 0 ? (
                      <p
                        className='m-0'
                        style={{ color: '#666666', fontSize: '15px' }}
                      >
                        همه
                      </p>
                    ) : (
                      <p
                        className='m-0'
                        style={{
                          color: '#bf9b30',
                          fontSize: '18px',
                          fontWeight: 'bolder',
                        }}
                      >
                        همه
                      </p>
                    )}

                    <BsFillSquareFill
                      className='ml-2 mt-2'
                      size={8}
                      style={{ color: '#be9b30' }}
                    />
                  </div>
                </LinkContainer>

                {subjects &&
                  subjects.map((e) => {
                    return (
                      <>
                        <LinkContainer to={`/articles/${typeId}`}>
                          <div
                            onClick={() => {
                              setSubjectIdContxt(e.id)
                            }}
                            key={e.id}
                            className='footer-add d-flex flex-row mt-4'
                            style={{ cursor: 'pointer' }}
                          >
                            {subjectIdContxt !== e.id ? (
                              <p
                                className='m-0'
                                style={{ color: '#666666', fontSize: '15px' }}
                              >
                                {e.subject}
                              </p>
                            ) : (
                              <p
                                className='m-0'
                                style={{
                                  color: '#bf9b30',
                                  fontSize: '18px',
                                  fontWeight: 'bolder',
                                }}
                              >
                                {e.subject}
                              </p>
                            )}

                            <BsFillSquareFill
                              className='ml-2 mt-2'
                              size={8}
                              style={{ color: '#be9b30' }}
                            />
                          </div>
                        </LinkContainer>
                      </>
                    )
                  })}
              </div>
              {/* dasteBandi */}

              <div
                className=' footer-box mt-3'
                style={{
                  cursor: 'pointer',
                  backgroundColor: '#ffffff',
                  border: '1px solid #0000003b',
                  borderRadius: '15px',
                  padding: '10px 20px 10px  20px',
                }}
              >
                <h6 className='mt-4' style={{ fontSize: '20px' }}>
                  آخرین {typeName && typeName[0]['type']}
                </h6>
                <hr className='mt-2' />

                {lastNewsList &&
                  lastNewsList.map((e) => {
                    return (
                      <LinkContainer
                        to={`/articles/${typeId}/${e.id}`}
                        style={{ cursor: 'pointer', fontSize: '15px' }}
                      >
                        <div
                          key={e.id}
                          className='footer-add d-flex flex-row mt-4'
                          style={{ cursor: 'pointer' }}
                        >
                          {/* <p
                            className='m-0'
                            style={{ color: '#666666', fontSize: '15px' }}
                          >
                            ({date(e.Date)})
                          </p> */}
                          <p
                            className='m-0  ml-2'
                            style={{
                              color: '#666666',
                              fontSize: '15px',
                            }}
                          >
                            {e.title}
                          </p>

                          <BsFillSquareFill
                            className='ml-2 mt-2'
                            size={8}
                            style={{ color: '#be9b30' }}
                          />
                        </div>
                      </LinkContainer>
                    )
                  })}
              </div>

              <div
                className=' footer-box mt-3'
                style={{
                  cursor: 'pointer',
                  backgroundColor: '#ffffff',
                  border: '1px solid #0000003b',
                  borderRadius: '15px',
                  padding: '10px 20px 10px  20px',
                }}
              >
                <h6 className='mt-4' style={{ fontSize: '20px' }}>
                  پربازدید ترین {typeName && typeName[0]['type']}
                </h6>
                <hr className='mt-2' />

                {MostViewsList &&
                  MostViewsList.map((e) => {
                    return (
                      <LinkContainer
                        to={`/articles/${typeId}/${e.id}`}
                        style={{ cursor: 'pointer', fontSize: '15px' }}
                      >
                        <div
                          key={e.Id}
                          className='footer-add d-flex flex-row mt-4'
                          style={{ cursor: 'pointer' }}
                        >
                          {/* <p
                            className='m-0 '
                            style={{ color: '#666666', fontSize: '15px' }}
                          >
                            ( {e.View} تعداد بازدید)
                          </p> */}
                          <p
                            className='m-0 ml-2'
                            style={{ color: '#666666', fontSize: '15px' }}
                          >
                            {e.title}
                          </p>
                          <BsFillSquareFill
                            className='ml-2 mt-2'
                            size={8}
                            style={{ color: '#be9b30' }}
                          />
                        </div>
                      </LinkContainer>
                    )
                  })}
              </div>
            </div>

            <div
              key={singleProduct['id']}
              className='col-lg-9 order-lg-2 col-md-12 order-md-1 col-sm-12 order-sm-1 col-12 order-1 text-end'
              style={{ textAlign: 'end' }}
            >
              <div style={{ border: '1px solid #d2d2d2' }}>
                <img
                  src={singleProduct['image']}
                  style={{ width: '100%', height: '50%', objectFit: 'cover' }}
                  alt='dargah'
                />

                {singleProduct['important'] ? (
                  <div style={{ textAlign: 'initial' }}>
                    <span
                      class='badge span-badge-single-new  '
                      style={{
                        backgroundColor: '#bf9b30',
                        color: '#fff',
                        width: '80px',
                        height: '30px',
                        fontSize: '20px',
                      }}
                    >
                      مهم
                    </span>
                  </div>
                ) : null}
                <div
                  className='d-flex mt-5 mr-3'
                  style={{ justifyContent: 'right' }}
                >
                  <span
                    className=''
                    style={{
                      color: '#666666',
                      fontSize: '10px',
                      margin: '10px',
                    }}
                  >
                    ( {singleProduct['view']} تعداد بازدید)
                  </span>
                  <h3 className='' style={{ color: '#1d5e90' }}>
                    {singleProduct['title']}
                  </h3>
                </div>

                <div className='th-btn1 d-flex flex-row'>
                  <p
                    className='mr-3'
                    style={{ color: '#7f7676', fontSize: '13px' }}
                  >
                    {date(singleProduct['date'])}
                  </p>
                  <FiCalendar
                    className='ml-1'
                    size={20}
                    style={{ color: '#be9b30' }}
                  />
                </div>

                <p
                  className='mx-3 mt-3'
                  style={{
                    textAlign: 'end',
                    lineBreak: 'anywhere',
                    lineHeight: '30px',
                  }}
                >
                  {singleProduct['details']}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleProduct
