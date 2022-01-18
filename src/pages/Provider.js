import { React, useEffect, useState } from 'react'
import { useProductsContext } from '../context/ProductsProvider'
import Loader from '../pages/Loader'
import ListProvider from './ListProvider'
import GridProvider from './GridProvider'
import plugin from '../img/plugin.png'
import sms from '../img/sms.png'
import { Button } from 'react-bootstrap'
import { Link, link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import Swal from 'sweetalert2'
import ModalCity from '../components/ModalCity'
import { Cookies, useCookies } from 'react-cookie'
import { GiPriceTag } from 'react-icons/gi'
import { LinkContainer } from 'react-router-bootstrap'
import NoAdd from './NoAdd'
import Loading1 from './Loading1'
import { FaArrowAltCircleLeft } from 'react-icons/fa'
import { AiFillStar } from 'react-icons/ai'
import { AiOutlineStar } from 'react-icons/ai'
import Breadcrump from './Breadcrump'
import { BsFillGrid3X3GapFill } from 'react-icons/bs'
import { FaListUl } from 'react-icons/fa'
import { Helmet } from 'react-helmet'

const url = 'https://negaclub.ir/admin/Providers/API/_allProviders?token=test'
const Provider = () => {
  const {
    gridViewProvider,
    GridViewProvider,
    ListViewProvider,
    idCast,
    setIdcast,
    Loading,
    setLoading,
    cityId,
    groupWorkName,
    setGroupWorkName,
    castName,
    setCastName,
    filterProvider,
    setFilterProvider,
  } = useProductsContext()
  const [cookies, setCookie, removeCookie] = useCookies(['city'])
  const [cookies3, setCookie3, removeCookie3] = useCookies(['castname'])
  const [cookies4, setCookie4, removeCookie4] = useCookies(['workname'])
  const { pathname } = useLocation()
  const workgroupId = pathname.split('/')[2]
  const CastId = pathname.split('/')[3]
  const cityid = cookies['city']
  const [provider, setProvider] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [i, setI] = useState(0)
  const [moreLoading, setMoreLoading] = useState(false)
  const [activeBtnMoreLoad, setActiveBtnMoreLoad] = useState(false)

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value)
  }
  const onFilterChange = async () => {
    setI(0)
    await getProvider()
  }
  const getProvider = async () => {
    const element = document.getElementById('cat')
    const [by, type] = element.value.toString().split('-')
    setIdcast(CastId)
    try {
      const rawResponse = await fetch(url, {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type
        }),
        body: JSON.stringify({
          casteId: CastId,
          cityId: cityid,
          sortType: type,
          sortBy: by,
          page: 0,
        }),
      })
      const content = await rawResponse.json()

      if (content.isDone) {
        setProvider([...content.data.data])

        if (content.data.totalCount > content.data.data.length) {
          setActiveBtnMoreLoad(true)
        } else {
          setActiveBtnMoreLoad(false)
        }
      }
    } catch (error) {
      console.log('error', error)
    }
  }
  const getMoreProvider = async () => {
    const element = document.getElementById('cat')
    const [by, type] = element.value.toString().split('-')
    try {
      const rawResponse = await fetch(url, {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/x-www-form-urlencoded',
        }),
        body: JSON.stringify({
          casteId: CastId,
          cityId: cityid,
          sortType: type,
          sortBy: by,
          page: i + 1,
        }),
      })
      const content = await rawResponse.json()

      if (content.isDone) {
        const pro = parseInt(provider.length)
        const data = parseInt(content.data.data.length)
        const sum = pro + data
        const total = parseInt(content.data.totalCount)

        let providerData = [...provider, ...content.data.data]
        setProvider(providerData)
        if (content.data.totalCount > content.data.data.length) {
          setActiveBtnMoreLoad(true)
          setI(i + 1)
          setMoreLoading(false)
        }
        if (total === sum) {
          setActiveBtnMoreLoad(false)
        }
      }
    } catch (error) {
      console.log(error)
    }
  }
  const search = async () => {
    setIdcast(CastId)
    try {
      const rawResponse = await fetch(url, {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/x-www-form-urlencoded',
        }),
        body: JSON.stringify({
          casteId: CastId,
          cityId: cityid,
          page: 0,
        }),
      })
      const content = await rawResponse.json()

      if (content.isDone) {
        setProvider([...content.data.data])

        if (content.data.totalCount > content.data.data.length) {
          setActiveBtnMoreLoad(true)
        } else {
          setActiveBtnMoreLoad(false)
        }
      }
    } catch (error) {
      console.log('error', error)
    }
  }

  useEffect(() => {
    getProvider()
  }, [])

  setTimeout(() => {
    setLoading(false)
  }, 1000)

  if (!provider) {
    return <Loader />
  }
  return (
    <div className='container mt-5  px-0'>
      <div className='container m-t marginTop  px-0'>
        <div className='text-center' style={{ backgroundColor: '#4a4848' }}>
          <h1 className='p-5' style={{ color: '#ffffff' }}>
            در گروه کاری {cookies4['workname']} و صنف {cookies3['castname']}{' '}
            پذیرنده خود را انتخاب کنید
          </h1>
          <Helmet>
            <title> پیذیرندگان نگاکلاب</title>
          </Helmet>
        </div>
        <Breadcrump
          workgroup={cookies4['workname']}
          workid={workgroupId}
          cast={cookies3['castname']}
        />
      </div>
      <div className='px-3' style={{ justifyContent: 'space-around' }}>
        <div
          className='row col-12 m-auto'
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
                  !gridViewProvider ? 'active-btn icon-color' : 'icon-color'
                }`}
                onClick={ListViewProvider}
                style={{ cursor: 'pointer' }}
              />

              <BsFillGrid3X3GapFill
                size={30}
                className={`${
                  gridViewProvider ? 'active-btn icon-color' : 'icon-color'
                }`}
                onClick={GridViewProvider}
                style={{ cursor: 'pointer' }}
              />
            </div>
          </div>

          {/* <div className='input-group col-lg-4 col-md-12 col-sm-12 col-12 my-3'>
            <button
              type='button'
              className='search-btn btn'
              style={{
                background: '#e8d882',
                color: '#fff',
                height: 'initial',
              }}
              onClick={search}
            >
              جستجو
            </button>
            <input
              onChange={(e) => handleSearchChange(e)}
              value={searchValue}
              type='search'
              className='form-control rounded text-right'
              placeholder='...جستجو'
              aria-label='Search'
              aria-describedby='search-addon'
              style={{
                height: 'initial',
              }}
            />
          </div> */}

          <div className='col-lg-4 col-md-12 col-sm-12 col-12'>
            <select
              id='cat'
              className=' form-input my-3'
              placeholder='دسته بندی'
              type='text'
              onChange={onFilterChange}
              title='Ten digits code'
            >
              <option value={'discount-asc'}> بر اساس تخفیف (صعودی)</option>
              <option value={'discount-desc'}> بر اساس تخفیف (نزولی)</option>
              <option value={'view-asc'}>بر اساس تعداد بازدید (صعودی)</option>
              <option value={'view-desc'}>بر اساس تعداد بازدید (نزولی)</option>
              <option value={'name-asc'}>بر اساس اسم (آ-ی)</option>
              <option value={'name-desc'}>بر اساس اسم (ی-آ)</option>
            </select>
          </div>
        </div>

        {!gridViewProvider ? (
          <ListProvider provider={provider} />
        ) : (
          <GridProvider provider={provider} />
        )}
      </div>
      {activeBtnMoreLoad ? (
        <div className='text-center '>
          <Button
            variant=' my-3 mr-3 '
            className='login-btn px-3 hover-item navBtn-font navBtn-font '
            onClick={() => {
              setMoreLoading(true)
              getMoreProvider()
            }}
          >
            {moreLoading ? <Loading1 /> : 'بارگذاری بیشتر'}
          </Button>
        </div>
      ) : null}
    </div>
  )
}

export default Provider
