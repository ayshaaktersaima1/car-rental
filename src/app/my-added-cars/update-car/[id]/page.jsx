import UpdateCarForm from '@/components/UpdateCarForm';
import { Button, Form, Input, Label, TextField } from '@heroui/react';
import React from 'react';

const UpdateCar = async ({ params }) => {

    const { id } = await params;

    const carRes = await fetch(`http://localhost:5000/cars/${id}`);
    const car = await carRes.json();


    return (
        <div>
            <div className=" pt-32 pb-10 w-[90%] mx-auto">
                <h1 className='text-center text-5xl font-semibold mb-10'>Update Car</h1>

                <UpdateCarForm car={car}></UpdateCarForm>
            </div>
        </div>
    );
};

export default UpdateCar;