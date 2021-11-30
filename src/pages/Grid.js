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

import List from './List'

const Grid = ({ news, typeId }) => {
  const date = (date) => {
    const newdate = new Date(date * 1000)
    return newdate.toLocaleDateString('fa-Pers')
  }

  return (
    <div className='row d-flex justify-content-center mx-1'>
      {news &&
        news.map((e) => {
          return (
            <LinkContainer
              to={`/articles/${typeId}/${e.id}`}
              style={{ cursor: 'pointer', fontSize: '15px' }}
            >
              <div
                key={e.id}
                className='w-new-box col-lg-6 order-lg-1 col-md-12 order-md-3   col-sm-12 order-sm-3 col-12 order-3 mt-3 mx-2 '
                style={{
                  height: 'max-content',
                }}
              >
                <img src={e.image} className='th-img-news' alt='web' />

                {e.important ? (
                  <div style={{ textAlign: 'initial' }}>
                    <span
                      class='badge span-badge-new '
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
                  className={
                    e.important
                      ? 'th-btn-new d-flex flex-row '
                      : 'th-btn d-flex flex-row '
                  }
                  style={{ backgroundColor: '#bf9b30' }}
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
                <div className='mt-2 mr-3' style={{ textAlign: 'end' }}>
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

                  <p
                    className='mt-2'
                    style={{ fontSize: '13px', lineBreak: 'anywhere' }}
                  >
                    {e.shortDetail}
                  </p>
                </div>
                <BsArrowLeft
                  className='mr-2'
                  style={{ color: '#1d5e90' }}
                  size={20}
                />

                <h6 className='title mt-3'>ادامه مطالب</h6>
              </div>
            </LinkContainer>
          )
        })}
    </div>
  )
}

export default Grid
