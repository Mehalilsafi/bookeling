

import React from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
const AddBook = () => {



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
                            <p>Book Name</p>
                            <Input
                                type='text'
                                placeholder='book name ...'
                            />
                            {/*  */}
                            <p>Author</p>
                            <Input
                                type='text'
                                placeholder='author ...'
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

export default AddBook;
