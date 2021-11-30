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
import { BiUpArrowAlt, BiDownArrowAlt } from 'react-icons/bi'
import { LinkContainer } from 'react-router-bootstrap'
import { BsFillGrid3X3GapFill } from 'react-icons/bs'
import { FaListUl } from 'react-icons/fa'
import { Helmet } from 'react-helmet'
import { useLocation } from 'react-router-dom'

import List from './List'
import Grid from './Grid'

const News = () => {
  const { pathname } = useLocation()
  const typeId = pathname.split('/')[2]

  const {
    Loading,
    setLoading,
    GridView,
    ListView,
    gridView,
    subjectIdContxt,
    setSubjectIdContxt,
  } = useProductsContext()

  const [news, setNews] = useState([])
  const [subjects, setSubjects] = useState([])
  const [lastNewsList, setLastNewsList] = useState([])
  const [MostViewsList, setMostViewsList] = useState([])

  const [newCatId, setNewCatId] = useState('')
  const [newSubId, setSubCatId] = useState('')

  const [moreLoading, setMoreLoading] = useState(false)
  const [moreLoading1, setMoreLoading1] = useState(false)
  const [moreLoading2, setMoreLoading2] = useState(false)

  const [filterLoading, setfilterLoading] = useState(false)
  const [filterLoading1, setfilterLoading1] = useState(false)

  const [i, setI] = useState(1)
  const [j, setJ] = useState(1)
  const [k, setk] = useState(1)

  const [activeBtnMoreLoad, setActiveBtnMoreLoad] = useState(true)
  const [activeBtnMoreLoad1, setActiveBtnMoreLoad1] = useState(false)
  const [activeBtnMoreLoad2, setActiveBtnMoreLoad2] = useState(false)

  const [type, setType] = useState('')
  const [typeName, setTypeName] = useState('')

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
  const getArtickles = async () => {
    setActiveBtnMoreLoad1(false)
    try {
      const rawResponse = await fetch(
        'https://negaclub.ir/admin/Articles/API/_getArticles?token=test',
        {
          method: 'POST',
          headers: new Headers({
            'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type
          }),
          body: JSON.stringify({
            typeId: typeId,
            page: 1,
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
        'https://negaclub.ir/admin/Articles/API/_getArticles?token=test',
        {
          method: 'POST',
          headers: new Headers({
            'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type
          }),
          body: JSON.stringify({
            typeId: typeId,
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
  const filterNewsBySubject = async (id) => {
    setActiveBtnMoreLoad(false)
    setActiveBtnMoreLoad2(false)
    setfilterLoading(true)
    setSubjectIdContxt(id)

    try {
      const rawResponse = await fetch(
        'https://negaclub.ir/admin/Articles/API/_getArticleBySubjectId?token=test',
        {
          method: 'POST',
          headers: new Headers({
            'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type
          }),
          body: JSON.stringify({
            subjectId: id,
            typeId: typeId,
            page: 1,
          }),
        }
      )
      const content = await rawResponse.json()

      if (content.isDone) {
        setActiveBtnMoreLoad(false)
        setfilterLoading(false)
        // setSubCatId(content.data.list['0']['SubjectId'])
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
  const moreFilterNewsBySubject = async () => {
    try {
      const rawResponse = await fetch(
        'https://negaclub.ir/admin/Articles/API/_getArticleBySubjectId?token=test',
        {
          method: 'POST',
          headers: new Headers({
            'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type
          }),
          body: JSON.stringify({
            subjectId: subjectIdContxt,
            typeId: typeId,
            page: j + 1,
          }),
        }
      )
      const content = await rawResponse.json()

      if (content.isDone) {
        setNews([...news, ...content.data.list])
        if (content.data.hasNext) {
          setActiveBtnMoreLoad1(true)
          setJ(j + 1)
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

  const filterNewsByCat = async (e) => {
    if (subjectIdContxt === 0) {
      setk(1)
      setNewCatId(e.target.value)
      setActiveBtnMoreLoad(false)
      setActiveBtnMoreLoad1(false)
      setfilterLoading1(true)

      try {
        const rawResponse = await fetch(
          'https://negaclub.ir/admin/Articles/API/_filterArticles?token=test',
          {
            method: 'POST',
            headers: new Headers({
              'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type
            }),
            body: JSON.stringify({
              typeId: typeId,
              categoryId: e.target.value,
              page: 1,
            }),
          }
        )
        const content = await rawResponse.json()

        if (content.isDone) {
          setfilterLoading1(false)
          setNews(content.data.list)
          if (content.data.hasNext) {
            setActiveBtnMoreLoad2(true)
          } else {
            setActiveBtnMoreLoad2(false)
          }
        }
      } catch (error) {
        console.log(error)
      }
    } else {
      setk(1)
      setNewCatId(e.target.value)
      setActiveBtnMoreLoad(false)
      setActiveBtnMoreLoad1(false)
      setfilterLoading1(true)

      try {
        const rawResponse = await fetch(
          'https://negaclub.ir/admin/Articles/API/_filterArticles?token=test',
          {
            method: 'POST',
            headers: new Headers({
              'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type
            }),
            body: JSON.stringify({
              typeId: typeId,
              subjectId: subjectIdContxt,
              categoryId: e.target.value,
              page: 1,
            }),
          }
        )
        const content = await rawResponse.json()
        if (content.isDone) {
          setfilterLoading1(false)
          setNews(content.data.list)
          if (content.data.hasNext) {
            setActiveBtnMoreLoad2(true)
          } else {
            setActiveBtnMoreLoad2(false)
          }
        }
      } catch (error) {
        console.log(error)
      }
    }
  }
  const moreFilterNewsByCat = async () => {
    if (subjectIdContxt === 0) {
      try {
        const rawResponse = await fetch(
          'https://negaclub.ir/admin/Articles/API/_filterArticles?token=test',
          {
            method: 'POST',
            headers: new Headers({
              'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type
            }),
            body: JSON.stringify({
              typeId: typeId,
              categoryId: newCatId,
              page: k + 1,
            }),
          }
        )
        const content = await rawResponse.json()
        if (content.isDone) {
          setNews([...news, ...content.data.list])
          if (content.data.hasNext) {
            setActiveBtnMoreLoad2(true)
            setk(k + 1)
            setMoreLoading2(false)
          }
          if (content.data.hasNext === false) {
            setActiveBtnMoreLoad2(false)
            setMoreLoading2(false)
          }
        }
      } catch (error) {
        console.log(error)
      }
    } else {
      console.log(newCatId)
      try {
        const rawResponse = await fetch(
          'https://negaclub.ir/admin/Articles/API/_filterArticles?token=test',
          {
            method: 'POST',
            headers: new Headers({
              'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type
            }),
            body: JSON.stringify({
              typeId: typeId,
              subjectId: subjectIdContxt,
              categoryId: newCatId,
              page: k + 1,
            }),
          }
        )
        const content = await rawResponse.json()
        if (content.isDone) {
          setNews([...news, ...content.data.list])
          if (content.data.hasNext) {
            setActiveBtnMoreLoad2(true)
            setk(k + 1)
            setMoreLoading2(false)
          }
          if (content.data.hasNext === false) {
            setActiveBtnMoreLoad2(false)
            setMoreLoading2(false)
          }
        }
      } catch (error) {
        console.log(error)
      }
    }
  }

  useEffect(() => {
    getArtickles()
    setActiveBtnMoreLoad(false)
    setMoreLoading(false)
    getType()
    getSubject()
    getLastNewsTitle()
    getMostViewNewsTitle()
    filterNewsBySubject(subjectIdContxt)
    setLoading(false)
  }, [pathname, typeId])

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
          <h1 className='p-5' style={{ color: '#fff' }}>
            {typeName && typeName[0]['type']}
          </h1>
          <Helmet>
            <title> {typeName && typeName[0]['type']} نگاکلاب</title>
          </Helmet>
        </div>
      </div>

      <div className='container m-t '>
        <div className='bg-color1'>
          <div className='row'>
            <div className='col-lg-3 order-lg-1 col-md-12 order-md-1  col-sm-12 order-sm-1 col-12 order-1'>
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
                {/* dasteBandi */}
                <h6 className='mt-4' style={{ fontSize: '20px' }}>
                  دسته بندی
                </h6>
                <hr className='mt-2' />

                <div
                  onClick={() => {
                    getArtickles()
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

                {subjects &&
                  subjects.map((e) => {
                    return (
                      <div
                        onClick={() => {
                          setSubjectIdContxt(e.id)
                          filterNewsBySubject(e.id)
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
                    )
                  })}
              </div>
              {/* dasteBandi */}

              {/* akharin va mostview */}
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
                              style={{ color: '#666666', fontSize: '10px' }}
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
                            size={5}
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
                          key={e.id}
                          className='footer-add d-flex flex-row mt-4'
                          style={{ cursor: 'pointer' }}
                        >
                          {/* <p
                              className='m-0 '
                              style={{ color: '#666666', fontSize: '10px' }}
                            >
                              ( {e.View} تعداد بازدید)
                            </p> */}
                          <p
                            className='m-0 ml-2'
                            style={{
                              color: '#666666',
                              fontSize: '15px',
                            }}
                          >
                            {e.title}
                          </p>
                          <BsFillSquareFill
                            className='ml-2 mt-2'
                            size={5}
                            style={{ color: '#be9b30' }}
                          />
                        </div>
                      </LinkContainer>
                    )
                  })}
              </div>
              {/* akharin va mostview */}
            </div>

            <div
              className='col-lg-9    order-lg-2 col-md-12 order-md-2 col-sm-12 order-sm-2 col-12 order-2 text-end'
              style={{ textAlign: 'end' }}
            >
              <div
                className='row'
                style={{
                  borderBottom: '1px solid  #0000003b',
                  justifyContent: 'space-between',
                }}
              >
                <div className='col-lg-4 col-md-4 col-sm-4 col-12'>
                  <div
                    className='my-3 d-lg-block d-md-none d-sm-none d-none'
                    style={{
                      backgroundColor: '#bd992f',
                      borderRadius: '10px',
                      width: 'fit-content',
                    }}
                  >
                    <FaListUl
                      size={30}
                      className={`${
                        !gridView ? 'active-btn icon-color' : 'icon-color'
                      }`}
                      onClick={ListView}
                      style={{ cursor: 'pointer' }}
                    />

                    <BsFillGrid3X3GapFill
                      size={30}
                      className={`${
                        gridView ? 'active-btn icon-color' : 'icon-color'
                      }`}
                      onClick={GridView}
                      style={{ cursor: 'pointer' }}
                    />
                  </div>
                </div>
                {/* 
                <div className='input-group  col-lg-4 col-md-12 col-sm-12 col-12 my-3'>
                  <button
                    type='button'
                    className='search-btn btn'
                    style={{
                      background: '#e8d882',
                      color: '#fff',
                      height: 'initial',
                    }}
                  >
                    جستجو
                  </button>
                  <input
                    type='search'
                    className='form-control rounded text-right'
                    placeholder='...جستجو'
                    aria-label='Search'
                    aria-describedby='search-addon'
                    style={{
                      height: 'initial',
                    }}
                  />
                </div>
              */}

                <div className='col-lg-4 col-md-12 col-sm-12 col-12'>
                  <select
                    onChange={(e) => {
                      filterNewsByCat(e)
                      setk(1)
                    }}
                    id='cat'
                    className=' form-input my-3'
                    placeholder='دسته بندی'
                    type='text'
                    title='Ten digits code'
                  >
                    <option disabled>مرتب سازی</option>
                    <option value={1}> بر اساس تاریخ (صعودی)</option>
                    <option value={2}> بر اساس تاریخ (نزولی)</option>
                    <option value={3}>بر اساس تعداد بازدید (صعودی)</option>
                    <option value={4}>بر اساس تعداد بازدید (نزولی)</option>
                    <option value={5}>بر اساس مهم‌ترین‌ها</option>
                  </select>
                </div>
              </div>

              {filterLoading ? (
                <Loader />
              ) : (
                <div>
                  {!gridView ? (
                    <div>
                      <List news={news} typeId={typeId} />
                    </div>
                  ) : (
                    <div className='mt-5'>
                      <Grid news={news} typeId={typeId} />
                    </div>
                  )}
                </div>
              )}

              {activeBtnMoreLoad ? (
                <div className='text-center mt-5'>
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
                <div className='text-center mt-5'>
                  <Button
                    variant=' my-3 mr-3 '
                    className='login-btn px-3 hover-item navBtn-font navBtn-font '
                    onClick={() => {
                      setMoreLoading1(true)
                      moreFilterNewsBySubject()
                    }}
                  >
                    {moreLoading1 ? <Loading1 /> : 'بارگذاری بیشتر'}
                  </Button>
                </div>
              ) : null}

              {activeBtnMoreLoad2 ? (
                <div className='text-center mt-5'>
                  <Button
                    variant=' my-3 mr-3 '
                    className='login-btn px-3 hover-item navBtn-font navBtn-font '
                    onClick={() => {
                      setMoreLoading2(true)
                      moreFilterNewsByCat()
                    }}
                  >
                    {moreLoading2 ? <Loading1 /> : 'بارگذاری بیشتر'}
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
