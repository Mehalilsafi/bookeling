"use client"

import React, { useState } from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';

import { addbook } from '../actions/addbook';
const AddBook = () => {
    
    
    const [formData,setFormData]= React.useState({
        bookName:"",
        author:"",
        status:"out"
     }) 

   function handleChange(event){
      setFormData((prev)=>{
        return { 
            ...prev,
            [event.target.name]:event.target.value}
      })

   }


    async function handleSubmit(event){
      event.preventDefault()
       await addbook(formData)
     }
    return (
        <div>
            <Dialog>
                <DialogTrigger className='bg-[#4DC8FA] py-3 px-5 rounded-md font-bold mt-5 float-right'>
                    Add Book
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle className='pb-5'>
                            Add New book to the library
                        </DialogTitle>
                        <DialogDescription className='space-y-3 '>
                           <form action="post" onSubmit={handleSubmit}>

                            <p>Book Name</p>
                            <Input
                                type='text'
                                placeholder='book name ...'
                                name="bookName"
                               onChange={handleChange}
                               value={formData.bookName}
                            />
                            {/*  */}
                            <p>Author</p>
                            <Input
                                type='text'
                                placeholder='author ...'
                                name="author"
                                onChange={handleChange}
                                value={formData.author}
                            />

                        
                            {/*  */}
                            <div className='pt-2'>
                                <button className='py-2 px-5 bg-black w-full rounded-md text-white' >
                                    Submit
                                </button>
                            </div>

                                </form>

                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default AddBook;
