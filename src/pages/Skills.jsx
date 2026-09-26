import React from 'react'

const Skills = () => {

const skillList = [
  {
    name: 'HTML5',
    src:'https://images.seeklogo.com/logo-png/18/1/html5-without-wordmark-color-logo-png_seeklogo-184157.png', 
  },
  {
    name: 'CSS3',
    src: 'https://images.seeklogo.com/logo-png/42/2/css-3-logo-png_seeklogo-426083.png',
  },
  {
    name:'JavaScript',
    src:'https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png',
  },
  {
    name:'React',
    src:'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/960px-React-icon.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail&_=20220125121207',
  },
  {
    name:'Tailwind CSS',
    src:'https://images.seeklogo.com/logo-png/35/1/tailwind-css-logo-png_seeklogo-354675.png',
  },
  {
    name:'GitHub',
    src:'https://cdn-icons-png.flaticon.com/512/25/25231.png'
  },
  {
    name:'Node js',
    src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5Os0zJwzhfavrr_gjKhCyREZswfpVEvlCUzvE0tZFjBg1FjMs6iUhxhk&s=10',
  },
  {
    name:'Python',
    src:'https://www.citypng.com/public/uploads/preview/hd-python-logo-symbol-transparent-png-735811696257415dbkifcuokn.png',
  },
  {
    name:'Next.js',
    src:'https://images.ctfassets.net/23aumh6u8s0i/c04wENP3FnbevwdWzrePs/1e2739fa6d0aa5192cf89599e009da4e/nextjs',
  },
]

  return (
    <div className='relative flex flex-col  min-h-screen w-full items-center justify-center p-6 gap-8'>
      <img 
      className=' absolute inset-0 w-full h-full object-cover object-center'
      src='https://images.unsplash.com/photo-1567374783966-0991fdee91a7?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
      alt='background img'
      />
   <div className="relative text-center z-10">
     <h1 className=' font-bold text-white text-2xl md:text-3xl text-center underline mb-4 '>My <span className='text-red-500'>Skills</span></h1>
    <p className='text-white text-2xl'>Writing code using languages : HTML, CSS, Js, Python and java</p>
   </div>

    <div className="relative w-full max-w-4xl overflow-hidden rounded-2xl border border-white/10 p-4 shadow-2xl backdrop-blur-md">
      <div className="animate-scroll flex items-center gap-6 w-max">
        {skillList.map((elem, index) =>(
          <div
          key={index}
          className="flex flex-col h-30 w-30 sm:h-44 sm:w-44  shrink-0 items-center justify-center rounded-xl bg-white p-4 mt-10 shadow-md">
            <img className='h-full w-full object-contain'
             name={elem.name}
            src={elem.src}
            />
            <p className='text-gray-800 font-semibold text-sm sm:text-base text-center'>
              {elem.name}
            </p>
          </div>
        ))}
      </div>
    </div>

    </div>
  )
}

export default Skills