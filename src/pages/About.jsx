import React from 'react'

const About = () => {
  return (
    <div className='relative overflow-hidden flex flex-col  min-h-screen w-full items-center justify-center text-black p-6 gap-8'>
      <img src='https://static.vecteezy.com/system/resources/thumbnails/070/488/709/small/two-sunflowers-with-green-leaves-on-dark-background-photo.jpg'
      className='absolute inset-0 w-full h-full object-cover object-center'
      ></img>
        <h1 className=' relative font-bold text-2xl md:text-3xl text-center underline mb-4 '>
         <span className='text-red-500' >About</span>  Me</h1>
      
         <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 max-w-4xl w-full">
            <div className="flex items-center justify-center h-70 w-70 sm:h-80 sm:w-80 overflow-hidden rounded-full bg-gray-500 shrink-0">
      <div className="h-60 w-60 sm:h-70 sm:w-70 rounded-full overflow-hidden border-4 border-white shadow-lg shrink-0">

         <img
               className='w-full h-full object-cover object-top'
               src='/public/prash.jpeg'/>
      </div>
      </div>
      
    
        <div className="text-center md:text-left max-w-md">
          <p className='text-3xl font-semibold '><b>Hello</b> I'm <span className='font-bold text-red-500'>Prashant Vishwakarma, </span> a Full-Stack wed Developer based in jagdishpur sohauli Azamgarh.<br/>
           I specialize in buliding fast, scalable and visually responsive wed applications that bridge the gap between robust backend logic and elegant fronted design</p>
        </div>
      </div>
     </div>
     
    
  )
}

export default About