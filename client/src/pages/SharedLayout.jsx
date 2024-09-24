import { Navbar } from '../components'
import { Outlet } from 'react-router-dom'

const SharedLayout = () => {
  return (
    <div className='flex flex-col m-0 mx-auto mt-0 px-4 py-4 max-w-4xl min-h-screen'>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default SharedLayout
