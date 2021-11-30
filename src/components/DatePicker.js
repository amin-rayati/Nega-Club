import React, {useState} from 'react'
import moment from 'moment-jalaali'
import DatePicker from 'react-datepicker2'
import momentJalaali from 'moment-jalaali'
import {useProductsContext} from "../context/ProductsProvider";

const MyDatePicker = () => {
    const {userData, setUserData} = useProductsContext();
    const [value,setValue] = useState(momentJalaali(userData.birthDateRaw ? userData.birthDateRaw * 1000 : Date.now()));
    const onValueChange = (val)=>{
        setValue(val);
    }
    return (
        <div>
            <DatePicker
                value={value}
                timePicker={false}
                isGregorian={false}
                onChange={onValueChange}
                className='form-input2'
            />
            <br/>
            {/* <button
          className='login-btn'
          style={{ border: 'none', borderRadius: '15px' }}
          onClick={() =>
            this.setState({ isGregorian: !this.state.isGregorian })
          }
        >
          {this.state.isGregorian ? 'تقویم شمسی' : 'تقویم  میلادی'}
        </button> */}
        </div>
    )
}

export default MyDatePicker
