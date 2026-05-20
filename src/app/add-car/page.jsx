"use client";

import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { useRouter } from "next/navigation";

export default function AddCar() {

    const {
        data: session,
    } = authClient.useSession()

    const user = session?.user;
    const userId = user?.id;

    const router = useRouter();

    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const addedCarInfo = Object.fromEntries(formData.entries());

        const { availability, carName, carType, dailyRentPrice, description, image, pickupLocation, seatCapacity } = addedCarInfo;

        const addedCar = {
            availability, carName, carType, dailyRentPrice, description, image, pickupLocation, seatCapacity,
            userId
        }
        const { data: tokenData } = await authClient.token();

        const res = await fetch('http://localhost:5000/cars', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${tokenData?.token}`
            },
            body: JSON.stringify(addedCar)
        })

        router.push('/my-added-cars')

    }
    return (
        <div>

            <div className="mt-20 mb-11 md:mt-40 md:mb-22 w-[90%] mx-auto">
                <h1 className='text-center text-3xl md:text-5xl mb-7 md:mb-10 font-semibold'>Add Car</h1>
                <Form onSubmit={onSubmit} className="flex w-full rounded-3xl shadow-md flex-col gap-4 bg-[#f2f2f2] p-10">


                    <TextField
                        name="carName"
                        type="text"
                        isRequired
                    >
                        <Label>Car Name</Label>
                        <Input placeholder="Car Name" />
                    </TextField>
                    <TextField
                        name="dailyRentPrice"
                        type="number"
                        isRequired
                    >
                        <Label>Daily Rent Price</Label>
                        <Input placeholder="Daily Rent Price" />
                    </TextField>

                    <TextField
                        name="carType"
                        type="text"
                        isRequired
                    >
                        <Label>Car Type</Label>
                        <Input placeholder="SUV / Sedan / Luxury" />
                    </TextField>

                    <TextField
                        name="image"
                        type="text"
                        isRequired
                    >
                        <Label>Image URL</Label>
                        <Input placeholder="Image URL" />
                    </TextField>

                    <TextField
                        name="seatCapacity"
                        type="number"
                        isRequired
                    >
                        <Label>Seat Capacity</Label>
                        <Input placeholder="Seat Capacity" />
                    </TextField>

                    <TextField
                        name="pickupLocation"
                        type="text"
                        isRequired
                    >
                        <Label>Pickup Location</Label>
                        <Input placeholder="Pickup Location" />
                    </TextField>

                    <TextField
                        name="description"
                        type="text"
                        isRequired
                    >
                        <Label>Description</Label>
                        <Input placeholder="Description" />
                    </TextField>

                    <TextField
                        name="availability"
                        type="text"
                        isRequired
                    >
                        <Label>Availability Status</Label>
                        <Input placeholder="Available / Unavailable" />
                    </TextField>

                    <div className="flex gap-2">
                        <Button type="submit" className={'bg-red-500 w-full mt-5'}>
                            Add Car
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    );
}