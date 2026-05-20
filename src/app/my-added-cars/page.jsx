import AddedCarCard from '@/components/AddedCarCard';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

const MyAddedCars = async () => {

    const session = await auth.api.getSession({
        headers: await headers() // you need to pass the headers object.
    })

    const userId = session?.user?.id;


    const res = await fetch(`http://localhost:5000/added-car/${userId}`);
    const cars = await res.json();

    return (
        <div className='bg-[#f2f2f2]'>
            <div className="pt-20 pb-11 md:pt-40 md:pb-22 w-[90%] mx-auto">
                <h1 className='text-center text-3xl md:text-5xl mb-7 md:mb-10 font-semibold'>My Added Cars</h1>
                <div>
                    {
                        cars.map(car => <AddedCarCard key={car._id} car={car}></AddedCarCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MyAddedCars;