// import React from 'react'
// import { Swiper, SwiperSlide } from 'swiper/react'
// import { Autoplay, Navigation, Pagination, A11y } from 'swiper/modules'

// import 'swiper/css'
// import 'swiper/css/navigation'
// import 'swiper/css/pagination'

// const Swipper = () => {
//   return (
//     <Swiper
//       modules={[Autoplay, Navigation, Pagination, A11y]}
//       slidesPerView={3}
//       spaceBetween={30}
//       navigation
//       pagination={{ clickable: true }}
//       autoplay={{
//         delay: 15000,
//         disableOnInteraction: false,
//       }}
//       className="w-full h-[400px]"
//     >
//       <SwiperSlide>
//         <img
//           src="/images/Slide1.jpg"
//           className="w-full h-full object-cover rounded-lg"
//         />
//       </SwiperSlide>

//       <SwiperSlide>
//         <img
//           src="/images/Slide2.jpg"
//           className="w-full h-full object-cover rounded-lg"
//         />
//       </SwiperSlide>

//       <SwiperSlide>
//         <img
//           src="/images/Slide8.jpg"
//           className="w-full h-full object-cover rounded-lg"
//         />
//       </SwiperSlide>
//        <SwiperSlide>
//         <img
//           src="/images/Slide3.jpg"
//           className="w-full h-full object-cover rounded-lg"
//         />
//       </SwiperSlide>
      
//       <SwiperSlide>
//         <img
//           src="/images/Slide7.jpg"
//            className="w-full h-full object-cover rounded-lg"
//         />
//        </SwiperSlide>
//      </Swiper>
//   )
//  }

// export default Swipper

// import React from "react"
// import { Swiper, SwiperSlide } from "swiper/react"
// import { Autoplay, Navigation, Pagination, A11y } from "swiper/modules"

// import "swiper/css"
// import "swiper/css/navigation"
// import "swiper/css/pagination"

// const Swipper = () => {
//   return (
//     <Swiper
//       modules={[Autoplay, Navigation, Pagination, A11y]}
//       slidesPerView={1}
//       spaceBetween={0}
//       navigation
//       loop={true}
//       pagination={{ clickable: true }}
//       autoplay={{
//         delay: 5000,
//         disableOnInteraction: false,
//       }}

//       // responsive height for mobile, laptop, desktop
//       className="w-full h-[35vh] sm:h-[40vh] md:h-[50vh] lg:h-[60vh]  xl:h-[65vh]"
//     >
//       <SwiperSlide>
//         <img
//           src="/images/set2.jpg"
//           className="w-full h-full object-cover"
//           alt="set2"
//         />
//       </SwiperSlide>

//       <SwiperSlide>
//         <img
//           src="/images/set.jpg"
//           className="w-full h-full object-cover"
//           alt="set"
//         />
//       </SwiperSlide>

//       <SwiperSlide>
//         <img
//           src="/images/setchair.jpg"
//           className="w-full h-full object-cover"
//           alt="setchair"
//         />
//       </SwiperSlide>

//       <SwiperSlide>
//         <img
//           src="/images/setchair2.jpg"
//           className="w-full h-full object-cover"
//           alt="setchair2"
//         />
//       </SwiperSlide>

//       <SwiperSlide>
//         <img
//           src="/images/set.jpg"
//           className="w-full h-full object-cover"
//           alt="slide7"
//         />
//       </SwiperSlide>
//     </Swiper>
//   )
// }

// export default Swipper

import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation, Pagination, A11y } from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

const Swipper = () => {
  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination, A11y]}
      slidesPerView={2.5}
      spaceBetween={18}
      loop={true}
      navigation
      pagination={{ clickable: true }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      keyboard={{ enabled: true }}
      className="w-full h-[35vh] sm:h-[40vh] md:h-[50vh] lg:h-[60vh] xl:h-[65vh]"
    >
      <SwiperSlide className="h-full">
        <div className="w-full h-full">
          <img
            src="/images/set2.jpg"
            className="w-full h-full object-cover"
          />
        </div>
      </SwiperSlide>

      <SwiperSlide className="h-full">
        <div className="w-full h-full">
          <img
            src="/images/set.jpg"
            className="w-full h-full object-cover"
          />
        </div>
      </SwiperSlide>

      <SwiperSlide className="h-full">
        <div className="w-full h-full">
          <img
            src="/images/setchair.jpg"
            className="w-full h-full object-cover"
          />
        </div>
      </SwiperSlide>

      <SwiperSlide className="h-full">
        <div className="w-full h-full">
          <img
            src="/images/setchair2.jpg"
            className="w-full h-full object-cover"
          />
        </div>
      </SwiperSlide>

      <SwiperSlide className="h-full">
        <div className="w-full h-full">
          <img
            src="/images/set.jpg"
            className="w-full h-full object-cover"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  )
}

export default Swipper