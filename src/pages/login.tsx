import React, { useState } from 'react'
import backgroundImage from '../assets/login-image.jpg'; 
import { Link } from 'react-router-dom'

interface LoginData {
  email: string
  password: string
  rememberMe: boolean
}

const Login: React.FC = () => {
  const [loginData, setLoginData] = useState<LoginData>({
    email: '',
    password: '',
    rememberMe: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setLoginData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Login submitted:', loginData)
  }

  return (
    <div className="min-h-screen w-full overflow-hidden">
      <div className="flex flex-col lg:flex-row w-full max-w-[100vw]">
        
        <div className="lg:w-1/2 w-full order-2 lg:order-1 ml-6 lg:ml-4 xl:ml-9"> 
          <div className="w-full min-h-screen bg-white flex items-center justify-center px-4 lg:px-6 xl:px-8">
            <div className="w-full max-w-lg lg:max-w-xl xl:max-w-2xl">
              <div className="mb-8 lg:mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  Login
                </h2>
                <p className="text-base md:text-lg text-gray-600 mt-6 text-left">
                  Login in to your account
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5 lg:space-y-6">
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-primary text-left">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={loginData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-200 text-sm bg-white"
                    placeholder="Enter your email address"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <label className="block text-sm font-bold text-primary text-left">
                      Password
                    </label>
                  </div>
                  <input
                    type="password"
                    name="password"
                    value={loginData.password}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-200 text-sm bg-white"
                    placeholder="Enter your password"
                    required
                  />
                </div>

                <div className="flex items-start pt-2 justify-between">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="rememberMe"
                      name="rememberMe"
                      checked={loginData.rememberMe}
                      onChange={handleChange}
                      className="mt-1 size-4 md:size-5 text-primary rounded focus:ring-primary"
                    />
                    <label htmlFor="rememberMe" className="ms-3 text-sm text-primary-gray text-left">
                      Remember me
                    </label>
                  </div>
                  <Link 
                    to="/forgot-password" 
                    className="text-sm text-primary hover:text-primary-dark font-bold"
                  >
                    Forgot password?
                  </Link>
                </div>

                <div className="pt-3 flex justify-start">
                  <button
                    type="submit"
                    className="w-full py-2.5 px-8 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-all duration-200 text-base shadow-md hover:shadow-lg active:scale-[0.98]"
                  >
                    Sign In
                  </button>
                </div>

                <div className="text-left pt-3">
                  <p className="text-gray-600 text-sm">
                    Don't have an account yet?{' '}
                    <Link 
                      to="/register" 
                      className="text-primary hover:text-primary-dark font-medium underline-offset-2"
                    >
                      Create account
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 w-full order-1 lg:order-2 mr-6 lg:mr-4 xl:mr-9 relative">
            <div 
                className="w-full min-h-screen flex items-center justify-center lg:px-8 xl:px-10 relative bg-cover bg-center bg-no-repeat"
                style={{
                backgroundImage: `linear-gradient(rgba(37, 61, 144, 0.9), rgba(28, 46, 109, 0.85)), url(${backgroundImage})`
                }}
            >
                <div className="w-full max-w-lg lg:max-w-xl xl:max-w-2xl relative z-10">
                    <div className="absolute w-full text-left">
                        <h1 className="text-white/90 text-2xl md:text-3xl lg:text-4xl leading-relaxed max-w-xl mb-8">
                        Manage all <span className='text-accent'>HR Operations</span> from the comfort of your home.
                        </h1>    
                        
                        <div className="flex flex-row items-center space-x-3 mt-100">
                        <hr className='border-8 h-1 w-16 rounded-2xl border-accent'/>
                        <hr className='border-8 h-1 w-16 rounded-2xl border-white'/>
                        <hr className='border-8 h-1 w-16 rounded-2xl border-white'/>
                        </div>          
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Login