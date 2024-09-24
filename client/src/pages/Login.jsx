import { Link, Navigate } from 'react-router-dom'
import { useAuthStore } from '../zustand/useAuthStore'

const Login = () => {
  const { login, user } = useAuthStore()
  console.log(user)

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    login(formData)
  }

  if (user) return <Navigate to={'/'} />

  return (
    <div className='flex justify-center items-center mt-4 p-8 min-h-screen'>
      <div className='mb-64 p-8'>
        <h1 className='mb-4 font-bold text-4xl text-center'>Login</h1>
        <form
          className='border-gray-300 mx-auto p-4 border rounded-md max-w-md'
          onSubmit={handleSubmit}
        >
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
          <button className='primary'>Login</button>
          <div className='py-2 text-center text-gray-500'>
            {"Don't"} have an account yet?{' '}
            <Link className='text-primary' to={'/register'}>
              Register now
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
