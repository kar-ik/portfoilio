import React from 'react'
import { EDUCATION } from '../constants'
import { motion } from 'framer-motion'
function Eduction ( ) {
  return (
    <section className='pt-20' id="education">
    <motion.h2
    initial={{opacity:0,y:-20}}
    whileInView={{opacity:1,y:0}}
    transition={{duration:1}}
    className='text-center text-4xl font-semibold tracking-tighter'>
      Education
    </motion.h2>
    <div className='space-y-8 p-10'>
      {EDUCATION.map((edu,index)=>(
        <motion.div
        initial={{opacity:0 , x:-20}}
        whileInView={{opacity:1 , x:0}}
        transition={{duration:1,delay:index*0.2}}
         key={index} className='rounded-xl border border-stone-50/30
        bg-white/10 p-4'>
          <h3 className='text-2xl font-semibold'>
            {edu.title}
          </h3>
          <p className='text-xl '>{edu.institution}</p>
          <p className='text-sm text-stone-300 '>{edu.duration}</p>
          <p className='mt-2  text-base '>{edu.description}</p>
          </motion.div>
      ))}
    </div>
   </section>
  )
}

export default Eduction 
