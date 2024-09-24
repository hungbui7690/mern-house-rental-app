import { Navbar } from '../components'
import { Outlet } from 'react-router-dom'

const SharedLayout = () => {
  return (
    <div className='flex flex-col mx-auto px-8 py-4 max-w-4xl min-h-screen'>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default SharedLayout
