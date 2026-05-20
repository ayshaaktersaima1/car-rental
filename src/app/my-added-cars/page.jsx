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
        <div>
            <div className=" pt-32 pb-10 w-[90%] mx-auto">
                <h1 className='text-center text-5xl font-semibold mb-10'>My Added Cars</h1>
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