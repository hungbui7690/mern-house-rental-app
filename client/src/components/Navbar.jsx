import { Link } from 'react-router-dom'
import Logo from '/favicon.png'
import { useState } from 'react'
import MenuModal from './MenuModal'
import SearchIcon from './icons/SearchIcon'
import HamburgerIcon from './icons/HamburgerIcon'
import AvatarIcon from './icons/AvatarIcon'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className='relative flex justify-between gap-2 mt-0 py-0 h-12 glass'>
      {/* LOGO */}
      <Link to={'/'} className='flex items-center'>
        <img src={Logo} alt='logo' className='w-12' />
      </Link>

      {/* SEARCH */}
      <div className='flex items-center gap-2 border-gray-300 shadow-gray-300 shadow-md px-4 border rounded-full h-12'>
        <div>
          <input
            type='text'
            className='border-transparent w-3 focus:outline-none'
            placeholder='Search'
          />
        </div>
        <button className='flex justify-center items-center bg-primary p-1 rounded-full w-8 h-8 text-white'>
          <SearchIcon />
        </button>
      </div>

      {/* HAMBURGER */}
      <div
        className='flex items-center gap-2 border-gray-300 px-4 py-2 border rounded-full h-12 cursor-pointer'
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <HamburgerIcon />
        <div className='border-gray-500 bg-gray-500 border rounded-full text-white overflow-hidden'>
          <AvatarIcon />
        </div>
        {isMenuOpen && <MenuModal setIsMenuOpen={setIsMenuOpen} />}
      </div>
    </header>
  )
}

export default Navbar
