import React from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import { LinkContainer } from 'react-router-bootstrap'
import { IoIosArrowBack } from 'react-icons/io'
import { Link } from 'react-router-dom'
const Breadcrump = ({ workgroup, cast, provider, workid, idcast }) => {
  return (
    <Breadcrumb className='bread'>
      {provider ? (
        <>
          <LinkContainer to={`/castes/${workid}/${idcast}`}>
            <p className='text-dark mx-2'>{provider}</p>
          </LinkContainer>
        </>
      ) : null}
      {cast ? (
        <>
          <IoIosArrowBack className='mt-1 h5' />
          <LinkContainer to={`/castes/${workid}`}>
            <p className='text-dark mx-2'>{cast}</p>
          </LinkContainer>
        </>
      ) : null}
      <IoIosArrowBack className='mt-1 h5' />
      <LinkContainer to={`/negaclub`}>
        <p className='text-dark mx-2'>{workgroup}</p>
      </LinkContainer>
    </Breadcrumb>
  )
}

export default Breadcrump
