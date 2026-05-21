import Card from '@/components/Card';
import { Filter } from '@/components/Filter';
import SearchFieldInput from '@/components/SearchFieldInput';
import React from 'react';

const AllCars = async ({ searchParams }) => {

    const params = await searchParams;
    const search = params?.search || "";
    const type = params?.type || '';

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/cars?search=${search}&type=${type}`,
        {
            cache: 'no-store'
        }
    );
    const cars = await res.json();

    const allCarsRes = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/cars`);
    const allCars = await allCarsRes.json();



    return (
        <div className='w-[90%] mx-auto mt-20 mb-11 md:mt-40 md:mb-22'>
            <h1 className='text-center text-3xl md:text-5xl font-semibold mb-7 md:mb-10'>Choose Your Next Drive</h1>

            <div className='flex flex-col md:flex-row items-start gap-2 md:gap-4 '>
                <SearchFieldInput></SearchFieldInput>
                <Filter allCars={allCars}></Filter>
            </div>

            {
                cars.length == 0 ? <>
                    <div className='flex justify-center items-center h-[30vh]'>
                        <h1 className="text-base md:text-lg">No car found!</h1>
                    </div>
                </> : <>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
                        {
                            cars.map(car => <Card key={car._id} car={car}></Card>)
                        }
                    </div>
                </>
            }


        </div>
    );
};

export default AllCars;