import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: Implement login logic
    console.log('Login attempt:', formData)
  }

  return (
    <div className='flex flex-col items-center justify-center min-h-[80vh]'>
      <div className='w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md'>
        <h2 className='text-2xl font-bold text-center text-gray-900'>Login to Your Account</h2>
        <form className='mt-8 space-y-6' onSubmit={handleSubmit}>
          <div className='space-y-4'>
            <div>
              <label htmlFor='email' className='block text-sm font-medium text-gray-700'>Email</label>
              <input
                id='email'
                name='email'
                type='email'
                required
                className='w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary'
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <div>
              <label htmlFor='password' className='block text-sm font-medium text-gray-700'>Password</label>
              <input
                id='password'
                name='password'
                type='password'
                required
                className='w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary'
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
              />
            </div>
          </div>
          <button
            type='submit'
            className='w-full px-4 py-2 text-white bg-primary rounded-md hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary'
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login