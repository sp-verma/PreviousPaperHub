"use client"
import Image from 'next/image'
import sp from '/public/sp.jpg'

import React from 'react'
import Link from 'next/link'

const Admin = () => {
  return (
    <div >
     
    {/* creating nav */}
      <div  className={'h-10 w-full border-black border-2 flex justify-between  flex-wrap align-middle bg-[#FEBD69] text-black'}>
      <Link href="/login" className='px-4'>LOGIN</Link>
      <Link href="/dashboard">NOTES</Link>
      <Link href="/dashboard">SOLUTION</Link>
      <Link href="/dashboard" className='px-4'>HOME PAGE</Link>
      </div>

      

     

      {/* uplods documents */}
     
     <div className='flex items-center justify-center min-h-[100vh]
     m-[10px] bg-[(115deg, #56d8e4 10%, #9f01ea 90%]
     '>
      <div  className='border-2 border-black p-10 '>
      <form action="">
      <div className='mb-[60px] flex flex-col gap-2 '>
      
        <input type="file" name='uplod data'  />
        <label htmlFor="">Uplod document Here</label>
        
        </div>

        <div className=' flex flex-col gap-2'>

        <div  className='flex flex-col'>
        <input type="text" name='subject' id='subject'placeholder='enter the subject name' className='border-2 border-black border-solid' />
          <label htmlFor="subject" className='mb-2 text-center'>Subject</label>
          </div>
          
          <div  className='flex flex-col'>
          <input type="text" name='subject' id='department' placeholder='enter the Department name' className='border-2 border-black border-solid' />
          <label htmlFor="department" className='gap-2 text-center '>Department</label>
          </div>

         <div   className='flex flex-col'>
          <input type="date" name='subject' id='year'placeholder='' className='border-2 border-black border-solid' />
          <label htmlFor="year" className='gap-2 text-center'>Enter the year</label>
          </div>
         
         <div  className='flex flex-col'>
          <input type="text" name='subject' id='semester'  className='border-2 border-black border-solid'placeholder='enter your semester name' />
          <label htmlFor="semester" className='gap-2 text-center'>Semester</label>
          </div>
          <button className='border-2 w-[160px] h-[40px] text-[20px] mx-[100px]
          bg-[#04AA6D] font-bold '>submit</button>

          </div>
        
      </form>


      </div>
      {/* <div className='mt-10 boder-2 border-black boder-box  h-[200px] justify-end flex  p-[30px]'>
     <Image
      src={sp}
      
      width={100}
      height={500}
      alt="Picture of the author"
    />
     </div> */}
      </div>
      
      </div>
      
    
  )
}

export default Admin
