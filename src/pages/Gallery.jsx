import React from 'react'
import { ebooks } from '../data/Ebooks'
import Footer from '../components/layout/Footer'

const Gallery = () => {

  const activities = [
    {Name: 'Activity1', Description: 'Description for', images:[{Name:'image', src:'/public/assets/school.png'}, {Name:'image', src:'/public/assets/school.png'}, {Name:'image', src:'/public/assets/school.png'}, ]},
    {Name: 'Activity2', Description: 'Description for', images:[{Name:'image', src:'/public/assets/school.png'}, {Name:'image', src:'/public/assets/school.png'}, {Name:'image', src:'/public/assets/school.png'}, ]},
    {Name: 'Activity3', Description: 'Description for', images:[{Name:'image', src:'/public/assets/school.png'}, {Name:'image', src:'/public/assets/school.png'}, {Name:'image', src:'/public/assets/school.png'}, ]},
    {Name: 'Activity4', Description: 'Description for', images:[{Name:'image', src:'/public/assets/school.png'}, {Name:'image', src:'/public/assets/school.png'}, {Name:'image', src:'/public/assets/school.png'}, ]},
  ]

  return (
    <div className="page flex flex-col gap-9 w-full">
      <div className='w-full h-[75vh] bg-black rounded-md border-[#738C76] border-2 flex items-center justify-center'>
        <h1 className='text-9xl text-white'>Marquee</h1>
      </div>

      <div className='text-center flex flex-col items-center gap-4'>
        <h1 className='text-white text-6xl font-[inknut]'>Activities</h1>
        <div className='w-full flex flex-col gap-10'>
          {activities.map((item, idx) => (
            <div key={idx} className='min-h-120 w-full bg-black rounded-md border-[#738C76] border-2 p-5'>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-120 items-center'>
                {item.images.map((elem, index) => (
                  <div className='w-full h-full bg-[#738C76] rounded-lg overflow-hidden flex items-center justify-center' key={index}>
                    <img 
                      src={elem.src} 
                      alt={elem.Name} 
                      className='w-full h-full object-cover rounded-lg'
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
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