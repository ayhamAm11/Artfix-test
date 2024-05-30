import React from 'react'
import Img from './Img'
import { motion } from 'framer-motion'
const Sectionown = () => {
  return (
    // <section className='flex gap-5 min-h-[70vh]'>
    //     <div className=' w-[50%] p-6 sm:p-12 flex items-end '>
    //         <motion.div 
    //         initial={{scale: 0.6 , x : -400 , opacity :0}}
    //         whileInView={{scale: 1 , x: 0 , opacity: 1}}
    //         transition={{duration: 0.5 , type : "spring"}}
    //         className=''>
    //             <h1 className='text-gold fext-3xl mb-6'>section number 2</h1>
    //             <div className='flex flex-col text-ofblack gap-5'>
    //                 <p className=''>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae accusamus dignissimos provident minus ipsa fuga quod eum sed nostrum! Sint vitae eaque totam quas. Enim nesciunt corrupti eaque deleniti blanditiis.</p>
    //                 <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate a asperiores inventore magni voluptas quas porro perspiciatis autem labore maxime, itaque fugiat, voluptates, exercitationem dolor vero corrupti placeat sit dignissimos?</p>
    //             </div>
    //         </motion.div>
    //     </div>
    //     <motion.div 
    //      initial={{scale: 0.6 , x : 400 , opacity :0}}
    //      whileInView={{scale: 1 , x: 0 , opacity: 1}}
    //      transition={{duration: 0.5 , type : "spring"}}
    //     className='flex-center w-[50%] '>
    //         <Img />
    //     </motion.div>
    // </section>
    <section className='flex gap-5 min-h-[70vh] items-center'>
      <div className='w-[50%] p-6 sm:p-12 flex items-end'>
        <motion.div 
          initial={{ scale: 0.6, x: -400, opacity: 0 }}
          whileInView={{ scale: 1, x: 0, opacity: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
        >
          <h1 className='text-gold text-3xl mb-6'>Section Number 2</h1>
          <div className='flex flex-col text-ofblack gap-5'>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae accusamus dignissimos provident minus ipsa fuga quod eum sed nostrum! Sint vitae eaque totam quas. Enim nesciunt corrupti eaque deleniti blanditiis.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate a asperiores inventore magni voluptas quas porro perspiciatis autem labore maxime, itaque fugiat, voluptates, exercitationem dolor vero corrupti placeat sit dignissimos?</p>
          </div>
        </motion.div>
      </div>
      <motion.div 
        initial={{ scale: 0.6, x: 400, opacity: 0 }}
        whileInView={{ scale: 1, x: 0, opacity: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
        className='flex-center w-[50%]'
      >
        <Img />
      </motion.div>
    </section>
  )
}

export default Sectionown