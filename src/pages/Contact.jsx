import React, { useState } from 'react'

const Content = () => {
  const [title, setTitle] = useState('')
  const [Email, setEmail] = useState('')
  const [Contact, setContact] = useState('')
  const [Subject, setSubject] = useState('')
  const [Massege, setMassege] = useState('')

  const submitHandler =(e) => {
    e.preventDefault()


    setTitle('')
    setEmail('')
    setContact('')
    setSubject('')
    setMassege('')
    
  }
  const [reset, setReset] = useState('')
 
 

  return (
    <div className='flex flex-col h-[calc(100vh-80px)] min-h-137.5 relative w-full rounded-xl overflow-hidden shadow-2xl items-center justify-center gap-4 '>
         <img
      className='absolute inset-0 w-full h-full object-cover object-center'
      src='https://static.vecteezy.com/system/resources/thumbnails/020/804/109/small/communication-and-technology-concept-hand-putting-wooden-block-cube-symbol-telephone-email-address-website-page-contact-us-or-e-mail-marketing-contact-us-in-customer-support-concept-photo.jpg'>
        
      </img>
      <h1 className='relative font-bold text-2xl md:text-3xl text-center underline mt-8 '>Contect page</h1>
      <div className="relative z-10 w-full h-full flex items-center justify-center  sm:p-8 md:pr-16">
    
        <form 
        onSubmit = {(e) =>{
          submitHandler(e)
        }}
         className=" p-6 sm:p-8 rounded-2xl shadow-2xl w-full max-w-md space-y-3 border border-white/20 ">

        <div className="flex flex-col items-start">
          <label className='block text-xl font-semibold text-black'>FullName :</label>
           <input 
           value={title}
           onChange={(e) => setTitle(e.target.value)}
            type="text" placeholder="FullName" className="border-2 border-black md:w-100 w-80 p-2 rounded" />
          <label className='block text-xl font-semibold text-black'>Email :</label>
         <input  
         value={Email}
         onChange={(e) => setEmail(e.target.value)}
          type="email" placeholder="Email.com" className="border-2 border-black w-80 md:w-100 p-2 rounded" />
         <label className='block text-xl font-semibold text-black'>Contact No. :</label>
          <input 
          value={Contact}
          onChange={(e) => setContact(e.target.value)}
          className='border-2 border-black w-80 md:w-100 p-2 rounded '
          type="number" placeholder='Enter your number'/>
          <label className='block text-xl font-semibold text-black'>Subject :</label>
          <input
          value={Subject}
          onChange={(e) => setSubject(e.target.value)}
          className='border-2 border-black w-80 md:w-100 p-2 rounded'
          type='text' placeholder='Your Subject' />
        <label className='block text-xl font-semibold text-black'>Massege :</label>
          <textarea
          value={Massege}
          onChange={(e) => setMassege(e.target.value)}
          placeholder="Send Message" className="border-2 border-black w-80 md:w-100 p-2 rounded"></textarea>
         <div className=" flex items-center justify-center gap-5 ml-40 mt-8">
          <button type="submit" className="btn bg-amber-400 text-black mt-2  p-2 active:scale-95  rounded">
            Submit</button>
        
         </div>
        </div>
         
        </form>
      </div>
    </div>
  )
}

export default Content