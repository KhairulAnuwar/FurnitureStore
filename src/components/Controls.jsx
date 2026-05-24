import React from 'react'

const Controls = ({toggleZoom, frameZoom }) => {
  return (
     <div className="absolute top-3 right-3 space-x-1">
    
        <button className="text-2xl text-blue-400 cursor- pointer" onClick={toggleZoom}> {/*onClick calls the toggleZoom function passed as a prop */}
            <i className={frameZoom ? 'bx  bx-search-big-minus' : 'bx bx-search-big-plus'}></i>  {/*If frameZoom is true, show zoom-out icon, else show zoom-in icon */}
        </button>
        <button className="text-2xl text-blue-400 cursor-pointer">
        <i className='bx bx-x-circle' ></i>
        </button>

    </div>
  )
}

export default Controls
