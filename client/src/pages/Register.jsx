import { Link, Navigate } from 'react-router-dom'
import { useAuthStore } from '../zustand/useAuthStore'

const Register = () => {
  const { register, user } = useAuthStore()

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    register(formData)
  }

  if (user) return <Navigate to={'/'} />

  return (
    <div className='flex justify-center items-center mt-4 p-8 min-h-screen'>
      <div className='mb-64 p-8'>
        <h1 className='mb-4 font-bold text-4xl text-center'>Register</h1>
        <form
          className='border-gray-300 mx-auto p-4 border rounded-md max-w-md'
          onSubmit={handleSubmit}
        >
          <input
            type='text'
            placeholder='Full Name'
            name='fullName'
            defaultValue={'David Stone'}
            required
          />
          <input
            type='text'
            placeholder='username'
            name='username'
            defaultValue={'userx'}
            required
          />

          <input
            type='password'
            placeholder='password'
            autoComplete='true'
            name='password'
            defaultValue={'121212'}
            required
          />
          <button className='primary'>Register</button>
          <div className='py-2 text-center text-gray-500'>
            Already a member?{' '}
            <Link className='text-primary' to={'/login'}>
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register
