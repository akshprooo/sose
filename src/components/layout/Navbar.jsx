import React, { useState, useEffect, useContext } from 'react'
import { Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import Pages from '../../data/Pages'
import ButtonShadow from '../Common/ButtonNav'
import { SchoolInfo } from '../../context/SchoolContext'

const Navbar = () => {
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [navVisible, setNavVisible] = useState(true)

  const schoolInfo = useContext(SchoolInfo);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      setScrolled(currentY > 20)
      setNavVisible(!(currentY > lastScrollY && currentY > 100))
      setLastScrollY(currentY)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  useEffect(() => {
    setIsOpen(false) // close menu on route change
  }, [location.pathname])

  useEffect(() => {
    const onEscape = (e) => e.key === 'Escape' && setIsOpen(false)
    document.addEventListener('keydown', onEscape)
    return () => document.removeEventListener('keydown', onEscape)
  }, [isOpen])

  const toggleMenu = () => setIsOpen(prev => !prev)

  return (
    <div className={isOpen ? 'overflow-hidden h-screen' : ''}>
      <nav className={`
        fixed top-[10px] left-1/2 -translate-x-1/2 z-[9999] w-[95vw] h-[80px]
        flex items-center justify-between px-[2vw] rounded-xl
        transition-all duration-500 ease-out
        ${navVisible ? 'translate-y-0 scale-100 translate-z-0' : '-translate-y-24 scale-95 -translate-z-3'}
        ${scrolled 
          ? 'bg-zinc-800/90 backdrop-blur-lg border border-zinc-600/30 shadow-2xl'
          : 'bg-zinc-700/95 backdrop-blur-sm shadow-lg'}
        before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-r 
        before:from-blue-500/10 before:via-purple-500/10 before:to-pink-500/10 
        before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500
      `}>
        {/* Logo */}
        <div className="relative group h-full flex items-center">
          <Link to={'/'}><img src="/sose_logo.png" alt="Logo" className="h-12 w-auto object-contain transition-all group-hover:scale-110 group-hover:brightness-110 drop-shadow-lg" /></Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-2">
          {Pages.map(item => (
            <ButtonShadow key={item.idx} link={item.linkTo} text={item.text} />
          ))}
        </div>

        {/* Hamburger */}
        <button
          onClick={toggleMenu}
          className={`md:hidden relative w-12 h-12 rounded-xl flex items-center justify-center
            transition-all duration-300 ease-out group overflow-hidden
            ${isOpen
              ? 'bg-gradient-to-r from-red-500 to-pink-500 scale-110 rotate-90'
              : 'bg-zinc-600/50 hover:bg-zinc-500/70 hover:scale-105'
            }`}
          aria-label="Toggle menu"
        >
          <div className="relative w-7 h-7">
            <Menu size={28} className={`absolute inset-0 text-white transition-all ${isOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`} />
            <X size={28} className={`absolute inset-0 text-white transition-all ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`} />
          </div>
        </button>
      </nav>

      {/* Mobile Drawer */}
      <aside className={`fixed top-0 left-0 h-full w-[75vw] z-[99999] transition-transform duration-500 ease-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/95 to-zinc-800/95 backdrop-blur-xl" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10" />

        <div className="relative h-full p-8 pt-24 overflow-y-auto">
          <div className="flex items-center gap-3 mb-8 pb-6 border-b border-zinc-600/30">
            <img src="/sose_logo.png" alt="Institution Logo" className="h-10 opacity-80" />
            <p className="text-white/60 text-sm">
              {schoolInfo.FullName}
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {Pages.map((item, index) => (
              <div
                key={item.idx}
                className={`transform transition-all duration-500 ease-out ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}
                style={{ transitionDelay: isOpen ? `${index * 0.1 + 0.2}s` : '0s' }}
              >
                <ButtonShadow link={item.linkTo} text={item.text} />
              </div>
            ))}
          </div>

          <div className="absolute bottom-8 left-8 right-8 text-center text-zinc-400 text-xs opacity-60">
            Tap outside to close
          </div>
        </div>
      </aside>

      {/* Backdrop */}
      <div
        onClick={toggleMenu}
        className={`fixed inset-0 z-[99998] transition-opacity duration-500 ${isOpen ? 'opacity-100 visible backdrop-blur-sm' : 'opacity-0 invisible'}`}
        style={{
          background: isOpen
            ? 'radial-gradient(circle at center, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.6) 100%)'
            : 'transparent'
        }}
      />
    </div>
  )
}

export default Navbar
