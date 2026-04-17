import React, { useState } from 'react';

// Simple SVG Icons
const LogoIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-600 mr-2">
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" />
  </svg>
);

const MailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2">
    <path d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const LockIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2">
    <rect x="5" y="11" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 11V7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 15V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const GoogleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
    <path d="M22.56 12.25C22.56 11.47 22.49 10.72 22.36 10H12V14.26H17.92C17.66 15.63 16.88 16.81 15.69 17.61V20.35H19.26C21.35 18.43 22.56 15.6 22.56 12.25Z" fill="#4285F4"/>
    <path d="M12 23C14.97 23 17.46 22.02 19.26 20.35L15.69 17.61C14.71 18.27 13.46 18.66 12 18.66C9.17 18.66 6.78 16.74 5.94 14.18H2.26V17.03C4.05 20.58 7.72 23 12 23Z" fill="#34A853"/>
    <path d="M5.94 14.18C5.73 13.52 5.6 12.78 5.6 12C5.6 11.22 5.73 10.48 5.94 9.82V6.97H2.26C1.51 8.46 1.09 10.17 1.09 12C1.09 13.83 1.51 15.54 2.26 17.03L5.94 14.18Z" fill="#FBBC05"/>
    <path d="M12 5.34C13.62 5.34 15.07 5.9 16.21 6.98L19.34 3.85C17.46 2.09 14.97 1 12 1C7.72 1 4.05 3.42 2.26 6.97L5.94 9.82C6.78 7.26 9.17 5.34 12 5.34Z" fill="#EA4335"/>
  </svg>
);

const QuoteIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-600 mb-4">
    <path d="M10 11C10 14.3137 7.31371 17 4 17C3.44772 17 3 16.5523 3 16C3 15.4477 3.44772 15 4 15C5.10457 15 6 14.1046 6 13C6 12.83 5.96 12.67 5.91 12.5C5.35 12.28 4.9 11.77 4.9 11.16C4.9 10.59 5.25 10.05 5.83 9.88C6.95 9.54 8 8.86 8 8C8 7.44772 8.44772 7 9 7C9.55228 7 10 7.44772 10 8C10 8.9 9.8 9.77 9.4 10.56C9.64 10.64 9.84 10.79 10 11Z" fill="currentColor"/>
    <path d="M20 11C20 14.3137 17.3137 17 14 17C13.4477 17 13 16.5523 13 16C13 15.4477 13.4477 15 14 15C15.1046 15 16 14.1046 16 13C16 12.83 15.96 12.67 15.91 12.5C15.35 12.28 14.9 11.77 14.9 11.16C14.9 10.59 15.25 10.05 15.83 9.88C16.95 9.54 18 8.86 18 8C18 7.44772 18.4477 7 19 7C19.5523 7 20 7.44772 20 8C20 8.9 19.8 9.77 19.4 10.56C19.64 10.64 19.84 10.79 20 11Z" fill="currentColor"/>
  </svg>
);

function App() {
  const [role, setRole] = useState('Student');

  return (
    <div className="flex min-h-screen bg-white">
      {/* Left Panel */}
      <div className="w-full md:w-[450px] lg:w-[500px] flex flex-col justify-center px-8 md:px-16 py-12">
        <div className="w-full max-w-[360px] mx-auto">
          {/* Logo */}
          <div className="flex items-center mb-16 text-xl font-bold tracking-tight text-gray-900">
            <LogoIcon />
            Skillnest
          </div>

          {/* Heading */}
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back</h1>
          <p className="text-gray-500 mb-8 max-w-[300px]">Enter your details to access your portal.</p>

          {/* Form */}
          <form className="space-y-6">
            
            {/* Role Toggle */}
            <div className="space-y-3">
              <label className="text-sm font-medium text-gray-700">I am logging in as a...</label>
              <div className="flex bg-gray-50 p-1 rounded-xl">
                <button
                  type="button"
                  onClick={() => setRole('Student')}
                  className={`flex-1 py-3 text-sm font-semibold rounded-lg transition-colors ${
                    role === 'Student' ? 'bg-white text-blue-600 shadow-sm border border-gray-100' : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Student
                </button>
                <button
                  type="button"
                  onClick={() => setRole('Company')}
                  className={`flex-1 py-3 text-sm font-semibold rounded-lg transition-colors ${
                    role === 'Company' ? 'bg-white text-blue-600 shadow-sm border border-gray-100' : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Company
                </button>
              </div>
            </div>

            {/* Email Field */}
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-gray-700">Email ID</label>
              <div className="relative">
                <MailIcon />
                <input
                  type="email"
                  placeholder="name@university.edu"
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-transparent rounded-xl focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all placeholder-gray-400"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-gray-700">Password</label>
                <a href="#" className="text-sm font-semibold text-blue-600 hover:text-blue-700">Forgot password?</a>
              </div>
              <div className="relative">
                <LockIcon />
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-transparent rounded-xl focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all placeholder-gray-400 text-lg tracking-wider"
                />
              </div>
            </div>

            {/* Google Login */}
            <button
              type="button"
              className="w-full flex items-center justify-center py-3 px-4 border border-gray-200 rounded-xl text-sm font-semibold text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-100 transition-all shadow-sm"
            >
              <GoogleIcon />
              Login with Google
            </button>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3.5 px-4 bg-[#0F62FE] hover:bg-blue-700 text-white font-semibold rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all shadow-md flex items-center justify-center gap-2"
            >
              Login to Portal
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
          </form>

          {/* Footer Link */}
          <p className="text-center text-sm text-gray-500 mt-8">
            Don't have an account? <a href="#" className="font-semibold text-blue-600 hover:text-blue-700">Apply now</a>
          </p>
        </div>
      </div>

      {/* Right Panel (Hidden on Mobile) */}
      <div className="hidden md:flex flex-1 relative bg-gradient-to-br from-blue-50 to-blue-100 overflow-hidden items-center justify-center">
        
        {/* Decorative Blurred Background Vector/Image Simulation */}
        <div className="absolute inset-0 z-0">
           {/* Abstract representations of the blurred office background */}
           <div className="absolute top-20 left-10 w-[800px] h-[30px] bg-white opacity-40 transform -skew-y-12 backdrop-blur-xl blur-sm"></div>
           <div className="absolute top-40 left-20 w-[900px] h-[40px] bg-white opacity-30 transform -skew-y-12 blur-md"></div>
           
           <div className="absolute bottom-0 left-0 right-0 top-1/2 bg-gradient-to-t from-gray-100/40 to-transparent"></div>
           <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white/20 to-transparent"></div>
           
           {/* Grid/window lines simulation */}
           <div className="absolute right-20 top-20 bottom-20 w-[300px] opacity-10 flex flex-col gap-4">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="flex-1 border border-black/20 transform -skew-y-12"></div>
              ))}
           </div>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 w-full max-w-[500px] px-8">
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-10 shadow-2xl shadow-blue-900/5">
            <QuoteIcon />
            <h2 className="text-2xl lg:text-3xl font-medium text-gray-900 leading-snug mb-8">
              "Don't compare yourself with anyone in this world. If you do so, you are insulting yourself."
            </h2>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-200 rounded-xl flex items-center justify-center overflow-hidden">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-500 mt-2">
                  <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <p className="font-bold text-gray-900">Bill gates</p>
                <p className="text-sm text-gray-500">Co-founder of Microsoft and philanthropist</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
