import { Link } from 'react-router-dom'
import { useAuthStore } from '../zustand/useAuthStore'
import ArrowLeftIcon from './icons/ArrowLeftIcon'
import ArrowRightIcon from './icons/ArrowRightIcon'
import UserPlusIcon from './icons/UserPlusIcon'

const MenuModal = ({ setIsMenuOpen }) => {
  const { logout, user } = useAuthStore()
  const handleLogout = () => {
    logout()
  }

  return (
    <div className='-top-5 right-0 absolute flex flex-col bg-white border-l border-l-slate-300 w-1/2 sm:w-1/3 md:w-1/5 h-screen'>
      <div className='py-8 pl-4'>
        <div
          className='text-right mb-4 pb-4 border-b border-b-slate-300 text-3xl cursor-pointer items'
          onClick={() => setIsMenuOpen(false)}
        >
          ❌
        </div>
        {!user ? (
          <>
            <Link to={'/login'} className='flex gap-2 mb-2'>
              <span className='text-gray-500'>
                <ArrowLeftIcon />
              </span>
              <span className='font-bold text-gray-600'>Login</span>
            </Link>
            <Link to={'/register'} className='flex gap-2 mb-2'>
              <span className='text-gray-500'>
                <UserPlusIcon />
              </span>
              <span className='font-bold text-gray-600'>Register</span>
            </Link>
          </>
        ) : (
          <div className='flex gap-2' onClick={handleLogout}>
            <span className='text-gray-500'>
              <ArrowRightIcon />
            </span>
            <span className='font-bold text-gray-600'>Logout</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default MenuModal
