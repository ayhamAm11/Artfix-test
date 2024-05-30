import React from 'react'
import {motion} from 'framer-motion'
const Hero = () => {
  return (
    <section className='p-6 sm:p-12 grid grid-cols-1 sm:grid-cols-2 gap-5 relative '>
        <div className=' items-center justify-center  hidden sm:flex'>
         
            <div className='w-[420px] h-[520px] border flex items-center justify-center bg-move '>
              
                <span>img</span>
            </div>
        </div>
        <div>
          <div className='flex flex-col items-start gap-5 p-10'>
            <motion.h1 
            className='text-8xl text-gold tracking-wide '
            initial={{y: 200 , opacity : 0}}
            animate={{y: 0 , opacity : 1}}
            transition={{duration: 0.3}}
            >
              Take <br/> care of <br />  your skin
            </motion.h1>
            <motion.p 
            initial={{y: 200 , opacity : 0}}
            animate={{y: 0 , opacity : 1}}
            transition={{duration: 0.5}}
            className='font-bold'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi asperiores corporis iure, doloribus, quasi culpa earum impedit </motion.p>
            <motion.button
            initial={{y: 200 , opacity : 0}}
            animate={{y: 0 , opacity : 1}}
            transition={{duration: 0.7}}
             className='rounded-full px-4 py-3 bg-move text-2xl text-white'>shop now </motion.button>
          </div>
        </div>
        <div className='flex sm:hidden items-center justify-center relative'>
            <div className='w-[420px] h-[520px] border flex items-center justify-center bg-move absolute '>
                <span>img</span>
            </div>
        </div>
        <motion.i 
        initial={{y : 200 , opacity:0 , scale: 0.4}}
        animate={{y : 0 , opacity:1 , scale: 1}}
        transition={{duration: 0.6}}
        className='text-3xl font-semibold text-gold absolute right-5 sm:right-10 bottom-10 hidden sm:block' style={{fontFamily: ''}} >
            scroll Doun
        </motion.i>
    </section>
  )
}

export default Hero