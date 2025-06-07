import React from 'react'
import { ebooks } from '../utils/Ebooks'
import Footer from '../components/layout/Footer'

const Gallery = () => {

  const activities = [
    {Name: 'Activity1', Description: 'Hai yr kuch'},
    {Name: 'Activity2', Description: 'Hai yr kuch'},
    {Name: 'Activity3', Description: 'Hai yr kuch'},
    {Name: 'Activity4', Description: 'Hai yr kuch'},
  ]

  return (
    <div className="page flex flex-col gap-10">
      <div className='w-full h-[75vh] bg-black rounded-md border-[#738C76] border-2 flex items-center justify-center'>
        <h1 className='text-9xl text-white'>Marquee</h1>
      </div>

      <div className='text-center flex flex-col items-center gap-4'>
        <h1 className='text-white text-6xl font-[inknut]'>Activities</h1>
        {activities.map((item, idx)=>(
          <div key={idx} className='h-100 w-full bg-black rounded-md border-[#738C76] border-2'>
            
          </div>
        ))}
      </div>
      <div className='text-center flex flex-col items-center gap-5'>
        <h1 className='text-white text-6xl font-[inknut]'>Get Our E-Books!</h1>
        <div className='h-auto pt-3 pb-3 w-full bg-black flex flex-wrap gap-2 items-center justify-evenly rounded-md border-[#738C76] border-2'>
          {ebooks.map((item,idx)=>(
            <div key={idx} className='h-auto w-auto flex flex-col gap-2'>
              <div className='h-70 w-65 bg-[#738C76] rounded-md'></div>
              <a href={item.link}><button className='text-white bg-[#536250] w-65 py-2 rounded-md font-[inria] text-3xl cursor-pointer hover:bg-gradient-to-br from-[#536250] to-emerald-800'>Get Now</button></a>
            </div>
          ))}
        </div>
      </div>

    <Footer />
    </div>
  )
}

export default Gallery