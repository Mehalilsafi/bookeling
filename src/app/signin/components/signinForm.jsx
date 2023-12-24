'use client' 




import { Input } from '@/components/ui/input';
import { FormEvent,useState } from 'react';  
import {singInWithEmailAndPassword} from '@/app/signin/actions/signin'
import { useForm } from "react-hook-form"




const signinForm = () => {
  
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm()

 
  const onSubmit = async (data) => {
    
    let res = await singInWithEmailAndPassword(data);
    console.log("data after sign in " + data.password);
    console.log("the result is here "+res )
    if (!res || res.error) {
      console.log("Something went wrong" );
      return;
    }
  
    reset();
  };
  
   

  console.log(watch("email")) // watch input value by passing the name of it
    
  
    return (
      <form onSubmit={handleSubmit(onSubmit)} className='mt-6' >
        <p className='font-normal text-xs text-[#918A8A] mt-8'> Email</p>
        <Input type="email"
         className=" h-[31]"
         placeholder="Enter Your Email..." 
         {...register('email',{required:"email is required"})}

        />
        {
          errors.email && 
              <p> ENTER AMAIL PLEASE  </p>   
        }
        <p className='font-normal text-xs text-[#918A8A] mt-8'>Password</p>
        <Input type="password" 
        className=" h-[31]" 
        placeholder="Enter your password"
        {...register('password',{required:"password is required"})}
           
        />
        {errors.password && 
        <p>enter pass word please </p>}
      
        
  
        <button className='py-3 px-5 bg-[#6497b1] rounded-sm font-bold flex justify-center mt-8 text-[white] m-[auto] w-[150px]'  >
          SignIn 
        </button>
      </form>
    );
  };
  export default signinForm