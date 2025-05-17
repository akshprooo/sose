import React from 'react'

const Footer = () => {
  return (
    <div className='h-[65vh] w-full p-5 bg-[#7B7B7B45] mb-4 rounded-md flex flex-col justify-between gap-3'>
      <div className='p-2 flex flex-col md:flex-row h-full w-full bg-[#00000047] rounded-md border-2 border-[#738C76] gap-2'>
        <div className='w-full md:w-[45%] h-[45%] md:h-full bg-[#00000060] rounded-md'></div>
        <div className='w-full md:w-[55%] h-[55%] md:h-full bg-zinc-400 rounded-md'></div>
      </div>
      <div className='h-auto md:h-[19%] w-full bg-[#00000073] rounded-md flex flex-col md:flex-row items-center justify-between p-3 gap-2 text-center'>
        <h1 className='text-white font-[inria] text-md sm:text-xl'>
          All Rights Reserved. SOSE Dwarka Sector 5
        </h1>
        <h1 className='text-white font-[inria] text-md sm:text-xl'>
          Website Made By <a href="https://github.com/akshprooo" className="underline">Aksh Tiwari</a>
        </h1>
      </div>
    </div>
  )
}

export default Footer
