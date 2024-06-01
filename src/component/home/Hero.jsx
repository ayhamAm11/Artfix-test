import { useEffect, useState } from 'react';
import {img} from '../../content/img'

import { motion } from "framer-motion";

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      console.log(scrollY)
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, [window.scrollY]);

  const y = Math.floor(scrollY * 0.5)

  

  return (
    <section className='p-6 sm:p-12 grid grid-cols-1 sm:grid-cols-2 gap-5 relative'>
      <div className='items-center justify-center hidden sm:flex'>
        <motion.div
          className='border flex items-center justify-center h-[50vh] overflow-hidden'
          
        >
          <div style={{transform : `translateY(${y}px)` , transition : 'all 0.3s'}}>
          <img  src={img.hero} alt="Hero" />
          </div>
        </motion.div>
      </div>
      <div className='z-20'>
        <div className='flex flex-col items-start gap-5 p-10'>
          <motion.h1
            className='text-4xl sm:text-8xl text-gold tracking-wide'
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            Take <br /> care of <br /> your skin
          </motion.h1>
          <motion.p
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className='font-bold text-white sm:text-ofblack'
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi asperiores corporis iure, doloribus, quasi culpa earum impedit.
          </motion.p>
          <motion.button
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className='rounded-full px-4 py-3 bg-move text-2xl text-white'
          >
            Shop Now
          </motion.button>
        </div>
      </div>
      <div className='flex sm:hidden items-center justify-center absolute z-10 h-[450px] overflow-hidden'>
        <div className='border flex items-center justify-center'>
          <img src={img.hero} alt="Hero" />
        </div>
      </div>
      <motion.i
        initial={{ y: 200, opacity: 0, scale: 0.4 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        onClick={()=>{console.log(y)}}
        className='text-3xl font-semibold text-gold absolute right-5 sm:right-10 bottom-10 hidden sm:block'
      >
        Scroll Down
      </motion.i>
    </section>
  );
};

export default HeroSection;
