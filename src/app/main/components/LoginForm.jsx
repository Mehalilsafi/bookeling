'use client' 




import { Input } from '@/components/ui/input';
import { useState } from 'react';  
import {rigester} from "@/app/main/actions/rigester"

const LoginForm = () => {
    const [formData,setFormmData]= useState({
    userName:"",
    password:""
    })
  
   function handleChange(e){
setFormmData((prev)=>{
    return {
        ...prev,
        [e.target.name]:[e.target.value]
    }
}) 
   }
     async function handlSubmit(){
        let res =await rigester(formData)
         const{error}=JSON.parse(res)
         if (error){
          console.log("rpeat again" )

         }
         else{
          console.log("coongrat")
         }     
    }
  
    return (
      <form action="" className='mt-6'>
        <p className='font-normal text-xs text-[#918A8A] mt-8'> User name</p>
        <Input type="text"
         className=" h-[31]"
         placeholder="Enter your username..." 
         onChange={handleChange}
         value={formData.userName}
         name="userName"

        />
        <p className='font-normal text-xs text-[#918A8A] mt-8'>Password</p>
        <Input type="password" 
        className=" h-[31]" 
        placeholder="Enter your password"
        onChange={handleChange}
        value={formData.password}
        name="password"
        
        />
  
        <button className='py-3 px-5 bg-[#6497b1] rounded-sm font-bold flex justify-center mt-8 text-[white] m-[auto] w-[150px]' onClick={handlSubmit} >
          Login
        </button>
      </form>
    );
  };
  export default LoginForm