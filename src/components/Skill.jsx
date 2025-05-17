import React from 'react'

const Skill = () => {
  const skills = [
    { title: 'Digital Media And Design' },
    { title: 'Finance And Accounting' },
    { title: 'Electro-Mechanical Production' },
    { title: 'Coding' },
    { title: 'Fashion And Asthetics' },
    { title: 'Robotics' }
  ]

  return (
    <div className='flex gap-3 flex-wrap justify-center'>
      {skills.map((item, index) => (
        <div className='w-full sm:w-full md:w-[45vw] h-[55vh] p-6 bg-zinc-950 rounded-md border-[#738C76] border-2 ' key={index}>
            <h1 key={index} className='text-white text-3xl font-[inria]'>{item.title}</h1>
        </div>
      ))}
    </div>
  )
}

export default Skill
