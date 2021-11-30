import { useState, useCallback, useEffect } from 'react'
import { Modal } from 'react-bootstrap'
import { useProductsContext } from '../context/ProductsProvider'
import { ImCross } from 'react-icons/im'
import axios from 'axios'
import Loading from '../pages/Loading'
import Swal from 'sweetalert2'
import { Button } from 'react-bootstrap'
import { Cookies, useCookies } from 'react-cookie'
import Date from './DatePicker'
import DatePicker from 'react-datepicker2'

const NewCompeleteProfile = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['user'])
  const { userData, setUserData } = useProductsContext()

  const [loading, setLoading] = useState(false)

  const [countryApi, setCountryApi] = useState('')
  const [sateApi, setStateApi] = useState('')
  const [cityApi, setCityApi] = useState('')
  const [profileStateId, setProfileStateId] = useState(userData.stateId)
  const [profileCityId, setProfileCityId] = useState(userData.cityId)
  const [nationality, setNationality] = useState('1')
  const [fatherName, setFatherName] = useState('')
  const [nationCode, setNationCode] = useState('')
  const [serialCode, setSerialCode] = useState('')
  const [passportCode, setPassportCode] = useState('')
  const [birthPlace, setBirthPlace] = useState('')
  const [country, setCountry] = useState('')
  const [birthDate, setBirthDate] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [postCode, setPostCode] = useState('')
  const [state, setState] = useState('')
  const [city, setCity] = useState('')
  const [mainStreet, setMainStreet] = useState('')
  const [alley, setAlley] = useState('')
  const [address, setAddress] = useState('')

  const [fatherReq, setFatherReq] = useState(false)
  const [passNumReq, setPassNumReq] = useState(false)
  const [serialCodeReq, setSerialCodeReq] = useState(false)
  const [nationCodeReq, setNationCodeReq] = useState(false)
  const [phoneReq, setPhoneReq] = useState(false)
  const [birthPlaceReq, setBirthPlaceReq] = useState(false)
  const [postCodeReq, setPostCodeReq] = useState(false)
  const [mainStreetReq, setMainStreetReq] = useState(false)
  const [alleyReq, setAlleyReq] = useState(false)
  const [addressReq, setAddressReq] = useState(false)
  const [CountryReq, setCountryReq] = useState(false)
  const [stateReq, setStateReq] = useState(false)
  const [cityReq, setCityReq] = useState(false)

  const handleCookie = (infoObject) => {
    setCookie('user', infoObject, {
      path: '/',
    })
  }

  const handleNationalityChange = (e) => {
    setNationality(document.getElementById('nationality').value)
    if (e.target.value === '1') {
      getState(0)
      setCountry('12')
      setPassportCode('')
    } else {
      setCityApi('')
      setNationCode('')
      setSerialCode('')
      setState('')
    }
  }
  const handleFatherNameChange = (e) => {
    setFatherName(e.target.value)
    if (fatherName.length > 2) {
      setFatherReq(false)
    }
  }
  const handleNationCodeChange = (e) => {
    setNationCode(e.target.value)
    if (nationCode.length < 10) {
      setNationCodeReq(false)
    }
    if (nationCode.length > 0) {
      setNationCodeReq(false)
    }
  }
  const handleSerialCodeChange = (e) => {
    setSerialCode(e.target.value)
    if (serialCode.length < 10) {
      setSerialCodeReq(false)
    }
    if (serialCode.length > 0) {
      setSerialCodeReq(false)
    }
  }
  const handlePassportCodeChange = (e) => {
    setPassportCode(e.target.value)
  }
  const handleBirthPlaceChange = (e) => {
    setBirthPlace(e.target.value)
    if (birthPlace.length > 2) {
      setBirthPlaceReq(false)
    }
  }

  const handleBirthDateChange = (e) => {
    setBirthDate(e.target.value)
  }
  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value)
    if (phoneNumber.length < 12) {
      setPhoneReq(false)
    }
    if (phoneNumber.length > 10) {
      setPhoneReq(false)
    }
    if (phoneNumber.length > 0) {
      setPhoneReq(false)
    }
  }
  const handlePostCodeChange = (e) => {
    setPostCode(e.target.value)
  }

  const handleCountryChange = (e) => {
    setCountry(document.getElementById('country').value)
    getState(document.getElementById('country').value)
  }
  const handleStateChange = (e) => {
    setState(document.getElementById('state').value)
    getCity()
  }
  const handleCityChange = (e) => {
    setCity(document.getElementById('city').value)
  }
  const handleMainStreetChange = (e) => {
    setMainStreet(e.target.value)
  }
  const handleAlleyChange = (e) => {
    setAlley(e.target.value)
  }
  const handleAddressChange = (e) => {
    setAddress(e.target.value)
  }

  const getCountry = async () => {
    try {
      const rawResponse = await fetch(
        'https://negaclub.ir/admin/Countries/API/_allCountries?token=test',
        {
          method: 'POST',
          headers: new Headers({
            'Content-Type': 'application/x-www-form-urlencoded',
          }),
        }
      )
      const content = await rawResponse.json()

      if (content.isDone) {
        setCountryApi(content.data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const getState = async (countid) => {
    try {
      const rawResponse = await fetch(
        'https://negaclub.ir/admin/States/API/_allStates?token=test',
        {
          method: 'POST',
          headers: new Headers({
            'Content-Type': 'application/x-www-form-urlencoded',
          }),
          body: JSON.stringify({
            countryId: countid,
          }),
        }
      )
      const content = await rawResponse.json()

      if (content.isDone) {
        setStateApi(content.data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const getCity = async () => {
    try {
      const rawResponse = await fetch(
        'https://negaclub.ir/admin/Cities/API/_allCities?token=test',
        {
          method: 'POST',
          headers: new Headers({
            'Content-Type': 'application/x-www-form-urlencoded',
          }),
          body: JSON.stringify({
            stateId: document.getElementById('state').value,
          }),
        }
      )
      const content = await rawResponse.json()

      if (content.isDone) {
        setCityApi(content.data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const sendFormData = async () => {
    setLoading(true)
    if (fatherName.length < 2) {
      setFatherReq(true)
      setLoading(false)
      return
    }
    if (nationality == '1') {
      if (nationCode.length >= 11) {
        setNationCodeReq(true)
        setLoading(false)
        return
      }
      if (nationCode.length < 1) {
        setNationCodeReq(true)
        setLoading(false)
        return
      }
      if (serialCode.length >= 11) {
        setSerialCodeReq(true)
        setLoading(false)
        return
      }
      if (serialCode.length < 1) {
        setSerialCodeReq(true)
        setLoading(false)
        return
      }
    } else {
      if (passportCode.length >= 11) {
        setPassNumReq(true)
        setLoading(false)
        return
      }
    }

    if (phoneNumber.length < 0) {
      setPhoneReq(true)
      setLoading(false)
      return
    }
    if (phoneNumber.length < 11) {
      setPhoneReq(true)
      setLoading(false)
      return
    }
    if (phoneNumber.length > 11) {
      setPhoneReq(true)
      setLoading(false)
      return
    }

    if (nationality === '1') {
      if (birthPlace.length < 2) {
        setBirthPlaceReq(true)
        setLoading(false)
        return
      }
    }

    // try {
    //   const rawResponse = await fetch(
    //     'https://negaclub.ir/admin/Customers/API/_setIndividualData?token=test',
    //     {
    //       method: 'POST',
    //       headers: new Headers({
    //         'Content-Type': 'application/x-www-form-urlencoded',
    //       }),
    //       body: JSON.stringify({
    //         passportNumber: passportCode,
    //         nationality: nationality,
    //         fatherName: fatherName,
    //         issuePlace: birthPlace,
    //         birthDate:
    //           document.getElementsByClassName('datepicker-input')[0].value,
    //         telephone: phoneNumber,
    //         postCode: postCode,
    //         stateId: document.getElementById('state').value,
    //         cityId: document.getElementById('city').value,
    //         mainStreet: mainStreet,
    //         auxiliaryStreet: alley,
    //         address: address,
    //         mobile: userData['mobile'],
    //         idNumber: nationCode,
    //       }),
    //     }
    //   )
    //   const content = await rawResponse.json()

    //   if (content.isDone) {
    //     setLoading(false)
    //     getIndividualInfo()
    //     Swal.fire({
    //       text: 'پروفایل شما تکمیل شد',
    //       type: 'success',
    //     })
    //   }
    // } catch (error) {
    //   console.log(error)
    // }
  }

  const getIndividualInfo = () => {
    axios
      .post(
        'https://negaclub.ir/admin/admin/Customers/API/_getCustomerData?token=test',
        {
          customerId: 0,
          customerMobile: userData['mobile'],
        },
        {
          headers: {
            token: 'test',
          },
        }
      )
      .then((response) => {
        handleCookie(response.data.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  useEffect(() => {
    getCountry()
    getState(0)
  }, [])

  return (
    <>
      <div className='my-5 '>
        <div className='container m-t marginTop px-0'>
          <div
            className='text-center'
            style={{
              backgroundColor: '#4a4848',
              color: '#ffffff',
            }}
          >
            <h3 className='p-5' style={{ color: '#ffffff' }}>
              تکمیل پروفایل
            </h3>
          </div>

          <div
            className='row  mt-4 mx-2 px-3'
            style={{
              justifyContent: 'center',
            }}
          >
            <div
              className='row col-12 order-1'
              style={{
                background: 'white',
                borderRadius: '15px',
                boxShadow: ' 8px 11px 25px -3px rgb(38 29 29 / 50%)',
                padding: '20px 25px 20px 25px',
                justifyContent: 'center',
              }}
            >
              <div className='row col-12' style={{ justifyContent: 'right' }}>
                <div className='col-lg-4 order-3 col-md-12 col-sm-12 col-12'>
                  <div className='mt-4' style={{ textAlign: 'right' }}>
                    <label>
                      <h6 style={{ color: '#0000006b', fontSize: '15px' }}>
                        تابعیت
                      </h6>
                    </label>
                  </div>
                  <select
                    onChange={handleNationalityChange}
                    id='nationality'
                    className=' form-input my-1  '
                    placeholder=' تابعیت'
                    type='text'
                    title='Ten digits code'
                  >
                    <option key='1' value='1'>
                      ایرانی
                    </option>
                    <option key='2' value='0'>
                      غیر ایرانی
                    </option>
                  </select>
                </div>
                {nationality === '1' ? (
                  <>
                    <div className='col-lg-4 order-1 col-md-12 col-sm-12 col-12'>
                      <div className='mt-4' style={{ textAlign: 'right' }}>
                        <label>
                          <h6 style={{ color: '#0000006b', fontSize: '15px' }}>
                            شماره شناسنامه
                          </h6>
                        </label>
                      </div>
                      <input
                        onChange={handleNationCodeChange}
                        value={nationCode}
                        id='sub'
                        className={
                          !nationCodeReq
                            ? 'form-input my-1'
                            : 'form-input-error my-1'
                        }
                        placeholder='       شماره شناسنامه'
                        type='text'
                        title='Ten digits code'
                      />
                      {nationCodeReq ? (
                        <h5
                          className='mt-2'
                          style={{
                            color: '#dc3545',
                            fontSize: '10px',
                            justifyContent: 'right',
                            textAlign: 'right',
                          }}
                        >
                          لطفا شماره شناسنامه را درست وارد کنید
                        </h5>
                      ) : null}
                    </div>

                    <div className='col-lg-4 order-lg-6 col-md-12 col-sm-12 col-12'>
                      <div className='mt-4' style={{ textAlign: 'right' }}>
                        <label>
                          <h6 style={{ color: '#0000006b', fontSize: '15px' }}>
                            سریال شناسنامه
                          </h6>
                        </label>
                      </div>
                      <input
                        onChange={handleSerialCodeChange}
                        value={serialCode}
                        id='sub'
                        className={
                          !serialCodeReq
                            ? 'form-input my-1'
                            : 'form-input-error my-1'
                        }
                        placeholder='       سریال شناسنامه'
                        type='text'
                        title='Ten digits code'
                      />
                      {serialCodeReq ? (
                        <h5
                          className='mt-2'
                          style={{
                            color: '#dc3545',
                            fontSize: '10px',
                            justifyContent: 'right',
                            textAlign: 'right',
                          }}
                        >
                          لطفاسریال شناسنامه را درست وارد کنید
                        </h5>
                      ) : null}
                    </div>
                  </>
                ) : (
                  <div className='col-lg-4 order-1 col-md-12 col-sm-12 col-12'>
                    <div className='mt-4' style={{ textAlign: 'right' }}>
                      <label>
                        <h6 style={{ color: '#0000006b', fontSize: '15px' }}>
                          شماره پاسپورت
                        </h6>
                      </label>
                    </div>
                    <input
                      onChange={handlePassportCodeChange}
                      value={passportCode}
                      id='sub'
                      className={
                        !passNumReq
                          ? 'form-input my-1'
                          : 'form-input-error my-1'
                      }
                      placeholder='       شماره پاسپورت'
                      type='text'
                      title='Ten digits code'
                    />
                  </div>
                )}
                <div className='col-lg-4 order-2  col-md-12 col-sm-12 col-12'>
                  <div className='mt-4' style={{ textAlign: 'right' }}>
                    <label>
                      <h6 style={{ color: '#0000006b', fontSize: '15px' }}>
                        نام پدر
                      </h6>
                    </label>
                  </div>
                  <input
                    onChange={handleFatherNameChange}
                    value={fatherName}
                    id='sub'
                    className={
                      !fatherReq ? 'form-input my-1' : 'form-input-error my-1'
                    }
                    placeholder=' نام پدر'
                    type='text'
                    title='Ten digits code'
                  />
                  {fatherReq ? (
                    <h5
                      className='mt-2'
                      style={{
                        color: '#dc3545',
                        fontSize: '10px',
                        justifyContent: 'right',
                        textAlign: 'right',
                      }}
                    >
                      لطفا نام پدر را درست وارد کنید
                    </h5>
                  ) : null}
                </div>

                <div className='col-lg-4 order-lg-5 col-md-12 col-sm-12 col-12'>
                  <div className='mt-4' style={{ textAlign: 'right' }}>
                    <label>
                      <h6 style={{ color: '#0000006b', fontSize: '15px' }}>
                        تلفن ثابت
                      </h6>
                    </label>
                  </div>
                  <input
                    onChange={handlePhoneNumberChange}
                    value={phoneNumber}
                    id='sub'
                    className={
                      !phoneReq ? 'form-input my-1' : 'form-input-error my-1'
                    }
                    placeholder='  تلفن ثابت'
                    type='text'
                    title='Ten digits code'
                  />
                  {phoneReq ? (
                    <h5
                      className='mt-2'
                      style={{
                        color: '#dc3545',
                        fontSize: '10px',
                        justifyContent: 'right',
                        textAlign: 'right',
                      }}
                    >
                      لطفا شماره تماس خود را درست وارد کنید
                    </h5>
                  ) : null}
                </div>
                <div className='col-lg-4 order-lg-4 col-md-12 col-sm-12 col-12'>
                  <div className='mt-4' style={{ textAlign: 'right' }}>
                    <label>
                      <h6 style={{ color: '#0000006b', fontSize: '15px' }}>
                        تاریخ تولد
                      </h6>
                    </label>
                    <Date
                      onChange={handleBirthDateChange}
                      value={birthDate}
                      className='form-input'
                    />
                  </div>
                </div>
              </div>

              <div className='row col-12' style={{ justifyContent: 'right' }}>
                {nationality === '1' ? (
                  <div className='col-lg-4 order-lg-3 col-md-12 col-sm-12 col-12'>
                    <div className='mt-4' style={{ textAlign: 'right' }}>
                      <label>
                        <h6 style={{ color: '#0000006b', fontSize: '15px' }}>
                          محل صدور
                        </h6>
                      </label>
                    </div>
                    <input
                      onChange={handleBirthPlaceChange}
                      value={birthPlace}
                      id='sub'
                      className={
                        !birthPlaceReq
                          ? 'form-input my-1'
                          : 'form-input-error my-1'
                      }
                      placeholder='    محل صدور '
                      type='text'
                      title='Ten digits code'
                    />
                    {birthPlaceReq ? (
                      <h5
                        className='mt-2'
                        style={{
                          color: '#dc3545',
                          fontSize: '10px',
                          justifyContent: 'right',
                          textAlign: 'right',
                        }}
                      >
                        لطفا محل صدور شناسنامه خود را درست وارد کنید
                      </h5>
                    ) : null}
                  </div>
                ) : (
                  <div className='col-lg-4  order-lg-3 col-md-12 col-sm-12 col-12'>
                    <div className='mt-4' style={{ textAlign: 'right' }}>
                      <label>
                        <h6 style={{ color: '#0000006b', fontSize: '15px' }}>
                          کشور
                        </h6>
                      </label>
                    </div>
                    <select
                      onChange={handleCountryChange}
                      id='country'
                      className={
                        !CountryReq
                          ? 'form-input my-1'
                          : 'form-input-error my-1'
                      }
                      placeholder='کشور'
                      type='text'
                      title='Ten digits code'
                    >
                      <option disabled selected>
                        لطفا کشور خود را انتخاب کنید
                      </option>
                      {countryApi &&
                        countryApi.map((e) => {
                          return (
                            <option
                              onClick={() => getState(e.id)}
                              key={e.id}
                              value={e.id}
                            >
                              {e.name}
                            </option>
                          )
                        })}
                    </select>
                    {CountryReq ? (
                      <h5
                        className='mt-2'
                        style={{
                          color: '#dc3545',
                          fontSize: '10px',
                          justifyContent: 'right',
                          textAlign: 'right',
                        }}
                      >
                        لطفا کشور خود را انتخاب کنید
                      </h5>
                    ) : null}
                  </div>
                )}

                <div className='col-lg-4 col-md-12 order-lg-2 col-sm-12 col-12'>
                  <div className='mt-4' style={{ textAlign: 'right' }}>
                    <label>
                      <h6 style={{ color: '#0000006b', fontSize: '15px' }}>
                        استان
                      </h6>
                    </label>
                  </div>
                  <select
                    onChange={handleStateChange}
                    id='state'
                    className={
                      !stateReq ? 'form-input my-1' : 'form-input-error my-1'
                    }
                    placeholder='استان'
                    type='text'
                    title='Ten digits code'
                  >
                    <option selected={profileStateId == 0} disabled>
                      لطفا یک مورد را انتخاب کنید
                    </option>
                    {sateApi &&
                      sateApi.map((e) => {
                        return (
                          <option
                            selected={e.id === profileStateId}
                            key={e.id}
                            value={e.id}
                            onClick={() => getCity()}
                          >
                            {e.name}
                          </option>
                        )
                      })}
                  </select>
                  {stateReq ? (
                    <h5
                      className='mt-2'
                      style={{
                        color: '#dc3545',
                        fontSize: '10px',
                        justifyContent: 'right',
                        textAlign: 'right',
                      }}
                    >
                      لطفا استان خود را انتخاب کنید
                    </h5>
                  ) : null}
                </div>

                <div className='col-lg-4 col-md-12 order-lg-1 col-sm-12 col-12'>
                  <div className='mt-4' style={{ textAlign: 'right' }}>
                    <label>
                      <h6 style={{ color: '#0000006b', fontSize: '15px' }}>
                        شهر
                      </h6>
                    </label>
                  </div>
                  <select
                    onChange={handleCityChange}
                    id='city'
                    className={
                      !cityReq ? 'form-input my-1' : 'form-input-error my-1'
                    }
                    placeholder=' شهر'
                    type='text'
                    title='Ten digits code'
                  >
                    {' '}
                    {cityApi.length < 1 ? (
                      <option selected disabled>
                        لطفا استان خود را انتخاب کنید
                      </option>
                    ) : null}
                    {cityApi.length >= 1
                      ? cityApi.map((e) => {
                          return (
                            <option key={e.id} value={e.id}>
                              {e.name}
                            </option>
                          )
                        })
                      : null}
                  </select>
                  {cityReq ? (
                    <h5
                      className='mt-2'
                      style={{
                        color: '#dc3545',
                        fontSize: '10px',
                        justifyContent: 'right',
                        textAlign: 'right',
                      }}
                    >
                      لطفا شهر خود را انتخاب کنید
                    </h5>
                  ) : null}
                </div>
              </div>

              <div className='row col-12' style={{ justifyContent: 'right' }}>
                <div className='col-lg-4 order-lg-3 col-md-12 col-sm-12 col-12'>
                  <div className='mt-4' style={{ textAlign: 'right' }}>
                    <label>
                      <h6 style={{ color: '#0000006b', fontSize: '15px' }}>
                        کد پستی
                      </h6>
                    </label>
                  </div>
                  <input
                    onChange={handlePostCodeChange}
                    value={postCode}
                    id='sub'
                    className={
                      !postCodeReq ? 'form-input my-1' : 'form-input-error my-1'
                    }
                    placeholder='   کد پستی'
                    type='text'
                    title='Ten digits code'
                  />
                  {postCodeReq ? (
                    <h5
                      className='mt-2'
                      style={{
                        color: '#dc3545',
                        fontSize: '10px',
                        justifyContent: 'right',
                        textAlign: 'right',
                      }}
                    >
                      لطفا کد پستی خود را درست کنید
                    </h5>
                  ) : null}
                </div>

                <div className='col-lg-4 order-lg-2 col-md-12 col-sm-12 col-12'>
                  <div className='mt-4' style={{ textAlign: 'right' }}>
                    <label>
                      <h6 style={{ color: '#0000006b', fontSize: '15px' }}>
                        خیابان اصلی
                      </h6>
                    </label>
                  </div>
                  <input
                    onChange={handleMainStreetChange}
                    value={mainStreet}
                    id='sub'
                    className={
                      !mainStreetReq
                        ? 'form-input my-1'
                        : 'form-input-error my-1'
                    }
                    placeholder='خیابان اصلی'
                    type='text'
                    title='Ten digits code'
                  />
                  {mainStreetReq ? (
                    <h5
                      className='mt-2'
                      style={{
                        color: '#dc3545',
                        fontSize: '10px',
                        justifyContent: 'right',
                        textAlign: 'right',
                      }}
                    >
                      لطفا فیلد مورد نظر را درست وارد کنید
                    </h5>
                  ) : null}
                </div>

                <div className='col-lg-4 order-lg-1 col-md-12 col-sm-12 col-12'>
                  <div className='mt-4' style={{ textAlign: 'right' }}>
                    <label>
                      <h6 style={{ color: '#0000006b', fontSize: '15px' }}>
                        خیابان فرعی
                      </h6>
                    </label>
                  </div>
                  <input
                    onChange={handleAlleyChange}
                    value={alley}
                    id='sub'
                    className={
                      !alleyReq ? 'form-input my-1' : 'form-input-error my-1'
                    }
                    placeholder='      خیابان فرعی'
                    type='text'
                    title='Ten digits code'
                  />
                  {alleyReq ? (
                    <h5
                      className='mt-2'
                      style={{
                        color: '#dc3545',
                        fontSize: '10px',
                        justifyContent: 'right',
                        textAlign: 'right',
                      }}
                    >
                      لطفا فیلد مورد نظر را درست وارد کنید
                    </h5>
                  ) : null}
                </div>
              </div>

              <div className='row col-12' style={{ justifyContent: 'right' }}>
                <div className='col-lg-4 col-md-12 col-sm-12 col-12'>
                  <div className='mt-4' style={{ textAlign: 'right' }}>
                    <label>
                      <h6 style={{ color: '#0000006b', fontSize: '15px' }}>
                        آدرس
                      </h6>
                    </label>
                  </div>
                  <input
                    onChange={handleAddressChange}
                    value={address}
                    id='sub'
                    className={
                      !addressReq ? 'form-input my-1' : 'form-input-error my-1'
                    }
                    placeholder='آدرس'
                    type='text'
                    title='Ten digits code'
                  />
                  {addressReq ? (
                    <h5
                      className='mt-2'
                      style={{
                        color: '#dc3545',
                        fontSize: '10px',
                        justifyContent: 'right',
                        textAlign: 'right',
                      }}
                    >
                      لطفا آدرس خود را درست وارد کنید
                    </h5>
                  ) : null}
                </div>
              </div>

              <div className='row col-12' style={{ justifyContent: 'center' }}>
                {!userData['fatherName'] ? (
                  <div className='m-auto'>
                    <Button
                      variant=' my-3 mr-3 '
                      onClick={sendFormData}
                      className='login-btn'
                    >
                      {loading ? <Loading /> : '   ارسال اطلاعات'}
                    </Button>
                  </div>
                ) : (
                  <div className='m-auto'>
                    <Button
                      variant=' my-3 mr-3 '
                      onClick={sendFormData}
                      className='login-btn'
                    >
                      {loading ? <Loading /> : 'ویرایش پروفایل'}
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default NewCompeleteProfile
