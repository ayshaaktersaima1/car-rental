import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const Banner = () => {
    return (
        <div className="bg-[url('/assets/banner.jpg')] bg-center bg-cover  h-screen flex justify-center items-center">

            <div className='text-white flex flex-col gap-5 justify-center items-center'>
                <h1 className='text-5xl font-semibold'>Drive Your Journey in Style</h1>
                <p className='text-lg'>Premium cars, seamless booking, and unforgettable road trips — all in one place. Rent the perfect ride for every destination.</p>
                <Link href={'/all-cars'}>
                    <Button className={'text-lg bg-red-500 px-8 py-4'}>Explore Cars</Button>
                </Link>
            </div>
        </div>
    );
};

export default Banner;