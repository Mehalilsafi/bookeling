import React from 'react';

import Table from './components/table';
import HeroText from './components/hero-text';
import AddBook from './components/add-book';

const page = () => {
    return (
        <div className='p-6'>
            {/*  */}
            <nav className='text-xl font-bold'>
                <p className='flex items-center space-x-2'>
                    <i class='ri-book-3-line text-3xl'></i>
                    <span>Bookeling</span>
                </p>
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
