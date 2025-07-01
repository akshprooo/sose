import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const ButtonShadow = ({ link, text }) => {
  const location = useLocation()
  const isActive = location.pathname === link

  return (
    <Link to={link} className="inline-block w-full md:w-auto">
      <div
        className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 ease-out text-center
          ${isActive 
            ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg' 
            : 'text-zinc-300 hover:text-white hover:bg-zinc-600/50'}
          before:absolute before:inset-0 before:rounded-lg before:bg-white/10 
          before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300
        `}
      >
        {text}
      </div>
    </Link>
  )
}

export default ButtonShadow