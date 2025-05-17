import React, { useState } from 'react'
import ButtonShadow from './ButtonShadow'
import Pages from '../utils/Data'
import { useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <>
      <nav className='fixed h-[80px] w-[95vw] z-[9999] flex items-center justify-between py-0 px-[2vw] bg-zinc-700 left-[50%] top-[10px] -translate-x-1/2 rounded-md'>
        <img src="./sose_logo.png" alt="Institution Logo" className='h-[85%]' />

        {/* Desktop Buttons */}
        <div className='hidden md:flex items-center gap-3.5'>
          {Pages.map((item) => (
            <ButtonShadow
              text={item.text}
              link={item.linkTo}
              key={item.idx}
              clicked={location.pathname === item.linkTo}
            />
          ))}
        </div>

        {/* Hamburger Menu Icon */}
        <button className="md:hidden z-[99999]" onClick={toggleMenu}>
          {isOpen ? <X size={28} color='#111111' /> : <Menu size={28} color='#fff' />}
        </button>
      </nav>

      {/* Sidebar Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-zinc-800 p-6 pt-20 transition-transform duration-300 ease-in-out z-[99999] ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col gap-4">
          {Pages.map((item) => (
            <ButtonShadow
              text={item.text}
              link={item.linkTo}
              key={item.idx}
              clicked={location.pathname === item.linkTo}
            />
          ))}
        </div>
      </div>

      {/* Background Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-[9997]"
          onClick={toggleMenu}
        />
      )}
    </>
  )
}

export default Navbar
