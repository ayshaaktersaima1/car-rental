import React from 'react';
import Card from './Card';
import Link from 'next/link';
import { Button } from '@heroui/react';

const FeaturedCardSec = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/cars`);
    const cars = await res.json();

    return (
        <div className='w-[90%] mx-auto pb-10 pt-15 md:pt-20'>
            <h1 className='text-center text-3xl md:text-5xl font-semibold mb-7 md:mb-10'>Find Your Perfect Ride</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12'>
                {
                    cars.slice(0, 6).map(car => <Card key={car._id} car={car}></Card>)
                }
            </div>

            <div className='flex justify-center mt-10'>
                <Link href={'/all-cars'}><Button className={'bg-red-500 w-60 text-base'}>View All Cars</Button></Link>
            </div>

        </div>
    );
};

export default FeaturedCardSec;