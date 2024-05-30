import React from 'react'

const Img = () => {
  return (
    <div className="relative flex-center w-full h-full">
    <div className="h-[300px] w-[200px] bg-move absolute z-10 transform -translate-y-[20%] -translate-x-[20%]"></div>
    <div className="h-[300px] w-[200px] bg-gold absolute z-20 transform translate-y-[-10%] translate-x-[-10%]"></div>
  </div>

  )
}

export default Img
{/* <div className='relative h-[100%] w-full p-10 '>
      <div className='h-[300px] w-[200px] bg-move absolute left-[100px] top-0 z-10 transform translate-y-1/2  translate-x-1/2 '></div>
      <div className='h-[300px] w-[200px] bg-gold absolute z-20  transform translate-y-1/2  translate-x-1/2'></div>
    </div> */}