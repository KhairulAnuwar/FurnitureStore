import { useState } from "react";
import logo from "../assets/accelerate-svgrepo-com.svg";

const listItems = ["Home", "Products", "About", "Contact"];

export default function Navbar2() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full h-16 px-4 sm:px-8 flex items-center bg-white shadow-md">
      
      {/* LEFT - LOGO */}
      <div className="flex items-center gap-2">
        <img src={logo} alt="Logo" className="w-8 h-8" />
        <span className="font-bold text-lg sm:text-xl">MyBrand</span>
      </div>

      {/* RIGHT SIDE (MENU + LOGIN) */}
      <div className="ml-auto flex items-center gap-6">

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-8">
          {listItems.map((item, index) => (
            <li
              key={index}
              className="relative cursor-pointer text-gray-700 font-medium
                         after:absolute after:left-0 after:-bottom-1
                         after:w-0 after:h-[3px]
                         after:bg-gradient-to-r after:from-indigo-500 after:to-pink-500
                         after:rounded-full
                         after:transition-all after:duration-300
                         hover:after:w-full hover:text-black"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* LOGIN BUTTON */}
        <button
          className="hidden sm:block px-5 py-2 rounded-full font-semibold text-white
                     bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500
                     hover:scale-105 transition shadow-lg"
        >
          Login
        </button>

        {/* HAMBURGER (MOBILE) */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden">
          <ul className="flex flex-col items-center gap-6 py-6">
            {listItems.map((item, index) => (
              <li key={index} className="font-medium text-gray-700">
                {item}
              </li>
            ))}
            <button
              className="px-6 py-2 rounded-full font-semibold text-white
                         bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"
            >
              Login
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
}



// import { useState } from "react";
// import logo from "../assets/accelerate-svgrepo-com.svg";

// const listItems = ["Home", "Products", "About", "Contact"];

// export default function Navbar2() {
//   const [open, setOpen] = useState(false);

//   return (
//     <nav className="w-full h-16 px-4 sm:px-8 flex items-center justify-between bg-white shadow-md">
      
//       {/* LEFT - LOGO */}
//       <div className="flex items-center gap-2">
//         <img src={logo} alt="Logo" className="w-8 h-8" />
//         <span className="font-bold text-lg sm:text-xl">MyBrand</span>
//       </div>

//       {/* DESKTOP MENU */}
//       <ul className="hidden md:flex items-center gap-8">
//         {listItems.map((item, index) => (
//           <li
//             key={index}
//             className="relative cursor-pointer text-gray-700 font-medium
//                        after:absolute after:left-0 after:-bottom-1
//                        after:w-0 after:h-[3px]
//                        after:bg-gradient-to-r after:from-indigo-500 after:to-pink-500
//                        after:rounded-full after:transition-all after:duration-300
//                        hover:after:w-full hover:text-black"
//           >
//             {item}
//           </li>
//         ))}
//       </ul>

//       {/* RIGHT SIDE */}
//       <div className="flex items-center gap-4">
//         <button
//           className="hidden sm:block px-5 py-2 rounded-full font-semibold text-white
//                      bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500
//                      hover:scale-105 transition shadow-lg"
//         >
//           Login
//         </button>

//         {/* HAMBURGER (Mobile) */}
//         <button
//           className="md:hidden text-2xl"
//           onClick={() => setOpen(!open)}
//         >
//           ☰
//         </button>
//       </div>

//       {/* MOBILE MENU */}
//       {open && (
//         <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden">
//           <ul className="flex flex-col items-center gap-6 py-6">
//             {listItems.map((item, index) => (
//               <li key={index} className="font-medium text-gray-700">
//                 {item}
//               </li>
//             ))}

//             <button
//               className="px-6 py-2 rounded-full font-semibold text-white
//                          bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"
//             >
//               Login
//             </button>
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// }







// import logo from "../assets/accelerate-svgrepo-com.svg";

// const listItems = ['Home', 'Products', 'About', 'Contact'];

// export default function Navbar2() {
//   return (
//     <nav className="w-full h-16 px-8 flex items-center justify-between bg-white shadow-md">
      
//       {/* LEFT - LOGO */}
//       <div className="flex items-center gap-2">
//         <img src={logo} alt="Logo" className="w-8 h-8" />
//         <span className="font-bold text-xl tracking-wide">MyBrand</span>
//       </div>

//         {/* button at the side  */}

//      <div className="ml-auto flex items-center gap-8">
        
//         <ul className="flex items-center gap-8">
//           {listItems.map((item, index) => (
//             <li
//               key={index}
//               className="relative cursor-pointer text-gray-700 font-medium
//                          after:absolute after:left-0 after:-bottom-1
//                          after:w-0 after:h-[3px] 
//                          after:bg-gradient-to-r after:from-indigo-500 after:to-pink-500
//                          after:rounded-full
//                          after:transition-all after:duration-300
//                          hover:after:w-full hover:text-black"
//             >
//               {item}
//             </li>
//           ))}
//         </ul>
//         </div>
    
    
    
    
    
    
//      <button
//         className="ml-6 px-6 py-2 rounded-full font-semibold text-white
//                    bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500
//                    hover:scale-105 transition-transform duration-300
//                    shadow-lg hover:shadow-xl"
//       >
//         Login
//       </button>

//     </nav>
//   );
// }


