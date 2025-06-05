import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Pages from '../../utils/Pages'

// Mock ButtonShadow component
const ButtonShadow = ({ text, link, clicked }) => (
  <a
    href={link}
    className={`
      relative px-4 py-2 rounded-lg font-medium transition-all duration-300 ease-out
      ${clicked 
        ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg' 
        : 'text-zinc-300 hover:text-white hover:bg-zinc-600/50'
      }
      before:absolute before:inset-0 before:rounded-lg before:bg-white/10 
      before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300
    `}
  >
    {text}
  </a>
)

// Mock useLocation
const useLocation = () => ({ pathname: '/' })

const Navbar = () => {
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [navVisible, setNavVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrolled(currentScrollY > 20)
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setNavVisible(false)
      } else {
        setNavVisible(true)
      }
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset'
    return () => { document.body.style.overflow = 'unset' }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) setIsOpen(false)
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen])

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <>
      <nav className={`
        fixed h-[80px] w-[95vw] z-[9999] flex items-center justify-between px-[2vw] 
        left-1/2 top-[10px] -translate-x-1/2 rounded-xl transition-all duration-500 ease-out
        ${navVisible ? 'translate-y-0' : '-translate-y-24'}
        ${scrolled 
          ? 'bg-zinc-800/90 backdrop-blur-lg border border-zinc-600/30 shadow-2xl' 
          : 'bg-zinc-700/95 backdrop-blur-sm shadow-lg'
        }
        before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-r 
        before:from-blue-500/10 before:via-purple-500/10 before:to-pink-500/10 
        before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500
      `}>
        
        {/* Logo - Fixed Size */}
        <div className="relative group w-auto h-full flex items-center">
          <img 
            src="./sose_logo.png" 
            alt="Institution Logo" 
            className="h-12 w-auto object-contain transition-all duration-300 group-hover:scale-110 group-hover:brightness-110 drop-shadow-lg" 
          />
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-2">
          {Pages.map((item, index) => (
            <div key={item.idx} className="relative">
              <ButtonShadow
                text={item.text}
                link={item.linkTo}
                clicked={location.pathname === item.linkTo}
              />
            </div>
          ))}
        </div>

        {/* Hamburger Menu */}
        <button 
          className={`md:hidden relative w-12 h-12 rounded-xl flex items-center justify-center
            transition-all duration-300 ease-out group overflow-hidden
            ${isOpen 
              ? 'bg-gradient-to-r from-red-500 to-pink-500 scale-110 rotate-90' 
              : 'bg-zinc-600/50 hover:bg-zinc-500/70 hover:scale-105'
            }`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <div className="relative w-7 h-7">
            <Menu size={28} className={`absolute inset-0 text-white transition-all duration-300 ${isOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`} />
            <X size={28} className={`absolute inset-0 text-white transition-all duration-300 ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`} />
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed top-0 left-0 h-full w-80 z-[99999] transition-all duration-500 ease-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/95 to-zinc-800/95 backdrop-blur-xl" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10" />
        
        <div className="relative h-full p-8 pt-24 overflow-y-auto">
          <div className="flex items-center gap-3 mb-8 pb-6 border-b border-zinc-600/30">
            <img src="./sose_logo.png" alt="Institution Logo" className="h-10 opacity-80" />
            <div className="text-white/60 text-sm">Navigation Menu</div>
          </div>
          
          <div className="flex flex-col gap-3">
            {Pages.map((item, index) => (
              <div
                key={item.idx}
                className={`transform transition-all duration-500 ease-out ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}
                style={{ transitionDelay: isOpen ? `${index * 0.1 + 0.2}s` : '0s' }}
              >
                <ButtonShadow
                  text={item.text}
                  link={item.linkTo}
                  clicked={location.pathname === item.linkTo}
                />
              </div>
            ))}
          </div>

          <div className="absolute bottom-8 left-8 right-8 text-center text-zinc-400 text-xs opacity-60">
            Tap outside to close
          </div>
        </div>
      </div>

      {/* Background Overlay */}
      <div
        className={`fixed inset-0 z-[99998] transition-all duration-500 ease-out ${isOpen ? 'opacity-100 visible backdrop-blur-sm' : 'opacity-0 invisible'}`}
        onClick={toggleMenu}
        style={{
          background: isOpen 
            ? 'radial-gradient(circle at center, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.6) 100%)'
            : 'transparent'
        }}
      />

      <style jsx>{`
        @keyframes slideInFromTop {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  )
}

export default Navbar
