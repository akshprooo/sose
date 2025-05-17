import React from 'react'

const Button = (props) => {
  return (
    <a href={props.href}>
        <button className='bg-[#536250] py-4 px-6 rounded-md text-xl text-white font-[inria] cursor-pointer shadow-[0_5px_0_#aaa]'>{props.text}</button>
    </a>
  )
}

export default Button