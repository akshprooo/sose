import React from 'react'
import { Instagram, Facebook, Twitter, ArrowUpRight } from 'lucide-react';
import Handles from '../../utils/SocialHandles'
import Links from '../../utils/Links'

const Footer = () => {
  const today = new Date();
  return (
    <div className='h-[65vh] w-full p-5 bg-[#7B7B7B45] mb-4 rounded-md flex flex-col justify-between gap-3'>
      <div className='p-2 flex flex-col md:flex-row h-full w-full bg-[#00000047] rounded-md border-2 border-[#738C76] gap-2'>
        <div className="w-full md:w-[45%] p-6 bg-[#00000060] rounded-md flex flex-col gap-4 h-fit md:h-full">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-[inknut]">
            Check Us Out On..
          </h1>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-white font-[inria]">
            {Handles.map((item, index) => (
              <a
                key={index}
                className="text-xl sm:text-2xl md:text-3xl hover:underline transition duration-200 flex items-center gap-1"
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.title}<ArrowUpRight />
              </a>
            ))}
          </div>
        </div>
          <div className="w-full md:w-[55%] h-auto bg-[#1e1e1e] rounded-md p-4 sm:p-5 md:p-6 border border-[#3a3a3a]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {Links.map((item, index) => (
                <a
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-all duration-200 text-sm sm:text-base underline underline-offset-4 decoration-transparent hover:decoration-white flex items-center gap-2 group wrap-break-word"
                >
                  {item.title}
                  <ArrowUpRight />
                </a>
              ))}
            </div>
          </div>


      </div>
      <div className='h-auto md:h-[19%] w-full bg-[#00000073] rounded-md flex flex-col md:flex-row items-center justify-between p-3 gap-2 text-center'>
        <h1 className='text-white font-[inria] text-md sm:text-xl'>
          All Rights Reserved. {today.getFullYear()} - SOSE Dwarka Sector 5
        </h1>
        <h1 className='text-white font-[inria] text-md sm:text-xl'>
          Website Made By <a href="https://github.com/akshprooo" className="underline">Aksh Tiwari</a>
        </h1>
      </div>
    </div>
  )
}

export default Footer
