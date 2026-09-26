import React from 'react'
import { Link } from 'react-router-dom'
const NotFound = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen w-full p-4 sm:p-6 bg-gray-900 text-white gap-6'>
     <div className="realative w-full max-w-lg sm:max-w-xl md:max-w-2xl h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center bg-gray-800 mt-25 ">
      <img 
      className=' w-full h-full object-cover object-center'
      src='https://webartdevelopers.com/blog/wp-content/uploads/2021/05/404-error-page-svg-animation.gif' 
      alt='404 Page Not Found'
      />
     </div>
       
       <div className="text-center space-y-3">
        <h1
        className='text-2xl sm:text-3xl font-bold'>Oops! Page Not Found</h1>
        <p className='text-gray-400 text-sm sm:text-base'>The page you are looking for doesn't exist or has been moved.</p>
        <div className="pt-2">
          <Link to="/"
          className='inline-block bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-semibold px-6 py-2.5 rounded-lg transition-all shadow-md'>
            Go Back Home
          </Link>
        </div>
       </div>
    </div>
  )
}

export default NotFound