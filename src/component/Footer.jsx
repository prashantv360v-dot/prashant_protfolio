import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gray-800 flex flex-col sm:flex-row items-center justify-around sm:justify-around text-white p-4 text-center'>

    <p>© 2026 Prashant </p>
      <div className="flex  md:flex-row gap-4 md:gap-8 items-center justify-center cursor-pointer">
        <div className="flex gap-2 items-center justify-center  ">
                     <img src='https://cdn-icons-png.flaticon.com/512/25/25231.png' alt='github' className=' flex justify-center items-center flex-wrap w-6 h-6' />
          <a href="https://github.com/prashantv360v-dot" target="_blank" className="text-blue-400 hover:underline">
        GitHub.com
      </a>
      </div>
     <div className="flex gap-2 items-center justify-center  ">
      <img 
      className='flex justify-center items-center flex-wrap w-6 h-6'
       src="https://thumb.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/3840px-LinkedIn_icon.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail"></img>
       <a href="https://www.linkedin.com/in/prashant-vishwakarma-072b423a5/" target="_blank" className="text-blue-400 hover:underline">
        LinkedIn
      </a>
     </div>
      </div>
    </div>
  )
}

export default Footer