import { React, useEffect, useState } from 'react'
import { FaPlusCircle } from 'react-icons/fa'
import Data from './Data'
import SingleQuestion from './Singlequestion'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import axios from 'axios'
import { getSuggestedQuery } from '@testing-library/dom'
import { Helmet } from 'react-helmet'

const url = 'https://negaclub.ir/admin/Questions/API/_Questions?token=test'
const tabUrl =
  'https://negaclub.ir/admin/QuestionCategories/API/_getQuestionCategories?token=test'
const Qouestions = () => {
  const [tabs, setTabs] = useState('')
  const [questions, setQuestions] = useState('')

  const getTab = async () => {
    try {
      const rawResponse = await fetch(tabUrl, {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type
        }),
      })
      const content = await rawResponse.json()
      if (content.isDone) {
        setTabs(content.data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const getQuestions = async (key) => {
    axios
      .post(url, {
        questionCategoryId: key,
      })
      .then((response) => {
        if (response.data.isDone) {
          setQuestions(response.data.data)
        }
      })
      .catch((error) => {
        console.error(error)
      })
  }

  useEffect(() => {
    getTab()
  }, [])

  return (
    <div className='mt-5 '>
      <div className='container m-t marginTop px-0'>
        <div
          className='text-center'
          style={{
            backgroundColor: '#4a4848',
            color: '#ffffff',
          }}
        >
          <h1 className='p-5' style={{ color: '#ffffff' }}>
            سوالات متداول
          </h1>
          <Helmet>
            <title> سوالات متداول نگاکلاب</title>
          </Helmet>
        </div>
        <Tabs
          onSelect={getQuestions}
          defaultActiveKey='profile'
          id='uncontrolled-tab-example'
          className='mb-3 tab'
          style={{ color: ' #bf9b30' }}
        >
          {tabs &&
            tabs.map((e) => {
              return (
                <Tab eventKey={e.id} title={e.name}>
                  {questions &&
                    questions.map((item) => {
                      return (
                        <>
                          <div className='d-flex justify-content-center mt-5 px-3'>
                            <div className='d-flex col-lg-8 col-md-12 col-sm-12 col-12 mx-1 qou'>
                              <SingleQuestion
                                key={item.questionId}
                                questions={item}
                              ></SingleQuestion>
                            </div>
                          </div>
                        </>
                      )
                    })}
                </Tab>
              )
            })}
        </Tabs>
      </div>

      {/* {questions &&
        questions.map((item) => {
          return (
            <>
              <div className='d-flex justify-content-center mt-5'>
                <div className='d-flex col-lg-6 col-md-10 col-sm-10 col-10 mx-2 qou'>
                  <SingleQuestion
                    key={item.questionId}
                    questions={item}
                  ></SingleQuestion>
                </div>
              </div>
            </>
          )
        })} */}
    </div>
  )
}

export default Qouestions
