import React from 'react';
import BookSvg from './book-svg';
const HeroText = () => {
    return (
        <div>
            <div className='flex items-center justify-center mt-24'>
                <div className='flex flex-col items-center space-y-3'>
                    <BookSvg />
                    <p className='text-4xl font-bold text-center leading-10'>
                        Welcom To our Bookeling
                        <br />
                        Library
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HeroText;
