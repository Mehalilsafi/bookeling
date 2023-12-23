import React from 'react';

import Table from './components/table';
import HeroText from './components/hero-text';
import AddBook from './components/add-book';
import {readSession } from"@/lib/actions/index"
import { redirect } from 'next/navigation';
import SigneOut from './components/signeOut';
const  page =async () => {

    const {data}  =await readSession()
     if(!data.session){

      return redirect("/main")
     }
    return (
        <div className='p-6'>
            {/*  */}
            <nav className='text-xl font-bold flex justify-between'>
                <p className='flex items-center space-x-2'>
                    <i className='ri-book-3-line text-3xl'></i>
                    <span>Bookeling</span>
                  
                </p>
                <SigneOut/>
            </nav>

            {/*  */}

            {/* hero */}
            <main>
                {/* Center Text */}
                <HeroText />

                {/*  */}
                <AddBook />
                {/* Table */}

                <Table />
            </main>
        </div>
    );
};

export default page;
