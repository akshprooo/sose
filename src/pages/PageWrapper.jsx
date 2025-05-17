import React from 'react'

const PageWrapper = ({ children }) => {
  return (
    <div className='h-[100vh] w-[95vw]'>
      {children}
    </div>
  )
}


export default PageWrapper