import { React, useEffect, useState } from 'react'
import { useProductsContext } from '../context/ProductsProvider'
import Loader from '../pages/Loader'
import plugin from '../img/plugin.png'
import { Button } from 'react-bootstrap'
import { Link, link } from 'react-router-dom'
import { Cookies, useCookies } from 'react-cookie'
import { Helmet } from 'react-helmet'

import { LinkContainer } from 'react-router-bootstrap'
const url = 'https://negaclub.ir/admin/Providers/API/_allWorkGroups?token=test'
const Plugins = () => {
  const { Loading, setLoading } = useProductsContext()
  const [cookies4, setCookie4, removeCookie4] = useCookies(['workname'])

  const handleName = (name) => {
    setCookie4('workname', name, {
      path: '/',
    })
  }

  const [workGroup, setWorkGroup] = useState('')
  const getWorkGroup = async () => {
    setLoading(true)
    try {
      const rawResponse = await fetch(url, {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/x-www-form-urlencoded',
        }),
        body: 'token=test',
      })
      const content = await rawResponse.json()

      if (content.isDone) {
        setLoading(false)
        setWorkGroup(content.data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getWorkGroup()
  }, [])

  if (!workGroup) {
    return <Loader />
  }
  return (
    <div className='container mt-5 px-0'>
      <div className='container m-t marginTop px-0'>
        <div className='text-center ' style={{ backgroundColor: '#4a4848' }}>
          <h1 className='p-5' style={{ color: '#ffffff' }}>
            گروه کاری خود را انتخاب کنید{' '}
          </h1>
          <Helmet>
            <title> گروه های کاری نگاکلاب</title>
          </Helmet>
        </div>
      </div>

      <div className='row my-5 justify-content-center mx-1 px-3'>
        {workGroup &&
          workGroup.map((e) => {
            return (
              <LinkContainer
                onClick={() => handleName(e.name)}
                style={{ cursor: 'pointer' }}
                to={`/castes/${e.id}`}
                className='col-lg-3 col-md-5 col-sm-5 col-12 text-center box1 mx-2 my-2  box-provider'
              >
                <div key={e.id}>
                  <div className=' d-flex justify-content-center'>
                    {/* <div className='bg-circle' style={{ background: '#cdf1d8' }}> */}
                    <img
                      src={e.icon}
                      style={{ width: '50px', height: '50px' }}
                      alt={e.id}
                    />
                    {/* </div> */}
                  </div>
                  <h6 className='mt-3'>{e.name}</h6>
                </div>
              </LinkContainer>
            )
          })}
      </div>
    </div>
  )
}

export default Plugins
