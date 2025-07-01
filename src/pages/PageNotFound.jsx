import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Common/ButtonPrimary'

const PageNotFound = () => {
  return (
    <div className='flex items-center justify-center w-full pt-[15rem] text-center flex-col gap-8'>
        <h1 className='text-4xl sm:text-7xl text-white font-[inknut]'>Page Not Found</h1>
        <Link to={'/'}>
            <Button  text='Back To Home' />
        </Link>
    </div>
  )
}

export default PageNotFound