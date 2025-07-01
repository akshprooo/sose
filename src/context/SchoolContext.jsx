import React, { createContext } from 'react'
import data from '../data/SchoolData'

export const SchoolInfo = createContext();

const SchoolContext = ({children}) => {



  return (
    <SchoolInfo.Provider value={data}>
        {children}
    </SchoolInfo.Provider>
  )
}

export default SchoolContext