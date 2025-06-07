import React, { createContext } from 'react'

export const SchoolInfo = createContext();

const SchoolContext = ({children}) => {

    const data = {
        FullName: 'Dr. Bhim Rao Ambedkar School Of Specialized Excellence Sector-5, Dwarka',
        Name: 'SOSE Dwarka Sector 5',
        spl: 'High End 21st Century Skills' 
    }

  return (
    <SchoolInfo.Provider value={data}>
        {children}
    </SchoolInfo.Provider>
  )
}

export default SchoolContext