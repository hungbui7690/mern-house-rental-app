import { Routes, Route, Navigate } from 'react-router-dom'
import {
  Home,
  Login,
  Register,
  SharedLayout,
  HousesPage,
  CreateHouse,
  SingleHouse,
  Bookings,
  SingleBooking,
} from './pages'
import { Toaster } from 'react-hot-toast'
import { useAuthStore } from './zustand/useAuthStore'

function App() {
  const user = useAuthStore((state) => state.user)

  return (
    <>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='houses' element={<HousesPage />} />
          <Route
            path='houses/create'
            element={user ? <CreateHouse /> : <Navigate to={'/login'} />}
          />
          <Route path='houses/:id' element={<SingleHouse />} />
          <Route
            path='bookings'
            element={user ? <Bookings /> : <Navigate to={'/login'} />}
          />
          <Route
            path='bookings/:id'
            element={user ? <SingleBooking /> : <Navigate to={'/login'} />}
          />
        </Route>
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
      </Routes>
      <Toaster toastOptions={{ duration: 2500 }} />
    </>
  )
}

export default App
