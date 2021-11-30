import { React } from 'react'
import { Button } from 'react-bootstrap'
import ModalDownload from './ModalDownload'
import ModalCity from './ModalCity'
import { Tooltip, Overlay, OverlayTrigger } from 'react-bootstrap'
import BuyModal from '../pages/BuyModal'
import { Cookies, useCookies } from 'react-cookie'
import { ImLocation2 } from 'react-icons/im'
import { useProductsContext } from '../context/ProductsProvider'
import LoginModal from './LoginModal'
import { LinkContainer } from 'react-router-bootstrap'
import { AiOutlineArrowDown } from 'react-icons/ai'

const Login = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['user'])
  const [cookies1, setCookie1, removeCookie1] = useCookies(['cityName'])
  const { userData, setUserData } = useProductsContext()
  const {
    openModal,
    showModal,
    openModalCity,
    showModalCity,
    buyModalShow,
    buyModal,
    loginModal,
    loginModalClose,
    loginModalShow,
  } = useProductsContext()

  const link = () => {
    const url = 'https://providers.negaclub.ir/login'
    window.open(url, '_blank')
  }

  return (
    <>
      {!userData ? (
        <Button
          variant=' my-3 mr-3 '
          className='login-btn px-1 navBtn-font'
          style={{ fontSize: '13px' }}
          onClick={loginModalShow}
        >
          ورود/ثبت نام
        </Button>
      ) : (
        <div class='dropdown1'>
          <Button
            variant=' my-3 mr-3 '
            className='login-btn px-1 navBtn-font dropbtn1'
            style={{ fontSize: '13px' }}
          >
            {userData.firstName} {userData.lastName}
            <AiOutlineArrowDown />
          </Button>
          <div class='dropdown1-content pt-3 pr-auto'>
            <LinkContainer to={`/compeleteProfile`}>
              <h6>تکمیل پروفایل</h6>
            </LinkContainer>
            <LinkContainer to={`/`}>
              <h6>درخواست مجدد کارت</h6>
            </LinkContainer>
            <h6
              onClick={() => {
                removeCookie('user')
                setUserData('')
              }}
            >
              خروج
            </h6>
          </div>
        </div>
      )}

      {loginModal ? <LoginModal /> : null}

      <OverlayTrigger
        placement={'bottom'}
        overlay={
          <Tooltip>
            جهت ورود به باشگاه پذیرندگان و یا ثبت نام بعنوان پذیرنده نگاکلاب بر
            روی این دکمه کلیک کنید. برای ثبت نام یا ورود شماره همراه خود را وارد
            کرده و پس از دریافت کد تأیید توسط پیامک، مراحل در پنل را ادامه دهید.
          </Tooltip>
        }
      >
        <Button
          variant=' my-3 mr-3 '
          onClick={link}
          className='login-btn px-1  navBtn-font'
          style={{ fontSize: '13px' }}
        >
          باشگاه پذیرندگان
        </Button>
      </OverlayTrigger>

      <Button
        variant=' my-3 mr-3 '
        className='login-btn px-1 navBtn-font'
        style={{ fontSize: '13px' }}
        onClick={openModal}
      >
        دانلود اپلیکیشن
      </Button>
      {showModal ? <ModalDownload /> : null}
      <Button
        variant=' my-3 mr-3 px-3'
        className='login-btn3 px-1  navBtn-font'
        style={{ fontSize: '13px' }}
        onClick={openModalCity}
      >
        {cookies1['cityName'] ? cookies1['cityName'] : 'شهر'}

        <ImLocation2 className='ml-2' />
      </Button>
      {showModalCity ? <ModalCity /> : null}
    </>
  )
}

export default Login
