import Card from '@/components/Card';
import React from 'react';

const AllCars = async () => {
    const res = await fetch('http://localhost:5000/cars');
    const cars = await res.json();

    return (
        <div className='w-[90%] mx-auto mt-32'>
            <h1 className='text-center text-5xl font-semibold mb-10'>Choose Your Next Drive</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
                {
                    cars.map(car => <Card key={car._id} car={car}></Card>)
                }
            </div>
        </div>
    );
};

export default AllCars;