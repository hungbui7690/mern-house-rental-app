import { Link } from 'react-router-dom'
import Logo from '/favicon.png'

const Navbar = () => {
  const user = null

  return (
    <header className='flex justify-between'>
      <Link to={'/'} className='flex items-center gap-1'>
        <img src={Logo} alt='logo' className='w-10' />
      </Link>
      <div className='flex items-center gap-2 border-gray-300 shadow-gray-300 shadow-md px-4 border rounded-full'>
        <div>
          <input type='text' className='border-gray-300' placeholder='Search' />
        </div>
        <button className='flex justify-center items-center bg-primary p-1 rounded-full w-8 h-8 text-white'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-4 h-4'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
            />
          </svg>
        </button>
      </div>
      <Link
        to={user ? '/account' : '/login'}
        className='flex items-center gap-2 border-gray-300 px-4 py-2 border rounded-full'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-6 h-6'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
          />
        </svg>
        <div className='border-gray-500 bg-gray-500 border rounded-full text-white overflow-hidden'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
            className='relative top-1 w-6 h-6'
          >
            <path
              fillRule='evenodd'
              d='M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z'
              clipRule='evenodd'
            />
          </svg>
        </div>
        {!!user && <div>{user.name}</div>}
      </Link>
    </header>
  )
}

export default Navbar
