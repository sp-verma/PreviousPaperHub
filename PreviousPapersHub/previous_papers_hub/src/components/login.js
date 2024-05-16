"use client"
import { z } from "zod" 
import React from 'react'

const login = () => {



  return (
    <div className="flex flex-col border-2 px-[300px] py-[100px] gap-2 bg-[#ad5ac8]">
      <h1 className="py-[20px] mx-[400px] text-white text-[30px] ">LOGIN</h1>

      <input type="text" name="gmail" id="gmail" placeholder="Enter your email" className="border-black border-2 h-[40px] rounded
        "/>
      <label htmlFor="gmail" className="text-white">Enter Email</label>

      <input type="number" name="roll" id="roll" placeholder="Enter your roll Number" className="border-black border-2 h-[40px] " />
      <label htmlFor="roll" className="text-white">Enter the Roll</label>

      <input type="text" name="college" id="college" placeholder="Enter your college Name" className="border-black border-2 h-[40px] " />
      <label htmlFor="college" className="text-white">Enter college name</label>

      <input type="text" name="password" id="password" placeholder="Enter your password" className="border-black border-2 h-[40px] " />
      <label htmlFor="password" className="text-white">Enter password</label>

      <button className="border-2 border-black w-[140px] mx-[400px] bg-black h-[50px] text-white">Login</button>
    </div>
  )
}

export default login
