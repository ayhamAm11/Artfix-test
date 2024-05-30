import React, { useEffect } from 'react'
import { navList } from '../content'
import {motion} from 'framer-motion'
import { Link, useFormAction, useHref, useParams } from 'react-router-dom'
const Navbar = () => {
    const list = navList
    const activePage = useHref()
    console.log(activePage)

  return (
    <nav className='p-3 sm:p-6 flex items-center justify-between'>
        <div>
            <h1 className='text-4xl font-bold text-gold cursor-pointer '>logo</h1>
        </div>
        <div>
        <ul className='flex gap-3'>
            {
                list.map((link , index )=>(
                    <>
                        <Link key={index} to={link.id}>
                            <li className={`text-lg font-semibold ${link.id == activePage ? "text-gold":"text-ofblack"}`}>
                                {link.title}
                            </li>
                        </Link>
                    </>
                ))
            }
        </ul>
        </div>
        <div className='flex gap-2'>
            <div className='border p-1 '>
                <i>icon</i>
            </div>
            <div className='border p-1 '>
                <i>icon</i>
            </div>
            <div className='border p-1 '>
                <i>icon</i>
            </div>
        </div>
    </nav>
  )
}

export default Navbar