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

const List = ({ news, typeId }) => {
  const date = (date) => {
    const newdate = new Date(date * 1000)
    return newdate.toLocaleDateString('fa-Pers')
  }
  return (
    <>
      {news &&
        news.map((e) => {
          return (
            <LinkContainer
              to={`/articles/${typeId}/${e.id}`}
              style={{ cursor: 'pointer', fontSize: '15px' }}
            >
              <div
                key={e.id}
                style={{
                  height: 'max-content',
                  justifyContent: 'center',
                }}
                className='row  mt-5 list-box '
              >
                <div className='col-lg-6 order-lg-1 col-md-10 order-md-2 col-sm-10 order-sm-2 col-10 order-2 mt-2'>
                  <div className='mt-2' style={{ textAlign: 'end' }}>
                    <div
                      className='d-flex'
                      style={{ justifyContent: 'space-between' }}
                    >
                      <h1 className='title' style={{ fontSize: '12px' }}>
                        تعداد بازدید ( {e.view})
                      </h1>
                      <h1 className='title' style={{ fontSize: '18px' }}>
                        {e.title}
                      </h1>
                    </div>
                    <div
                      className='th-btn d-flex flex-row my-3'
                      style={{ backgroundColor: '#bf9b30', top: '0px' }}
                    >
                      <p
                        className='m-0'
                        style={{
                          color: '#fff',
                          fontSize: '13px',
                        }}
                      >
                        {date(e.date)}
                      </p>
                      <FiCalendar className='ml-1' />
                    </div>
                    <p className='mt-2' style={{ fontSize: '9px' }}></p>
                    {e.shortDetails}
                  </div>
                  <BsArrowLeft
                    className='mr-2'
                    style={{ color: '#1d5e90' }}
                    size={20}
                  />

                  <h6 className='title mt-3'>ادامه مطالب</h6>
                </div>

                <div className='col-lg-6 order-lg-2 col-md-10 order-md-1 col-sm-10 order-sm-1 col-10 order-1 mt-2'>
                  <img src={e.image} className='th-img-news' alt='web' />
                  {e.important ? (
                    <div style={{ textAlign: 'initial' }}>
                      <span
                        class='badge span-badge-new1 '
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
                </div>
              </div>
            </LinkContainer>
          )
        })}
    </>
  )
}

export default List
