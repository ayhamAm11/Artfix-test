import React from 'react'
import { motion } from 'framer-motion'
const BayProduct = () => {
  return (
    <div className='min-h-[100vh] flex items-center flex-col gap-5 sm:gap-10  p-6 sm:p-12'>
        <section className='grid gird-cols-2 sm:grid-cols-4 w-full '>
            <motion.div 
            initial={{x:' 100%' }}
            whileInView={{x:0}}
            transition={{duration:0.6 , delay: 0.8 , type:"spring"  , stiffness: 200}}
            className=' h-[350px] flex-center bg-move'>
                img
            </motion.div>
            <motion.div 
            initial={{y:100 , scale:0.6 , opacity:0}}
            whileInView={{y:0 , scale: 1 , opacity:1}}
            transition={{duration:0.4 , delay: 0.6  , type:"spring"  , stiffness: 200}}
            className=' col-span-2 flex items-center gap-3 sm:gap-6 flex-col p-3'>
                <h1 className='text-center text-gold text-5xl '>Bay our Product <br /> Now</h1>
                <motion.p 
                animate={{color: '#000'}}
                transition={{duration:0.4 , delay: 0.6}}
                className='text-center text-ofblack'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit natus ipsa sequi architecto maxime rem, neque quibusdam iste dolor, soluta, commodi laboriosam? Incidunt, tempore quia amet nisi ea architecto harum? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum architecto laudantium explicabo a debitis nobis ipsa, repellendus sit velit, eaque repudiandae vero quam, facilis corporis pariatur. Expedita illo dignissimos neque!
                </motion.p>
                <button className='rounded-2xl px-4 sm:px-6 py-3 border bg-move text-white'>Bay now</button>
            </motion.div>
            <motion.div 
            initial={{x:' -100%' }}
            whileInView={{x:0}}
            transition={{duration:0.6 , delay: 0.8 ,  type:"spring" , stiffness: 200}}
            className=' h-[350px] flex-center bg-move'>
                img
            </motion.div>
        </section>
        <div className=' bg-gold rounded-2xl w-full sm:w-[80%] lg:w-[70%] h-[200px] flex-center shadow-2xl'>
            <h1 className='text-white'>
                img
            </h1>
        </div>
    </div>
  )
}

export default BayProduct