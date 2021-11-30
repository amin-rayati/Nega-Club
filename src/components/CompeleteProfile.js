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
import NewCompeleteProfile from './NewComeleteProfile'
import EditProfile from './EditProfile'

const CompeleteProfile = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['user'])
  const  {userData,setUserData} = useProductsContext();

  // if (!userData['fatherName']) {
  //   return <NewCompeleteProfile />
  // } else {
    return <EditProfile />
  // }
}
export default CompeleteProfile
