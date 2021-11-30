import { React, useState, useEffect } from 'react'
import { useProductsContext } from '../context/ProductsProvider'
import Loader from '../pages/Loader'
import Negacart from './Negacart'
import axios from 'axios'
import { Button } from 'react-bootstrap'
import nega1 from '../img/nega1.png'
import nega2 from '../img/nega2.png'
import nega3 from '../img/nega3.png'
import nega4 from '../img/nega4.png'
import daramad from '../img/1212.png'
import ekhtesasi from '../img/111555.png'
import { Helmet } from 'react-helmet'

const WebServices = () => {
  const { Loading, setLoading } = useProductsContext()
  const [showInfo, setShowInfo] = useState(false)
  const [cards, setCards] = useState('')

  const getCard = () => {
    axios
      .post(
        'https://negaclub.ir/admin/Levels/API/_allLevels/?token=test',

        {
          headers: {
            token: 'test',
          },
        }
      )
      .then((response) => {
        setCards(response.data.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }
  const info = cards && cards.filter((item) => item.title !== 'معمولی')

  useEffect(() => {
    getCard()
  }, [])

  setTimeout(() => {
    setLoading(false)
  }, 1000)

  if (Loading) {
    return <Loader />
  }
  return (
    <div className='mt-5'>
      <div className='container m-t marginTop px-0'>
        <div className='text-center'>
          <div
            className='text-center'
            style={{
              backgroundColor: '#4a4848',
              color: '#ffffff',
            }}
          >
            <h1 className='p-5' style={{ color: '#fff' }}>
              نگاکارت چیست ؟
            </h1>
            <Helmet>
              <title> نگاکارت نگاکلاب </title>
            </Helmet>
          </div>

          <div>
            <div className='bar mx-auto'></div>
          </div>
          <p
            className='text mb-3 '
            style={{
              fontSize: '15px',
              textAlign: 'justify',
              direction: 'rtl',
              lineHeight: '30px',
              padding: ' 0 10px 0 10px',
            }}
          >
            نگاکارت یک کارت بانکی عضو شبکه شتاب بوده که برای مشتریان نگاکلاب
            خصوصی سازی شده وبا استفاده از این کارت علاوه برخرید حضوری از تمام
            دستگاه‌های کارتخوان به سیستم بانکی کشور (شاپرک ) میتوانند از
            قابلیتهای خرید اینترنتی با استفاده از رقم دوم اقدام نمایند . هنگام
            خرید از پذیرندگان طرف قرارداد کافی است ، کافیست دارنده نگاکارت در
            هنگام خرید،قیمت اعلامی توسط فروشنده را با یکی از کارت های بانکی ثبت
            شده خود در سیستم و یا نگاکارت خود به وسیله کارتخوان های منتخب این
            شرکت پرداخت نموده تا کارتخوان تخفیف اعلامی را محاسبه و به نگاکارت
            واریز نماید. این امر باعث میشود در ظاهر هیچ تفاوتی بین مشتریان
            نگاکلاب و مشتریان عادی نبوده و امکان تغییر قیمت بدلیل اعمال تخفیف در
            باشگاه ، از فروشنده سلب گردد .
          </p>
          <Button
            href='/file/katalog.pdf'
            download
            style={{ border: 'none' }}
            className='login-btn px-3 hover-item navBtn-font navBtn-font'
          >
            دانلود کاتالوگ
          </Button>
        </div>
        <hr className='mt-3' />
      </div>

      <div className='container m-t'>
        <div className='row justify-content-center text-center'>
          <div className='order-lg-4 order-md-1 order-sm-1 order-1  col-lg-3 col-md-7 col-sm-10 col-10'>
            <img
              style={{ width: '100%' }}
              src={nega1}
              alt='nega1'
              className='katalog-image'
            />
          </div>
          <div className='order-lg-3 order-md-2 order-sm-2 order-2  col-lg-3 col-md-7 col-sm-10 col-10'>
            <img
              style={{ width: '100%' }}
              src={nega2}
              alt='nega2'
              className='katalog-image'
            />
          </div>
          <div className='order-lg-2 order-md-3 order-sm-3 order-3  col-lg-3 col-md-7 col-sm-10 col-10'>
            <img
              style={{ width: '100%' }}
              src={nega3}
              alt='nega3'
              className='katalog-image'
            />
          </div>
          <div className='order-lg-1 order-md-4 order-sm-4 order-4  col-lg-3  col-md-7 col-sm-10 col-10'>
            <img
              style={{ width: '100%' }}
              src={nega4}
              alt='nega4'
              className='katalog-image'
            />
          </div>
        </div>
      </div>

      <div className='container m-t'>
        <h4 className='text text-center mb-4 mt-5' style={{ color: '#1d5e90' }}>
          کسب درآمد با نگاکارت
        </h4>

        <div>
          <div className='bar mx-auto'></div>
        </div>
        <div className='row' style={{ marginTop: '-100px' }}>
          <div className='col-lg-6' style={{ height: '50%' }}>
            <p
              className='text mb-3'
              style={{
                marginTop: '34%',
                fontSize: '15px',
                textAlign: 'justify',
                direction: 'rtl',
                lineHeight: '30px',
              }}
            >
              نگاکلاب بااستفاده از تخفیف های اعمال شده در فروشگاه‌ها ، امکان کسب
              درآمدی عالی را برای اعضای خود پیشبینی کرده است ! کافی است شما به
              عنوان دارنده نگاکارت ، خدمات باشگاه مشتریان نگاکلاب را به خانواده
              ، دوستان ، اقوام ، همکاران و ... معرفی کرده و بااستفاده از خدمات
              زیادی که این باشگاه در اختیار آنها قرار خواهد داد آنهارا مشتاق به
              عضویت در نگاکلاب و تهیه نگاکارت نمایید . از همین لحظه کسب درآمد
              شما شروع میشود ، به ازای هر خریدی که معرفی شدگان توسط شما انجام
              دهند . درصدی از تخفیف لحاظ شده مستقیما به حساب نگاکارت شما و یا
              کیف پول نگاکلاب شما واریز میشود . هیچ محدودیت و کف وسقفی برای
              برداشت این مبالغ وجود نخواهد داشت . اما این پایان ماجرا نیست ! اگر
              کسانی که شما معرفی کردید هم افراد دیگری را معرفی کنند درصدی از
              خریدهای آنها هم برای شما منظور خواهد شد . به همین سادگی!!
            </p>
          </div>
          <div className='col-lg-6'>
            <img src={daramad} style={{ width: '100%' }} />
          </div>
        </div>

        <hr style={{ marginTop: '30px' }} />
      </div>

      <h4 className='text text-center mb-4 mt-5' style={{ color: '#1d5e90' }}>
        خرید نگاکارت
      </h4>
      <div>
        <div className='bar mx-auto'></div>
      </div>

      <div className=' row   my-5 justify-content-center mx-1'>
        {info &&
          info.map((e) => {
            return <Negacart e={e} />
          })}
      </div>

      <div className='container m-t'>
        <h4 className='text text-center mb-4 mt-5' style={{ color: '#1d5e90' }}>
          درآمد از نگاکارت
        </h4>

        <div>
          <div className='bar mx-auto'></div>
        </div>
        <p
          className='text mb-3'
          style={{
            fontSize: '15px',
            textAlign: 'justify',
            direction: 'rtl',
            lineHeight: '30px',
          }}
        >
          بعنوان یک معرف چقدر درآمد خواهم داشت ؟ فرض کنید شما نگاکارت را بعد 50
          نفر معرفی کردید ، هر یک از این 50 نفر نیز نگاکارت را به 50 نفر دیگر
          معرفی کردند و هر یک از این افراد ماهیانه 1 میلیون تومان از سیستم
          نگاکلاب خرید انجام دهند ( متاسفانه 1 میلیون تومان حداقل هزینه خودرو و
          خوراک یک خانواده است ) و به طور میانگین 15درصد تخفیف از فروشگاه‌ها
          دریافت کنند و فرض کنید همه شما نگاکارت طلایی دارید ... حال حساب می
          کنیم 100 نفر که شما معرف اول آنها هستید و از هر تخفیف 6 درصد پاداش
          میگیرید یعنی 9000 تومان پس در مجموع شما 450/000 تومان پاداش سطح اول
          خواهید گرفت 2500 نفر هم که معرف سطح دوم آنها هستید و از هر تخفیف 4
          درصد پاداش میگیرید یعنی 6000 تومان پس در مجموع شما 15/000/000 تومان
          پاداش سطح دوم خواهید داشت پس با محاسبه همه حداقل‌ها و در بدترین شرایط
          در نظر گرفته شده (معرفی 50 نفر ) و ( خرید 1 میلیون تومانی !! ) درآمد
          شما در ماه حداقل 15/450/000 تومان به همراه دعای خیر بیش از 2500 نفر
          برای کاهش هزینه‌های روزمره و امکان کسب درآمد ماهیانه خواهد بود!
        </p>

        <hr style={{ marginTop: '30px' }} />
      </div>

      <div className='container m-t'>
        <h4 className='text text-center mb-4 mt-5' style={{ color: '#1d5e90' }}>
          نگاکارت اختصاصی
        </h4>

        <div>
          <div className='bar mx-auto'></div>
        </div>
        <p
          className='text mb-1'
          style={{
            fontSize: '15px',
            textAlign: 'justify',
            direction: 'rtl',
            lineHeight: '30px',
          }}
        >
          اگر شما در مجموعه‌ای فعالیت میکنید که بیش از هزار مصرف کننده مستقیم
          دارید . می‌توانید به جای استفاده از نگاکارت ، از کارت اختصاصی خود با
          نام و لوگوی مجموعه خود استفاده کنید . این کارت مانند نگاکارت تمام
          قابلیتهای گفته شده را خواهد داشت ، ضمن اینکه میتوانید در منافع حاصله
          از تراکنشها نیز سهیم باشید . نگاکلاب نیمی از سود حاصل از هر تراکنش را
          به مجموعه شما اختصاص خواهد داد و این درآمد ، می‌تواند سازمان رفاهی شما
          را به سرعت ، بزرگتر کرده و باعث بروز خدمات گسترده‌تر گردد .
        </p>

        <div className='col-lg-12 col-md-12 col-sm-12 col-12 text-center'>
          <img style={{ width: '100%' }} src={ekhtesasi} />
        </div>

        <hr style={{ marginTop: '30px' }} />
      </div>
    </div>
  )
}

export default WebServices
