import AddedCarCard from '@/components/AddedCarCard';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

const MyAddedCars = async () => {

    const { token } = await auth.api.getToken({
        headers: await headers()
    })

    const session = await auth.api.getSession({
        headers: await headers() // you need to pass the headers object.
    })

    const userId = session?.user?.id;


    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/added-car/${userId}`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    });
    const cars = await res.json();



    return (
        <div className='bg-[#f2f2f2]'>
            <div className="pt-26 pb-11 md:pt-40 md:pb-22 w-[90%] mx-auto">
                <h1 className='text-center text-3xl md:text-5xl mb-7 md:mb-10 font-semibold'>My Added Cars</h1>

                {

                    cars.length == 0 ? <>
                        <div className='flex justify-center items-center h-[30vh]'>
                            <h1 className="text-base md:text-lg">You have not added any cars yet.</h1>
                        </div>
                    </> : <>
                        <div className="space-y-5">
                            {
                                cars.map(car => <AddedCarCard key={car._id} car={car}></AddedCarCard>)
                            }
                        </div>
                    </>
                }

            </div>
        </div>
    );
};

export default MyAddedCars;