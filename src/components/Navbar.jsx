import React from 'react'
import { header } from '../assets/images/special'
import {About, Beardle, Contact, Landing, Members} from '.'
import {Link} from "react-router-dom"
import { textVariant } from '../utils/motion'
import {motion} from 'framer-motion'
import { styles } from '../styles'
const Navbar = () => {
  return (
    <>
      <nav className=' '>
      <div className='header-container' to>
    
      <ul className='link-stuff '>
        
      <li className='links '>
            <Link to="/about" className='max-xs:hidden page-link'>
            About
           
            </Link>
           
          </li>
         
        
          
        
          <li className='links'>
            <Link to="/members" className='max-xs:hidden  page-link'>
            Members
            </Link>
          </li>
        <Link to="/" className='mt-5'>
         
            <img src={header} className='header mt-[0px] border-b-2 border-grey'/>
        
        </Link>
        <li className='links '>
            <Link to="/contact" className=' max-xs:hidden page-link'>
              Contact
            </Link>
          </li>
          <li className='links'>
          <Link to="/beardle" className='max-xs:hidden  page-link'>
            Beardle
            </Link>
          </li>
       
        </ul>
        </div>
        <button className='md:hidden p-0 '>
              <img src='' alt='Menu'/>
            </button>
        <div className='line'/>
      
      
        
   
      </nav>
    </>
    
  )
}

export default Navbar