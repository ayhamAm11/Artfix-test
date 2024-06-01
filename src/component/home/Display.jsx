import React from 'react'
import { MdAdd } from "react-icons/md";
import {img} from "../../content/img"
const Display = () => {
  return (
    <div>
        <div className='grid grid-cols-2 sm:grid-cols-3 grid-rows-3  sm:grid-rows-2'>
            <div className='h-[300px] flex-center bg-move overflow-hidden  '>
                <img src={img.display1} alt="to display" className='w-full '/>
            </div>
            <div className='h-[300px] flex-center  bg-slate-500 px-3 sm:px-12 md:p-15 lg:p-18 flex-col gap-3'>
                <div>
                    <p className='text-center text-ofwhite'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi omnis, aspernatur obcaecati dignissimos ipsam ab aliquam fugiat doloribus veritatis iure, laudantium exercitationem corrupti sunt autem cupiditate temporibus a nam quia!</p>
                </div>
                <button className='px-3 py-2 rounded-sm border flex items-center text-white'>
                    <MdAdd className='mr-2' />
                    info
                </button>
            </div>
            <div className=' row-span-2 overflow-hidden   flex-center bg-gold'>
            <img src={img.display2} className=" h-full w-full object-cover" />
            </div>
            <div className='h-[300px] flex-center bg-slate-950 px-3 sm:px-12 md:p-15 lg:p-18 flex-col gap-3 '>
                <div>
                    <p className='text-center text-ofwhite'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi omnis, aspernatur obcaecati dignissimos ipsam ab aliquam fugiat doloribus veritatis iure, laudantium exercitationem corrupti sunt autem cupiditate temporibus a nam quia!</p>
                </div>
                <button className='px-3 py-2 rounded-sm border flex items-center text-white '>
                    <MdAdd className='mr-2' />
                    info
                </button>
            </div>
            <div className='h-[300px] flex-center  bg-move '>
            <img src={img.display3} alt="display" className='h-full w-full object-cover'/>
            </div>
        </div>
    </div>
  )
}

export default Display