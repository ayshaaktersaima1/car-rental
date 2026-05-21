import UpdateCarForm from '@/components/UpdateCarForm';
import { auth } from '@/lib/auth';
import { Button, Form, Input, Label, TextField } from '@heroui/react';
import { headers } from 'next/headers';
import React from 'react';

const UpdateCar = async ({ params }) => {

    const { id } = await params;

    const { token } = await auth.api.getToken({
        headers: await headers()
    })

    const carRes = await fetch(`http://localhost:5000/cars/${id}`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    });
    const car = await carRes.json();


    return (
        <div>
            <div className="pt-20 pb-11 md:pt-40 md:pb-22 w-[90%] mx-auto">
                <h1 className='text-center text-3xl md:text-5xl mb-7 md:mb-10 font-semibold'>Update Car</h1>

                <UpdateCarForm car={car}></UpdateCarForm>
            </div>
        </div>
    );
};

export default UpdateCar;