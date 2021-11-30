import { React, useState, useEffect } from 'react'
import { Modal } from 'react-bootstrap'
import { FaDownload, FaRobot } from 'react-icons/fa'
import { SiApple } from 'react-icons/si'
import NegaMarket from '../img/NegaMarket.png'
import { useProductsContext } from '../context/ProductsProvider'
import { height } from 'dom-helpers'
import { Cookies, useCookies } from 'react-cookie'

const url = 'https://negaclub.ir/admin/Cities/API/_allCities?token=test'
const ModalCity = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['city'])
  const [cookies1, setCookie1, removeCookie1] = useCookies(['cityName'])

  const { closeModalCity, showModalCity, cityId, SetCityId } =
    useProductsContext()

  const [city, setCity] = useState('')

  const getAllCities = async () => {
    try {
      const rawResponse = await fetch(url, {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type
        }),
        body: {
          token: 'test',
        },
      })
      const content = await rawResponse.json()

      if (content.isDone) {
        setCity(content.data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const ChooseCity = (id) => {
    SetCityId(id)
    setCookie('city', id, {
      path: '/',
    })
    setTimeout(() => {
      closeModalCity()
    }, 1000)
  }

  const ChooseCityname = (name) => {
    setCookie1('cityName', name, {
      path: '/',
    })
  }

  useEffect(() => {
    getAllCities()
  }, [])

  return (
    <Modal show={showModalCity} onHide={closeModalCity} size='md'>
      <Modal.Header style={{ direction: 'rtl' }} closeButton>
        <Modal.Title style={{ color: '#bf9b30', marginTop: '10px' }}>
          شهر خود را انتخاب کنید
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='d-flex flex-column'>
          <div className='text-center mb-3'>
            <img src={NegaMarket} alt='logo' style={{ width: '30%' }} />
          </div>

          <div className='row justify-content-center'>
            {city &&
              city.map((e) => {
                return (
                  <div
                    onClick={() => {
                      ChooseCity(e.id)
                      ChooseCityname(e.name)
                    }}
                    key={e.id}
                    className='col-lg-4 col-md-4 col-sm-4 col-4 mt-3'
                  >
                    <button
                      className={
                        e.id === cityId
                          ? ' search-btn  rounded-pill'
                          : 'city-btn rounded-pill'
                      }
                      style={{
                        width: '100%',
                        height: '100%',
                        border: 'none',
                        padding: '8px',
                      }}
                    >
                      {e.name}
                    </button>
                  </div>
                )
              })}
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default ModalCity
