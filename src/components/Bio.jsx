import React from 'react'
import { motion } from 'framer-motion'
import {BIO} from "../constants"
function Bio() {
  return (
    <section className='pt-20' id="bio">
    <motion.h2
    initial={{opacity:0 , y:-20}}
    whileInView={{opacity:1,y:0}}
    transition={{duration:1}} className='text-center text-4xl font-semibold tracking-tighter'>
   BIO
    </motion.h2>
    <motion.div
    initial={{opacity:0 }}
    whileInView={{opacity:1}}
    transition={{duration:0.8,delay:0.2}}
    className='space-y-8 p-10'>
      {BIO.map((bio,index)=>(
        <div key={index} className='rounded-xl border border-stone-50/30
        bg-white/10 p-4'>
          
          <motion.p
          initial={{opacity:0 , x:-20}}
          whileInView={{opacity:1,x:0}}
          transition={{duration:0.8 , delay:index*0.5}}
          
          className='text-xl '>{bio}</motion.p>
        
          </div>
      ))}
    </motion.div>
    </section>
  )
}

export default Bio


