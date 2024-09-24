import { Routes, Route } from 'react-router-dom'
import { Home, Login, Register, SharedLayout } from './pages'

function App() {
  return (
    <Routes>
      <Route path='/' element={<SharedLayout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path='login' element={<Login />} />
      <Route path='register' element={<Register />} />
    </Routes>
  )
}

export default App
