import React, { useState } from 'react'
import emailjs from "@emailjs/browser"
import { FiSend } from 'react-icons/fi';
import toast from 'react-hot-toast/headless';
import { Toaster } from 'react-hot-toast';
import { motion } from 'framer-motion';
function Contact() {
  const[formData,setFromData]=useState({
    name:"",
    email:"",
    message:""
  })

  const[errors,setErrors]=useState({})
   const[isSending,setIsSending]=useState(false);

   const handleChange=(e)=>{
    const{name,value}=e.target;
    setFromData({
      ...formData,
      [name]:value,
    })

   }

   const validate=()=>{
    let errors={};
    if(!formData.name) errors.name="Name is required";
    if(!formData.email){
      errors.email="Email is required"
    } else if(!/\S+@\S+\.\S+/.test(formData.email)){
      errors.email="Email is invaild"
    }
    if(!formData.message)
      errors.message="message is required";
    return errors
   }

   const handleSubmit=(e)=>{
    e.preventDefault();
    const validationErrors=validate();
    if(Object.keys(validationErrors).length>0){
      setErrors(validationErrors);
    }
    else{
      setErrors({});
      setIsSending(true);
      emailjs.send(
        "service_5bzr6ds",
        "template_ovunutj",
        formData,
        "Mn08icSDbjoVtCtfY",

      )
      .then((response)=>{
        toast.success("message sent successfully");
        setFromData({name:"",email:"",message:""})
      })

      .catch((error)=>{
        console.log("Falied..",error);
        toast.error("Failed to send message, Please try again later")
        
      })
      .finally(()=>{
        setIsSending(false);
      })
    }
   }
  return (
    <div className='p-4 lg:w-3/4 ' id="contact">
      <Toaster/>
      <h2 className='my-8 text-center text-4xl font-semibold
      tracking-tighter
      '> Take A Coffee With ME</h2>
      <motion.form
      initial={{opacity:1}}
      whileInView={{opacity:1}}
      transition={{duration:0.8 , delay:0.7}} onSubmit={handleSubmit}>
        <div className='mb-4 flex space-x-4 '>
          <div className='lg:w-1/2'>
          <input type="text"
          id="name"
          name="name"
          value={formData.name}
          placeholder='Name'
          onChange={handleChange}
          className='mb-8 w-full appearance-none rounded-lg border border-stone-50/30
          bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none'/>
          {errors.name &&(
            <p className='text-sm text-rose-800'>
              {errors.name}
            </p>
          )}
          </div>
          <div className='lg:w-1/2'>
          <input type="email"
          id="email"
          name="email"
          value={formData.email}
          placeholder='Enter Your Email'
          onChange={handleChange}
          className='mb-8 w-full appearance-none rounded-lg border border-stone-50/30
          bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none'/>
          {errors.email &&(
            <p className='text-sm text-rose-800'>
              {errors.email}
            </p>
          )}
          </div>
          
        </div>
        <div className='mb-4'>
          <textarea
          id="message"
          name="message"
          value={formData.message}
          placeholder='Message'
          onChange={handleChange}
          className='mb-8 w-full appearance-none rounded-lg border border-stone-50/30
          bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none'
          rows="6"/>
          {errors.message &&(
            <p className='text-sm text-rose-800'>
              {errors.message}
            </p>
          )}
          </div>
          <button  type="submit" className={`mb-8 w-full rounded border border-stone-50/30
          bg-stone-200 px-4 py-2 text-sm font-semibold text-stone-900
          hover:bg-slate-300 ${isSending ? "cursor-not-allowed opacity-50":""} `}
          disabled={isSending}
          >
            <div className='flex items-center justify-center gap-2'>
              {isSending ? "Sending...":"Send"}
              <FiSend/>
            </div>
          </button>
        

      </motion.form>
    </div>
  )
}

export default Contact
