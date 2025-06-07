import React from 'react'

const InfoSection = () => {
    const info = [
        {title: 'Our Mission', para: 'DBRA SOSE SEC-5 DWARKA strives to nurture young minds equipped with 21st-century skills and a future-forward mindset to solve environmental, social, cultural, emotional, and economic issues nationally and internationally.'},
        {title: 'Our Vision', para: 'DBRA SOSE SEC-5 DWARKA aims to develop open-minded, empathetic, dynamic, and confident learners possessing skills like critical thinking, decision-making, multilingualism, interpersonal communication, and leadership.'}
    ]
  
    return(
    info.map((item, idx)=>(
        <div key={idx} className='p-4 flex flex-col gap-3.5 h-1/2 w-full sm:w-full md:w-[45vw] rounded-md shrink-0 text-white bg-zinc-950'>
            <h1 className='text-5xl text-center font-[inknut]'>{item.title}</h1>
            <p className='text-2xl text-center font-[inknut]' >{item.para}</p>
        </div>
    ))
  )
}

export default InfoSection