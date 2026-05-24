const listItems=['Home', 'Products', 'About', 'Contact'];




const NavBar = () => {
  return (
    <div className='fixed bg-amber-950 flex justify-between
    items-center gap-16 py-3 px-10
    left-1/2 translate-x-[-50%] top-[20px] 
    rounded-full backdrop-blur-md bg-opacity-60
    text-white shadow-lg z-10 ' >
      
        <ul className='flex gap-8 text-xl'>
          {listItems.map((item, index) => (
            <li
              key={index}
              className="relative group cursor-pointer" >
              {item}

                <span className='absolute left-0 bottom-[-5px]
                w-0 h-2 rounded-xl bg-gradient-to-r from-red-900 to-teal-400
                transition-all duration-300 group-hover:w-full'>
                </span>
             </li>   



            ))
            }
        </ul>

        
        <button className='bg-gradient-to-r from-rose-800 to-teal-800 text-white px-6 py-2 rounded-full'>
            Sign In
        </button>
    </div>
  )
}

export default NavBar
