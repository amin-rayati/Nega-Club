/* eslint-disable react/jsx-no-undef */
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

const News = () => {
  const { Loading, setLoading } = useProductsContext()

  const [news, setNews] = useState([])

  const [newsTitle, setNewsTitle] = useState('')
  const [newsType, setNewsType] = useState('')

  const [newCatId, setNewCatId] = useState('')
  const [newSubId, setSubCatId] = useState('')

  const [moreLoading, setMoreLoading] = useState(false)
  const [moreLoading1, setMoreLoading1] = useState(false)

  const [i, setI] = useState(1)
  const [j, setJ] = useState(1)

  const [activeBtnMoreLoad, setActiveBtnMoreLoad] = useState(true)
  const [activeBtnMoreLoad1, setActiveBtnMoreLoad1] = useState(false)

  const getArtickles = async () => {
    try {
      const rawResponse = await fetch(
        'https://negaclub.ir/admin/News/API/_news?token=test',
        {
          method: 'POST',
          headers: new Headers({
            'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type
          }),
          body: JSON.stringify({
            page: i,
          }),
        }
      )
      const content = await rawResponse.json()

      if (content.isDone) {
        setNews(content.data.list)
        if (content.data.hasNext) {
          setActiveBtnMoreLoad(true)
        } else {
          setActiveBtnMoreLoad(false)
        }
      }
    } catch (error) {
      console.log(error)
    }
  }
  const getMoreArtickles = async () => {
    try {
      const rawResponse = await fetch(
        'https://negaclub.ir/admin/News/API/_news?token=test',
        {
          method: 'POST',
          headers: new Headers({
            'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type
          }),
          body: JSON.stringify({
            page: i + 1,
          }),
        }
      )
      const content = await rawResponse.json()

      if (content.isDone) {
        setNews([...news, ...content.data.list])
        if (content.data.hasNext) {
          setActiveBtnMoreLoad(true)
          setI(i + 1)
          setMoreLoading(false)
        }
        if (content.data.hasNext === false) {
          setActiveBtnMoreLoad(false)
        }
      }
    } catch (error) {
      console.log(error)
    }
  }
  const getArtickleTitle = async () => {
    try {
      const rawResponse = await fetch(
        'https://negaclub.ir/admin/NewsCategory/API/_newsCategory?token=test',
        {
          method: 'POST',
          headers: new Headers({
            'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type
          }),
        }
      )
      const content = await rawResponse.json()
      if (content.isDone) {
        setNewsTitle(content.data)
      }
    } catch (error) {
      console.log(error)
    }
  }
  const getArtickleType = async () => {
    try {
      const rawResponse = await fetch(
        'https://negaclub.ir/admin/NewsSubject/API/_NewsSubject?token=test',
        {
          method: 'POST',
          headers: new Headers({
            'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type
          }),
        }
      )
      const content = await rawResponse.json()
      if (content.isDone) {
        setNewsType(content.data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const filterNews = async (newCategoryId, newSubjectId) => {
    setActiveBtnMoreLoad(false)

    try {
      const rawResponse = await fetch(
        'https://negaclub.ir/admin/News/API/_sidebar?token=test',
        {
          method: 'POST',
          headers: new Headers({
            'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type
          }),
          body: JSON.stringify({
            newCategoryId: newCategoryId,
            newSubjectId: newSubjectId,
            page: j,
          }),
        }
      )
      const content = await rawResponse.json()
      if (content.isDone) {
        setNewCatId(content.data['newCategoryId'])
        setSubCatId(content.data.list['0']['newSubjectId'])
        setNews(content.data.list)
        if (content.data.hasNext) {
          setActiveBtnMoreLoad1(true)
        } else {
          setActiveBtnMoreLoad1(false)
        }
      }
    } catch (error) {
      console.log(error)
    }
  }

  const moreFilterNews = async () => {
    try {
      const rawResponse = await fetch(
        'https://negaclub.ir/admin/News/API/_sidebar?token=test',
        {
          method: 'POST',
          headers: new Headers({
            'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type
          }),
          body: JSON.stringify({
            newCategoryId: newCatId,
            newSubjectId: newSubId,
            page: j + 1,
          }),
        }
      )
      const content = await rawResponse.json()

      console.log(content)
      if (content.isDone) {
        setNews([...news, ...content.data.list])
        if (content.data.hasNext) {
          setActiveBtnMoreLoad1(true)
          setI(j + 1)
          setMoreLoading1(false)
        }
        if (content.data.hasNext === false) {
          setActiveBtnMoreLoad1(false)
          setMoreLoading1(false)
        }
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getArtickles()
    getArtickleTitle()
    getArtickleType()
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
        <div
          className='text-center'
          style={{
            backgroundColor: '#4a4848',
            color: '#ffffff',
          }}
        >
          <h3 className='p-5' style={{ color: '#fff' }}>
            اخبار
          </h3>
        </div>
      </div>

      <div className='container m-t '>
        <div className='bg-color1'>
          <div className='row'>
            <div className='col-lg-3 order-lg-1 col-md-12 order-md-2 col-sm-12 order-2 col-12 order-2'>
              {newsTitle &&
                newsTitle.map((e) => {
                  return (
                    <div
                      key={e.id}
                      className=' footer-box mt-3'
                      style={{
                        cursor: 'pointer',
                        backgroundColor: '#ffffff',
                        border: '1px solid #0000003b',
                        borderRadius: '15px',
                        padding: '10px 20px 10px  20px',
                      }}
                    >
                      <h6 className='mt-4'>{e.name}</h6>
                      <hr className='mt-2' />
                      {newsType &&
                        newsType.map((item) => {
                          return (
                            <div
                              onClick={() => filterNews(e.id, item.id)}
                              className='footer-add d-flex flex-row mt-4'
                              style={{ cursor: 'pointer' }}
                            >
                              <p
                                className='m-0'
                                style={{ color: '#666666', fontSize: '15px' }}
                              >
                                {e.name}
                                {item.newSubCategoryName}
                              </p>
                              <BsFillSquareFill
                                className='ml-2 mt-2'
                                size={8}
                                style={{ color: '#be9b30' }}
                              />
                            </div>
                          )
                        })}
                    </div>
                  )
                })}
            </div>

            <div
              className='col-lg-9  order-lg-2 col-md-12 order-md-1 col-sm-12 order-sm-1 col-12 order-1 text-end'
              style={{ textAlign: 'end', marginTop: '70px' }}
            >
              <div className='row d-flex justify-content-center'>
                {news &&
                  news.map((e) => {
                    return (
                      <div
                        key={e.newId}
                        className='col-lg-6 order-lg-1 col-md-12 order-md-3   col-sm-12 order-sm-3 col-12 order-3 mt-3'
                      >
                        <img
                          src={e.newImage}
                          style={{
                            width: '100%',
                            height: '50%',
                            objectFit: 'cover',
                          }}
                          className='th-img-'
                          alt='web'
                        />
                        <div
                          className='th-btn d-flex flex-row'
                          style={{ backgroundColor: '#bf9b30' }}
                        >
                          <p
                            className='m-0'
                            style={{
                              color: '#fff',
                              fontSize: '10px',
                            }}
                          >
                            بهمن ۱۶, ۱۳۹۸
                          </p>
                          <FiCalendar className='ml-1' />
                        </div>
                        <div className='mt-2' style={{ textAlign: 'end' }}>
                          <h1 className='title' style={{ fontSize: '18px' }}>
                            {' '}
                            {e.newTitle}
                          </h1>
                          <p className='mt-3' style={{ fontSize: '11px' }}></p>
                          {e.newDetails}
                        </div>
                        <BsArrowLeft
                          className='mr-2'
                          style={{ color: '#1d5e90' }}
                          size={20}
                        />
                        <Link to={`/products/id`}>
                          <h6 className='title' style={{ fontSize: '10px' }}>
                            ادامه مطالب
                          </h6>
                        </Link>
                      </div>
                    )
                  })}
              </div>
              {activeBtnMoreLoad ? (
                <div className='text-center '>
                  <Button
                    variant=' my-3 mr-3 '
                    className='login-btn px-3 hover-item navBtn-font navBtn-font '
                    onClick={() => {
                      setMoreLoading(true)
                      getMoreArtickles()
                    }}
                  >
                    {moreLoading ? <Loading1 /> : 'بارگذاری بیشتر'}
                  </Button>
                </div>
              ) : null}

              {activeBtnMoreLoad1 ? (
                <div className='text-center '>
                  <Button
                    variant=' my-3 mr-3 '
                    className='login-btn px-3 hover-item navBtn-font navBtn-font '
                    onClick={() => {
                      setMoreLoading1(true)
                      moreFilterNews()
                    }}
                  >
                    {moreLoading1 ? <Loading1 /> : 'بارگذاری بیشتر'}
                  </Button>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default News
