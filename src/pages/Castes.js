import { React, useEffect, useState } from 'react'
import { useProductsContext } from '../context/ProductsProvider'
import Loader from '../pages/Loader'
import plugin from '../img/plugin.png'
import sms from '../img/sms.png'
import { Button } from 'react-bootstrap'
import { Link, link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import Swal from 'sweetalert2'
import ModalCity from '../components/ModalCity'
import { Cookies, useCookies } from 'react-cookie'
import { LinkContainer } from 'react-router-bootstrap'
import { SiReactrouter } from 'react-icons/si'
import Breadcrump from './Breadcrump'
import { Helmet } from 'react-helmet'

const url = 'https://negaclub.ir/admin/Providers/API/_allCastes?token=test'
const Castes = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['city'])
  const [cookies3, setCookie3, removeCookie3] = useCookies(['castname'])
  const [cookies4, setCookie4, removeCookie4] = useCookies(['workname'])

  const { pathname } = useLocation()
  const WorkGroupId = pathname.split('/')[2]
  const { Loading, setLoading, cityId, openModalCity } = useProductsContext()

  const [castes, setCastes] = useState('')
  const [route, setRoute] = useState(false)
  const [ID, setID] = useState('')

  const CheckCity = (id) => {
    if (cookies['city']) {
      window.location.href = `/castes/${WorkGroupId}/${id}`
    } else {
      Swal.fire({
        type: 'warning',
        text: 'شهر خود را انتخاب کنید',
        confirmButtonText: 'فهمیدم',
        onAfterClose: () => {
          openModalCity()
        },
      })
    }
  }

  const castsNameSet = (name) => {
    setCookie3('castname', name, {
      path: '/',
    })
  }

  const getAllCastes = async () => {
    try {
      const rawResponse = await fetch(url, {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type
        }),
        body: JSON.stringify({
          workgroupId: WorkGroupId,
        }),
      })
      const content = await rawResponse.json()
      if (content.isDone) {
        setCastes(content.data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getAllCastes()
  }, [])

  setTimeout(() => {
    setLoading(false)
  }, 1000)

  if (!castes) {
    return <Loader />
  }
  return (
    <div className='container mt-5  marginTop px-0'>
      <div className='container m-t marginTop px-0 '>
        <div className='text-center' style={{ backgroundColor: '#4a4848' }}>
          <h1 className='p-5' style={{ color: '#ffffff' }}>
            در گروه کاری {cookies4['workname']} صنف خود را انتخاب کنید
          </h1>
          <Helmet>
            <title> اصناف نگاکلاب</title>
          </Helmet>
        </div>
        <Breadcrump workgroup={cookies4['workname']} />
      </div>

      <div className='row my-5 justify-content-center mx-1 px-3'>
        {castes &&
          castes.map((e) => {
            return (
              <div
                style={{ cursor: 'pointer' }}
                key={e.id}
                onClick={() => {
                  CheckCity(e.id)
                  castsNameSet(e.name)
                }}
                className='col-lg-3 col-md-5 col-sm-5 col-12 text-center box1 mx-2 my-2 box-provider '
              >
                <div className=' d-flex justify-content-center'>
                  <img
                    src={e.icon}
                    style={{ width: '50px', height: '50px' }}
                    alt={e.id}
                  />
                </div>
                <h6 className='mt-3'>{e.name}</h6>
              </div>
            )
          })}
        <ModalCity />
      </div>
    </div>
  )
}

export default Castes
