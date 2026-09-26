import React from 'react'
import { useState } from 'react'


const Home = () => {

   
  return (
    <div className='relative w-full overflow-hidden min-h-screen flex flex-col justify-between mt-10 ' >
     <img
     className='absolute inset-0 w-full h-full object-cover object-center'
     src='https://images.unsplash.com/photo-1629129281524-b1e1a1a099d2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></img>
     <main className ='relative z-10 w-full  grow flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 px-4 py-8'>
        <div className="flex justify-center items-center">
           <div className="h-60 w-60 sm:h-80 sm:w-80  mt-8 ml-8 p-4 flex justify-center items-center overflow-hidden shadow-lg shrink-0 rounded-full bg-gray-500">
            <div className="h-50 w-50 sm:h-60 sm:w-60 rounded-full overflow-hidden border-4 border-white shadow-lg shrink-0">
               <img
               className='w-full h-full object-cover object-top'
               src='/public/prash.jpeg'/>
            </div>
        </div>
     </div>
        <div className=" flex flex-col md:flex-col gap-5 md:justify-center md:items-center  space-between p-20">
            <h1 className="text-4xl font-bold">Hello, I am Prashant</h1>
            <p className="text-2xl font-semibold md:text-3xl">I am a Programmer/Developer</p>
             <div className=" flex flex-col sm:flex-row  gap-5 md:justify-center md:items-center md:space-between ">
            <button onClick={() => window.location.href = '#projects'}
            className="btn bg-blue-500 active:scale-95 text-white px-4 py-2 rounded">
               Projects
               </button>
            <button onClick={() => window.location.href = '#contact'}
             className="btn bg-blue-500 active:scale-95 text-white px-4 py-2 rounded">
               Contact Me
               </button>
        </div>
        </div>
     </main>
     <hr className='w-100% '></hr>
      
    </div>
  )
}

export default Home