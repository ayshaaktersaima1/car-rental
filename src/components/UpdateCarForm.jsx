'use client'
import { Button, Form, Input, Label, TextField } from '@heroui/react';
import { useRouter } from 'next/navigation';
import React from 'react';

const UpdateCarForm = ({ car }) => {
    const { _id } = car;

    const router = useRouter();

    const onSubmit = async (e) => {

        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const carInfo = Object.fromEntries(formData.entries());


        const res = await fetch(`http://localhost:5000/cars/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(carInfo)

        })

        router.push('/my-added-cars')
    }
    return (
        <div>
            <Form onSubmit={onSubmit} className="flex w-full rounded-3xl shadow-md flex-col gap-4 bg-[#f2f2f2] p-10">

                <TextField
                    name="carName"
                    type="text"
                    defaultValue={car?.carName}
                    isRequired
                >
                    <Label>Car Name</Label>
                    <Input placeholder="Car Name" />
                </TextField>

                <TextField
                    name="dailyRentPrice"
                    type="number"
                    defaultValue={car?.dailyRentPrice}
                    isRequired
                >
                    <Label>Daily Rent Price</Label>
                    <Input placeholder="Daily Rent Price" />
                </TextField>

                <TextField
                    name="carType"
                    type="text"
                    defaultValue={car?.carType}
                    isRequired
                >
                    <Label>Car Type</Label>
                    <Input placeholder="SUV / Sedan / Luxury" />
                </TextField>

                <TextField
                    name="image"
                    type="text"
                    defaultValue={car?.image}
                    isRequired
                >
                    <Label>Image URL</Label>
                    <Input placeholder="Image URL" />
                </TextField>

                <TextField
                    name="pickupLocation"
                    type="text"
                    defaultValue={car?.pickupLocation}
                    isRequired
                >
                    <Label>Pickup Location</Label>
                    <Input placeholder="Pickup Location" />
                </TextField>

                <TextField
                    name="description"
                    type="text"
                    defaultValue={car?.description}
                    isRequired
                >
                    <Label>Description</Label>
                    <Input placeholder="Description" />
                </TextField>

                <TextField
                    name="availability"
                    type="text"
                    defaultValue={car?.availability}
                    isRequired
                >
                    <Label>Availability Status</Label>
                    <Input placeholder="Available / Unavailable" />
                </TextField>

                <div className="flex gap-2">
                    <Button type="submit" className={'bg-red-500 w-full mt-5'}>
                        Update Car
                    </Button>
                </div>

            </Form>
        </div>
    );
};

export default UpdateCarForm;