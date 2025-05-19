import React from 'react'
import Button from '../components/common/Button'
import Skill from '../components/layout/Skill'
import InfoSection from '../components/layout/InfoSection'
import Footer from '../components/layout/Footer'

const Home = () => {
  const reasons = [
    {title: 'The city is our campus', image: './assets/city-is-our-campus.jpg'},
    {title: 'Progressive Education', image: './assets/progressive-education.jpg'},
    {title: 'A School for Children', image: './assets/a-school-for-children.jpg'}
  ]

  return (
    <div className='w-full min-h-screen relative flex flex-col gap-15'>
      <div className='introDiv'>
        <div className='h-[70vh] w-full z-10 relative p-6 rounded-md flex flex-col justify-center gap-8'>
          <div className='flex flex-col gap-4'>
            <h1 className='text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl w-full sm:w-[90%] md:w-[80%] lg:w-[70%] font-[inknut] leading-[125%]'>Dr. Bhim Rao Ambedkar School Of Specialized Excellence Sector-5, Dwarka</h1>
            <h2 className='text-white font-[inria] text-xl sm:text-2xl md:text-3xl lg:text-4xl'>High End 21st Century Skills</h2>
          </div>
          <Button text='Learn More' href='#' />
        </div>
        <img loading='lazy' src="/assets/school.png" alt="Image Of DBRA SOSE school's Building" className='rounded-md z-1 border-[#738C76] border-2 absolute top-0 left-0 h-[70vh] w-[100vw] object-cover' />
      </div>
      <div className='skills w-full flex flex-col gap-6'>
        <h1 className='text-white text-5xl font-[inknut] text-center'>Our Skill Programs</h1>
        <div className='w-full'>
          <Skill />
        </div>
        <div className='flex justify-center gap-3 flex-wrap '>
          <InfoSection />
        </div>
        <div className='w-full bg-[#232323] py-5 px-6 sm:px-10 md:px-20 flex flex-col gap-7 rounded-md'>
          <h1 className='text-white text-3xl sm:text-4xl font-[inknut] text-center'>
            Why Choose SoSE Dwarka Sector - 5?
          </h1>
          <div className='w-full flex flex-wrap justify-center gap-20'>
            {reasons.map((item, index) => (
              <div
                key={index}
                className='p-4 rounded-xl flex flex-col items-center w-full sm:w-[45%] md:w-[30%] xl:w-[22%]'
              >
                <div className={` h-[15rem] w-[15rem] rounded-full bg-cover bg-center`} style={{backgroundImage: `url(${item.image})`}}></div>
                <h2 className='text-white font-[inknut] text-xl text-center mt-4'>
                  {item.title}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home