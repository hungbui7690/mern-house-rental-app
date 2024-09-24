import { Routes, Route } from 'react-router-dom'
import {
  Home,
  Login,
  Register,
  SharedLayout,
  Houses,
  CreateHouse,
  SingleHouse,
  Bookings,
  SingleBooking,
} from './pages'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='houses' element={<Houses />} />
          <Route path='houses/create' element={<CreateHouse />} />
          <Route path='houses/:id' element={<SingleHouse />} />
          <Route path='bookings' element={<Bookings />} />
          <Route path='bookings/:id' element={<SingleBooking />} />
        </Route>
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
      </Routes>
      <Toaster toastOptions={{ duration: 2500 }} />
    </>
  )
}

export default App
