import React, { useState } from 'react'
import backgroundImage from '../assets/left-bg.jpg'; 
import logoImage from '../assets/logo.png';
import { Link } from 'react-router-dom'

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  password: string
  confirmPassword: string
  receiveNewsletter: boolean
  agreeTerms: boolean
}

const Register: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    receiveNewsletter: false,
    agreeTerms: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <div className="min-h-screen w-full overflow-hidden">
      <div className="flex flex-col lg:flex-row w-full max-w-[100vw]">
     

        <div className="lg:w-1/2 w-full ml-6 lg:ml-4 xl:ml-9"> 
          <div 
            className="w-full min-h-screen flex items-center justify-center px-6 lg:px-8 xl:px-10 relative bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `linear-gradient(rgba(37, 61, 144, 0.9), rgba(28, 46, 109, 0.85)), url(${backgroundImage})`
            }}
          >
            <div className="absolute top-6 left-6 lg:top-8 lg:left-8 xl:top-10 xl:left-10 z-20">
              <img 
                src={logoImage} 
                alt="XCELTECH Logo" 
                className="h-10 w-auto" 
              />
            </div>
            
            <div className="w-full max-w-lg lg:max-w-xl xl:max-w-2xl relative z-10 text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white/90 mb-6 drop-shadow-md">
                HR Management Platform
                <hr className='border-8 w-30 rounded-2xl mt-4'/>
              </h2>
              
              <p className="text-white/90 text-lg md:text-xl lg:text-2xl mb-8 leading-relaxed max-w-xl">
                Manage all employees, payrolls, and other human resource operations.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center items-center">
                <button className="px-6 py-3 bg-accent text-black font-semibold rounded-lg hover:bg-accent transition-all duration-200 text-base md:text-lg shadow-md hover:shadow-lg active:scale-[0.98] w-full sm:w-auto">
                  Learn More
                </button>
                <button className="px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/15 transition-all duration-200 text-base md:text-lg w-full sm:w-auto hover:border-white/90">
                  Our Features
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="lg:w-1/2 w-full mr-6 lg:mr-4 xl:mr-9"> 
          <div className="w-full min-h-screen bg-white flex items-center justify-center px-4 lg:px-6 xl:px-8">
            <div className="w-full max-w-lg lg:max-w-xl xl:max-w-2xl">
              <div className="mb-8 lg:mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  Welcome to XCELTECH
                </h2>
                <p className="text-base md:text-lg text-primary-gray mt-6 text-left">
                  Register your account
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5 lg:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 lg:gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-primary text-left">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-200 text-sm bg-white"
                      placeholder="Enter first name"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-primary text-left">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-200 text-sm bg-white"
                      placeholder="Enter last name"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 lg:gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-primary text-left">
                      E-mail Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-200 text-sm bg-white"
                      placeholder="Enter email address"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-primary text-left">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-200 text-sm bg-white"
                      placeholder="Enter phone number"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 lg:gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-primary text-left">
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-200 text-sm bg-white"
                      placeholder="Enter password"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-primary text-left">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-200 text-sm bg-white"
                      placeholder="Confirm password"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="newsletter"
                      name="receiveNewsletter"
                      checked={formData.receiveNewsletter}
                      onChange={handleChange}
                      className="mt-1 size-4 md:size-5 text-primary rounded focus:ring-primary"
                    />
                    <label htmlFor="newsletter" className="ms-3 text-sm text-primary-gray text-left">
                      Yes, I want to receive KRIS newsletters
                    </label>
                  </div>
                  
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="terms"
                      name="agreeTerms"
                      checked={formData.agreeTerms}
                      onChange={handleChange}
                      className="mt-1 size-4 md:size-5 text-primary-gray rounded focus:ring-primary"
                      required
                    />
                    <label htmlFor="terms" className="ms-3 text-sm text-primary-gray text-left">
                      I agree to all the <span className='text-primary'>Terms, Privacy Policy</span>
                    </label>
                  </div>
                </div>

                <div className="pt-3 flex justify-start">
                  <button
                    type="submit"
                    className="py-2.5 px-8 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-all duration-200 text-base shadow-md hover:shadow-lg active:scale-[0.98]"
                  >
                    Create Account
                  </button>
                </div>

                <div className="text-center pt-3">
                  <p className="text-gray-600 text-sm text-left">
                    Already have an account?{' '}
                    <Link 
                      to="/login" 
                      className="text-primary hover:text-primary-dark font-medium underline-offset-2"
                    >
                      Log in
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register