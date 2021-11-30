import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { FaPlusCircle } from 'react-icons/fa'
import { FaMinusCircle } from 'react-icons/fa'
import Fade from 'react-reveal/Fade'
const Question = ({ questions }) => {
  const [showInfo, setShowInfo] = useState(false)

  return (
    <article className='question'>
      <div className='row d-flex justify-content-end'>
        <h4 style={{ fontSize: '15px' }}>{questions.questionTitle}</h4>
        <div
          onClick={() => setShowInfo(!showInfo)}
          style={{ cursor: 'pointer' }}
        >
          {showInfo ? (
            <FaMinusCircle
              style={{
                color: '#bd992f',
                marginLeft: '10px',
                marginRight: '10px',
              }}
              size={25}
            />
          ) : (
            <FaPlusCircle
              style={{
                color: '#bd992f',
                marginLeft: '10px',
                marginRight: '10px',
              }}
              size={25}
            />
          )}
        </div>
      </div>
      <Fade top when={showInfo}>
        {showInfo && (
          <p
            className='px-2'
            style={{
              textAlign: 'justify',
              direction: 'rtl',
              marginTop: '15px',
              lineHeight: '30px',
            }}
          >
            {questions.questionAnswer}
          </p>
        )}
      </Fade>
    </article>
  )
}

export default Question
