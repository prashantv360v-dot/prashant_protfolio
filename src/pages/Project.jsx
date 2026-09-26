import React from 'react'

const Project = () => {
  return (
    <div className='relative overflow-hidden min-h-screen w-full p-6 md:p-12 flex flex-col items-center justify-center gap-10'>
      <img
       className='absolute inset-0 w-full h-full object-cover object-center'
      src='https://images.unsplash.com/photo-1732504037102-7b3f18aad34a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
      {/* Title */}
      <h1 className='relative text-3xl md:text-4xl font-bold underline text-center text-gray-800 '>My <span className='text-red-500'>Project</span></h1>

      {/* Project List Container */}
      <div className="relative flex flex-col gap-10 max-w-5xl w-full">

        {/* Project 1 : Gallery Project  */}
        <div className="project relative flex flex-col md:flex-row items-center gap-6 bg-white/50 p-6 rounded-xl shadow-md ">
       <div className="w-full md:w-1/3 h-48 bg-gray-200 rounded-lg overflow-hidden shrink-0">
         <img 
        className='h-full w-full object-cover '
        src='/public/Gallery_project.png' alt='Gallery project img' />
      </div>
    
        {/* Project Details */}
       <div className="w-full md:w-2/3 space-y-2 text-center md:text-left">
        <h2 className='text-3xl font-semibold underline text-black'>Gallery Project</h2>
       <p className='text-black text-xl leading-relaxed'>
        This project are use to API. And every images are clickble, you click any image then view full information to the images <br />
        It was responsive for every system/devise.
        </p>
       </div>
       </div>
       
      {/* Project 2 : Short Notes Project */}
      <div className="project flex flex-col md:flex-row items-center gap-6 bg-white/50 p-6 rounded-xl shadow-md ">
        <div className="w-full md:w-1/3  h-48 bg-gray-200 rounded-lg overflow-hidden shrink-0">
        <img
        className='w-full h-full object-cover'
        src='/public/Notes_app.png' alt='Notes project img' />
        </div>
         {/* Project Details */}
         <div className="w-full md:w-2/3 space-y-2 text-center md:text-left"> 
         <h2 className='text-3xl font-semibold underline text-black'>Short Notes project </h2>
       <p className='text-black text-xl leading-relaxed'>This is a short notes project. <br/> It was a responsive to every devise.</p>
       </div>
      </div>
      {/* Project 3 : Tic Toc Game  */}
        <div className="project flex flex-col md:flex-row items-center gap-6 bg-white/50 p-6 rounded-xl shadow-md ">
       <div className="w-full md:w-1/3 h-48 bg-gray-200 rounded-lg overflow-hidden shrink-0">
         <img 
        className='h-full w-full object-cover '
        src='/public/Tic Tok Game.png' alt='Tic Tok Game img' />
      </div>
    
        {/* Project Details */}
       <div className="w-full md:w-2/3 space-y-2 text-center md:text-left">
        <h2 className='text-3xl font-semibold underline text-black'>Tic Tok Game</h2>
       <p className='text-black text-xl leading-relaxed'>
        This is a simple game project and to play our friends. <br />
        It was a create a useing a HTML, CSS and JAVASCRIPT.
        </p>
       </div>
       </div>
       {/* Project 4 : Rock Paper Sissocer  */}
        <div className="project flex flex-col md:flex-row items-center gap-6 bg-white/50 p-6 rounded-xl shadow-md ">
       <div className="w-full md:w-1/3 h-48 bg-gray-200 rounded-lg overflow-hidden shrink-0">
         <img 
        className='h-full w-full object-cover '
        src='/public/Rock paper sissocer.png' alt='Rock Paper Sissors img' />
      </div>
    
        {/* Project Details */}
       <div className="w-full md:w-2/3 space-y-2 text-center md:text-left">
        <h2 className='text-3xl font-semibold underline text-black'>Rock Paper Sissocer </h2>
       <p className='text-black text-xl leading-relaxed'>
       It was a game to play our computer <br />
       It is a create useing HTML, CSS and JAVASCRIPT.
        </p>
       </div>
       </div>
      </div>
      </div>
   
  )
}

export default Project