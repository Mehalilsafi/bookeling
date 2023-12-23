


// Import external libraries
import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


// Import internal modules
import Nav from './components/Nav';
import { Input } from '@/components/ui/Input';
import LoginForm from './components/LoginForm.jsx'
import {readSession } from"@/lib/actions/index"
import { redirect } from 'next/navigation';
import Link from 'next/link';
// Import local assets
import bookImage from '@/assets/Bookshop-rafiki.png';

export default async function Page() {

     const {data}  = await readSession()

    
     if(data.session){                                                                                
      return redirect("/")
     }

  return (
    <div className='m-12 rounded'>
      <Nav />
      <div className='flex w-full'>
        <Image
          src={bookImage}
          width={600}
          height={600}
          alt="Picture of the author"
        />
        <div className='w-full p-7 bg-[#bbdcf0] rounded '>
          <h1 className='flex justify-center font-normal text-xl'>Welcome!</h1>
          <LoginForm />
          <div>
            <p className='flex justify-center mt-8 text-[#918A8A]'>Or use our social media to login</p>
            <div className='flex justify-center'>
         <p>safi</p> 
         <p>safi</p>
         <p>safi</p> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

