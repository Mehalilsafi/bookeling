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
import { updatebok } from '../actions/updatebok';
const UpdateBook = ({ book }) => {
     const [formUpdateData,setformUpdateData]=React.useState({
       ...book
     })

     function handleChange(event){
        setformUpdateData((prev)=>{
            return {
                ...prev,
                [event.target.name]:event.target.value
            }
        })
     }
     
    function handleSubmit(){
         updatebok(formUpdateData.id,formUpdateData)
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
                            Update book
                        </DialogTitle>
                        <DialogDescription className='space-y-3 '>
                            <p>Book Name</p>
                            

                            <Input
                                type='text'
                                name="book_name"
                                onChange={handleChange}
                                value={formUpdateData.book_name}
                            />
                            {/*  */}
                            <p>Author</p>
                            <Input
                                type='text'

                                name="author"
                                onChange={handleChange}
                                value={formUpdateData.author}
                            />
                            <p>Status</p>
                            <select
                                name='status'
                                value={formUpdateData.status}
                                onChange={handleChange}
                                
                                className='p-2 w-full rounded-sm'
                            >   
                                <option value='in'>In</option>
                                <option value='out'>Out</option>
                            </select>

                            <p>Student carte id</p>
                            <Input
                                type='text'
                                placeholder='client name'
                                name="client_name"
                                onChange={handleChange}
                                value={formUpdateData.client_name}
                            />
                            {/*  */}
                            <div className='pt-2'>
                                <button className='py-2 px-5 bg-black w-full rounded-md text-white' onClick={handleSubmit}>
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
