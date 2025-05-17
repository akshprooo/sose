import React from 'react'
import { Link } from 'react-router-dom'

const ButtonShadow = ({ link, text, clicked }) => {
  return (
    <Link to={link} className="inline-block w-full md:w-auto">
      <button
        className={`${
          clicked ? 'bg-[#738C76]' : 'bg-[#536250]'
        } cursor-pointer text-white w-full md:w-auto py-2.5 px-5 sm:py-3.5 sm:px-7 md:text-xl text-base rounded-md transition duration-300 ease-in-out hover:scale-105`}
      >
        {text}
      </button>
    </Link>
  )
}

export default ButtonShadow
