import React, {useState} from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
const UpdateBook = ({ bookId }) => {
     const [formUpdateData,setformUpdateData]=React.useState({
        bookName:"",
        author:"",
        status:""
     })

     function handleChange(event){
        setformUpdateData((prev)=>{
            return {
                ...prev,
                [event.target.name]:event.target.value
            }
        })
     }

   
    return (
        <div>
            <Dialog>
                <DialogTrigger className='py-3 px-5 bg-green-300 rounded-sm text-green-700 font-bold'>
                    Update
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle className='pb-5'>
                            Update book ({bookId})
                        </DialogTitle>
                        <DialogDescription className='space-y-3 '>
                            <p>Book Name</p>
                            <Input
                                type='text'
                                placeholder='book name ...'
                                name="bookName"
                                onChange={handleChange}
                                value={formUpdateData.bookName}
                            />
                            {/*  */}
                            <p>Author</p>
                            <Input
                                type='text'
                                placeholder='author ...'
                                name="author"
                                onChange={handleChange}
                                value={formUpdateData.author}
                            />
                            <p>Status</p>
                            <select
                                name='status'
                                value={formUpdateData.status}
                                onChange={handleChange}
                                id=''
                                className='p-2 w-full rounded-sm'
                            >   
                                <option value="">choose</option>
                                <option value='in'>In</option>
                                <option value='out'>Out</option>
                            </select>

                            <p>Student carte id</p>
                            <Input
                                type='text'
                                placeholder='2154856258 ...'
                            />
                            {/*  */}
                            <div className='pt-2'>
                                <button className='py-2 px-5 bg-black w-full rounded-md text-white'>
                                    Submit
                                </button>
                            </div>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default UpdateBook;
