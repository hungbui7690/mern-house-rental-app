import { Link, useLocation } from 'react-router-dom'
import PlusIcon from './icons/PlusIcon'

const AccountNavbar = () => {
  const { pathname } = useLocation() // /houses or /bookings
  const subPathname = pathname.split('/')[1]

  return (
    <>
      <nav className='flex justify-center gap-2 mt-8 mb-8 w-full'>
        <Link
          to={'/houses'}
          className={
            subPathname === 'houses'
              ? 'border-primary border-b-2 font-bold'
              : ''
          }
        >
          Houses
        </Link>
        <Link
          to={'/bookings'}
          className={
            subPathname === 'bookings'
              ? 'border-primary border-b-2 font-bold'
              : ''
          }
        >
          Bookings
        </Link>
      </nav>

      <div className='text-center'>
        <Link
          className='inline-flex gap-1 bg-primary px-2 py-1 rounded-full text-white'
          to={'/houses/create'}
        >
          <PlusIcon />
          Add House
        </Link>
      </div>
    </>
  )
}

export default AccountNavbar
