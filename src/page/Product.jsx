import React, { useState } from 'react'
import Card from '../component/product/Card'
import { motion , AnimatePresence } from 'framer-motion'
const Product = () => {
    const [item , setItem] = useState([
        {
            id : 1,
            name : 'Summer caring box by curology',
            title : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, quaerat. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi quia ipsa reprehenderit tempore fugit repellat.',
            evaluation : 4,
            price : 255,
        },
        {   id:2,
            name : 'Summer caring box by curology',
            title : ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, quaerat. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi quia ipsa reprehenderit tempore fugit repellat.',
            evaluation : 5,
            price : 255,
        }
    ])
    const [display , setDisplay] = useState(1)
  return (
    <section>
        <AnimatePresence>
      {display === 1 ? (
        <motion.div key="product1">
          <Card item={item[0]} setDisplay={setDisplay} />
        </motion.div>
      ) : (
        <motion.div key="product2">
          <Card item={item[1]} setDisplay={setDisplay} />
        </motion.div>
      )}
    </AnimatePresence>
    </section>
  )
}

export default Product

